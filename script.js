//JUNE 5, 2022 : NEXT STEPS
//How to get the Player Info div to show content from the LogName function, not just the Total Wins?
//Put a "Previous Season" on the bottom left and "Next Season" on the bottom right of the left-side inforgraphic that toggles to that season?
//Set up the right-side info box the same way as the left, with the dynamic inner-HTML or inner-image just replacing the previous?
//Is there a way to highlight the entire row if you input a year? Like all three boxes

var yankeesHistory = ['1996', 'Won World Series', '1997', 'Lost ALDS', '1998', 'Won World Series', '1999', 'Won World Series', '2000:', 'Won World Series',
'2001', 'Lost World Series', '2002', 'Lost ALDS', '2003:', 'Missed Playoffs*', '2004:', 'Lost ALCS'];

var userName = document.getElementById("name").value;
var yanksYearRecord = document.querySelectorAll(`[id^="yearrecord"]`);
// var playerInfoBox = document.getElementById("playerinfo");
// playerInfoBox.innerHTML = "Yoyoyo"
// console.log(playerInfoBox);

//Cut and pasted from Internet, turns table data into an array
const table = document.querySelectorAll('table')[3]
const arr = [...table.rows].map(r => [...r.querySelectorAll('td, th')].map(td => td.textContent))
console.log(arr)
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i][1]);
//   let yanksWinsLosses = arr[i][1].split("-");
//   console.log(yanksWinsLosses[0])
//   // const yankswins100 = yanksWinsLosses.filter((number) => number >= 100);
//   }
var yanksArray = [];
var wins100 = [];

function yanksWins() {
  arr.forEach((n) => {
    let record = n[1];
    let yanksWinsLosses = record.split("-");
    console.log(yanksWinsLosses)
    yanksArray.push(yanksWinsLosses[0]);
    if (yanksWinsLosses[0] >= 99) {
      console.log("Yoyo")
      wins100.push(yanksWinsLosses[0]);
      console.log(wins100);
    }
  });
  yanksArray.shift();
  console.log(yanksArray);
}
yanksWins();

// function over100() {
//   if (userName === "100 or more") {
//     document.getElementById("playerinfo").innerHTML = wins100.length
//     console.log(document.getElementById("playerinfo").innerHTML)
//     console.log("HIIIHIHIHIHI")
//   }
// }
// over100();

function winningRecord() {
  //Checks if the team had at least 81 wins
  const winsover81 = (wins) => wins >= 81;
  console.log(yanksArray.every(winsover81));
}
winningRecord();

function logName() {
  var userName = document.getElementById("name").value;
  console.log(userName);

  for (i = 0; i < yanksYearRecord.length; i++) {
    let yanksWinsLosses = yanksArray[i].split("-");
    const yankswins100 = yanksWinsLosses.filter((number) => number >= 100);
    console.log(yankswins100);
    // wins100.push(yankswins100);
    // console.log(wins100[0]);
    console.log(yanksWinsLosses[0]);
    if (userName === yanksYearRecord[i].innerHTML || userName === yanksWinsLosses[0]) {
      yanksYearRecord[i].style.backgroundColor = 'black';
      yanksYearRecord[i].style.color = 'white';
    }
    if (userName === "100+") {
      if (yanksWinsLosses[0] > 99) {
        yanksYearRecord[i].style.backgroundColor = 'black';
        yanksYearRecord[i].style.color = 'white';
        //FYI this says 3, not 4 (because one record has two instances, 101 wins)
        console.log(yanksWinsLosses[0].length);
      } else {
        //This works as a "clear" function where if a user highlighted other records, this clears those and only highlights 100+ win seasons
        yanksYearRecord[i].style.backgroundColor = 'inherit';
        yanksYearRecord[i].style.color = 'inherit';
      }
    }
    if (userName === "90+") {
      if (yanksWinsLosses[0] > 90) {
        yanksYearRecord[i].style.backgroundColor = 'black';
        yanksYearRecord[i].style.color = 'white';
      } else {
        yanksYearRecord[i].style.backgroundColor = 'inherit';
      }
    }
    if (userName === "Winning record" || userName === "winning record" || userName === "winning season" || userName === "82+") {
      if (yanksWinsLosses[0] > 81) {
        yanksYearRecord[i].style.backgroundColor = 'black';
        yanksYearRecord[i].style.color = 'white';
        console.log("Hey" + yanksYearRecord.length)
        // yanksYearRecord[i].style.backgroundColor = '#C10AC0';
      } else {
        yanksYearRecord[i].style.backgroundColor = 'inherit';
      }
    }
  }
}

