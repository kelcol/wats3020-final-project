function copyHoldingDetails() {

    // Assign variables  
    var prov = document.getElementById("prov").textContent;
    var provCode = document.getElementById("prov-code").textContent;
    var title = document.getElementById('title').textContent;
    var ssid = document.getElementById('ssid').textContent;
    var idType = document.getElementById('id-type').textContent;
    var id =  document.getElementById('id').textContent;
    var startDate = document.getElementById('start-date').textContent;
    var endDate = document.getElementById('end-date').textContent;
    var dbName = document.getElementById('db-name').textContent;
    var dbCode = document.getElementById('db-code').textContent;
    var url = document.getElementById('url').textContent;
    var status = document.getElementById('status').textContent;

    // Assign places in the DOM for modalBtn to stick    
    var modalBtnDiv = document.getElementById("attach-modalBtn-here");

    // Create and append modal button to DOM
    var modalBtn = document.createElement('button');
    modalBtn.setAttribute("class", "button");
    modalBtn.innerHTML = "Copy Holding Details";
    modalBtnDiv.appendChild(modalBtn);

    // Create modal and append to DOM
    var modal = document.createElement('DIV');
    modal.setAttribute("id", "simpleModal");
    modal.setAttribute("class", "modal");    
    document.body.appendChild(modal);

    // Create modalContent div and append to modal
    var modalContent = document.createElement('DIV');
    modalContent.setAttribute("class", "modal-content");
    modal.appendChild(modalContent);

    // Create modalHeader div and closeBtn and append closeBtn to modalHeader
    var modalHeader = document.createElement('DIV');
    modalHeader.setAttribute("class", "modal-header");
    // Add h2 tag here and append to modalHeader
    var closeBtn = document.createElement('span');
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.innerHTML = "&times;";
    modalHeader.appendChild(closeBtn);

    // Create modalBody div
    var modalBody = document.createElement('DIV');
    modalBody.setAttribute("class", "modal-body");

    // Create divs
    var titleDiv = document.createElement('DIV');
    titleDiv.setAttribute("id","title-div");
    var titleTextArea = document.createElement("TEXTAREA");
    titleTextArea.setAttribute("class", "title-deets");
    
    var dbDiv = document.createElement('DIV');
    dbDiv.setAttribute("id","db-div");
    var dbTextArea = document.createElement("TEXTAREA");
    dbTextArea.setAttribute("class", "db-deets");
    
    var fullDiv = document.createElement('DIV');
    fullDiv.setAttribute("id","full-div");
    var fullTextArea = document.createElement("TEXTAREA");
    fullTextArea.setAttribute("class", "full-deets");

    var titleTextNode = document.createTextNode(`"${title}" (${idType}: ${id})`);
    var dbTextNode = document.createTextNode(`${dbName} (DBID: ${dbCode})`);
    var fullTextNode = document.createTextNode(`Provider: ${prov}\nProvider Code: ${provCode}\nDatabase Name: ${dbName}\nDatabase Code: ${dbCode}\nTitle: ${title}\n${idType}: ${id}\nCoverage: ${startDate} - ${endDate}\nURL: ${url}\nStatus: ${status}`);

    copyTitleBtn = document.createElement('button');
    copyTitleBtn.setAttribute("id","copy-title-btn");
    copyTitleBtn.setAttribute("class","button copy-button");
    copyTitleBtn.innerHTML = "Copy";    

    copyDbBtn = document.createElement('button');
    copyDbBtn.setAttribute("id","copy-db-btn");
    copyDbBtn.setAttribute("class","button copy-button");
    copyDbBtn.innerHTML = "Copy";

    copyFullBtn = document.createElement('button');
    copyFullBtn.setAttribute("id","copy-full-btn");
    copyFullBtn.setAttribute("class","button copy-button");
    copyFullBtn.innerHTML = "Copy";

    titleDiv.appendChild(titleTextArea);
    titleDiv.appendChild(copyTitleBtn);

    dbDiv.appendChild(dbTextArea);
    dbDiv.appendChild(copyDbBtn);

    fullDiv.appendChild(fullTextArea);
    fullDiv.appendChild(copyFullBtn);

    titleTextArea.appendChild(titleTextNode);
    dbTextArea.appendChild(dbTextNode);
    fullTextArea.appendChild(fullTextNode);

    modalBody.appendChild(titleDiv);
    modalBody.appendChild(dbDiv);
    modalBody.appendChild(fullDiv);    

    // Add footer and append to modalContent
    var modalFooter = document.createElement('div');    
    modalFooter.setAttribute("class", "modal-footer");

    // Append modalHeader and modalBody to modalContent
    modalContent.appendChild(modalHeader);    
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Listen for click
    modalBtn.addEventListener('click', openModal);

    // Listen for close click
    closeBtn.addEventListener('click', closeModal);

    // Listen for outside click
    window.addEventListener('click', outsideClick);

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
        if (e.target == modal) {
            modal.style.display = 'none'
        }
    }

    // Add event listener for copy button 1
    copyTitleBtn.addEventListener('click', function (e) {
        var copyTitleDeets = document.querySelector('.title-deets');
        copyTitleDeets.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

    copyDbBtn.addEventListener('click', function (e) {
        var copyDbDeets = document.querySelector('.db-deets');
        copyDbDeets.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

    copyFullBtn.addEventListener('click', function (e) {
        var copyFullDeets = document.querySelector('.full-deets');
        copyFullDeets.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

};

copyHoldingDetails();


/* <script>
function GetValue()
{
    var myarray= new Array("item1","item2","item3");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}

function copyToClipboard(elementId) {


  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");

  document.body.removeChild(aux);

}
</script> */