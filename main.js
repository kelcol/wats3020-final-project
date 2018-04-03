// Assign variables
let prov = document.getElementById("prov").textContent;
let provCode = document.getElementById("prov-code").textContent;
let title = document.getElementById("title").textContent;
let ssid = document.getElementById("ssid").textContent;
let idType = document.getElementById("id-type").textContent;
let id = document.getElementById("id").textContent;
let startDate = document.getElementById("start-date").textContent;
let endDate = document.getElementById("end-date").textContent;
let dbName = document.getElementById("db-name").textContent;
let dbCode = document.getElementById("db-code").textContent;
let url = document.getElementById("url").textContent;
let status = document.getElementById("status").textContent;

// Assign place in the DOM for modalBtn to stick
let modalBtnDiv = document.getElementById("attach-modalBtn-here");
modalBtnDiv.setAttribute("class", "modal-button-div");

// Create and append modal button to modal button div
let modalBtn = document.createElement("button");
modalBtn.setAttribute("class", "button modal-button");
modalBtn.innerHTML = "Copy Holding Details";
modalBtnDiv.appendChild(modalBtn);

// Create modal and append to DOM
let modal = document.createElement("DIV");
modal.setAttribute("id", "simpleModal");
modal.setAttribute("class", "modal");
document.body.appendChild(modal);

// Create modalContent div and append to modal
let modalContent = document.createElement("DIV");
modalContent.setAttribute("class", "modal-content");
modal.appendChild(modalContent);

// Create modalHeader div and closeBtn and append closeBtn to modalHeader
let modalHeader = document.createElement("DIV");
modalHeader.setAttribute("class", "modal-header");

let headerText = document.createElement("H2");
headerText.setAttribute("class", "header-text");
headerText.innerHTML = `Holding details for ${title}`;

// Add h2 tag and text here and append to modalHeader
let closeBtn = document.createElement("span");
closeBtn.setAttribute("class", "closeBtn");
closeBtn.innerHTML = "&times;";
modalHeader.appendChild(closeBtn);
modalHeader.appendChild(headerText);


// Create modalBody div
let modalBody = document.createElement("DIV");
modalBody.setAttribute("class", "modal-body");

// Create divs for text areas
let titleDiv = document.createElement("DIV");
titleDiv.setAttribute("id", "title-div");
let titleTextArea = document.createElement("TEXTAREA");
titleTextArea.setAttribute("class", "title-deets");

let dbDiv = document.createElement("DIV");
dbDiv.setAttribute("id", "db-div");
let dbTextArea = document.createElement("TEXTAREA");
dbTextArea.setAttribute("class", "db-deets");

let fullDiv = document.createElement("DIV");
fullDiv.setAttribute("id", "full-div");
let fullTextArea = document.createElement("TEXTAREA");
fullTextArea.setAttribute("class", "full-deets");

// Create text nodes to print inside text areas
let titleTextNode = document.createTextNode(`"${title}" (${idType}: ${id})`);
let dbTextNode = document.createTextNode(`${dbName} (DBID: ${dbCode})`);
let fullTextNode = document.createTextNode(`Provider: ${prov}\nProvider Code: ${provCode}\nDatabase Name: ${dbName}\nDatabase Code: ${dbCode}\nTitle: ${title}\n${idType}: ${id}\nCoverage: ${startDate} - ${endDate}\nURL: ${url}\nStatus: ${status}`);

// Append text nodes to text areas
titleTextArea.appendChild(titleTextNode);
dbTextArea.appendChild(dbTextNode);
fullTextArea.appendChild(fullTextNode);

//Create copy buttons 
copyTitleBtn = document.createElement("button");
copyTitleBtn.setAttribute("id", "copy-title-btn");
copyTitleBtn.setAttribute("class", "button copy-button");
copyTitleBtn.innerHTML = "Copy";

copyDbBtn = document.createElement("button");
copyDbBtn.setAttribute("id", "copy-db-btn");
copyDbBtn.setAttribute("class", "button copy-button");
copyDbBtn.innerHTML = "Copy";

copyFullBtn = document.createElement("button");
copyFullBtn.setAttribute("id", "copy-full-btn");
copyFullBtn.setAttribute("class", "button copy-button");
copyFullBtn.innerHTML = "Copy";

// Append divs and copy buttons to repsective divs
titleDiv.appendChild(titleTextArea);
titleDiv.appendChild(copyTitleBtn);

dbDiv.appendChild(dbTextArea);
dbDiv.appendChild(copyDbBtn);

fullDiv.appendChild(fullTextArea);
fullDiv.appendChild(copyFullBtn);

// Append divs to modal body
modalBody.appendChild(titleDiv);
modalBody.appendChild(dbDiv);
modalBody.appendChild(fullDiv);

let request = new XMLHttpRequest();
request.onload = function () {
    let fileContent = this.responseText;
    let fileContentLines = fileContent.split("\n");
    let randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
    let randomLine = fileContentLines[randomLineIndex];
    altFooterText.innerHTML = `${randomLine}`;
}
request.open("GET", "oblique-strategies.txt", true);
request.send();

// Create footer div text and append to modal footer div
let footerText = document.createElement("H2");
footerText.setAttribute("class", "footer-text");
footerText.innerHTML = "Be your own best enemy.";

// Alternate footer text
let altFooterText = document.createElement("DIV");
altFooterText.setAttribute("class", "footer-text");

// Add modal footer div 
let modalFooter = document.createElement("DIV");
modalFooter.setAttribute("class", "modal-footer");
modalFooter.appendChild(altFooterText);

// Append modalHeader, modalBody, and modalFooter to modalContent
modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);
modalContent.appendChild(modalFooter);

// Listen for click
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", outsideClick);

// Function to open modal
function openModal() {
    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

// Add event listener for title details copy button
copyTitleBtn.addEventListener("click", function (e) {
    let copyTitleDeets = document.querySelector(".title-deets");
    copyTitleDeets.select();
    try {
        let successful = document.execCommand("copy");
        let msg = successful ? "successful" : "unsuccessful";
        console.log("Copying text command was " + msg);
    } catch (err) {
        console.log("Oops, unable to copy");
    }
});
// Add event listener for database details copy button
copyDbBtn.addEventListener("click", function (e) {
    let copyDbDeets = document.querySelector(".db-deets");
    copyDbDeets.select();
    try {
        let successful = document.execCommand("copy");
        let msg = successful ? "successful" : "unsuccessful";
        console.log("Copying text command was " + msg);
    } catch (err) {
        console.log("Oops, unable to copy");
    }
});

// Add event listener for full details copy button
copyFullBtn.addEventListener("click", function (e) {
    let copyFullDeets = document.querySelector(".full-deets");
    copyFullDeets.select();
    try {
        let successful = document.execCommand("copy");
        let msg = successful ? "successful" : "unsuccessful";
        console.log("Copying text command was " + msg);
    } catch (err) {
        console.log("Oops, unable to copy");
    }
});

};

// Add date to page
function getTheDateAndTime() {
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = "0" + dd
}

if (mm < 10) {
    mm = "0" + mm
}

today = `Today's date is ${mm}/${dd}/${yyyy}.`;
document.write(today);
}

copyHoldingDetails();
getTheDateAndTime();