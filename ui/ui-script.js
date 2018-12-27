// PlanetRenox.com | github.com/PlanetRenox
// Contact: PlanetRenox@PM.ME

// If interested in contributing, you can either optimize what we have, or create your own version if you believe you can achieve much more efficiency with a new algorithm.
// The extension ui allows for switching between algorithm versions, I understood that version 1 could be improved upon, so there is room for adding a new algorithm and having it
// picked as default instead with both as choices.
// There is also an opportunity for introducing a proper password encryption system. However size could be an issue when dealing with some sites.

// Generally, sites accept all zero width characters, however some sites make what i assume are manual restrictions for example with twitter and Protonmail.
// But they never restrict ALL zero width characters because some of them are actually required for some ui and languages to function.
// So we can always create a new 'limited' version in case they are ever needed.


// ------------------------------------------------------------------------------
// All versions          Universal information
// Supported blocks:     200B FEFF 200C 200D 180E 200E 2060 00AD
// In consideration:
// Banned blocks:        200F 3164
// ------------------------------------------------------------------------------


// obfuscate listeners
document.getElementById("obf").addEventListener("click", function(){
  var versionAlg = document.getElementById("dropdown").value;
  if (versionAlg === "version 1.0"){
    obfuscateV1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited twiT"){
    obfuscateV2_0(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited proT"){
    obfuscateV2_1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited winT"){
    obfuscateV2_3(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "version 1.1"){
    obfuscateV1_1(document.getElementById("kiloArea").value);
  }
});

// deobfuscate listeners
document.getElementById("decode").addEventListener("click", function(){
  var versionAlg = document.getElementById("dropdown").value;
  if(document.getElementById("kiloArea").value===""){
    document.getElementById("kiloArea").value = "The text box is empty.";
  }
  else if (versionAlg === "version 1.0"){
    deobfuscateV1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited twiT"){
    deobfuscateV2_0(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited winT"){
    deobfuscateV2_3(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited proT"){
    deobfuscateV2_1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "version 1.1"){
    deobfuscateV1_1(document.getElementById("kiloArea").value);
  }
});


// ------------------------------------------------------------------------------
// Version 2.0 (twiT)    Compatible with Twitter & etc
// Building blocks:         200B 200C 200D 180E 2060 00AD
// Banned blocks:           200F FEFF 200E
// Supported characters:    (space) a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9
// ------------------------------------------------------------------------------

var dictionaryV2_0 = {
  0: "\u{200C}\u{180E}",
  1: "\u{180E}\u{2060}",
  2: "\u{200D}\u{180E}",
  3: "\u{180E}\u{00AD}",
  4: "\u{2060}\u{180E}",
  5: "\u{180E}\u{180E}",
  6: "\u{00AD}\u{180E}",
  8: "\u{180E}\u{200B}",
  9: "\u{180E}\u{200C}",
  a: "\u{200B}\u{200D}",
  b: "\u{2060}\u{00AD}",
  c: "\u{200D}\u{200D}",
  d: "\u{200C}\u{00AD}",
  e: "\u{200B}\u{200B}",
  f: "\u{200D}\u{00AD}",
  g: "\u{2060}\u{200D}",
  h: "\u{200C}\u{200D}",
  i: "\u{200B}\u{2060}",
  j: "\u{00AD}\u{2060}",
  k: "\u{00AD}\u{200C}",
  l: "\u{200D}\u{200B}",
  m: "\u{200D}\u{2060}",
  n: "\u{200B}\u{00AD}",
  o: "\u{200C}\u{200B}",
  p: "\u{2060}\u{2060}",
  q: "\u{00AD}\u{200D}",
  r: "\u{200C}\u{2060}",
  s: "\u{200C}\u{200C}",
  t: "\u{200B}\u{200C}",
  u: "\u{200D}\u{200C}",
  v: "\u{00AD}\u{200B}",
  w: "\u{2060}\u{200B}",
  x: "\u{200B}\u{180E}",
  y: "\u{2060}\u{200C}"
};

function obfuscateV2_0(sec){
  var kilo = "";
  sec = sec.toLowerCase();
  for (var i = 0; i < sec.length; i++){
    if (dictionaryV2_0[sec.charAt(i)] !== undefined){
      kilo += dictionaryV2_0[sec.charAt(i)];}
      else if(sec.charAt(i) === " "){
        kilo+= "\u{00AD}\u{00AD}";
      }
      else if (sec.charAt(i) == 7){
        kilo+= "\u{180E}\u{200D}\u{00AD}\u{00AD}\u{180E}\u{200D}";
      }
      else if (sec.charAt(i) === "z"){
        kilo+= "\u{180E}\u{200D}";
      }
    }
      document.getElementById("kiloArea").value = kilo;
      var copyText = document.querySelector("#kiloArea");
      copyText.select();
      document.execCommand("copy");
      document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n  You can even click it right now!\n\n\nQuestions or bugs? please email us at our homepage";
}

function deobfuscateV2_0(text){
  var stripped = text.replace(/[^\u200B\u200C\u200D\u2060\u00AD\u180E]/g, '');
  var kilo = "";
  var reverseDictionary = Object.values(dictionaryV2_0);
  var CorresKeys = Object.keys(dictionaryV2_0);
  for (var i = 0; i < stripped.length; i+=2){
    for (var k = 0; k < 36; k++){
      if (stripped.substring(i, i+2)=== reverseDictionary[k]){
          kilo += CorresKeys[k];
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{00AD}\u{00AD}") {
          kilo += " ";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{180E}\u{200D}"){
          if (stripped.substring(i+2, i+6)==="\u{00AD}\u{00AD}\u{180E}\u{200D}"){ kilo += "7"; i += 4; break;}
          else{kilo += "z"; break;}
      }}}
document.getElementById("kiloArea").value = kilo;
}

// ==============================================================================
//  end of version 2.0
// ==============================================================================


// ------------------------------------------------------------------------------
// Version 2.1 (proT)    Compatible with ProtonMail & etc
// Building blocks:         200C 200D 180E 2060 00AD FEFF 200E
// Banned blocks:           200F 200B
// Supported characters:    (newline) (space) a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9
// ------------------------------------------------------------------------------

var dictionaryV2_1 = {
  0: "\u{200C}\u{FEFF}",
  1: "\u{200C}\u{200E}",
  2: "\u{200D}\u{FEFF}",
  3: "\u{200D}\u{200E}",
  4: "\u{2060}\u{FEFF}",
  5: "\u{2060}\u{200E}",
  6: "\u{00AD}\u{FEFF}",
  7: "\u{00AD}\u{200E}",
  8: "\u{FEFF}\u{180E}",
  9: "\u{FEFF}\u{200C}",
  a: "\u{180E}\u{200D}",
  b: "\u{2060}\u{00AD}",
  c: "\u{200D}\u{200D}",
  d: "\u{200C}\u{00AD}",
  e: "\u{180E}\u{180E}",
  f: "\u{200D}\u{00AD}",
  g: "\u{2060}\u{200D}",
  h: "\u{200C}\u{200D}",
  i: "\u{180E}\u{2060}",
  j: "\u{00AD}\u{2060}",
  k: "\u{00AD}\u{200C}",
  l: "\u{200D}\u{180E}",
  m: "\u{200D}\u{2060}",
  n: "\u{180E}\u{00AD}",
  o: "\u{200C}\u{180E}",
  p: "\u{2060}\u{2060}",
  q: "\u{00AD}\u{200D}",
  r: "\u{200C}\u{2060}",
  s: "\u{200C}\u{200C}",
  t: "\u{180E}\u{200C}",
  u: "\u{200D}\u{200C}",
  v: "\u{00AD}\u{180E}",
  w: "\u{2060}\u{180E}",
  x: "\u{180E}\u{FEFF}",
  y: "\u{2060}\u{200C}",
  z: "\u{180E}\u{200E}",
  _: "\u{200E}\u{200C}"
};

function obfuscateV2_1(sec){
  var kilo = "";
  sec = sec.toLowerCase();
  for (var i = 0; i < sec.length; i++){
    if (dictionaryV2_1[sec.charAt(i)] !== undefined){
      kilo += dictionaryV2_1[sec.charAt(i)];}
      else if(sec.charAt(i) === " "){
        kilo+= "\u{00AD}\u{00AD}";
      }
      else if (sec.charAt(i) === "\n"){
        kilo+= "\u{FEFF}\u{200D}";
      }
      else if (sec.charAt(i) === ","){
        kilo+= "\u{FEFF}\u{2060}";
      }
      else if (sec.charAt(i) === "."){
        kilo+= "\u{FEFF}\u{00AD}";
      }
      else if (sec.charAt(i) === "-"){
        kilo+= "\u{FEFF}\u{FEFF}";
      }
      else if (sec.charAt(i) === "\""){
        kilo+= "\u{FEFF}\u{200E}";
      }
      else if (sec.charAt(i) === "("){
        kilo+= "\u{200E}\u{180E}";
      }
      else if (sec.charAt(i) === ")"){
        kilo+= "\u{200E}\u{200D}";
      }
      else if (sec.charAt(i) === "="){
        kilo+= "\u{200E}\u{2060}";
      }
      else if (sec.charAt(i) === "/"){
        kilo+= "\u{200E}\u{00AD}";
      }
      else if (sec.charAt(i) === "?"){
        kilo+= "\u{200E}\u{FEFF}";
      }
      else if (sec.charAt(i) === "!"){
        kilo+= "\u{200E}\u{200E}";
      }
    }
      document.getElementById("kiloArea").value = kilo;
      var copyText = document.querySelector("#kiloArea");
      copyText.select();
      document.execCommand("copy");
      document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n  You can even click it right now!\n\n\nQuestions or bugs? please email us at our homepage";
}

function deobfuscateV2_1(text){
  var stripped = text.replace(/[^\u200C\u200D\u2060\u00AD\u180E\uFEFF\u200E]/g, '');
  var kilo = "";
  var reverseDictionary = Object.values(dictionaryV2_1);
  var CorresKeys = Object.keys(dictionaryV2_1);
  for (var i = 0; i < stripped.length; i+=2){
    for (var k = 0; k < 38; k++){
      if (stripped.substring(i, i+2)=== reverseDictionary[k]){
          kilo += CorresKeys[k];
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{00AD}\u{00AD}") {
          kilo += " ";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{200D}"){
          kilo += "\n";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{2060}") {
          kilo += ",";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{00AD}") {
          kilo += ".";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{FEFF}") {
          kilo += "-";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200E}") {
          kilo += "!";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{00AD}\u{00AD}") {
          kilo += "\"";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{180E}") {
          kilo += "(";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200D}") {
          kilo += ")";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{2060}") {
          kilo += "=";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{00AD}") {
          kilo += "/";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{FEFF}") {
          kilo += "?";
          break;
      }}}
document.getElementById("kiloArea").value = kilo;
}

// ==============================================================================
//  end of version 2.1
// ==============================================================================

// ------------------------------------------------------------------------------
// Version 2.3 (winT)       Compatible with the windows text documents .txt
// Building blocks:         200B FEFF 200C 200D 180E 200E  | FEFF 200E
// Banned blocks:           200F 2060 00AD
// Supported characters:    (space) a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9
// ------------------------------------------------------------------------------

var dictionaryV2_3 = {
  0: "\u{200C}\u{180E}",
  1: "\u{180E}\u{FEFF}",
  2: "\u{200D}\u{180E}",
  3: "\u{180E}\u{200E}",
  4: "\u{FEFF}\u{180E}",
  5: "\u{180E}\u{180E}",
  6: "\u{200E}\u{180E}",
  8: "\u{180E}\u{200B}",
  9: "\u{180E}\u{200C}",
  a: "\u{200B}\u{200D}",
  b: "\u{FEFF}\u{200E}",
  c: "\u{200D}\u{200D}",
  d: "\u{200C}\u{200E}",
  e: "\u{200B}\u{200B}",
  f: "\u{200D}\u{200E}",
  g: "\u{FEFF}\u{200D}",
  h: "\u{200C}\u{200D}",
  i: "\u{200B}\u{FEFF}",
  j: "\u{200E}\u{FEFF}",
  k: "\u{200E}\u{200C}",
  l: "\u{200D}\u{200B}",
  m: "\u{200D}\u{FEFF}",
  n: "\u{200B}\u{200E}",
  o: "\u{200C}\u{200B}",
  p: "\u{FEFF}\u{FEFF}",
  q: "\u{200E}\u{200D}",
  r: "\u{200C}\u{FEFF}",
  s: "\u{200C}\u{200C}",
  t: "\u{200B}\u{200C}",
  u: "\u{200D}\u{200C}",
  v: "\u{200E}\u{200B}",
  w: "\u{FEFF}\u{200B}",
  x: "\u{200B}\u{180E}",
  y: "\u{FEFF}\u{200C}"
};

function obfuscateV2_3(sec){
  var kilo = "";
  sec = sec.toLowerCase();
  for (var i = 0; i < sec.length; i++){
    if (dictionaryV2_3[sec.charAt(i)] !== undefined){
      kilo += dictionaryV2_3[sec.charAt(i)];}
      else if(sec.charAt(i) === " "){
        kilo+= "\u{200E}\u{200E}";
      }
      else if(sec.charAt(i) === "\n"){
        kilo+= "\u{200E}\u{200E}";
      }
      else if (sec.charAt(i) == 7){
        kilo+= "\u{180E}\u{200D}\u{200E}\u{200E}\u{180E}\u{200D}";
      }
      else if (sec.charAt(i) === "z"){
        kilo+= "\u{180E}\u{200D}";
      }
    }
      document.getElementById("kiloArea").value = kilo;
      var copyText = document.querySelector("#kiloArea");
      copyText.select();
      document.execCommand("copy");
      document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n  You can even click it right now!\n\n\nQuestions or bugs? please email us at our homepage";
}

function deobfuscateV2_3(text){
  var stripped = text.replace(/[^\u200B\u200C\u200D\uFEFF\u200E\u180E]/g, '');
  var kilo = "";
  var reverseDictionary = Object.values(dictionaryV2_3);
  var CorresKeys = Object.keys(dictionaryV2_3);
  for (var i = 0; i < stripped.length; i+=2){
    for (var k = 0; k < 36; k++){
      if (stripped.substring(i, i+2)=== reverseDictionary[k]){
          kilo += CorresKeys[k];
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200E}") {
          kilo += " ";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{180E}\u{200D}"){
          if (stripped.substring(i+2, i+6)==="\u{200E}\u{200E}\u{180E}\u{200D}"){ kilo += "7"; i += 4; break;}
          else{kilo += "z"; break;}
      }}}
document.getElementById("kiloArea").value = kilo;
}

// ==============================================================================
//  end of version 2.3
// ==============================================================================


// ------------------------------------------------------------------------------
// Version 1.0 (full)    Not concerned with compatibility, can handle PGP, efficiency not so great
// Building blocks:      200B 200C 200D 180E 2060 00AD FEFF 200E
// Banned blocks:        200F
// Supported characters: (space) Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
//                       0 1 2 3 4 5 6 7 8 9
//                       (new line) ! ? # * ( ) - _ = + : " , . /
// ------------------------------------------------------------------------------

var dictionary = {
  0: "\u{200C}\u{FEFF}",
  1: "\u{200C}\u{200E}",
  2: "\u{200D}\u{FEFF}",
  3: "\u{200D}\u{200E}",
  4: "\u{2060}\u{FEFF}",
  5: "\u{2060}\u{200E}",
  6: "\u{00AD}\u{FEFF}",
  7: "\u{00AD}\u{200E}",
  8: "\u{FEFF}\u{200B}",
  9: "\u{FEFF}\u{200C}",
  a: "\u{200B}\u{200D}",
  b: "\u{2060}\u{00AD}",
  c: "\u{200D}\u{200D}",
  d: "\u{200C}\u{00AD}",
  e: "\u{200B}\u{200B}",
  f: "\u{200D}\u{00AD}",
  g: "\u{2060}\u{200D}",
  h: "\u{200C}\u{200D}",
  i: "\u{200B}\u{2060}",
  j: "\u{00AD}\u{2060}",
  k: "\u{00AD}\u{200C}",
  l: "\u{200D}\u{200B}",
  m: "\u{200D}\u{2060}",
  n: "\u{200B}\u{00AD}",
  o: "\u{200C}\u{200B}",
  p: "\u{2060}\u{2060}",
  q: "\u{00AD}\u{200D}",
  r: "\u{200C}\u{2060}",
  s: "\u{200C}\u{200C}",
  t: "\u{200B}\u{200C}",
  u: "\u{200D}\u{200C}",
  v: "\u{00AD}\u{200B}",
  w: "\u{2060}\u{200B}",
  x: "\u{200B}\u{FEFF}",
  y: "\u{2060}\u{200C}",
  z: "\u{200B}\u{200E}",
  _: "\u{200E}\u{200C}"
};

function obfuscateV1(sec){
  var kilo = "";
  for (var i = 0; i < sec.length; i++){
    var itWasUpperCase = false;
      if (sec.charAt(i) == sec.charAt(i).toLowerCase())
        {
         itWasUpperCase = false;
        }
      else {
         itWasUpperCase = true;
           }
    if (dictionary[sec.charAt(i).toLowerCase()] !== undefined){
      if (itWasUpperCase){kilo += "\u{180E}";
    }
      kilo += dictionary[sec.charAt(i).toLowerCase()];}
      // Spacial characters
      else if (sec.charAt(i) === " ") {
          kilo += "\u{00AD}\u{00AD}";
      }
      else if (sec.charAt(i) == "\n"){
          kilo += "\u{FEFF}\u{200D}";
      }
      else if (sec.charAt(i) === ","){
          kilo += "\u{FEFF}\u{2060}";
      }
      else if (sec.charAt(i) === "."){
          kilo += "\u{FEFF}\u{00AD}";
      }
      else if (sec.charAt(i) === "-"){
          kilo += "\u{FEFF}\u{FEFF}";
      }
      else if (sec.charAt(i) === "\""){
          kilo += "\u{FEFF}\u{200E}";
      }
      else if (sec.charAt(i) === "("){
          kilo += "\u{200E}\u{200B}";
      }
      else if (sec.charAt(i) === "+"){
          kilo += "\u{200E}\u{200D}";
      }
      else if (sec.charAt(i) === "="){
          kilo += "\u{200E}\u{2060}";
      }
      else if (sec.charAt(i) === "/"){
          kilo += "\u{200E}\u{00AD}";
      }
      else if (sec.charAt(i) === "?"){
          kilo += "\u{200E}\u{FEFF}";
      }
      else if (sec.charAt(i) === "!"){
          kilo += "\u{200E}\u{200E}";
      }
      else if (sec.charAt(i) === "#"){
          kilo += "\u{200E}\u{200B}\u{200E}\u{200D}";
      }
      else if (sec.charAt(i) === ")"){
          kilo += "\u{200E}\u{200B}\u{FEFF}\u{200D}";
      }
      else if (sec.charAt(i) === ":"){
          kilo += "\u{200E}\u{200B}\u{FEFF}\u{00AD}";
      }
      else if (sec.charAt(i) === "*"){
          kilo += "\u{200E}\u{200B}\u{200E}\u{00AD}";
      }
}
document.getElementById("kiloArea").value = kilo;
var copyText = document.querySelector("#kiloArea");
copyText.select();
document.execCommand("copy");
document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n  You can even click it right now!\n\n\nQuestions or bugs? please email us at our homepage";
}

function deobfuscateV1(text){
  var theKilo = "";
  var stripped = text.replace(/[^\u200B\u200C\u200D\u2060\u00AD\uFEFF\u200E\u180E]/g, '');
  var kilo = "";
  var reverseDictionary = Object.values(dictionary);
  var CorresKeys = Object.keys(dictionary);
  for (var i = 0; i < stripped.length; i+=2){
    var wasUpperCase = false;
    if(stripped.charAt(i)==="\u{180E}"){
      wasUpperCase = true;
      i++;
    }
    for (var k = 0; k < 38; k++){
      if (stripped.substring(i, i+2)=== reverseDictionary[k]){
        theKilo = CorresKeys[k];
        if(wasUpperCase){
          theKilo = theKilo.toUpperCase();
        }
          kilo += theKilo;
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{00AD}\u{00AD}") {
          kilo += " ";
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{200D}"){
        kilo += "\n";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{2060}"){
        kilo += ",";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{00AD}"){
        kilo += ".";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{FEFF}"){
        kilo += "-";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{200E}"){
        kilo += "\"";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200B}"){
        if (stripped.substring(i+2, i+4)==="\u{200E}\u{200D}"){
          kilo += "#";
          i+=2;
          break
        }
        else if(stripped.substring(i+2, i+4)==="\u{FEFF}\u{200D}"){
          kilo += ")";
          i+=2;
          break
        }
        else if(stripped.substring(i+2, i+4)==="\u{200E}\u{00AD}"){
          kilo += "*";
          i+=2;
          break;
        }
        else if (stripped.substring(i+2, i+4)==="\u{FEFF}\u{00AD}"){
          kilo += ":";
          i+=2;
          break;
        }
        else{kilo += "(";}
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200D}"){
        kilo += "+";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{2060}"){
        kilo += "=";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{00AD}"){
        kilo += "/";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{FEFF}"){
        kilo += "?";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200E}"){
        kilo += "!";
        break;
      }
    }
   }
  document.getElementById("kiloArea").value = kilo;
}

