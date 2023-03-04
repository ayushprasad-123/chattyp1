function lgn(){
    var usr=document.getElementById("usrn").value;
    localStorage.setItem("username", usr);
    window.location="room.html";
}