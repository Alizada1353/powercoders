document.addEventListener('DOMContentLoaded', function (event) {
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');

  document.querySelector('button').addEventListener('click', function (event) {
    let trimmedValue = inputBox.value.trim();
    if (trimmedValue !== '') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
      if (event.key === 'Enter') {
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
  });
  inputBox.focus();
});

function createNewListItem(itemName) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  li.appendChild(span).innerText = itemName;

  let button = document.createElement("button");
  li.appendChild(button).innerText = 'Delete';

  button.addEventListener('click', function () {
    li.remove();
    let inputBox = document.getElementById('item');
    inputBox.focus();
  });

  return li;
}



