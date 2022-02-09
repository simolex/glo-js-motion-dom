const body = document.querySelector("body");
const adware = document.querySelector(".adv");
const booksSection = document.querySelector(".books");
const bookList = document.querySelectorAll(".book");

console.log(bookList);

booksSection.insertAdjacentElement("afterbegin", bookList[1]);
booksSection.insertAdjacentElement("beforeend", bookList[2]);
bookList[3].before(bookList[4]);

body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

const titleBook_3 = bookList[4].querySelector("h2>a");
titleBook_3.textContent = "Книга 3. this и Прототипы Объектов";
adware.remove();
console.log(titleBook_3);

//bookList
