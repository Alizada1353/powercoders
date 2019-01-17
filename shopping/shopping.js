document.addEventListener('DOMContentLoaded', function (event) {
  /** Widget that the user types an item in to. */
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addIcon = document.querySelector('button');
  const inputDiv = document.getElementById('inputs');
  const DAB = document.createElement('button');
  const DABText = document.createTextNode('Delete All');
  DAB.appendChild(DABText);
  inputDiv.appendChild(DAB).className = 'deleteAll';



 DAB.addEventListener('click', function (event) {
   const listItem = document.querySelectorAll('li');
    listItem.forEach(function (el) {
      el.remove();
      inputBox.focus();
    });
 });

  addIcon.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();

    if (trimmedValue === '') {
      inputBox.focus();
      return;

    }
    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addIcon.disabled = true;
    inputBox.focus();
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addIcon.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }
  shoppingList.appendChild(createNewListItem(trimmedValue));
  inputBox.value = '';
  addIcon.disabled = true;
  });
  inputBox.focus();
});

/**
 * creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.appendChild(span).innerText = itemName;

  const deleteIcon = document.createElement('i');
  li.appendChild(deleteIcon).className = 'fa fa-trash';

  deleteIcon.addEventListener('click', function (event) {
    li.remove();

    const inputBox = document.getElementById('item');
    inputBox.focus();
  });

  return li;
}



