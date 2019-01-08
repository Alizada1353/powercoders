document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {

    let inputBox = document.getElementById('item');
    let li = createNewListItem(inputBox.value);

    document.querySelector('ul').appendChild(li);
  });
});

function createNewListItem(itemName) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  let spanText = document.createTextNode(itemName);

  span.appendChild(spanText);
  li.appendChild(span);

  let button = document.createElement("button");
  let buttonText = document.createTextNode('Delete');

  button.addEventListener('click', function () {
    li.remove();
  });

  button.appendChild(buttonText);
  li.appendChild(button);

  return li;
}



