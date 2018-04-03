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
    var modalBtnDiv = document.getElementById("modal-btn-div");

    // Create and append modal button to DOM
    var modalBtn = document.createElement('button');
    modalBtn.setAttribute("class", "button");
    modalBtn.setAttribute("id","modal-btn");
    modalBtn.innerHTML = "Click Me!";
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
    
    var headerText = document.createElement('H2');
    headerText.setAttribute('class','header-text');
    headerText.innerHTML = `Holding details for ${title}`;
    
    // Add h2 tag and text here and append to modalHeader
    var closeBtn = document.createElement('span');
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.innerHTML = "&times;";
    modalHeader.appendChild(closeBtn);
    modalHeader.appendChild(headerText);  


    // Create modalBody div
    var modalBody = document.createElement('DIV');
    modalBody.setAttribute("class", "modal-body");

    // Create divs for text areas
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

    // Create text nodes to print inside text areas
    var titleTextNode = document.createTextNode(`"${title}" (${idType}: ${id})`);
    var dbTextNode = document.createTextNode(`${dbName} (DBID: ${dbCode})`);
    var fullTextNode = document.createTextNode(`Provider: ${prov}\nProvider Code: ${provCode}\nDatabase Name: ${dbName}\nDatabase Code: ${dbCode}\nSSID: ${ssid}\nTitle: ${title}\n${idType}: ${id}\nCoverage: ${startDate} - ${endDate}\nURL: ${url}\nStatus: ${status}`);

    // Append text nodes to text areas
    titleTextArea.appendChild(titleTextNode);
    dbTextArea.appendChild(dbTextNode);
    fullTextArea.appendChild(fullTextNode);

    //Create copy buttons 
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

    var request = new XMLHttpRequest();
    request.onload = function() {
        var fileContent = this.responseText;
        var fileContentLines = fileContent.split('\n');
        var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
        var randomLine = fileContentLines[randomLineIndex]; 
        altFooterText.innerHTML = `${randomLine}`;
    }
    request.open( 'GET', 'oblique-strategies.txt', true );
    request.send();
    
    // Create footer div text and append to modal footer div
    var footerText = document.createElement('H2');
    footerText.setAttribute('class','footer-text');
    footerText.innerHTML = "Be your own best enemy.";

    // Alternate footer text
    var altFooterText = document.createElement('DIV');
    altFooterText.setAttribute('class','footer-text');
    
    // Add modal footer div 
    var modalFooter = document.createElement('DIV');    
    modalFooter.setAttribute("class", "modal-footer");
    modalFooter.appendChild(altFooterText);   

    // Append modalHeader, modalBody, and modalFooter to modalContent
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
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Function to close modal if outside click
    function outsideClick(e) {
        if (e.target == modal) {
            modal.style.display = 'none'
        }
    }

    // Add event listener for title details copy button
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
    // Add event listener for database details copy button
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

    // Add event listener for full details copy button
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
