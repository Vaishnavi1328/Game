document.querySelector(".btnm").addEventListener("click", function () {
  disp("flex", ".modal");
});
var a = document.querySelectorAll(".close,.overlay");
console.log(a);
for (i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    disp("none", ".modal");
  });
}

function disp(sty, modal) {
  document.querySelector(modal).style.display = sty;
  document.querySelector(".overlay").style.display = sty;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    disp("none", ".modal");
    disp("none", ".modal1");
  }
});

function check(player) {
  if (document.querySelector(player).classList.contains("player-active")) {
    return true;
  }
  return false;
}
function add(player1, player2) {
  document.querySelector(player1).classList.remove("player-active");
  document.querySelector(player2).classList.add("player-active");
}
let curr = 0;
let pl = "player 1";
document.querySelector(".dice").addEventListener("click", function () {
  let x = Math.floor(Math.random() * 6 + 1);
  let cp1 = document.querySelector(".player1 .score").textContent;
  let cp2 = document.querySelector(".player2 .score").textContent;
  cp1 = Number(cp1);
  cp2 = Number(cp2);
  if (cp1 < 100 && cp2 < 100) {
    changeCurrentScore();
    if (x == 1) {
      curr = 0;
      if (check(".player1")) {
        add(".player1", ".player2");
        pl = "player 2";
      } else {
        add(".player2", ".player1");
        pl = "player 1";
      }
    } else {
      curr += x;
    }

    changeCurrentScore();
    change(x);
  } else {
  }
});
function changeCurrentScore() {
  if (pl == "player 1") {
    document.querySelector(".player1 .current-score").textContent = curr;
    document.querySelector(".player2 .current-score").textContent = 0;
  } else {
    document.querySelector(".player2 .current-score").textContent = curr;
    document.querySelector(".player1 .current-score").textContent = 0;
  }
}
function change(x) {
  const arr = [
    "dice-1.png",
    "dice-2.png",
    "dice-3.png",
    "dice-4.png",
    "dice-5.png",
    "dice-6.png",
  ];
  const img = document.querySelector(".image");
  img.src = arr[x - 1];
}

document.querySelector(".hold").addEventListener("click", function () {
  let cp1 = document.querySelector(".player1 .score").textContent;
  let cp2 = document.querySelector(".player2 .score").textContent;
  cp1 = Number(cp1);
  cp2 = Number(cp2);
  if (pl == "player 1") {
    document.querySelector(".player1 .score").textContent = cp1 + curr;
  } else {
    document.querySelector(".player2 .score").textContent = cp2 + curr;
  }

  curr = 0;
  cp1 = document.querySelector(".player1 .score").textContent;
  cp2 = document.querySelector(".player2 .score").textContent;
  cp1 = Number(cp1);
  cp2 = Number(cp2);
  changeCurrentScore();
  if (cp1 < 100 && cp2 < 100) {
    if (check(".player1")) {
      add(".player1", ".player2");
      pl = "player 2";
    } else {
      add(".player2", ".player1");
      pl = "player 1";
    }
  } else {
    console.log(cp1 + " " + cp2);
    if (pl == "player 1") {
      document.querySelector(".player1 .score").textContent = "Wins";
    } else {
      document.querySelector(".player2 .score").textContent = "Wins";
    }
    disp("flex", ".modal1");
    var a = document.querySelectorAll(".close,.overlay");
    document.querySelector(".player").textContent = pl;
    for (i = 0; i < a.length; i++) {
      a[i].addEventListener("click", function () {
        disp("none", ".modal1");
      });
    }
  }
});
document.querySelector(".new").addEventListener("click", function () {
  curr = 0;
  document.querySelector(".player1 .score").textContent = 0;
  document.querySelector(".player2 .score").textContent = 0;
  changeCurrentScore();
  add(".player2", ".player1");
  pl = "player 1";
});
