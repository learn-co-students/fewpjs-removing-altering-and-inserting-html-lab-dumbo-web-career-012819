
// Write your code here!

document.getElementById("main").remove()
//removed Main in DOM

var newHeader = document.createElement('h1');
// creates a new h1 eleement

newHeader.id = 'victory'
//changes the id for h1 and assigns it to 'victory'

newHeader.innerText = "Krystle is the champion";
// points node to new header