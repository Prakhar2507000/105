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
console.log(firebase_message_id)
console.log(message_data)
name = message ['name']
like = message_data ['like']
name_with_tag = "<h4> " + name +"</h4>"

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>like"


row = name_with_tag + message_with_tag +like_button;
document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();