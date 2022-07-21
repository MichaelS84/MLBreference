//CODE DUMP AND POTENTIAL FUNCTIONS


// addEventListener("onload", yankeeColors);
// addEventListener("click", hideYear);

// //Need to figure out how to get it to hide on button click, not general click
//   function hideYear() {
//     var hidden = document.getElementById("year1")
//     //Hides button in DIV above on click
//     if (hidden.style.display === "none") {
//         hidden.style.display = "inline-block";
//     } else {
//         hidden.style.display = "none";
//     }
//   }

//This code works as far as pulling a piece of a div ID and using all instances
// var aldsbox = document.querySelectorAll(`[id^="alds"]`);
// console.log(aldsbox);
// aldsbox[0].style.backgroundColor = 'red';


  // $(document).ready(function() {
  //       $('#year1').hide();
  //       $('#inforgraphic1').hover( function() { $('#year1').toggle(); } );
  // });


  //   var yearWon = document.getElementById("infographic1").innerHTML;
  //   var ws96 = document.getElementById("year1");
  //   // yearWon.addEventListener("mouseover");
  //   yearWon.addEventListener("mouseover") = function () {
  //     yearWon.style.color = "purple";
  // }

// function yankeeGraphics() {
//     const yearWon = document.getElementById("infographic1");
//     console.log(yearWon);
//     yearWon.addEventListener("mouseover", function yankeeGraphic() {
//       console.log("Hello");
//     });
//   }
// REMOVED FROM WHERE WE USED TO HAVE A "HELLO USERNAME!" DIV
// else if (userName.length >= 1) {
//   document.getElementById("playerinfo").innerHTML = "Hello" + " " + userName + "!" + "<br>"
// }

//HOW TO DO A FOR EACH STATEMENT IN A FOR LOOP

// yanksYearRecord.forEach(element => {
  // console.log(yanksYearRecord[i].innerHTML);
  // console.log("Hi" + " " + userName)

//END

  // console.log(yanksYearRecord[4].innerHTML);

  // var yanksYearRecord = document.querySelectorAll(`[id^="yearrecord"]`).innerHTML;
  // var yanksYearRecord = document.getElementById("yearrecord").innerHTML;
  // console.log(yanksYearRecord[i])

//Next up: Make it so the "Hello" appears on its own and not related to a click

//Under the If Else Statements for UserNames equaling certain years

// document.getElementById("playerinfo").innerHTML = "The result was: " + yankeesHistory[1] + "!";

//GOT IT! I wanted to see if I could get multiple table boxes to color in based on user input
// document.getElementById("playerinfo").innerHTML = "The years the Yankees lost in the ALDS were: " + yankeesHistory[2] + "," + " " + yankeesHistory[12] + "!";

// function yankeesRecord() {

  // for (i = 0; i < yanksYearRecord.length; i++) {
  //   // console.log(yanksYearRecord[i]);
  //   console.log(yanksYearRecord[i);
  //   yanksYearRecord.forEach(element => {
  //     console.log(yanksYearRecord[0]);
  //     console.log(element.textContent);
  //   });
  // };
// if (yanksYearRecord[0].innerHTML === userName) {
//   console.log("Cool beans");
//     }
// }
// yankeesRecord();
//     console.log("Hi!");
//     var yanksYearRecord = document.querySelectorAll(`[id^="yearrecord"]`);
//     for (i = 0; i < yanksYearRecord.length; i++) {
//       // console.log(yanksYearRecord[i]);
//       console.log(yanksYearRecord[0].innerHTML);
//       // yanksYearRecord.forEach(element => {
//       //   console.log(yanksYearRecord[0]);
//         // console.log(element.textContent);
//       };
//     // };
//   // if (yanksYearRecord[0].innerHTML === '92-70') {
//   //   console.log("Cool beans");
//   // }
// }
//   // }
//   yankeesRecord();

// function yanksWsLogo() {
//   console.log("Hi");
//   var logo = document.getElementById("wsgraphic96");
//   if
// }

//This block executes a toggle, if #2 is first, it toggles on 1996, and vice versa
// addEventListener("onload", yankeeGraphic, yankeeGraphic2)
// addEventListener("click", hideGraphic2, hideGraphic);

//Why does this block only execute within another function, but not on its own?
//Also, how do I make it so if someone clicks a different year when the first one is up, the other one automatically disappears? Is this a function fired onload?
//Lastly, why does this not fire on the first round but works every time after? I.e. click twice, nothing, then it works?
// document.getElementById("year1").addEventListener("click", hideGraphic);
// document.getElementById("year2").addEventListener("click", hideGraphic2);
// function hideGraphic() {
//   var hidden = document.getElementById("infographic1");
//   hidden.style.opacity = "0.2";
// }

