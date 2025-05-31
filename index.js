let geneBtn = document.querySelector("#gene");
let content = document.querySelector(".content");

let dataobj = [];
let currentIndex = 0;

function showHadeeth(index) {
    content.innerHTML = '';
    let divHadeeth = document.createElement("div");
    divHadeeth.className = 'hadeeth';
    divHadeeth.innerHTML = dataobj[index].hadeeth;
    content.appendChild(divHadeeth);
}

function getData() {
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            dataobj = JSON.parse(this.responseText);
            showHadeeth(currentIndex);
            geneBtn.onclick = function() {
                currentIndex++;
                if (currentIndex >= dataobj.length) {
                    currentIndex = 0; // loop back to the first hadeeth
                }
                showHadeeth(currentIndex);
            }
        }
    }
    myRequest.open("GET", "txt.json", true);
    myRequest.send();
}
getData();