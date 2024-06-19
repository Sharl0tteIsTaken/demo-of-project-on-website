//Current line
var CurrentId = undefined;

var inputValues = [];

const rock = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)

`;

const paper = `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)

`;

const scissors = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)

`;
const game_images = [rock, paper, scissors];
const inputPrompts = [];
let isFirstClick = true;

//Click Run
$(document).ready(function () {
  $("#run-button").click(function () {
    inputValues = [];
    $("#Content").empty();
    NewLine(
      "What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.",
      true
    );
  });
});

//Enter button
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  if (x === 13 || x == 13) {
    var consoleLine = $("#" + CurrentId + " input").val();

    inputValues.push({ id: CurrentId, val: consoleLine });

    let user_choice = Number(consoleLine);

    if (user_choice >= 3 || user_choice < 0) {
      NewLine("You typed an invalid number, you lose!", false);
      return;
    }

    NewLine(game_images[Number(consoleLine)], false);

    let computer_choice = Math.floor(Math.random() * 3);

    NewLine("Computer chose: ", false);
    NewLine(game_images[Number(computer_choice)], false);

    if (user_choice == 0 && computer_choice == 2) NewLine("You win!", false);
    else if (computer_choice == 0 && user_choice == 2)
      NewLine("You lose", false);
    else if (computer_choice > user_choice) NewLine("You lose", false);
    else if (user_choice > computer_choice) NewLine("You win!", false);
    else if (computer_choice == user_choice) NewLine("It's a draw", false);
  }

  // NewLine(inputPrompts[inputValues.length - 1], true);
  // setTimeout(NewLine, delay);
});
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  var line = $("#" + CurrentId + " input");
  var length = line.val().length;
  if (x != 8) {
    line.attr("size", 1 + length);
  } else {
    line.attr("size", length * 0.95);
  }
  if (length === 0) {
    $("#" + CurrentId + " input").attr("size", "1");
  }
});
$(document).on("click", function (e) {
  $("#" + CurrentId + " input").focus();
});

//New line
function NewLine(text, isPrompt) {
  $(".console-carrot").remove();
  if (CurrentId !== undefined) {
    $("#" + CurrentId + " input").prop("disabled", true);
  }
  CurrentId = "consoleInput-" + GenerateId();

  if (isPrompt) {
    $("#Content").append("<div>" + text + "</div>");
    $("#Content").append(
      '<div id="' +
        CurrentId +
        '">' +
        '<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>'
    );
    $("#" + CurrentId + " input").focus();
    $("#" + CurrentId + " input").attr("size", "1");
  } else {
    $("#Content").append('<div id="' + CurrentId + '">' + text + "</div>");
  }
}

function GenerateId() {
  return Math.r && om().toString(16).slice(2);
}

// import r&&om

// rock = '''
//     _______
// ---'   ____)
//       (_____)
//       (_____)
//       (____)
// ---.__(___)
// '''

// paper = '''
//     _______
// ---'   ____)____
//           ______)
//           _______)
//          _______)
// ---.__________)
// '''

// scissors = '''
//     _______
// ---'   ____)____
//           ______)
//        __________)
//       (____)
// ---.__(___)
// '''
// game_images = [rock, paper, scissors]

// user_choice = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
// if user_choice >= 3 or user_choice < 0:
//     NewLine("You typed an invalid number, you lose!")
// else:
//     NewLine(game_images[user_choice])

//     computer_choice = r&&om.r&&int(0, 2)
//     NewLine("Computer chose:")
//     NewLine(game_images[computer_choice])

//     if user_choice == 0 && computer_choice == 2:
//         NewLine("You win!")
//     else if ( computer_choice == 0 && user_choice == 2:
//         NewLine("You lose")
//     else if ( computer_choice > user_choice:
//         NewLine("You lose")
//     else if ( user_choice > computer_choice:
//         NewLine("You win!")
//     else if ( computer_choice == user_choice:
//         NewLine("It's a draw")