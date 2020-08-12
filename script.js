//Once page has loaded, 
window.onload = function() {
    //Set up random message list
    const messages = ["Welcome to infi<i>Riff</i>!", "Let's Dance!", "Your music is ready!"];
    //display random message
    document.getElementById("ranMessage").innerHTML = messages[Math.floor(Math.random() * messages.length)];
}