var firebaseConfig = {
    apiKey: "AIzaSyCYUhgkPR2b1mOmkhMk8TggEtEVdsn-4x4",
    authDomain: "kwitter-2bb95.firebaseapp.com",
    databaseURL: "https://kwitter-2bb95-default-rtdb.firebaseio.com",
    projectId: "kwitter-2bb95",
    storageBucket: "kwitter-2bb95.appspot.com",
    messagingSenderId: "114084359072",
    appId: "1:114084359072:web:c2b9dff614fd2653f452c5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name =localStorage.getItem("user_name");

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}