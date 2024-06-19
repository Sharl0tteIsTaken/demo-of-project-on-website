//Current line
var CurrentId = undefined;

var inputValues = [];

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

  var consoleLine = $("#" + CurrentId + " input").val();
  inputValues.push({ id: CurrentId, val: consoleLine });
  }
);
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