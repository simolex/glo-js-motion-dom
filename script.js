const body = document.querySelector("body");
const booksSection = document.querySelector(".books");
const bookList = document.querySelectorAll(".book");

console.log(booksSection);
console.log(bookList);

booksSection.insertAdjacentElement("afterbegin", bookList[1]);
booksSection.insertAdjacentElement("beforeend", bookList[2]);
bookList[3].before(bookList[4]);

body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

//bookList
