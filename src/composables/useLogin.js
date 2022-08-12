import { projectAuth } from '@/firebase/config'
import { ref } from 'vue'

const error = ref(null)

const login = async (email, password) => {
    error.value = null
    try {
        const resp = await projectAuth.signInWithEmailAndPassword(email, password)
        // if(!resp) throw new Error('Could not complete signin')

        error.value = null
        console.log(resp)

        return resp

    } catch(err) {
        console.log(err.message)
        error.value ='Incorrect login credentials'
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin