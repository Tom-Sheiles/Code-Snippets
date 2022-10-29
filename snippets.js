
function logError(errorText)
{
    console.error(`Snippet error: ${errorText}`);
}

export function CreateSnippet(string, language)
{
    // TODO: change this to a dict of supported languages
    if(language !== "js")
    {
        logError(`language "${language}" not found`)
        return "";
    }
    return string
}