function resetForm() {
  var formData = document.getElementById("name");
  console.log("Hi!");
  formData.value = '';
}

function displayName() {
  console.log("Testing");
  var userName = document.getElementById("name").value;

  if (userName.length >= 1) {
  document.getElementById("playerinfo").innerHTML = ""
  }
}

function yankeeResult() {
  console.log("Testing");
  var userName = document.getElementById("name").value;
  //Sets up a string with the ability to replace with a bold-face or Italics element, etc.
  var yanks100str = "There have been" + " " + wins100.length + " " + "100-win seasons for the Yankees since 1996"
  var substr = wins100.length;
  yanks100str.replace(substr, '<b>' + substr + '</b>');

  //Why does this block of code execute in this function, but not in the others like LogName or TotalWins?
  if (userName === "100+") {
    console.log("Plus 100");
    document.getElementById("playerinfo").innerHTML = yanks100str.replace(substr, '<b>' + substr + '</b>');
  }
  const wsbox = document.querySelectorAll(`[id^="wonworldseries"]`);
  console.log(wsbox.length);
  var yankswsstring = "The Yankees have won" + " " + wsbox.length + " " + "World Series titles since 1996";
  var substrws = wsbox.length;
  yankswsstring.replace(substrws, '<b>' + substrws + '</b>');

  if (userName === "Won World Series" || userName === "won world series" || userName === "WON WORLD SERIES") {
    // This works unlike the one in LogName
    // document.getElementById("playerinfo").innerHTML = "The result was: " + yankeesHistory[1] + "!";
    document.getElementById("playerinfo").innerHTML = yankswsstring.replace(substrws, '<b>' + substrws + '</b>');
    for (i = 0; i < wsbox.length; i++) {
      wsbox[i].style.backgroundColor = 'gold';
      wsbox.forEach(element => {
        console.log(element.textContent);
      });
    }
  } else if (userName === "ALCS" || userName === "alcs") {
    const alcsbox = document.querySelectorAll(`[id^="alcs"]`);
    for (i = 0; i < alcsbox.length; i++) {
      alcsbox[i].style.backgroundColor = '#4A84B0';
      alcsbox.forEach(element => {
        console.log(element.textContent);
        });
      }
    } else if (userName === "Lost World Series" || userName === "lost world series" || userName === "LOST WORLD SERIES") {
      const lostwsbox = document.querySelectorAll(`[id^="ws"]`);
      for (i = 0; i < lostwsbox.length; i++) {
        lostwsbox[i].style.backgroundColor = 'green';
        lostwsbox.forEach(element => {
          console.log(element.textContent);
        });
      }
  } else if (userName === "1996") {
    document.getElementById("wonworldseries96").style.backgroundColor = 'gold';
    var playerInfoBox = document.getElementById("playerinfo");
  } else if (userName === "1997") {
    document.getElementById("alds97").style.backgroundColor = 'red';
  } else if (userName === "1998") {
    document.getElementById("wonworldseries98").style.backgroundColor = 'gold';
  } else if (userName === "1999") {
    document.getElementById("wonworldseries99").style.backgroundColor = 'gold';
  } else if (userName === "2000") {
    document.getElementById("wonworldseries00").style.backgroundColor = 'gold';
  } else if (userName === "2001") {
    document.getElementById("ws01").style.backgroundColor = 'green';
  } else if (userName === "2002") {
    document.getElementById("alds02").style.backgroundColor = 'red';
  } else if (userName === "ALDS" || userName === "alds" || userName === "Lost ALDS" || userName === "lost alds") {
    const aldsbox = document.querySelectorAll(`[id^="alds"]`);
    for (i = 0; i < aldsbox.length; i++) {
      aldsbox[i].style.backgroundColor = 'red';
      aldsbox.forEach(element => {
        console.log(element.textContent);
      });
    }
    console.log(aldsbox);
  } else if (userName === "2003") {
    var ws03 = document.getElementById("ws03");
    ws03.style.backgroundColor = 'green';
  } else if (userName === "2004") {
    var alcs04 = document.getElementById("alcs04");
    alcs04.style.backgroundColor = '#4A84B0';
  } else if (userName === "2005") {
    var alds05 = document.getElementById("alds05");
    alds05.style.backgroundColor = 'red';
  } else if (userName === "2006") {
    var alds06 = document.getElementById("alds06");
    alds06.style.backgroundColor = 'red';
  } else if (userName === "2007") {
    var alds06 = document.getElementById("alds07");
    alds07.style.backgroundColor = 'red';
  } else if (userName === "2008" || userName === "Missed" || userName === "MISSED" || userName === "missed") {
    document.getElementById("missed").style.backgroundColor = 'black';
    document.getElementById("missed").style.textDecoration = 'line-through';
    document.getElementById("missed").style.color = 'white';
  } else if (userName === "2009") {
    document.getElementById("wonworldseries09").style.backgroundColor = 'gold';
  } else if (userName === "Highlight all" || userName === "highlight all" || userName === "Highlight All" || userName === "Show all") {
    var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
    for (i = 0; i < yanksWsProperties.length; i++) {
      yanksWsProperties[i].style.backgroundColor = 'gold';
    }
    var yanksLostWsProperties = document.querySelectorAll(`[id^="ws"]`);
    for (i = 0; i < yanksLostWsProperties.length; i++) {
      yanksLostWsProperties[i].style.backgroundColor = 'green';
    }
    var yanksAldsProperties = document.querySelectorAll(`[id^="alds"]`);
    for (i = 0; i < yanksAldsProperties.length; i++) {
      yanksAldsProperties[i].style.backgroundColor = 'red';
    }
    var yanksAlcsProperties = document.querySelectorAll(`[id^="alcs"]`);
    for (i = 0; i < yanksAlcsProperties.length; i++) {
      yanksAlcsProperties[i].style.backgroundColor = '#4A84B0';
    }
    var yanksMissedProperties = document.querySelectorAll(`[id^="missed"]`);
    for (i = 0; i < yanksMissedProperties.length; i++) {
      yanksMissedProperties[i].style.backgroundColor = 'black';
      yanksMissedProperties[i].style.textDecoration = 'line-through';
      yanksMissedProperties[i].style.color = 'white';
    }
  }
}

