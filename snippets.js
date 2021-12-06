// make everything an object element later to better encapsulate
let snips = document.getElementsByTagName("snippet");
let strings = []

function createSnippets()
{
    for(let i = 0; i < snips.length; i++)
    {
		let original = snips[i].innerHTML;
		
		// maybe come back to id stuff idk not really important
		let curString = strings[parseInt(snips[i].getAttribute("data-id"))]
		if(curString == null) curString = strings[i];

        let template = `
            <div class="snippet">
                <div class="window-buttons">
                    <div class="window-button close"></div>
                    <div class="window-button mimimize"></div>
                    <div class="window-button maximize"></div>
                </div>
                <p class="snippet-p">${original}${(strings[i] == undefined)? '': curString}</p>
            </div>
            `
            snips[i].innerHTML = template;
    }
}

function parseString(str)
{
	let outString = '';
	for(let i = 0; i < str.length; i++)
	{
		if(str[i] == '\n') outString += '<br>';
		else if(str[i] == '\t') outString += '&ensp;';
		else outString += str[i];
	}
	return outString;
}

// this function should parse the string and add formating later
function addSnippetString(string)
{
	strings.push(parseString(string));
}
function addSnippetStrings(arr) { arr.forEach(str => strings.push(str) ); }
