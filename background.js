let keys = {
    apikey: "Bearer API_KEY",
    databaseid: "DATABASE_ID"
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.contentScriptQuery == "saveToNotion") {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", keys.apikey);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Notion-Version", "2021-05-13");
        
        var raw = JSON.stringify({
            "parent": { "database_id": keys.databaseid },
            "properties": {
              "Name": {
                "title": [
                  {
                    "text": {
                      "content": request.title
                    }
                  }
                ]
              },
              "URL": {
                  "url" : request.url
              }
            }
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://api.notion.com/v1/pages/", requestOptions)
          .then(response => response.text())
          .then(result => sendResponse(result))
          .catch(error => sendResponse(error));
        return true;
      }
    });