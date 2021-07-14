const todoButton = document.querySelector(".btn-img");
const todoOut = document.querySelector(".todolist");

const createElements = () => {
  // создание элементов

   let div = document.createElement("div");
   div.classList.add("input-block");

   let input = document.createElement("input");
   input.classList.add("input");

   let imgIconDelete = document.createElement("img");
   imgIconDelete.classList.add("icon-delete");
   imgIconDelete.src = "./images/white-cross.png";

   div.appendChild(input);
   div.appendChild(imgIconDelete);
   todoOut.appendChild(div);

  // удаление элементов

   imgIconDelete.addEventListener("click", () => {
      div.remove();
   });
};

todoButton.addEventListener("click", () => {

   // проверка на пустую строку
   
   let inpStrLastElem = document.querySelector(".todolist");

   if (
      inpStrLastElem.lastElementChild &&
      inpStrLastElem.lastElementChild.firstElementChild.value === ""
   ) {
      return;
   }
   createElements();
});

const sortToDos = document.querySelector(".sort-white-down");

let sortDirection = 1;

sortToDos.addEventListener("click", () => {
   let allElemInput = document.querySelectorAll(".input-block");
   let arrToDos = [];

   allElemInput.forEach((elem) => {
      arrToDos.push(elem);
      console.log(elem.firstElementChild.value);
   });

   arrToDos.sort((a, b) => {
      let textA = a.firstElementChild.value;
      let textB = b.firstElementChild.value;
      let resSort = textA.localeCompare(textB) * sortDirection;
      return resSort;
   });

   arrToDos.forEach((elem) => {
      elem.remove();
      todoOut.append(elem);
   });

   sortDirection = sortDirection * -1;
   sortToDos.classList.toggle("sort-white-up");
});
