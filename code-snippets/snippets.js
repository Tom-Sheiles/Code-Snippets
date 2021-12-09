class Snippets{
    snips = document.getElementsByTagName("snippet");
    strings = []

    createSnippets()
    {
        for(let i = 0; i < this.snips.length; i++)
        {
            let original = this.snips[i].innerHTML;
            
            let curString = this.strings[parseInt(this.snips[i].getAttribute("data-id"))]
            let snippetSize = this.snips[i].getAttribute("data-size");
            if(curString == null) curString = this.strings[i];

            let template = `
                <div class="snippet">
                    <div class="window-buttons">
                        <div class="window-button close"></div>
                        <div class="window-button mimimize"></div>
                        <div class="window-button maximize"></div>
                    </div>
                    <p class="snippet-p">${original}${(this.strings[i] == undefined)? '': curString}</p>
                </div>
                `
                this.snips[i].innerHTML = template;
                if(snippetSize != null) this.snips[i].querySelector(".snippet").style.width = snippetSize;
        }
    }

    colors = {
    "function":"#E06C75",
    "let":"#61AFEF",
    "if":"#61AFEF",
    "else":"#61AFEF",
    "for":"#61AFEF",
    "true":"#E5C07B",
    "false":"#E5C07B",
    "return":"#E06C75",
    "=":"#E06C75",
    "NUMBER":"#C678DD",
    "()":"#98C379",
    ")":"#98C379",
    "(":"#98C379"}
    
    encodeAsHtml(str)
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
    
    parseString(str)
    {
        let tokens = str.split(" ");
        console.log(tokens);
        let colorized = tokens.map(t =>{
            let color = this.colors[t];
            if(color != undefined) t = `<span style='color:${color}'>` + t + `</span>`;
            /* if(parseInt(t).isInteger()) t = `<span style='color:${this.colors.NUMBER}'>` + t + `</span>`; */
            if(parseInt(t)) t = `<span style='color:${this.colors.NUMBER}'>` + t + `</span>`;
            return t;
        })
        return this.encodeAsHtml(colorized.join(' '));
    }

    addSnippetString(string) { this.strings.push(this.parseString(string)); }
    addSnippetStrings(arr) { arr.forEach(string => this.strings.push(this.parseString(string)) ); }
}





