function matchMood(mood) {
  let resultText;
  let imageFile;

  if (mood === "sad") {
    resultText = "💔 Your Rod Wave vibe is: 'Last Sad Song'";
    imageFile = "last_sad_song.jpg";
  } 
  else if (mood === "stressed") {
    resultText = "😞 Your Rod Wave vibe is: 'Pieces'";
    imageFile = "pieces.jpg";
  }
  else if (mood === "angry") {
    resultText = "🔥 Your Rod Wave vibe is: 'Chip on My Shoulder'";
    imageFile = "chip_on_my_shoulder.jpg";
  }
  else if (mood === "calm") {
    resultText = "😌 Your Rod Wave vibe is: 'True Story'";
    imageFile = "true_story.jpg";
  }
  else if (mood === "motivated") {
    resultText = "💪 Your Rod Wave vibe is: 'Soldier Life'";
    imageFile = "soldier_life.jpg";
  }
  else if (mood === "heartbroken") {
    resultText = "💧 Your Rod Wave vibe is: 'Moving On'";
    imageFile = "moving_on.jpg";
  }

  document.getElementById("result").innerHTML =
    `<img src="${imageFile}" alt="Song cover" style="max‑width:200px; margin:10px;"><br>${resultText}`;

  document.getElementById("resetBtn").style.display = "inline‑block";
}

function resetApp() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("resetBtn").style.display = "none";
}
