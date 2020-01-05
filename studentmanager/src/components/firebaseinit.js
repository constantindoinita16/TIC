import firebase from 'firebase'
import 'firebase/firestore'
import firebase_config from './firbase_config'

const firebaseApp = firebase.initializeApp(firebase_config)

export default firebaseApp.firestore()