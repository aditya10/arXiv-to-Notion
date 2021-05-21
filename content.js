let documentID = 'INSERT_HERE'
let notionAPIkey = 'INSERT_HERE'

var bookmarks = document.getElementsByClassName("bookmarks")
let btn = document.createElement("button");
btn.id = "arXivNotion"
btn.innerHTML = "Notion";
btn.onclick = function () {
    chrome.runtime.sendMessage({contentScriptQuery: "saveToNotion", url: ""+window.location.href, title: ""+document.title}, function(response) {
        console.log(response);
    });
};
bookmarks[0].appendChild(btn);