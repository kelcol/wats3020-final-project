// Get modal element
var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click',outsideClick)


// Function to open modal
function openModal() {
    console.log(123);
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    console.log(456);
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal){
        modal.style.display = 'none'
    }
}


// DONT FUCK WITH ABOVE



// Assign variables
var title = document.getElementById('title').textContent;
var database = document.getElementById('db').textContent;


// Generate text area
var node = document.createElement("TEXTAREA");  
node.setAttribute("class","copyMe")               
var textnode = document.createTextNode(`
Title: ${title}
Database: ${database}
`);
node.appendChild(textnode);

// Add copy button
var cpyBtn1 = document.createElement("button");
cpyBtn1.innerHTML = "Copy";

// Add text area and button to modal
document.getElementsByClassName('modal-body')[0].appendChild(node);
document.getElementsByClassName('modal-body')[0].appendChild(cpyBtn1);


cpyBtn1.addEventListener('click', function(e){
    var copyTextArea = document.querySelector('.copyMe');
    copyTextArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
});


// THE BELOW IS LIKELY JUNK BUT MABES NOT

//https://stackoverflow.com/questions/31570359/add-copy-button-in-javascript
// var textarea = document.createElement('textarea');
// textarea.className = 'test';
// document.body.appendChild(test);

// function textToModal(htmlStr){
//     var frag = document.createDocumentFragment(),
//         temp = document.createElement('div');
//         temp.innerHTML = htmlStr;
//         while (temp.firstChild) {
//             frag.appendChild(temp.firstChild);
//         }
//         return frag;
// }


// var title = document.getElementById('title').textContent;
// var fragment = createModal(`<div>Hello!</div><p>${title}</p>`);
// // You can use native DOM methods to insert the fragment:
// document.body.insertBefore(fragment, document.body.childNodes[0]);

// create a line item element variable called node
// create a text node with a value of water called textnode
// append textnode (<li>"Water"</li>) to node
// now, append the node (which now has textnode appended to it to the div "test" in the document)



// var node = document.createElement("LI");                 
// var textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("test").appendChild(node);


// Now, to do this with a textarea

// This works!


