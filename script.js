const booksSection = document.querySelector(".books");
const bookList = document.querySelectorAll(".book");

console.log(booksSection);
console.log(bookList);

booksSection.insertAdjacentElement("afterbegin", bookList[1]);
booksSection.insertAdjacentElement("beforeend", bookList[2]);
bookList[3].before(bookList[4]);

//bookList
