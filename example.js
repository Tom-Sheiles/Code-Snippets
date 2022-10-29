import {Snippets} from "./snippets/snippets.js"

let snippets = new Snippets();

snippets.addSnippetStrings([`function name () {
	 let someval = 11 ;
	 this.test = test;
}

 function lollmao ( somevar ) {
    let someval = 2 ;
    <span style='color:#98C379'>"This is a string"</span> ;
}
`,


`function anotherFunct ( x, y, z ) {
	 let i = x + z ;
	z += 2 ;
	y -= 3 ;
 	 if ( i + ( z - x ) == 10 ) {
		 return false ;
	}
	 else {
		 return true ;
	}
}`,


`function thirdfunc () {
	 let x = <span style="color:#98C379">"Hello world!"</span> ;
	 for ( let i = 0; i < 10 ; i++ ) {
		 console.log ( x ) ;
	 }
}`]);
snippets.createSnippets();
