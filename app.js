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
    string += `<div id="content-${i}" class="flex-item flex-text invert">
        <button id="rmv-btn-${i}" onClick="reply_click(this.id)" class="delete-btn">&#x2716;</button>
        <h2>${array[i].title}</h2>
        <p>${array[i].description}</p>
      </div>`;
    console.log(array);
    i++;
  }
  document.getElementById("array").innerHTML = string;
};

//need to create a dynamic ID first. Modify the code above.
//Completed and working.

//identify the ID of the  div when the button is clicked on

//currently gives the id of the button (which is nothing). I need it to give the ID of the parent element
function reply_click(clicked_id) {
  console.log(clicked_id);
  array.indexOf(clicked_id);
}

//Use Array.Splice to remove elements by index number. When clicking on the button, get the item's positon in teh array and remove it.