// ==============================================================================
//  end of version 1.0
// ==============================================================================

// ------------------------------------------------------------------------------
// Version 1.1 (full)    Not concerned with compatibility, can handle PGP, improved size efficiency
// Building blocks:      200B 200C 200D 180E 2060 00AD FEFF 200E
// Banned blocks:        200F
// Supported characters: (space) Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
//                       0 1 2 3 4 5 6 7 8 9
//                       (new line) ! ? # * ( ) - _ = + : " , . /
// ------------------------------------------------------------------------------

function obfuscateV1_1(sec){
  var kilo = "";
  for (var i = 0; i < sec.length; i++){
    var itWasUpperCase = false;
      if (sec.charAt(i) == sec.charAt(i).toLowerCase())
        {
         itWasUpperCase = false;
        }
      else {
         itWasUpperCase = true;
           }
    if (dictionary[sec.charAt(i).toLowerCase()] !== undefined){
      if (itWasUpperCase){kilo += "\u{00AD}\u{00AD}";
    }
      kilo += dictionary[sec.charAt(i).toLowerCase()];}
      // Spacial characters
      else if (sec.charAt(i) === " ") {
          kilo += "\u{180E}";
      }
      else if (sec.charAt(i) == "\n"){
          kilo += "\u{FEFF}\u{200D}";
      }
      else if (sec.charAt(i) === ","){
          kilo += "\u{FEFF}\u{2060}";
      }
      else if (sec.charAt(i) === "."){
          kilo += "\u{FEFF}\u{00AD}";
      }
      else if (sec.charAt(i) === "-"){
          kilo += "\u{FEFF}\u{FEFF}";
      }
      else if (sec.charAt(i) === "\""){
          kilo += "\u{FEFF}\u{200E}";
      }
      else if (sec.charAt(i) === "("){
          kilo += "\u{200E}\u{200B}";
      }
      else if (sec.charAt(i) === "+"){
          kilo += "\u{200E}\u{200D}";
      }
      else if (sec.charAt(i) === "="){
          kilo += "\u{200E}\u{2060}";
      }
      else if (sec.charAt(i) === "/"){
          kilo += "\u{200E}\u{00AD}";
      }
      else if (sec.charAt(i) === "?"){
          kilo += "\u{200E}\u{FEFF}";
      }
      else if (sec.charAt(i) === "!"){
          kilo += "\u{200E}\u{200E}";
      }
      else if (sec.charAt(i) === "#"){
          kilo += "\u{200E}\u{200B}\u{200E}\u{200D}";
      }
      else if (sec.charAt(i) === ")"){
          kilo += "\u{200E}\u{200B}\u{FEFF}\u{200D}";
      }
      else if (sec.charAt(i) === ":"){
          kilo += "\u{200E}\u{200B}\u{FEFF}\u{00AD}";
      }
      else if (sec.charAt(i) === "*"){
          kilo += "\u{200E}\u{200B}\u{200E}\u{00AD}";
      }
}
document.getElementById("kiloArea").value = kilo;
var copyText = document.querySelector("#kiloArea");
copyText.select();
document.execCommand("copy");
document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n  You can even click it right now!\n\n\nQuestions or bugs? please email us at our homepage";
}

