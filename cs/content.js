// PlanetRenox.com | github.com/PlanetRenox
// Contact: PlanetRenox@PM.ME

// Read text content
var bodyContent = document.getElementsByTagName("body")[0].textContent;


// Scan for zero width spaces | open to more efficient suggestions
// https://stackoverflow.com/revisions/5296314/6
var key = new RegExp('\u{200B}|\u{FEFF}|\u{200C}|\u{200D}|\u{200F}|\u{200E}|\u{2060}|\u{00AD}|\u{3164}|\u{180E}');
var res = key.test(bodyContent);


// If we get confirmation, search more in-depth and display a notice under the paragraph
if(res){
  var notDetectedInsidePara = true;
  var nodeList = document.querySelectorAll("p");
  for (var i = nodeList.length-1; i > 0; i--){
    var innerContent = nodeList[i].textContent;
    var innerRes = key.test(innerContent);
    if (innerRes){
      notDetectedInsidePara = false;
      nodeList[i].style.border = "5px solid red";
      nodeList[i].style.padding = "25px"
    var para = document.createElement("p");
  var node = document.createTextNode("NOTICE: Zero Width Character(s) spotted in this block.");
  para.appendChild(node);
  nodeList[i].appendChild(para);
  para.style.marginBottom = "0px";
  para.style.marginTop = "10px";
  para.style.color = "red";
  para.style.textAlign = "center";
  para.style.backgroundColor = "black";
  para.style.color = "white";
     }}}


// If it's not inside a paragraph, instead display a notice on the screen
if (notDetectedInsidePara){
var div = document.createElement('div');
document.body.appendChild(div);
div.style.backgroundColor = "black";
div.style.color = "white";
div.style.padding = "10px";
div.style.top = "0%";
div.style.right = "0%";
div.style.textAlign = "center";
div.style.position = "fixed";
var counter = 10;
var stop = setInterval(function(){
  div.textContent = 'Zero Width Character(s) spotted on this page. ' + counter + "sec";
  if (!counter){
    clearInterval(stop);
    div.parentNode.removeChild(div);
  }
  counter--;
},1000);
}


// not zero width but very close, on an empty page, no one would know  200A 2000 2006 2007 2008 2009 3000 202F 205F 2002 2003 2004 2005
