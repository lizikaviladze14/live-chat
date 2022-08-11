import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBM3VBx-1t3Oza9L5NncZKryK729O6-m_k",
    authDomain: "vue-firebase-d4433.firebaseapp.com",
    projectId: "vue-firebase-d4433",
    storageBucket: "vue-firebase-d4433.appspot.com",
    messagingSenderId: "344166393412",
    appId: "1:344166393412:web:5edbcd1ccf577d4b027e11"
}
 
// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }