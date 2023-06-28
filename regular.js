const {log} = console;
log("LEARNING REGULAR EXPRESSIONS IN JS");

// <-------------------------- we can construct a regular expression using ---------------------------------->
// let reg = /abc/;
// reg = new RegExp("ab+c");
let string = `talha shiekh best in world`;

let regExpr = /[a-f]/g;
regExpr = /.a/g; // matches "my" and "ay", but not "yes", in "yes make my day". 
regExpr = /\d/g; // /\d/ or /[0-9]/ matches "2" in "B2 is the suite number".
regExpr = /\D/g  // /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".
regExpr = /\w/g; // For example, /\w/ matches "a" in "apple", "5" in "$5.28", and "3" in "3D".
regExpr = /\W/g; //For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%".
regExpr = /\s/g; //Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces.
regExpr = /\s\w*/g ;//For example, /\s\w*/ matches " bar" in "foo bar".
regExpr = /\S/g; // Matches a single character other than white space. 
regExpr = /\S\w*/g; // For example, /\S\w*/ matches "foo" in "foo bar".
// regExpr = /\t/g; // samjh nai ai
regExpr = /\n/g;
// \t	Matches a horizontal tab.
// \r	Matches a carriage return.
// \v	Matches a vertical tab.
// \f 
// things to learn
regExpr = /talha\b/g ; // matches a pattern this <-- means that match a pattern that inclues talha at the begenning;
regExpr = /\0/g;
regExpr = /talha | bro/g;//matches either talha or bro which one is preseent first
regExpr = /^talha/g //mathes the start of the charachter
regExpr = /shiekh$/g //mathes the end of the charachter
regExpr = /[\b]/g // matches the backspace
regExpr = /\Bla/g // mathees the characters patterns is mid of words
regExpr = /talha(?=\s)/g; // matches talha only if it is followed by a single space
regExpr = /talha(?=sheikh|\s)/g; // matches talha only if it is followed by a single space or shiekh
regExpr = /talha(?!shiekh)/g; //mathes talha if it is not followed by shiekh
// string = "134.1"
regExpr = /\d+(\.)/g // the number that end with a .
regExpr = /(?<=\s)shiekh/g // mathes shiekh only if it is followed by a single space
regExpr = /(?<!\s)shiekh/g // mathes shiekh if it is not preceded by single space
regExpr = /(?<!-)\d+/g // matches a number only if it is not preceded by a minus sign.
regExpr = /(talha)/g // mathes the string inside the parentheses and remembers the order also e.g in the top one
regExpr = /(?<Name>talha)/ // talha ko groups main store kar lay ga jo match method main shamil hai or <Ye group ka name hai>
regExpr = /(?:talha)/
regExpr = /talha(\s)shiekh\1/;
string = "taaaaaalha"
regExpr = /ta*/g // matches all the precedings of a that are after t
regExpr = /a+/g // matches all the precedings of a in a string
regExpr = /t?al?/ // matches the t if it is behind a and l if it is after a 
regExpr = /a{2}/ //matches the n occurrences of the a in string
regExpr = /a{3,}/ // match at least 3 occurences of a in string
regExpr = /a{3,5}/

log(string.match(regExpr))