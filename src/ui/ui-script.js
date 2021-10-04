// https://github.com/PlanetRenox/in0sight
// Contact: planetrenox@pm.me
//
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
document.getElementById("obf").addEventListener("click", function()
{
  var versionAlg = document.getElementById("dropdown").value;
  if (versionAlg === "version 1.0")
  {
    obfuscateV1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited twiT")
  {
    obfuscateV2_0(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited proT")
  {
    obfuscateV2_1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited winT")
  {
    obfuscateV2_3(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "version 1.1")
  {
    obfuscateV1_1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "version 1.2")
  {
    obfuscateV1_2(document.getElementById("kiloArea").value);
  }
});
// deobfuscate listeners
document.getElementById("decode").addEventListener("click", function()
{
  var versionAlg = document.getElementById("dropdown").value;
  // double check in case user picked 1.2 instead of 1.1
  if (document.getElementById("dropdown").value === "version 1.2")
  {
    var strippedVer = document.getElementById("kiloArea").value.replace(/[^\u200B\u200C\u200D\u2060\u00AD\uFEFF\u200E\u180E]/g, "");
    strippedVer = strippedVer.substring(0, 6);
    if (strippedVer === "\u{200C}\u{200E}\u{FEFF}\u{00AD}\u{200D}\u{FEFF}")
    {
      versionAlg = "version 1.2";
    }
    else if ((versionAlg === "version 1.2") && !(strippedVer === "\u{200C}\u{200E}\u{FEFF}\u{00AD}\u{200D}\u{FEFF}"))
    {
      versionAlg = "version 1.1";
    }
  }
  if (document.getElementById("kiloArea").value === "")
  {
    document.getElementById("kiloArea").value = "The text box is empty.";
  }
  else if (versionAlg === "version 1.0")
  {
    deobfuscateV1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited twiT")
  {
    deobfuscateV2_0(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited winT")
  {
    deobfuscateV2_3(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "limited proT")
  {
    deobfuscateV2_1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "version 1.1")
  {
    deobfuscateV1_1(document.getElementById("kiloArea").value);
  }
  else if (versionAlg === "version 1.2")
  {
    deobfuscateV1_2(document.getElementById("kiloArea").value);
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

function obfuscateV2_0(sec)
{
  var kilo = "";
  sec = sec.toLowerCase();
  for (var i = 0; i < sec.length; i++)
  {
    if (dictionaryV2_0[sec.charAt(i)] !== undefined)
    {
      kilo += dictionaryV2_0[sec.charAt(i)];
    }
    else if (sec.charAt(i) === " ")
    {
      kilo += "\u{00AD}\u{00AD}";
    }
    else if (sec.charAt(i) == 7)
    {
      kilo += "\u{180E}\u{200D}\u{00AD}\u{00AD}\u{180E}\u{200D}";
    }
    else if (sec.charAt(i) === "z")
    {
      kilo += "\u{180E}\u{200D}";
    }
  }
  document.getElementById("kiloArea").value = kilo;
  var copyText = document.querySelector("#kiloArea");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n\n\n\nVisit homepage to report bugs or make suggestions.";
}

function deobfuscateV2_0(text)
{
  var stripped = text.replace(/[^\u200B\u200C\u200D\u2060\u00AD\u180E]/g, "");
  var kilo = "";
  var reverseDictionary = Object.values(dictionaryV2_0);
  var CorresKeys = Object.keys(dictionaryV2_0);
  for (var i = 0; i < stripped.length; i += 2)
  {
    for (var k = 0; k < 36; k++)
    {
      if (stripped.substring(i, i + 2) === reverseDictionary[k])
      {
        kilo += CorresKeys[k];
        break;
      }
      else if (stripped.substring(i, i + 2) === "\u{00AD}\u{00AD}")
      {
        kilo += " ";
        break;
      }
      else if (stripped.substring(i, i + 2) === "\u{180E}\u{200D}")
      {
        if (stripped.substring(i + 2, i + 6) === "\u{00AD}\u{00AD}\u{180E}\u{200D}")
        {
          kilo += "7";
          i += 4;
          break;
        }
        else
        {
          kilo += "z";
          break;
        }
      }
    }
  }
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
  _: "\u{200E}\u{200C}",
  " ": "\u{00AD}\u{00AD}",
  "\n": "\u{FEFF}\u{200D}",
  ",": "\u{FEFF}\u{2060}",
  ".": "\u{FEFF}\u{00AD}",
  "-": "\u{FEFF}\u{FEFF}",
  '"': "\u{FEFF}\u{200E}",
  "(": "\u{200E}\u{180E}",
  ")": "\u{200E}\u{200D}",
  "=": "\u{200E}\u{2060}",
  "/": "\u{200E}\u{00AD}",
  "?": "\u{200E}\u{FEFF}",
  "!": "\u{200E}\u{200E}"
};

function obfuscateV2_1(sec)
{
  var kilo = "";
  sec = sec.toLowerCase();
  for (var i = 0; i < sec.length; i++)
  {
    if (dictionaryV2_1[sec.charAt(i)] !== undefined)
    {
      kilo += dictionaryV2_1[sec.charAt(i)];
    }
  }
  document.getElementById("kiloArea").value = kilo;
  var copyText = document.querySelector("#kiloArea");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n\n\n\nVisit homepage to report bugs or make suggestions.";
}

function deobfuscateV2_1(text)
{
  var stripped = text.replace(/[^\u200C\u200D\u2060\u00AD\u180E\uFEFF\u200E]/g, "");
  var kilo = "";
  var reverseDictionary = Object.values(dictionaryV2_1);
  var CorresKeys = Object.keys(dictionaryV2_1);
  for (var i = 0; i < stripped.length; i += 2)
  {
    for (var k = 0; k < 50; k++)
    {
      if (stripped.substring(i, i + 2) === reverseDictionary[k])
      {
        kilo += CorresKeys[k];
        break;
      }
    }
  }
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

function obfuscateV2_3(sec)
{
  var kilo = "";
  sec = sec.toLowerCase();
  for (var i = 0; i < sec.length; i++)
  {
    if (dictionaryV2_3[sec.charAt(i)] !== undefined)
    {
      kilo += dictionaryV2_3[sec.charAt(i)];
    }
    else if (sec.charAt(i) === " ")
    {
      kilo += "\u{200E}\u{200E}";
    }
    else if (sec.charAt(i) === "\n")
    {
      kilo += "\u{200E}\u{200E}";
    }
    else if (sec.charAt(i) == 7)
    {
      kilo += "\u{180E}\u{200D}\u{200E}\u{200E}\u{180E}\u{200D}";
    }
    else if (sec.charAt(i) === "z")
    {
      kilo += "\u{180E}\u{200D}";
    }
  }
  document.getElementById("kiloArea").value = kilo;
  var copyText = document.querySelector("#kiloArea");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n\n\n\nVisit homepage to report bugs or make suggestions.";
}

function deobfuscateV2_3(text)
{
  var stripped = text.replace(/[^\u200B\u200C\u200D\uFEFF\u200E\u180E]/g, "");
  var kilo = "";
  var reverseDictionary = Object.values(dictionaryV2_3);
  var CorresKeys = Object.keys(dictionaryV2_3);
  for (var i = 0; i < stripped.length; i += 2)
  {
    for (var k = 0; k < 36; k++)
    {
      if (stripped.substring(i, i + 2) === reverseDictionary[k])
      {
        kilo += CorresKeys[k];
        break;
      }
      else if (stripped.substring(i, i + 2) === "\u{200E}\u{200E}")
      {
        kilo += " ";
        break;
      }
      else if (stripped.substring(i, i + 2) === "\u{180E}\u{200D}")
      {
        if (stripped.substring(i + 2, i + 6) === "\u{200E}\u{200E}\u{180E}\u{200D}")
        {
          kilo += "7";
          i += 4;
          break;
        }
        else
        {
          kilo += "z";
          break;
        }
      }
    }
  }
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
  _: "\u{200E}\u{200C}",
  " ": "\u{00AD}\u{00AD}",
  "\n": "\u{FEFF}\u{200D}",
  ",": "\u{FEFF}\u{2060}",
  ".": "\u{FEFF}\u{00AD}",
  "-": "\u{FEFF}\u{FEFF}",
  '"': "\u{FEFF}\u{200E}",
  "(": "\u{200E}\u{200B}",
  "+": "\u{200E}\u{200D}",
  "=": "\u{200E}\u{2060}",
  "/": "\u{200E}\u{00AD}",
  "?": "\u{200E}\u{FEFF}",
  "!": "\u{200E}\u{200E}"
};

function obfuscateV1(sec)
{
  var kilo = "";
  for (var i = 0; i < sec.length; i++)
  {
    var itWasUpperCase = false;
    if (sec.charAt(i) == sec.charAt(i).toLowerCase())
    {
      itWasUpperCase = false;
    }
    else
    {
      itWasUpperCase = true;
    }
    if (dictionary[sec.charAt(i).toLowerCase()] !== undefined)
    {
      if (itWasUpperCase)
      {
        kilo += "\u{180E}";
      }
      kilo += dictionary[sec.charAt(i).toLowerCase() // Spacial characters
      ];
    }
    else if (sec.charAt(i) === "#")
    {
      kilo += "\u{200E}\u{200B}\u{200E}\u{200D}";
    }
    else if (sec.charAt(i) === ")")
    {
      kilo += "\u{200E}\u{200B}\u{FEFF}\u{200D}";
    }
    else if (sec.charAt(i) === ":")
    {
      kilo += "\u{200E}\u{200B}\u{FEFF}\u{00AD}";
    }
    else if (sec.charAt(i) === "*")
    {
      kilo += "\u{200E}\u{200B}\u{200E}\u{00AD}";
    }
  }
  document.getElementById("kiloArea").value = kilo;
  var copyText = document.querySelector("#kiloArea");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n\n\n\nVisit homepage to report bugs or make suggestions.";
}

function deobfuscateV1(text)
{
  var theKilo = "";
  var stripped = text.replace(/[^\u200B\u200C\u200D\u2060\u00AD\uFEFF\u200E\u180E]/g, "");
  var kilo = "";
  var reverseDictionary = Object.values(dictionary);
  var CorresKeys = Object.keys(dictionary);
  for (var i = 0; i < stripped.length; i += 2)
  {
    var wasUpperCase = false;
    if (stripped.charAt(i) === "\u{180E}")
    {
      wasUpperCase = true;
      i++;
    }
    for (var k = 0; k < 50; k++)
    {
      if (stripped.substring(i, i + 2) === reverseDictionary[k])
      {
        theKilo = CorresKeys[k];
        if (wasUpperCase)
        {
          theKilo = theKilo.toUpperCase();
        }
        kilo += theKilo;
        break;
      }
      else if (stripped.substring(i, i + 2) === "\u{200E}\u{200B}")
      {
        if (stripped.substring(i + 2, i + 4) === "\u{200E}\u{200D}")
        {
          kilo += "#";
          i += 2;
          break;
        }
        else if (stripped.substring(i + 2, i + 4) === "\u{FEFF}\u{200D}")
        {
          kilo += ")";
          i += 2;
          break;
        }
        else if (stripped.substring(i + 2, i + 4) === "\u{200E}\u{00AD}")
        {
          kilo += "*";
          i += 2;
          break;
        }
        else if (stripped.substring(i + 2, i + 4) === "\u{FEFF}\u{00AD}")
        {
          kilo += ":";
          i += 2;
          break;
        }
        else
        {
          kilo += "(";
        }
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
var dictionaryV1_1 = {
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
  _: "\u{200E}\u{200C}",
  " ": "\u{180E}",
  ",": "\u{FEFF}\u{2060}",
  "\n": "\u{FEFF}\u{200D}",
  ".": "\u{FEFF}\u{00AD}",
  "-": "\u{FEFF}\u{FEFF}",
  '"': "\u{FEFF}\u{200E}",
  "+": "\u{200E}\u{200D}",
  "=": "\u{200E}\u{2060}",
  "/": "\u{200E}\u{00AD}",
  "?": "\u{200E}\u{FEFF}",
  "!": "\u{200E}\u{200E}",
  "(": "\u{200E}\u{200B}"
};

function obfuscateV1_1(sec)
{
  var kilo = "";
  for (var i = 0; i < sec.length; i++)
  {
    var itWasUpperCase = false;
    if (sec.charAt(i) == sec.charAt(i).toLowerCase())
    {
      itWasUpperCase = false;
    }
    else
    {
      itWasUpperCase = true;
    }
    if (dictionaryV1_1[sec.charAt(i).toLowerCase()] !== undefined)
    {
      if (itWasUpperCase)
      {
        kilo += "\u{00AD}\u{00AD}";
      }
      kilo += dictionaryV1_1[sec.charAt(i).toLowerCase() // Spacial characters
      ];
    }
    else if (sec.charAt(i) === "#")
    {
      kilo += "\u{200E}\u{200B}\u{200E}\u{200D}";
    }
    else if (sec.charAt(i) === ")")
    {
      kilo += "\u{200E}\u{200B}\u{FEFF}\u{200D}";
    }
    else if (sec.charAt(i) === ":")
    {
      kilo += "\u{200E}\u{200B}\u{FEFF}\u{00AD}";
    }
    else if (sec.charAt(i) === "*")
    {
      kilo += "\u{200E}\u{200B}\u{200E}\u{00AD}";
    }
  }
  document.getElementById("kiloArea").value = kilo;
  var copyText = document.querySelector("#kiloArea");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n\n\n\nVisit homepage to report bugs or make suggestions.";
}

function deobfuscateV1_1(text)
{
  var theKilo = "";
  var stripped = text.replace(/[^\u200B\u200C\u200D\u2060\u00AD\uFEFF\u200E\u180E]/g, "");
  var kilo = "";
  var reverseDictionary = Object.values(dictionaryV1_1);
  var CorresKeys = Object.keys(dictionaryV1_1);
  for (var i = 0; i < stripped.length; i += 2)
  {
    var wasUpperCase = false;
    while (stripped.charAt(i) === "\u{180E}")
    {
      kilo += " ";
      i++;
    }
    if (stripped.substring(i, i + 2) === "\u{00AD}\u{00AD}")
    {
      wasUpperCase = true;
      i += 2;
    }
    for (var k = 0; k < 48; k++)
    {
      if (stripped.substring(i, i + 2) === reverseDictionary[k])
      {
        theKilo = CorresKeys[k];
        if (wasUpperCase)
        {
          theKilo = theKilo.toUpperCase();
        }
        kilo += theKilo;
        break;
      }
      else if (stripped.substring(i, i + 2) === "\u{200E}\u{200B}")
      {
        if (stripped.substring(i + 2, i + 4) === "\u{200E}\u{200D}")
        {
          kilo += "#";
          i += 2;
          break;
        }
        else if (stripped.substring(i + 2, i + 4) === "\u{FEFF}\u{200D}")
        {
          kilo += ")";
          i += 2;
          break;
        }
        else if (stripped.substring(i + 2, i + 4) === "\u{200E}\u{00AD}")
        {
          kilo += "*";
          i += 2;
          break;
        }
        else if (stripped.substring(i + 2, i + 4) === "\u{FEFF}\u{00AD}")
        {
          kilo += ":";
          i += 2;
          break;
        }
        else
        {
          kilo += "(";
        }
        break;
      }
    }
  }
  document.getElementById("kiloArea").value = kilo;
}
// ==============================================================================
//  end of version 1.1
// ==============================================================================
// ------------------------------------------------------------------------------
// Version 1.2 (full)    Focus here is on scalability, support for every special character and language
// Building blocks:      200B 200C 200D 180E(Dedicated to Space) 2060 00AD FEFF 200E
// Banned blocks:        200F
// Supported languages:  English - Russian - Spanish - French - Italian - Japanese
// ------------------------------------------------------------------------------
var dictionaryV1_2root = {
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
  "'": "\u{200E}\u{200C}",
  " ": "\u{180E}", // Stays the same across all dictionaries
  ",": "\u{FEFF}\u{2060}", // Stays the same across all dictionaries
  "\n": "\u{FEFF}\u{200D}", // Stays the same across all dictionaries
  ".": "\u{FEFF}\u{00AD}", // Stays the same across all dictionaries
  "-": "\u{FEFF}\u{FEFF}",
  '"': "\u{FEFF}\u{200E}",
  "+": "\u{200E}\u{200D}",
  "=": "\u{200E}\u{2060}",
  "/": "\u{200E}\u{00AD}",
  // "?": "\u{200E}\u{FEFF}", dedicated to switching between dictionaries
  "!": "\u{200E}\u{200E}",
  "?": "\u{200E}\u{200B}"
};
var dictionaryV1_2ru = {
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
  а: "\u{200B}\u{200D}",
  б: "\u{2060}\u{00AD}",
  в: "\u{200D}\u{200D}",
  г: "\u{200C}\u{00AD}",
  д: "\u{200B}\u{200B}",
  е: "\u{200D}\u{00AD}",
  ж: "\u{2060}\u{200D}",
  з: "\u{200C}\u{200D}",
  и: "\u{200B}\u{2060}",
  й: "\u{00AD}\u{2060}",
  к: "\u{00AD}\u{200C}",
  л: "\u{200D}\u{200B}",
  м: "\u{200D}\u{2060}",
  н: "\u{200B}\u{00AD}",
  о: "\u{200C}\u{200B}",
  п: "\u{2060}\u{2060}",
  р: "\u{00AD}\u{200D}",
  с: "\u{200C}\u{2060}",
  т: "\u{200C}\u{200C}",
  у: "\u{200B}\u{200C}",
  ф: "\u{200D}\u{200C}",
  х: "\u{00AD}\u{200B}",
  ц: "\u{2060}\u{200B}",
  ч: "\u{200B}\u{FEFF}",
  ш: "\u{2060}\u{200C}",
  щ: "\u{200B}\u{200E}",
  ъ: "\u{FEFF}\u{FEFF}",
  ы: "\u{FEFF}\u{200E}",
  ь: "\u{200E}\u{200D}",
  э: "\u{200E}\u{2060}",
  ю: "\u{200E}\u{00AD}",
  //я: "\u{200E}\u{FEFF}", dedicated to switching between dictionaries
  я: "\u{200E}\u{200E}",
  ё: "\u{200E}\u{200B}",
  "\n": "\u{FEFF}\u{200D}",
  ".": "\u{FEFF}\u{00AD}",
  ",": "\u{FEFF}\u{2060}",
  //")": "\u{200E}\u{200C}",
  " ": "\u{180E}"
};
var dictionaryV1_2sc = {
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
  ":": "\u{200B}\u{200D}",
  "*": "\u{2060}\u{00AD}",
  "(": "\u{200D}\u{200D}",
  ")": "\u{200C}\u{00AD}",
  "_": "\u{200B}\u{200B}",
  "#": "\u{200D}\u{00AD}",
  "&": "\u{2060}\u{200D}",
  "^": "\u{200C}\u{200D}",
  "%": "\u{200B}\u{2060}",
  "$": "\u{00AD}\u{2060}",
  "@": "\u{00AD}\u{200C}",
  "`": "\u{200D}\u{200B}",
  "~": "\u{200D}\u{2060}",
  "\\": "\u{200B}\u{00AD}",
  ">": "\u{200C}\u{200B}",
  "<": "\u{2060}\u{2060}",
  "]": "\u{00AD}\u{200D}",
  "[": "\u{200C}\u{2060}",
  "}": "\u{200C}\u{200C}",
  "{": "\u{200B}\u{200C}",
  // "\u{00d8}": "\u{200D}\u{200C}", //cant figure out why doesnt work
  "—": "\u{00AD}\u{200B}",
  ñ: "\u{2060}\u{200B}",
  à: "\u{200B}\u{FEFF}",
  è: "\u{2060}\u{200C}",
  é: "\u{200B}\u{200E}",
  ì: "\u{200E}\u{200C}",
  " ": "\u{180E}", // Stays the same across all dictionaries
  ",": "\u{FEFF}\u{2060}", // Stays the same across all dictionaries
  "\n": "\u{FEFF}\u{200D}", // Stays the same across all dictionaries
  ".": "\u{FEFF}\u{00AD}", // Stays the same across all dictionaries
  í: "\u{FEFF}\u{FEFF}",
  ò: "\u{FEFF}\u{200E}",
  ó: "\u{200E}\u{200D}",
  ù: "\u{200E}\u{2060}",
  "$": "\u{200E}\u{00AD}",
  // "?": "\u{200E}\u{FEFF}", dedicated to switching between dictionaries
  "œ": "\u{200E}\u{200E}",
  "æ": "\u{200E}\u{200B}"
};
var dictionaryV1_2jaHira = {
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
  ぁ: "\u{200B}\u{200D}",
  あ: "\u{2060}\u{00AD}",
  ぃ: "\u{200D}\u{200D}",
  い: "\u{200C}\u{00AD}",
  ぅ: "\u{200B}\u{200B}",
  う: "\u{200D}\u{00AD}",
  ぇ: "\u{2060}\u{200D}",
  え: "\u{200C}\u{200D}",
  ぉ: "\u{200B}\u{2060}",
  お: "\u{00AD}\u{2060}",
  か: "\u{00AD}\u{200C}",
  が: "\u{200D}\u{200B}",
  き: "\u{200D}\u{2060}",
  ぎ: "\u{200B}\u{00AD}",
  く: "\u{200C}\u{200B}",
  ぐ: "\u{2060}\u{2060}",
  け: "\u{00AD}\u{200D}",
  げ: "\u{200C}\u{2060}",
  こ: "\u{200C}\u{200C}",
  ご: "\u{200B}\u{200C}",
  さ: "\u{200D}\u{200C}",
  ざ: "\u{00AD}\u{200B}",
  し: "\u{2060}\u{200B}",
  じ: "\u{200B}\u{FEFF}",
  す: "\u{2060}\u{200C}",
  ず: "\u{200B}\u{200E}",
  せ: "\u{200E}\u{200C}",
  " ": "\u{180E}", // Stays the same across all dictionaries
  ",": "\u{FEFF}\u{2060}", // Stays the same across all dictionaries
  "\n": "\u{FEFF}\u{200D}", // Stays the same across all dictionaries
  ".": "\u{FEFF}\u{00AD}", // Stays the same across all dictionaries
  ぜ: "\u{FEFF}\u{FEFF}",
  そ: "\u{FEFF}\u{200E}",
  ぞ: "\u{200E}\u{200D}",
  た: "\u{200E}\u{2060}",
  だ: "\u{200E}\u{00AD}",
  // "?": "\u{200E}\u{FEFF}", dedicated to switching between dictionaries
  ち: "\u{200E}\u{200E}",
  ぢ: "\u{200E}\u{200B}"
};
var dictionaryV1_2jaHira2 = {
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
  っ: "\u{200B}\u{200D}",
  つ: "\u{2060}\u{00AD}",
  づ: "\u{200D}\u{200D}",
  て: "\u{200C}\u{00AD}",
  で: "\u{200B}\u{200B}",
  と: "\u{200D}\u{00AD}",
  ど: "\u{2060}\u{200D}",
  な: "\u{200C}\u{200D}",
  に: "\u{200B}\u{2060}",
  ぬ: "\u{00AD}\u{2060}",
  ね: "\u{00AD}\u{200C}",
  の: "\u{200D}\u{200B}",
  は: "\u{200D}\u{2060}",
  ぎ: "\u{200B}\u{00AD}",
  ば: "\u{200C}\u{200B}",
  ぱ: "\u{2060}\u{2060}",
  ひ: "\u{00AD}\u{200D}",
  び: "\u{200C}\u{2060}",
  ぴ: "\u{200C}\u{200C}",
  ご: "\u{200B}\u{200C}",
  ふ: "\u{200D}\u{200C}",
  ぶ: "\u{00AD}\u{200B}",
  ぷ: "\u{2060}\u{200B}",
  へ: "\u{200B}\u{FEFF}",
  べ: "\u{2060}\u{200C}",
  ぺ: "\u{200B}\u{200E}",
  ほ: "\u{200E}\u{200C}",
  " ": "\u{180E}", // Stays the same across all dictionaries
  ",": "\u{FEFF}\u{2060}", // Stays the same across all dictionaries
  "\n": "\u{FEFF}\u{200D}", // Stays the same across all dictionaries
  ".": "\u{FEFF}\u{00AD}", // Stays the same across all dictionaries
  ぼ: "\u{FEFF}\u{FEFF}",
  ぽ: "\u{FEFF}\u{200E}",
  ま: "\u{200E}\u{200D}",
  み: "\u{200E}\u{2060}",
  む: "\u{200E}\u{00AD}",
  // "?": "\u{200E}\u{FEFF}", dedicated to switching between dictionaries
  め: "\u{200E}\u{200E}",
  も: "\u{200E}\u{200B}"
};
var dictionaryV1_2jaHira3 = {
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
  ゃ: "\u{200B}\u{200D}",
  や: "\u{2060}\u{00AD}",
  ゅ: "\u{200D}\u{200D}",
  ゆ: "\u{200C}\u{00AD}",
  ょ: "\u{200B}\u{200B}",
  よ: "\u{200D}\u{00AD}",
  ら: "\u{2060}\u{200D}",
  り: "\u{200C}\u{200D}",
  る: "\u{200B}\u{2060}",
  れ: "\u{00AD}\u{2060}",
  ろ: "\u{00AD}\u{200C}",
  ゎ: "\u{200D}\u{200B}",
  わ: "\u{200D}\u{2060}",
  ゐ: "\u{200B}\u{00AD}",
  ゑ: "\u{200C}\u{200B}",
  を: "\u{2060}\u{2060}",
  ん: "\u{00AD}\u{200D}",
  ゔ: "\u{200C}\u{2060}",
  ゕ: "\u{200C}\u{200C}",
  ゖ: "\u{200B}\u{200C}",
  "゙ ": "\u{200D}\u{200C}",
  " ": "\u{00AD}\u{200B}",
  "゛": "\u{2060}\u{200B}",
  "゜": "\u{200B}\u{FEFF}",
  ゝ: "\u{2060}\u{200C}",
  ゞ: "\u{200B}\u{200E}",
  ゟ: "\u{200E}\u{200C}",
  " ": "\u{180E}", // Stays the same across all dictionaries
  ",": "\u{FEFF}\u{2060}", // Stays the same across all dictionaries
  "\n": "\u{FEFF}\u{200D}", // Stays the same across all dictionaries
  ".": "\u{FEFF}\u{00AD}", // Stays the same across all dictionaries
  県: "\u{FEFF}\u{FEFF}",
  政: "\u{FEFF}\u{200E}",
  保: "\u{200E}\u{200D}",
  意: "\u{200E}\u{2060}",
  会: "\u{200E}\u{00AD}",
  // "?": "\u{200E}\u{FEFF}", dedicated to switching between dictionaries
  入: "\u{200E}\u{200E}",
  力: "\u{200E}\u{200B}"
};
var dictionaryV1_2izs = {
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
  '§': "\u{200B}\u{200D}",
  '£': "\u{2060}\u{00AD}",
  '€': "\u{200D}\u{200D}",
  '¥': "\u{200C}\u{00AD}",
  '©': "\u{200B}\u{200B}",
  '®': "\u{200D}\u{00AD}",
  '°': "\u{2060}\u{200D}",
  '¶': "\u{200C}\u{200D}",
  '\u{200C}': "\u{200B}\u{2060}",
  '\u{FEFF}': "\u{00AD}\u{2060}",
  '\u{200E}': "\u{00AD}\u{200C}",
  '\u{200D}': "\u{200D}\u{200B}",
  '\u{200B}': "\u{200D}\u{2060}",
  '\u{00AD}': "\u{200B}\u{00AD}",
  '\u{2060}': "\u{200C}\u{200B}",
  '\u{180E}': "\u{2060}\u{2060}",
  '•': "\u{00AD}\u{200D}"
  // ゔ: "\u{200C}\u{2060}",
  // ゕ: "\u{200C}\u{200C}",
  // ゖ: "\u{200B}\u{200C}",
  // "゙ ": "\u{200D}\u{200C}",
  // " ": "\u{00AD}\u{200B}",
  // "゛": "\u{2060}\u{200B}",
  // "゜": "\u{200B}\u{FEFF}",
  // ゝ: "\u{2060}\u{200C}",
  // ゞ: "\u{200B}\u{200E}",
  // ゟ: "\u{200E}\u{200C}",
  // " ": "\u{180E}", // Stays the same across all dictionaries
  // ",": "\u{FEFF}\u{2060}", // Stays the same across all dictionaries
  // "\n": "\u{FEFF}\u{200D}", // Stays the same across all dictionaries
  // ".": "\u{FEFF}\u{00AD}", // Stays the same across all dictionaries
  // 県: "\u{FEFF}\u{FEFF}",
  // 政: "\u{FEFF}\u{200E}",
  // 保: "\u{200E}\u{200D}",
  // 意: "\u{200E}\u{2060}",
  // 会: "\u{200E}\u{00AD}",
  // // "?": "\u{200E}\u{FEFF}", dedicated to switching between dictionaries
  // 入: "\u{200E}\u{200E}",
  // 力: "\u{200E}\u{200B}"
};

function obfuscateV1_2(sec)
{
  // sign with version #
  var kilo = "\u{200C}\u{200E}\u{FEFF}\u{00AD}\u{200D}\u{FEFF}"; // 1.2
  var currDictionary = dictionaryV1_2root;
  for (var i = 0; i < sec.length; i++) // iterate each charcter
  {
    var itWasUpperCase = false;
    if (sec.charAt(i) == sec.charAt(i).toLowerCase())
    {
      itWasUpperCase = false;
    }
    else
    {
      itWasUpperCase = true;
    }
    if (dictionaryV1_2root[sec.charAt(i).toLowerCase()] !== undefined) // Check to see if character is in root dictionary
    {
      if ((currDictionary != dictionaryV1_2root) && (sec.charAt(i) !== ' ') && (sec.charAt(i) !== ',') && (sec.charAt(i) !== '.') && (sec.charAt(i) !== '\n') && (isNaN(sec.charAt(i))))
      {
        // insert sequence into unicode path to let deobfuscate method know to start using root dictionary.
        kilo += "\u{200E}\u{FEFF}\u{180E}\u{180E}";
        currDictionary = dictionaryV1_2root;
      }
      if (itWasUpperCase)
      {
        kilo += "\u{00AD}\u{00AD}";
      }
      kilo += dictionaryV1_2root[sec.charAt(i).toLowerCase()];
    }
    else if (dictionaryV1_2ru[sec.charAt(i).toLowerCase()] !== undefined) // Check to see if character is in Russian dictionary
    {
      if (currDictionary != dictionaryV1_2ru)
      {
        // insert sequence into unicode path to let deobfuscate method know to start using this dictionary.
        kilo += "\u{200E}\u{FEFF}\u{180E}\u{200B}";
        currDictionary = dictionaryV1_2ru;
      }
      if (itWasUpperCase)
      {
        kilo += "\u{00AD}\u{00AD}";
      }
      kilo += dictionaryV1_2ru[sec.charAt(i).toLowerCase()];
    }
    else if (dictionaryV1_2sc[sec.charAt(i).toLowerCase()] !== undefined) // Check to see if character is in this dictionary
    {

      if (currDictionary != dictionaryV1_2sc)
      {
        // insert sequence into unicode path to let deobfuscate method know to start using this dictionary.
        kilo += "\u{200E}\u{FEFF}\u{180E}\u{200C}";
        currDictionary = dictionaryV1_2sc;
      }
      if (itWasUpperCase)
      {
        kilo += "\u{00AD}\u{00AD}";
      }
      kilo += dictionaryV1_2sc[sec.charAt(i).toLowerCase()];
    }
    else if (dictionaryV1_2jaHira[sec.charAt(i).toLowerCase()] !== undefined) // Check to see if character is in this dictionary
    {
      if (currDictionary != dictionaryV1_2jaHira)
      {
        // insert sequence into unicode path to let deobfuscate method know to start using this dictionary.
        kilo += "\u{200E}\u{FEFF}\u{180E}\u{200D}";
        currDictionary = dictionaryV1_2jaHira;
      }
      if (itWasUpperCase)
      {
        kilo += "\u{00AD}\u{00AD}";
      }
      kilo += dictionaryV1_2jaHira[sec.charAt(i).toLowerCase()];
    }
    else if (dictionaryV1_2jaHira2[sec.charAt(i).toLowerCase()] !== undefined) // Check to see if character is in this dictionary
    {
      if (currDictionary != dictionaryV1_2jaHira2)
      {
        // insert sequence into unicode path to let deobfuscate method know to start using this dictionary.
        kilo += "\u{200E}\u{FEFF}\u{180E}\u{2060}";
        currDictionary = dictionaryV1_2jaHira2;
      }
      if (itWasUpperCase)
      {
        kilo += "\u{00AD}\u{00AD}";
      }
      kilo += dictionaryV1_2jaHira2[sec.charAt(i).toLowerCase()];
    }
    else if (dictionaryV1_2jaHira3[sec.charAt(i).toLowerCase()] !== undefined) // Check to see if character is in this dictionary
    {
      if (currDictionary != dictionaryV1_2jaHira3)
      {
        // insert sequence into unicode path to let deobfuscate method know to start using this dictionary.
        kilo += "\u{200E}\u{FEFF}\u{180E}\u{00AD}";
        currDictionary = dictionaryV1_2jaHira3;
      }
      if (itWasUpperCase)
      {
        kilo += "\u{00AD}\u{00AD}";
      }
      kilo += dictionaryV1_2jaHira3[sec.charAt(i).toLowerCase()];
    }
    else if (dictionaryV1_2izs[sec.charAt(i).toLowerCase()] !== undefined) // Check to see if character is in this dictionary
    {
      if (currDictionary != dictionaryV1_2izs)
      {
        // insert sequence into unicode path to let deobfuscate method know to start using this dictionary.
        kilo += "\u{200E}\u{FEFF}\u{180E}\u{FEFF}";
        currDictionary = dictionaryV1_2izs;
      }
      if (itWasUpperCase)
      {
        kilo += "\u{00AD}\u{00AD}";
      }
      kilo += dictionaryV1_2izs[sec.charAt(i).toLowerCase()];
    }
  }
  document.getElementById("kiloArea").value = kilo;
  var copyText = document.querySelector("#kiloArea");
  copyText.select();
  document.execCommand("copy");
  document.getElementById("kiloArea").value = "Copied to clipboard. Here is a copy just in case -> " + kilo + " <- \n\n• During De-obfuscation pick the correct version. \n\n• It's okay if there is extra text mixed up with it. \n\n\n\nVisit homepage to report bugs or make suggestions.";
}

function deobfuscateV1_2(text)
{
  var theKilo = "";
  var stripped = text.replace(/[^\u200B\u200C\u200D\u2060\u00AD\uFEFF\u200E\u180E]/g, "");
  stripped = stripped.substring(6, stripped.length);
  var kilo = "";
  var currDictionary = dictionaryV1_2root;
  var reverseDictionary = Object.values(dictionaryV1_2root);
  var CorresKeys = Object.keys(dictionaryV1_2root);
  for (var i = 0; i < stripped.length; i += 2)
  {
    var wasUpperCase = false;
    while (stripped.charAt(i) === "\u{180E}")
    {
      kilo += " ";
      i++;
    }
    if (stripped.substring(i, i + 4) === "\u{200E}\u{FEFF}\u{180E}\u{180E}") // Use Root Dictionary
    {
      currDictionary = dictionaryV1_2root;
      reverseDictionary = Object.values(dictionaryV1_2root);
      CorresKeys = Object.keys(dictionaryV1_2root);
      i += 4;
    }
    else if (stripped.substring(i, i + 4) === "\u{200E}\u{FEFF}\u{180E}\u{200B}") // Use Russian Dictionary
    {
      currDictionary = dictionaryV1_2ru;
      reverseDictionary = Object.values(dictionaryV1_2ru);
      CorresKeys = Object.keys(dictionaryV1_2ru);
      i += 4;
    }
    else if (stripped.substring(i, i + 4) === "\u{200E}\u{FEFF}\u{180E}\u{200C}") // Use sc Dictionary
    {
      currDictionary = dictionaryV1_2sc;
      reverseDictionary = Object.values(dictionaryV1_2sc);
      CorresKeys = Object.keys(dictionaryV1_2sc);
      i += 4;
    }
    else if (stripped.substring(i, i + 4) === "\u{200E}\u{FEFF}\u{180E}\u{200D}") // Use ja Dictionary
    {
      currDictionary = dictionaryV1_2jaHira;
      reverseDictionary = Object.values(dictionaryV1_2jaHira);
      CorresKeys = Object.keys(dictionaryV1_2jaHira);
      i += 4;
    }
    else if (stripped.substring(i, i + 4) === "\u{200E}\u{FEFF}\u{180E}\u{2060}") // Use ja2 Dictionary
    {
      currDictionary = dictionaryV1_2jaHira2;
      reverseDictionary = Object.values(dictionaryV1_2jaHira2);
      CorresKeys = Object.keys(dictionaryV1_2jaHira2);
      i += 4;
    }
    else if (stripped.substring(i, i + 4) === "\u{200E}\u{FEFF}\u{180E}\u{00AD}") // Use ja3 Dictionary
    {
      currDictionary = dictionaryV1_2jaHira3;
      reverseDictionary = Object.values(dictionaryV1_2jaHira3);
      CorresKeys = Object.keys(dictionaryV1_2jaHira3);
      i += 4;
    }
    else if (stripped.substring(i, i + 4) === "\u{200E}\u{FEFF}\u{180E}\u{FEFF}") // Use izs Dictionary
    {
      currDictionary = dictionaryV1_2izs;
      reverseDictionary = Object.values(dictionaryV1_2izs);
      CorresKeys = Object.keys(dictionaryV1_2izs);
      i += 4;
    }
    if (stripped.substring(i, i + 2) === "\u{00AD}\u{00AD}")
    {
      wasUpperCase = true;
      i += 2;
    }
    for (var k = 0; k < 48; k++)
    {
      if (stripped.substring(i, i + 2) === reverseDictionary[k])
      {
        theKilo = CorresKeys[k];
        if (wasUpperCase)
        {
          theKilo = theKilo.toUpperCase();
        }
        kilo += theKilo;
        break;
      }
    }
  }
  document.getElementById("kiloArea").value = kilo;
}
// ==============================================================================
//  end of version 1.2
// ==============================================================================
// https://soundcloud.com/crystal-castles/pino-placentile-wooden-girl
