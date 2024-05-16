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




function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



