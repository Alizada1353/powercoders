document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
//addEventListener and querySelector are methods that calls an event.
    let inputBox = document.getElementById('item');
    // on the two above lines a variable is declared and assigned it's value to the value of the element withe an id.
    //inputBox is an object (a collection of related
    // -data and/or functionality (which usually consists of several variables and functions)
    let li = createNewListItem(inputBox.value);

    document.querySelector('ul').appendChild(li);
  });
});

//this is the shorthand of the above code

/*document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('button').addEventListener('click', function (event) {
        console.log(document.getElementById('item').value);
    });
});
*/

function createNewListItem(itemName) {
  let li = document.createElement("li");
// document is a global variable that contain the DOM(Document Object Model)
  let span = document.createElement("span");
  let spanText = document.createTextNode(itemName);
  //itemName is the value of the value attribute of the inputBox in DOM.

  span.appendChild(spanText);
  li.appendChild(span);

  let button = document.createElement("button");
  let buttonText = document.createTextNode('Delete');

  button.addEventListener('click', function () {
    li.remove();
  });

  button.appendChild(buttonText);
  li.appendChild(button);
  //appendChild is a method(recognizable by a leading dot and the following apprentices)

  return li;
}

//this is the shorthand of the above codes
/*
function createNewListItem(itemName) {
    let li = document.creatElement("li");
    let span = document.createElement("span");

    span.innerText = itemName;

    let button = document.createElement("button");
    button.innerText = 'Delete'

    li.appendChild(span);
    li.appendChild(button);

    return li;
}
*/