//WILL THIS FUNCTION WORK IF IT IS PULLING "Won World Series" from an array? Seems kind of useless right now
  function yankeeColors() {
    var results = document.getElementById("wonworldseries96").innerHTML;
    console.log(results);
    if (results === 'Won World Series') {
      results = results.toUpperCase();
      console.log(results);
    }
  }
  yankeeColors();

//NEXT UP (6/5): How do I get it to toggle without hiding between 1996 and 1999 when they have the same div?
function hideGraphic() {
  var hidden = document.getElementById("infographic1");
  var hidden2 = document.getElementById("infographic2");
  var hidden3 = document.getElementById("infographic3");
  var innerhidden = document.getElementById("infographicinner1");
  var yankeesubhead1 = document.getElementById("yankeesubhead1")
  var yankeesubhead2 = document.getElementById("yankeesubhead2")
  var yankeesubhead3 = document.getElementById("yankeesubhead3")
  innerhidden.innerHTML = "In 1996, the Yankees won the first of four World Series titles in a five-year span by defeating the Atlanta Braves in six games."
  yankeesubhead1.innerHTML = "Joe Torre (1st yr.)"
  yankeesubhead2.innerHTML = "Tino Martinez (44)"
  yankeesubhead3.innerHTML = "Andy Pettitte (18)"
  console.log("^^^^" + hidden.style.visibility);
  console.log(hidden);
  if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
      hidden.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  } else {
      hidden.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  }
  // Would I just write something that says "If Year 1 is visible and user clicks on Year 4, hide Year 1 and show Year 4?"
  // if (hidden.style.visibility === "visible") {
  // }
}

// function toggleGraphic1() {
//   var hidden = document.getElementById("infographic1");
//   var innerhidden = document.getElementById("infographicinner1");
//   if (innerhidden.innerHTML = "In 1996, the Yankees won the first of four World Series titles in a five-year span by defeating the Atlanta Braves in six games.") {
//     console.log("CELTICS")
//     hidden.style.visibility === "visible"
//     innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since."
//     }
// }

function hideGraphic2() {
  var hidden2 = document.getElementById("infographic2")
  var hidden = document.getElementById("infographic1");
  var hidden3 = document.getElementById("infographic3");
  console.log(hidden2);
  if (hidden2.style.visibility === "hidden" || hidden2.style.visibility === "") {
      hidden2.style.visibility = "visible";
      hidden.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  } else {
      hidden2.style.visibility = "hidden";
      hidden.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  }
}

