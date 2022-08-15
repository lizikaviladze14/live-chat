<template>
    <div class="chat-window">
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" class="messages" ref="messages">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                <span class="created-at">{{ doc.createdAt }}</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
    </div>
  
</template>

<script>
import getCollection from '@/composables/getCollection'
import { computed, ref, onUpdated } from '@vue/runtime-core'
export default {
    setup() {
        const { error, documents } = getCollection('messages')

        const formattedDocuments = computed(() => {
            if(documents.value) {
                return documents.value.map(doc => {
                    let createdAt = new Date(doc.createdAt.seconds * 1000) // passing milliseconds to Date object
                    let time = new Date() - createdAt

                    const seconds = 1000 // milliseconds in second
                    const minutes = 60000 // milliseconds in minute
                    const hours = 3600000 // milliseconds in hour
                    const days = 86400000 // milliseconds in day

                    if(Math.floor(time * 1/days) >= 1) {
                        time = Math.floor(time * 1/days) + ' days ago'
                    }else if(Math.floor(time * 1/hours) >= 1) {
                        time = Math.floor(time * 1/hours) + ' hours ago'
                    } else if(Math.floor(time * 1/minutes) >= 1){
                        time = Math.floor(time * 1/minutes) + ' minutes ago'
                    } else {
                        time = 'less than a minute ago'
                    }

                    return { ...doc, createdAt: time }
                })
            }
        })

        // auto scroll to bottom of messages
        const messages = ref(null)

        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return { error, documents, formattedDocuments, messages }
    }
}
</script>

<style>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }

</style>