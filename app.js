document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option-img");
  const result = document.getElementById("result");
  const modal = document.getElementsByClassName("modal")[0];

  var userScore = 0;
  var computerScore = 0;

  const computerOptions = ["rock", "paper", "scissors"];

  options.forEach((option) => {
    option.addEventListener("click", function (e) {
      // userPick
      const uPick = e.target.alt;

      //   Computer choice
      const cPick = computerOptions[Math.floor(Math.random() * 3)];
      console.log(cPick);

      //   Compare picks
      if (uPick === cPick) {
        // if tie
        modal.style.display = "initial";
        result.innerHTML = `
        <h1 class="text-win">It's a Draw!</h1>
          
          <p>Computer Chose <strong>${cPick}</strong></p>
          <p>You Chose <strong>${uPick}</strong></p>`
        console.log("bum");
      } else if (
        (cPick === "scissors" && uPick === "paper") ||
        (cPick === "rock" && uPick === "scissors") ||
        (cPick === "paper" && uPick === "rock")
        ) {
          // if computer wins
        computerScore++;
        modal.style.display = "initial";
        result.innerHTML = `
        <h1 class="text-win">You Lost!</h1>
          
        <p>Computer Chose <strong>${cPick}</strong></p>
        <p>You Chose <strong>${uPick}</strong></p>`
        console.log("you lost");
      } else {
        // if user wins
        userScore++;
        modal.style.display = "initial";
        result.innerHTML = `
        <h1 class="text-win">You Won!</h1>
          
        <p>Computer Chose <strong>${cPick}</strong></p>
        <p>You Chose <strong>${uPick}</strong></p>`
        console.log("you won");
      }
    });
    // console.log(option)
  });
});
