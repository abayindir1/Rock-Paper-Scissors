document.addEventListener("DOMContentLoaded", () => {
  var uScore = 0;
  var cScore = 0;

  const options = document.querySelectorAll(".option-img");
  const computerOptions = ["rock", "paper", "scissors"];

  options.forEach((option) => {
    option.addEventListener("click", function (e) {
      // userPick
      const uPick = e.target.alt;

      //   Computer choice
      const cPick = computerOptions[Math.floor(Math.random() * 3)];
      console.log(cPick);

      //   Compare picks
      if(uPick === cPick){
        console.log("bum")
      } else if((cPick === "scissors" && uPick === "paper") || (cPick === "rock" && uPick === "scissors") || (cPick === "paper" && uPick === "rock")){
        console.log("you lost")
      }else{
        console.log("you won")
      }
    });
    // console.log(option)
  });
});
