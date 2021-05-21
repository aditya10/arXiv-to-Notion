# arXiv-to-Notion
Save an arXiv paper into a Notion database

# How to use
1. Navigate to `chrome://extensions/` and add this folder as a chrome extension.
2. Get your API key and document ID using instructions in Notion API docs: https://developers.notion.com/docs/working-with-databases.
3. Add your keys in `background.js`. You can follow the instructions in the Notion docs.

```
let keys = {
    apikey: "Bearer secret_xxxxxxxxxxx",
    databaseid: "xxxxxxxxxxxxx"
}
```