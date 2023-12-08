// Write your code here!
document.querySelector('main').remove()

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "Amy is the champion";

document.body.append(newHeader);

//newHeader.id = 'victory';

//"h1".id = "victory"