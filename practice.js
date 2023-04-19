const firebaseConfig = {
  apiKey: "AIzaSyDUFo8L5Z5xJOHksZ7PcVKudef4UCcGO3w",
  authDomain: "kwitternew-5148b.firebaseapp.com",
  databaseURL: "https://kwitternew-5148b-default-rtdb.firebaseio.com",
  projectId: "kwitternew-5148b",
  storageBucket: "kwitternew-5148b.appspot.com",
  messagingSenderId: "491691396461",
  appId: "1:491691396461:web:65c3668ff4587efec69e64"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function adduser() {
    user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose:"add user"
  });
}