function domContentLoaded() {
  /** Widget that the user types an item in to. */
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const quantityBox = document.getElementById('quantity');
  const addIcon = document.querySelector('button');
  const clearBtn = document.querySelector('#clear');

  clearBtn.addEventListener('click', function (event) {
    let listItem = document.querySelectorAll('li');
    listItem.forEach(function (el) {
      el.remove();
    });
    clearBtn.disabled = true;
    inputBox.focus();
  });

  addIcon.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    const quantityTV = quantityBox.value.trim();

    if (trimmedValue === '') {
      return;
    }
    shoppingList.appendChild(createNewListItem(trimmedValue, quantityTV));
    inputBox.value = '';
    inputBox.focus();
    addIcon.disabled = true;
    clearBtn.disabled = false;
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    const quantityTV = quantityBox.value.trim();
    addIcon.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }
    if (event.key !== 'Enter') {
      return;
    }
    shoppingList.appendChild(createNewListItem(trimmedValue, quantityTV));
    inputBox.value = '';
    addIcon.disabled = true;
    clearBtn.disabled = false;
    quantityBox.focus();
    quantityBox.value = '';
  });
  clearBtn.disabled = true;
  quantityBox.focus();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
    domContentLoaded();
}

/**
 * creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @param {string} quantity Quantity of the item to append to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName, quantity) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span).innerText = itemName;

  if (quantity !== '') {
    li.appendChild(document.createTextNode(' '));
    const  quantityText = document.createElement('span');
    quantityText.className = 'quantityText';
    quantityText.textContent = '('+ quantity +')';
    li.appendChild(quantityText);
  }

  const deleteIcon = document.createElement('i');
  li.appendChild(deleteIcon).className = 'fa fa-trash';

  deleteIcon.addEventListener('click', function (event) {
    li.remove();

    document.getElementById('clear').disabled =
      document.querySelectorAll('li').length === 0;

    const inputBox = document.getElementById('item');
    inputBox.focus();
  });

  return li;
}



