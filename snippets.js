import { languageDefs } from "./snippetdefs.js";
import Lexer from "./lexer.js";

function logError(errorText)
{
    console.error(`Snippet error: ${errorText}`);
}

function lexWords(input, lang)
{
    let lexer = new Lexer(input);
    let defs = languageDefs[lang].words;

    while(!lexer.isEmpty()){
        let c = lexer.pop();
        let found = false;
        for(let i = 0; i < defs.length; i++)
        {
            if(c.match(defs[i].def.start) != null && !found){
                console.log(lexer.getIndex(), c, defs[i]);
                found = true;
            }
        }
    }
}

export function CreateSnippet(string, language)
{
    let languageType = typeof language
    if (languageType == 'string')
    {
        // look for language defs in pre - defined
        let output = lexWords(string, language);
        output = string.replaceAll("\n", "<br>");
        output = output.replaceAll("    ", "&emsp;");
        return output;
    }
    else if(languageType == 'object')
    {
        // custom def defined
    }
    
}