function hideGraphic3() {
  var hidden3 = document.getElementById("infographic3");
  var hidden2 = document.getElementById("infographic2");
  var hidden = document.getElementById("infographic1");
  console.log(hidden3);
  if (hidden3.style.visibility === "hidden" || hidden3.style.visibility === "") {
      hidden3.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden.style.visibility = "hidden";
  } else {
      hidden3.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden.style.visibility = "hidden";
  }
}

function hideGraphic4() {
  console.log("hideGraphic4)")
  var hidden = document.getElementById("infographic1");
  var innerhidden = document.getElementById("infographicinner1");
  innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since."
  var yankeesubhead1 = document.getElementById("yankeesubhead1")
  var yankeesubhead2 = document.getElementById("yankeesubhead2")
  var yankeesubhead3 = document.getElementById("yankeesubhead3")
  yankeesubhead1.innerHTML = "Joe Torre (4th yr.)"
  yankeesubhead2.innerHTML = "Tino Martinez (28)"
  yankeesubhead3.innerHTML = "Orlando Hernandez (17)"

  var hidden2 = document.getElementById("infographic2");
  var hidden3 = document.getElementById("infographic3");

  if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
      hidden.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  } else {
      hidden.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  }
}

document.getElementById("year4").addEventListener("click", hideGraphic4);

function hideGraphic5() {
    var hidden3 = document.getElementById("infographic3");
    var hidden2 = document.getElementById("infographic2");
    var hidden = document.getElementById("infographic1");
    var yankeesubhead1 = document.getElementById("yankeesubhead1")
    var yankeesubhead2 = document.getElementById("yankeesubhead2")
    var yankeesubhead3 = document.getElementById("yankeesubhead3")
    console.log("NUMBER FIVE")
    var innerhidden = document.getElementById("infographicinner1");
    if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
        hidden.style.visibility = "visible";
        hidden2.style.visibility = "hidden";
        hidden3.style.visibility = "hidden";
        innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship."
        yankeesubhead1.innerHTML = "Joe Torre (5th yr.)"
        yankeesubhead2.innerHTML = "Bernie Williams (30)"
        yankeesubhead3.innerHTML = "Andy Pettitte (19)"
    } else {
        hidden.style.visibility = "hidden";
        hidden2.style.visibility = "hidden";
        hidden3.style.visibility = "hidden";
        // innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years, and 26th overall championship."
    }
  }

function hideGraphic6() {
    var hidden3 = document.getElementById("infographic3");
    var hidden2 = document.getElementById("infographic2");
    var hidden = document.getElementById("infographic1");
    var yankeesubhead1 = document.getElementById("yankeesubhead1")
    var yankeesubhead2 = document.getElementById("yankeesubhead2")
    var yankeesubhead3 = document.getElementById("yankeesubhead3")
    console.log("NUMBER SIX")
    var innerhidden = document.getElementById("infographicinner1");
    innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks."
    if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
      hidden.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
    } else {
      hidden.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
    }
}

function prevYear() {
  var innerhidden = document.getElementById("infographicinner1");
  if (innerhidden.innerHTML = innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship.") {
    innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since."
  } else if (innerhidden.innerHTML = innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks.") {
    innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship."
  }
}

function nextYear() {
  var innerhidden = document.getElementById("infographicinner1");
  if (innerhidden.innerHTML = innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship.") {
    innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks."
  }
}


function hideWsLogo() {
  var hidden96 = document.getElementById("worldseriesgraphic");
  var hidden97 = document.getElementById("dsgraphic97");
  var hidden98 = document.getElementById("wsgraphic98")
  console.log("^^^^" + hidden96.style.visibility);
  console.log(hidden96);
  if (hidden96.style.visibility === "hidden" || hidden96.style.visibility === "") {
      hidden96.style.visibility = "visible";
      hidden97.style.visibility = "hidden";
      hidden98.style.visibility = "hidden";
  } else {
      hidden96.style.visibility = "hidden";
      hidden97.style.visibility = "hidden";
      hidden98.style.visibility = "hidden";
  }
}

function hideWsLogo2() {
  var hidden97 = document.getElementById("dsgraphic97")
  var hidden96 = document.getElementById("worldseriesgraphic");
  var hidden98 = document.getElementById("wsgraphic98")
  console.log(hidden97);
  if (hidden97.style.visibility === "hidden" || hidden97.style.visibility === "") {
      hidden97.style.visibility = "visible";
      hidden96.style.visibility = "hidden";
      hidden98.style.visibility = "hidden";
  } else {
      hidden98.style.visibility = "hidden";
      hidden97.style.visibility = "hidden";
      hidden96.style.visibility = "hidden";
  }
}

