//firebase config
var firebaseConfig = {
    apiKey: "AIzaSyBJ8vGTtWo2foxQCt4A0f0D4w_8tqCaIro",
    authDomain: "fireauth-93b8e.firebaseapp.com",
    projectId: "fireauth-93b8e",
    storageBucket: "fireauth-93b8e.appspot.com",
    messagingSenderId: "601205897594",
    appId: "1:601205897594:web:697a9ee24bb8162ba73ec3",
    measurementId: "G-F6H66J5HSV"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshosts: true});
firebase.auth().onAuthStateChanged(user=>{
    if(!user) {
      window.location='./login.html';
    }
});