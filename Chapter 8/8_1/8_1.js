let uri = "How's%20it%20going%3F";
let decode = decodeURIComponent(uri);
console.log(decode);

let uri1 = "How's it going?";
let encode1 = encodeURIComponent(uri1);
console.log(encode1);
let web = "http://www.basescripts.com?=Hello World";
let encode = encodeURI(web);
console.log(encode);
