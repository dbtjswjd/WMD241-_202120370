console.log("hello"); /* 자바에서 .요소의 뜻 - *()안의 내용을 띄워주는 용도*/
let elembody =
  document.body; /* 자바에서 띄어쓰기 방법 소문자 다음 뛸때 대문자 하나사용(카멜 케이스)*/
console.log(elembody);
elembody.style.backgroundColor = "oklch(0.8, 0.05, 0)"; // 항상 넣을때 마다 ""꼭  붙여줘야지 작동

let aCard = document.querySelector(".card");
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭!");
  // aCard.style.backgroundColor = "#ff0000";
  aCard.classList.toggle("card--state-clicked");
  console.log(aCard.classList);
  //add, remove, toggle= on/off등의 기능 있음
});

//document.querySelectorAll(".card");