// let winsArray = arr[1][1]
// const over100 = winsArray.filter(over100wins);
//
// function over100wins() {
//   return record >= 100;
// }
// over100wins();

// let return100 = (arr, num) => arr.filter(n => n > num);
//
// console.log(return100);

// const wins100 = (value, index, self) => {
//   return self.indexOf(value) === index
//   var winsover100 = (plus100) => {
//     winsArray.filter(plus100)
//     return winsover100.value > 99
//   }
//   var winsover100 = winsArray.filter(winsArray)
// }
// console.log(winsArray);

// const yanksWins = arr[1].filter(wins => {
//   return wins.length > 1;
// });
// console.log(yanksWins)
// console.log(arr[1][1])
// var yanks100 = []
// var yanksWins = arr.push(yanks100);
// // console.log(arr[1][i]);
// console.log(yanksWins);

//   if (yanksArray.includes('114-48')) {
//   console.log("True story yo");
//   }
// }

//if (userName === "100+" || userName === "100 or more") {
//   console.log(yankswins100);
//   for (i = 0; i < yankswins100.length; i++) {
//     if (yankswins100[i] === yanksYearRecord[i].innerHTML) {
//       console.log("Sup");
//     }
//   }
// }



  // for (i = 0; i < yanksYearRecord.length; i++) {
  //   if (userName = "100+") {
  //     wins100[0].style.backgroundColor = 'red';
  //   }
  // }
  // for (i = 0; i < yanksYearRecord.length; i++) {
  //   if (userName === yanksYearRecord[i].innerHTML) {
  //     console.log("Hi " + userName)
  //     console.log("Cool beans");
  //     yanksYearRecord[i].style.backgroundColor = '#C10AC0';
  //   }

  // if (userName === "100+") {
  //     wins100[0]
  // }

  // if (userName === "100+") {
  //   //Console logs the three 100+ seasons, but it's a full loop!!!
  //   console.log(yankswins100);
  // }

  // function centuryWins() {
  //   const yankswins100 = yanksArray.filter((number) => number >= 100);
  //   wins100.push(yankswins100);
  //   console.log(wins100[0]);
  // }
  // centuryWins();

  YANKS WINS FUNCTION CODE - LINE 27
  //Iterates through the table data that has been converted into an array
  for (i = 0; i < arr.length; i++) {
    //Will console log all records from the table
      const winsArray = arr[i][1]
      // console.log(winsArray);
      yanksArray.push(winsArray);
      let yanksWinsLosses = yanksArray[i].split("-");
      // console.log(yanksWinsLosses)
      wins100.push(yanksWinsLosses);
      console.log(wins100[i][0]);
    }
    yanksArray.shift();
    console.log(yanksArray);
    //   let yanksWinsLosses = yanksArray[i].split("-");
    // for (i = 0; i < yanksYearRecord.length; i++) {
    //   let yanksWinsLosses = yanksArray[i].split("-");
    //   const yankswins100 = yanksWinsLosses.filter((number) => number >= 100);
    //   console.log(yankswins100);
    //   wins100.push(yankswins100);
    //   console.log(wins100);
    //   console.log(yanksWinsLosses[0]);
    // }


    function prevYear() {
      var innerhidden = document.getElementById("infographicinner1");
      if (innerhidden.innerHTML = innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since.") {
        innerhidden.innerHTML = "In 1998, the Yankees won an AL-record 114 games en route to their second championship in three years, as they swept the San Diego Padres in four games in the World Series."
        console.log(innerhidden.innerHTML);
      } if (innerhidden.innerHTML = innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship.") {
        innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since."
      } if (innerhidden.innerHTML = innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks.") {
        innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship."
      } if (innerhidden.innerHTML = innerhidden.innerHTML = "In 2002, the Yankees failed to reach the ALCS for the first time in five seasons, losing in five games to the eventual-champion Angels.") {
        innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks."
      }
    }

    function nextYear() {
      var innerhidden = document.getElementById("infographicinner1");
      if (innerhidden.innerHTML = innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship.") {
        innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks."
      } if (innerhidden.innerHTML = innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since.") {
        innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship."
      } if (innerhidden.innerHTML = innerhidden.innerHTML = "In 1998, the Yankees won an AL-record 114 games en route to their second championship in three years, as they swept the San Diego Padres in four games in the World Series.") {
        innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since."
      } if (innerhidden.innerHTML = innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks.") {
        innerhidden.innerHTML = "In 2002, the Yankees failed to reach the ALCS for the first time in five seasons, losing in five games to the eventual-champion Angels."
      }
    }


    function highlightYear() {
      var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
      var yanksYears = document.querySelectorAll(`[id^="year1"]`);
      var yanksYearsAll = document.querySelectorAll(`[id^="year"]`);
      for (i = 0; i < yanksYears.length; i++) {
      console.log(yanksYears[i].innerHTML);
      }
      // var yanksWsYears = document.querySelectorAll(arr)
      // console.log(yanksWsYears)
      for (i = 0; i < arr.length; i++) {
        if (arr[i].includes("Won World Series")) {
          yanksYears === arr[i][0]
          console.log("SUPPPPPP");
          console.log(arr[i])
          console.log(arr[i][0]);
          console.log(arr[i][1]);
            if (arr[i][1] === ){

            }
          //THERE HAS TO BE SOMETHING HERE THAT MAKES THIS WORK!
        }
      }
      console.log(yanksWsProperties);
      for (i = 0; i < arr.length; i++) {
        // yanksOverallRecord.push(arr[i]);
        // console.log(yanksOverallRecord);
        // yanksOverallRecord.push(arr[i][0]);
        // yanksOverallRecord.push(arr[i][2]);
      }
      for (i = 0; i < yanksWsProperties.length; i++) {
        // if (userName === "Won the World Series") {
          console.log(yanksWsProperties[i]);
          // yanksWsProperties[i] === arr[i][0];
          // console.log(yanksWsProperties[i])
          // console.log(yanksWsProperties[i])
          // yanksWsProperties[i].style.backgroundColor = 'pink';
        // }
      }
      for (i = 0; i < yanksYears.length; i++) {
        console.log(yanksYears[i]);
      }
      // if (arr[1])
      // yanksOverallRecord.splice(0,29);
      // console.log(yanksOverallRecord);
      // // console.log(arr[i]);
      // for (i = 0; i < yanksOverallRecord.length; i++) {
      //   console.log(yanksOverallRecord[i]);
      //   if (userName === "Won a WS") {
      //     console.log("These were the times that the Yankees:" + " " + yanksOverallRecord[i][2]);
      //     // if (yanksOverallRecord[i][2].contains("Won World Series")) {
      //       console.log(yanksOverallRecord[i][0]);
      //       // }
      //     // if (yanksOverallRecord[i][2] === ""
      //     }
        // }
      }
    // }
    highlightYear();

    // var yankeesHistory = ['1996', 'Won World Series', '1997', 'Lost ALDS', '1998', 'Won World Series', '1999', 'Won World Series', '2000:', 'Won World Series',
    // '2001', 'Lost World Series', '2002', 'Lost ALDS', '2003:', 'Missed Playoffs*', '2004:', 'Lost ALCS'];

    // Would I just write something that says "If Year 1 is visible and user clicks on Year 4, hide Year 1 and show Year 4?"
    // if (hidden.style.visibility === "visible") {
    // }

    // function toggleGraphic1() {
    //   var hidden = document.getElementById("infographic1");
    //   var innerhidden = document.getElementById("infographicinner1");
    //   if (innerhidden.innerHTML = "In 1996, the Yankees won the first of four World Series titles in a five-year span by defeating the Atlanta Braves in six games.") {
    //     console.log("CELTICS")
    //     hidden.style.visibility === "visible"
    //     innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since."
    //     }
    // }

