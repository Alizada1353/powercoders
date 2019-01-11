document.addEventListener('DOMContentLoaded', function (event) {
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');
  let addItemButton = document.querySelector('button');

  addItemButton.addEventListener('click', function (event) {
    if (inputBox.value.trim() !== '') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
      addItemButton.disabled = true;
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
      addItemButton.disabled = false;
      if (event.key === 'Enter') {
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
    if (inputBox.value.trim() === '') {
      addItemButton.disabled = true;
    }
  });
  inputBox.focus();
  addItemButton.disabled = true;
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



