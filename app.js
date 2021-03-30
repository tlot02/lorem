function showNav() {
  document.getElementsByClassName("navigation")[0].classList.toggle("active");
}

let array = [];
const addItem = () => {
  let string = "";
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  array.push({ title: title, description: description });
  let i = 0;
  while (i < array.length) {
    string += `<div class="flex-item flex-text invert">
        <h2>${array[i].title}</h2>
        <p>${array[i].description}</p>
      </div>`;
    console.log(array);
    i++;
  }
  document.getElementById("array").innerHTML = string;
};

//need to create a dynamic ID first. Modify the code above.

//Use Array.Splice to remove elements by index number. When clicking on the button, get the item's positon in teh array and remove it.

//All to add a new event listen for onclick for each button element.