// MAGIC EIGHT BALL CODE DUMP
//
//
// <!--CODE DUMP - NOT IMPORTANT-->
//
// <!-- //Do another Div - it's invisible, do it with CSS. Div class results, e.g. Put everything in there - eight ball, answers, etc.
// In LogName, every time you do document.write, set value of div with JS (or jQuery). Set values, set div to be answer. Make
// it all visible. Then ask if they want to ask another question, that can be in the div. Button to ask another question, link back
// to original page to ask another question and save the username, perhaps? Create another function to make it invisible again, a variable
// that starts at 0 any every time function gets called increment variable by 1.
//
// Next up - can I fire two functions on one click? I.e. show all the data while also hiding the button?
// Can I make the text within the eight ball triangle float around? For that matter how can I move the text a little more? -->
//
//
// 			<!-- // if (userName.length > 0 && userQuestion.length > 0) {
// 			// 	document.write("Your userName is: " + userName + "<br/>")
// 			// 	document.write(randomNumber(eightBallResponses) + "<br/>")
// 			// 	document.write("Your question is: " + userQuestion.value)
// 			// } else {
// 			// 	document.write("You need to enter both a user name and a question to play this game")
// 			// }
//
// 			// 	var up = document.getElementById("playername");
// 			// 	var down = document.getElementById("playerquestion")
// 			// 	up.innerHTML = "click to copy"
// 			//
// 			// 	function copyStuff() {
// 			// 		$(.playerquestion).clone().appendTo('playername');
// 			// 		down.innerHTML = "Copied"
// 			// }
//
// 		// function logQuestion(userQuestion) {
// 		// 		// var userQuestion = document.getElementById("question");
// 		// 		var allQuestions = yourQuestions.push(document.getElementById("question").value);
// 		// 		console.log(yourQuestions)
// 		// }
// 		// logQuestion()
//
// 		// function showEightBall() {
// 		//   var x = document.getElementById("myDIV");
// 		//   if (x.style.display === "none") {
// 		//     x.style.display = "block";
// 		//   } else {
// 		//     x.style.display = "none";
// 		//   }
// 		// }
//
//
// 		<! <script language='jQuery'>
// 		$('.testclick').click(function() {
// 	      $('.playerquestion').css("opacity", "0.5");
// 	  });
// 		</script> -->
//
//
//
//
//
// 		<!-- // document.write(userName.value + "<br/>")
//
//
//
// 		// function logQuestion(userQuestion) {
// 		// 	var userQuestion = document.getElementById("newquestion").value;
// 		// 	console.log(userQuestion);
// 		//
// 		// 	if (userQuestion.length > 0) {
// 		// 		document.write(userQuestion + "<br/>")
// 		// 		// document.write(randomNumber(eightBallResponses) + "<br/>")
// 		// 	} else {
// 		// 		document.write("Please enter a question")
// 		// 	}
// 		// }
//
// 		// newquestion.addEventListener("click", logQuestion);
// 		// for (i = 0; i < eightBallResponses.length; i++) {
// 		// document.write(eightBallResponses[i] + "<br/>")
//
// 		// document.write(randomNumber(eightBallResponses)) -->
//
// 		<!-- <div class="bracketarea">
//         	<a href="https://en.wikipedia.org/wiki/2012_Major_League_Baseball_season#Postseason" target="_blank"> -->
//
// 				<!-- <img class="bracket2016" src="2012bracket.png" height=570 width=850></a> -->
//         <!-- </div> <p>But first check out the 2012 MLB Postseason!</p></a> -->
//
// 				<!-- // var eightBallResponses = ["Don't count on it", "Odds are against it", "The dude thinks so", "All signs point to yes"]
// 				//
// 				// console.log(eightBallResponses);
// 				//
// 				//
// 				// function randomNumber(eightBallResponses) {
// 				//     return eightBallResponses[Math.floor(Math.random()*eightBallResponses.length)]
// 				// 	// for (i = 0; i < eightBallResponses.length; i++) {
// 				// 	// 	document.write(eightBallResponses[i] + "<br/>")
// 				// 	// }
// 				// }
// 				//
// 				// console.log(randomNumber(eightBallResponses));
// 				//
// 				//
// 				// newpuzzle.addEventListener("click", logName);
// 				//
// 				// function logName() {
// 				//     var userName = document.getElementById("firstname");
// 				//     console.log(userName.value);
// 				// }
// 				// newpuzzle.addEventListener("click", logName);
//
//
// 				// function logName() {
// 				//     var userName = document.getElementById("firstname");
// 				//     console.log(userName.value);
// 				// 	document.write(userName.value + "<br/>");
// 				// } -->
//
// 				<!-- onclick="hideButton() -->
//
//
// 				<!-- <div id="playername">
// 				<form>
// 				  <label for="firstname">First name:</label><br>
// 				  <input type="text" id="firstname" name="firstname"><br>
// 				  <input type="submit" value="SUBMIT">
// 				</form>
// 				</div> -->
//
// 				<!-- <div>
// 					<button id="newquestion" class="buttons">ENTER A Q</button>
//
// 				</div> -->
//
//
//
// 				        <!-- <button type="button" class="button2016">Click here for more info about the 2012 postseason</button>
// 				        <br>
//
// 						<div class="bracketarea">
// 				        	<a href="https://en.wikipedia.org/wiki/2012_Major_League_Baseball_season#Postseason" target="_blank"><img class="bracket2016" src="2012bracket.png" height=570 width=850></a>
// 				        </div> -->
//
// 				        <!-- <p class="footer" align="center"><a href="file:///Users/draftamerica/Desktop/WDI%20FOLDER/Projects/SportsStats/index.html">Back to Home</a></p> -->
//
//
//
// <!-- What I want the program to do:
// -Show an image of the eight ball on the homescreen before they enter a name/question
// -Why does it go to a different page? How do I keep it on the same page?
// -Show their user name and answer their question in the eight ball itself
// -After a user enters a name/question and gets an answer, ask them if they want to ask another question
// -Track how many questions a user has asked
// -Can I store questions based on user names?
// -Alert the user if they ask a repeat question
// -Should any/all of my variables be global?
// -Is there such thing as putting too many conditions into one function?
// -Is it standard practice to write HTML and JS code in the same file? What about CSS?
// -How do you style things using document.write?
