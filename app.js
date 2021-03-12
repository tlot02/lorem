function showNav() {
  document.getElementsByClassName("navigation")[0].classList.toggle("active");
}

/*
/////////////////////////////////////////////////
create an array of objects. Use JS to dynamically produce the HTML from the array. Then I can use a form to submit to the array./////////////////////////////*/

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

// `<div class="number"><div><b>Name:</b>  ${array[i].name}</div><div><b>Job:</b>  ${array[i].job}</div><div><b>Phone:</b>  ${array[i].phone}</div></div>`;