function deobfuscateV1_1(text){
  var theKilo = "";
  var stripped = text.replace(/[^\u200B\u200C\u200D\u2060\u00AD\uFEFF\u200E\u180E]/g, '');
  var kilo = "";
  var reverseDictionary = Object.values(dictionary);
  var CorresKeys = Object.keys(dictionary);
  for (var i = 0; i < stripped.length; i+=2){
    var wasUpperCase = false;
    while(stripped.charAt(i)==="\u{180E}"){
      kilo += " ";
      i++;
    }
    if(stripped.substring(i, i+2)==="\u{00AD}\u{00AD}"){
     wasUpperCase = true;
      i+=2;
    }
    for (var k = 0; k < 38; k++){
      if (stripped.substring(i, i+2)=== reverseDictionary[k]){
        theKilo = CorresKeys[k];
        if(wasUpperCase){
          theKilo = theKilo.toUpperCase();
        }
          kilo += theKilo;
          break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{200D}"){
        kilo += "\n";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{2060}"){
        kilo += ",";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{00AD}"){
        kilo += ".";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{FEFF}"){
        kilo += "-";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{FEFF}\u{200E}"){
        kilo += "\"";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200B}"){
        if (stripped.substring(i+2, i+4)==="\u{200E}\u{200D}"){
          kilo += "#";
          i+=2;
          break
        }
        else if(stripped.substring(i+2, i+4)==="\u{FEFF}\u{200D}"){
          kilo += ")";
          i+=2;
          break
        }
        else if(stripped.substring(i+2, i+4)==="\u{200E}\u{00AD}"){
          kilo += "*";
          i+=2;
          break;
        }
        else if (stripped.substring(i+2, i+4)==="\u{FEFF}\u{00AD}"){
          kilo += ":";
          i+=2;
          break;
        }
        else{kilo += "(";}
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200D}"){
        kilo += "+";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{2060}"){
        kilo += "=";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{00AD}"){
        kilo += "/";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{FEFF}"){
        kilo += "?";
        break;
      }
      else if(stripped.substring(i, i+2)==="\u{200E}\u{200E}"){
        kilo += "!";
        break;
      }
    }
   }
  document.getElementById("kiloArea").value = kilo;
}

// ==============================================================================
//  end of version 1.1
// ==============================================================================


// https://soundcloud.com/crystal-castles/pino-placentile-wooden-girl
