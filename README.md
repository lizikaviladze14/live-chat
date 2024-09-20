# live-chat

This project is a real-time chat application built using Vue 3 and Firebase. It allows users to send and receive messages in real-time, with Firebase Firestore handling the backend for message storage and user authentication. The app includes features such as timestamped messages and automatic scrolling for new messages.

## Key features:

 - Vue 3 for the frontend, utilizing the Composition API for a smooth, reactive chat experience.
 - Firebase Firestore for real-time data synchronization and storage.
 - Real-time updates for each message, including user name and time since the message was sent.

## Project setup

1. Clone the repository:
   
```
git clone "https://github.com/lizikaviladze14/live-chat"
cd <your-project-directory>
```

2. Install dependencies:

```
npm install
```

3. Add Firebase API keys:

  Create a .env file in the root of your project and add your Firebase configuration keys. You can obtain these keys from your Firebase console:
  
  - Go to the [Firebase Console](https://console.firebase.google.com/).
  - Create a new project or select an existing one.
  - Navigate to "Project settings" (the gear icon next to "Project Overview").
  - In the "General" tab, scroll down to "Your apps" and click on "Web app" to register your app.
  - After registration, you'll see your Firebase config keys.

  Then, add the keys to your .env file:

```
VUE_APP_FIREBASE_API_KEY="your-api-key"
VUE_APP_FIREBASE_AUTH_DOMAIN="your-auth-domain"
VUE_APP_FIREBASE_PROJECT_ID="your-project-id"
VUE_APP_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
VUE_APP_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
VUE_APP_FIREBASE_APP_ID="your-app-id"
```

4. Run the project:

```
npm run serve
```

#### Note:
If there are permission issues when reading/writing data, go to Firebase Console -> Database -> Rules, and update the security rules as necessary, for example:
```allow read, write: if <condition>```.

## Preview:


<img width="1511" alt="Screenshot 2024-09-20 at 17 20 54" src="https://github.com/user-attachments/assets/6072243f-8e68-43b4-8696-7090f88c6517">
