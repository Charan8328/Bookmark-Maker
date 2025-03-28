// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let siteNameEl = document.getElementById("siteNameInput");
let siteUrlEl = document.getElementById("siteUrlInput");
let nameMsgErr = document.getElementById("siteNameErrMsg");
let urlMsgErr = document.getElementById("siteUrlErrMsg");
let btnEl = document.getElementById("submitBtn");
let ulEl = document.getElementById("bookmarksList");
let formEl = document.getElementById("bookmarkForm");
siteNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameMsgErr.textContent = "Required*";
    } else {
        nameMsgErr.textContent = "";
    }
});

siteUrlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlMsgErr.textContent = "Required*";
    } else {
        urlMsgErr.textContent = "";
    }
});

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = siteNameEl.value;
    let url = siteUrlEl.value;
    let liEl = document.createElement("li");

    let headingEl = document.createElement("h1");
    headingEl.textContent = name;
    liEl.appendChild(headingEl);
    let brEl = document.createElement("br");
    liEl.appendChild(brEl);
    let ancEl = document.createElement("a");
    ancEl.setAttribute("href", url);
    ancEl.textContent = url;
    liEl.appendChild(ancEl);

    ulEl.appendChild(liEl);
});
