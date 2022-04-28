document.addEventListener("DOMContentLoaded", () => {
    let msg = document.getElementById("text");
    let coolText = "This is really cool!";
    msg.textContent = coolText;
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );