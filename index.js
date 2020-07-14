// Write your code here!
document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
// document.body.append(newHeader);

newHeader.innerText = "YOUR-NAME is the champion!";
newHeader.className = "victory";
