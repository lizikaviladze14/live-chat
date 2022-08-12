import { projectAuth } from '@/firebase/config'
import { ref } from 'vue'

const user = ref(projectAuth.currentUser) // when the application first loads, user will be current user or null

projectAuth.onAuthStateChanged((_user) => {
    console.log('user state change, current user: ', _user)
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser