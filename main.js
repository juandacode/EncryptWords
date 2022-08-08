
const message = document.getElementById("title").innerHTML = "Ingrese el texto Aquí";
function writeMessage() {
    console.log("click");
}

message.addEventListener("click", writeMessage);
/* document.getElementById("colTwo").addEventListener("click", writeMessage); */
document.getElementById("colTwo").style.display = "none";