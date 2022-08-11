import { projectAuth } from '@/firebase/config'
import { ref } from 'vue'

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try {
        const resp = await projectAuth.createUserWithEmailAndPassword(email, password)
        if(!resp) throw new Error('Could not complete the signup')
        await resp.user.updateProfile({ displayName })

        error.value = null

        return resp
        
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {

    return { error, signup }
}

export default useSignup