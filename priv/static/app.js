// for phoenix_html support, including form and button helpers
// copy the following scripts into your javascript bundle:
// * https://raw.githubusercontent.com/phoenixframework/phoenix_html/v2.3.0/priv/static/phoenix_html.js

function insertQuote() {
    var quotesList = [{text: "The World is what it is", author: "Willian"},
        {text: "I don't care", author: "S***"}, {text: "You're not that special", author: "Mr. Special"}];
    var index = Math.floor(Math.random() * quotesList.length);
    document.getElementsByClassName("text")[0].innerHTML = quotesList[index].text;
    document.getElementsByClassName("author")[0].innerHTML = "- " + quotesList[index].author;
}

var btn = document.getElementById("btn").onclick = insertQuote;

