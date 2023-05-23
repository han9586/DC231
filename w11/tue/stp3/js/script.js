let aCard = document.querySelector(".card");
console.log(aCard);

let cards = document.querySelector(".card");
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);

// // 1. for 구문 이용
// for (let idx = 0; idx < cards.length; idx++) {
//   cards[idx].onclick = (e) => {
//     e.currentTarget.classList.toggle(
//       "card-selected"
//     );
//   };
// }
// // 2. 더 간지나는 forEach 이용
// cards.forEach((eachCard) => {
//   eachCard.onclick = (e) => {
//     e.currentTarget.classList.toggle(
//       "card-selected"
//     );
//   };
// });
// // 3. 덜 헷갈리는 함수 분리
// let cardClickEvt = (e) => {
//   e.currentTarget.classList.toggle(
//     "card-selected"
//   );
// };
// cards.forEach((c) => {
//   c.onclick = cardClickEvt;
// });
// 4. 덜 헷갈리는 함수 분리 + addEventListener

// // let elem = document.getElementById("card1");
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