function hideWsLogo3() {
  var hidden98 = document.getElementById("wsgraphic98");
  var hidden97 = document.getElementById("dsgraphic97");
  var hidden96 = document.getElementById("worldseriesgraphic");
  console.log(hidden97);
  if (hidden98.style.visibility === "hidden" || hidden98.style.visibility === "") {
      hidden98.style.visibility = "visible";
      hidden97.style.visibility = "hidden";
      hidden96.style.visibility = "hidden";
  } else {
      hidden98.style.visibility = "hidden";
      hidden97.style.visibility = "hidden";
      hidden96.style.visibility = "hidden";
  }
}

    document.getElementById("wonworldseries96").addEventListener("click", hideWsLogo);
    document.getElementById("alds97").addEventListener("click", hideWsLogo2);
    document.getElementById("wonworldseries98").addEventListener("click", hideWsLogo3);

function resetProperties() {
  console.log("Reset Properties");
  var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
  for (i = 0; i < yanksWsProperties.length; i++) {
    yanksWsProperties[i].style.backgroundColor = 'inherit';
    yanksWsProperties[i].style.textDecoration = '#none';
    yanksWsProperties[i].style.color = 'black';
    yanksWsProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksLostWsProperties = document.querySelectorAll(`[id^="ws"]`);
  for (i = 0; i < yanksLostWsProperties.length; i++) {
    yanksLostWsProperties[i].style.backgroundColor = 'inherit';
    yanksLostWsProperties[i].style.textDecoration = '#none';
    yanksLostWsProperties[i].style.color = 'black';
    yanksLostWsProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksMissedProperties = document.querySelectorAll(`[id^="missed"]`);
  for (i = 0; i < yanksMissedProperties.length; i++) {
    yanksMissedProperties[i].style.backgroundColor = 'inherit';
    yanksMissedProperties[i].style.textDecoration = 'none';
    yanksMissedProperties[i].style.color = 'black';
    yanksMissedProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksAldsProperties = document.querySelectorAll(`[id^="alds"]`);
  for (i = 0; i < yanksAldsProperties.length; i++) {
    yanksAldsProperties[i].style.backgroundColor = 'inherit';
    yanksAldsProperties[i].style.textDecoration = 'none';
    yanksAldsProperties[i].style.color = 'black';
    yanksAldsProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksAlcsProperties = document.querySelectorAll(`[id^="alcs"]`);
  for (i = 0; i < yanksAlcsProperties.length; i++) {
    yanksAlcsProperties[i].style.backgroundColor = 'inherit';
    yanksAlcsProperties[i].style.textDecoration = 'none';
    yanksAlcsProperties[i].style.color = 'black';
    yanksAlcsProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksRecordProperties = document.querySelectorAll(`[id^="yearrecord"]`);
  for (i = 0; i < yanksRecordProperties.length; i++) {
    yanksRecordProperties[i].style.backgroundColor = 'inherit';
    yanksRecordProperties[i].style.textDecoration = 'none';
    yanksRecordProperties[i].style.color = 'black';
    yanksRecordProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
}

//HAMBURGER MENU CODE PASTED FROM INTERNET
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

function showMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// function totalWins() {
//   var userName = document.getElementById("name").value;
//   if (userName === "100+") {
//     document.getElementById("playerinfo").innerHTML = "100+"
//   }
//   for (i = 0; i < yanksYearRecord.length; i++) {
//     let yanksWinsLosses = yanksArray[i].split("-")
//     console.log(yanksWinsLosses[0]);
//     if (userName === yanksYearRecord[i].innerHTML || userName === yanksWinsLosses[0]) {
//       yanksYearRecord[i].style.backgroundColor = 'black';
//       yanksYearRecord[i].style.color = 'white';
//       document.getElementById("playerinfo").innerHTML = userName;
//       // document.getElementById("playerinfo").innerHTML = yanksWinsLosses[0] + "Hi!"
//     }
//   }
// }
// totalWins();

addEventListener("click", logName);
addEventListener("click", displayName);
addEventListener("click", yankeeResult);
addEventListener("onload", yankeeColors);
// addEventListener("click", totalWins);
addEventListener("onload", yanksWins);
// addEventListener("onload", over100);
document.getElementById("year1").addEventListener("click", hideGraphic);
document.getElementById("year2").addEventListener("click", hideGraphic2);
document.getElementById("year3").addEventListener("click", hideGraphic3);
