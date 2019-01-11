document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');

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
  const li = document.createElement("li");

  const span = document.createElement("span");
  li.appendChild(span).innerText = itemName;

  const button = document.createElement("button");
  li.appendChild(button).innerText = 'Delete';

  button.addEventListener('click', function () {
    li.remove();
    const inputBox = document.getElementById('item');
    inputBox.focus();
  });

  return li;
}

