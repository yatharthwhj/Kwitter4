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
           
    user_name =localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
     function addroom()
     {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name - " + Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"; 
}
function logout() 
{
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location = "index.html"; }
