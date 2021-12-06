// make everything an object element later to better encapsulate
let snips = document.getElementsByTagName("snippet");
let strings = []

function createSnippets()
{
    for(let i = 0; i < snips.length; i++)
    {
        let template = `
            <div class="snippet">
            <div class="window-buttons">
            <div class="window-button close"></div>
            <div class="window-button mimimize"></div>
            <div class="window-button maximize"></div>
            </div>
            <p>${strings[i]}
        </div>
            `
            snips[i].innerHTML = template;
    }
}

// this function should parse the string and add formating later
function addSnippetString(string) { strings.push(string); }
function addSnippetStrings(arr) { arr.forEach(str => strings.push(str) ); }
