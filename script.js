function matchMood(mood) {
  let result;

  if (mood === "sad") {
    result = "💔 Your Rod Wave vibe is: <br><b>'Last Sad Song'</b>";
  } 
  else if (mood === "stressed") {
    result = "😞 Your Rod Wave vibe is: <br><b>'Pieces'</b>";
  }
  else if (mood === "angry") {
    result = "🔥 Your Rod Wave vibe is: <br><b>'Chip on My Shoulder'</b>";
  }
  else if (mood === "calm") {
    result = "😌 Your Rod Wave vibe is: <br><b>'True Story'</b>";
  }
  else if (mood === "motivated") {
    result = "💪 Your Rod Wave vibe is: <br><b>'Soldier Life'</b>";
  }
  else if (mood === "heartbroken") {
    result = "💧 Your Rod Wave vibe is: <br><b>'Moving On'</b>";
  }

  document.getElementById("result").innerHTML = result;

  // Show reset button
  document.getElementById("resetBtn").style.display = "inline-block";
}

function resetApp() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("resetBtn").style.display = "none";
}
