function domContentLoaded() {
  /** Widget that the User types an item in to */
  const inputBox = document.getElementById('item');
  inputBox.focus();
  const quantityBox = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('li');

    if (listItem.length === 0) {
      clearButton.disabled = true;
    } else {
      clearButton.disabled = false;
    }
    listItem.forEach(function (el) {
      el.remove();
    });
    clearButton.disabled = true;
    inputBox.focus();
  });

  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    if (trimmedValue === '') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearButton.disabled = false;
    inputBox.focus();
  });


  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem() );
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearButton.disabled = false;
  });
  inputBox.focus();

  quantityBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem() );
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearButton.disabled = false;
  });
  quantityBox.focus();
}

if (document.readyState === 'loading') {
  const quantityBox = document.getElementById('quantity');
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
    quantityBox.focus();
  });
} else {
  domContentLoaded();
}


/**
 * Create and return an 'li' element for inculusion in the shopping list.
 *
 * @return {HTMLElement} li element
 */
/**
 * Represent an item in the shopping list.
 */
class ShoppingListItem {
  /**
   * @param name {string} Name
   * @param quantity {string} Quantity
   */
  constructor(name, quantity){
    this.name = name;
    this.quantity = quantity;
  }
  toListItem() {
    const listItem = document.createElement('li');

    const listText = document.createElement('span');
    listText.textContent = this.name;

    const deleteButton = document.createElement('i');
    listItem.appendChild(deleteButton).className = 'fa fa-trash';

    deleteButton.addEventListener('click', function (event) {
      listItem.remove();
      const inputBox = document.getElementById('item');
      inputBox.focus();
    });

    listItem.appendChild(listText);

    if (this.quantity !== '') {
      listItem.appendChild(document.createTextNode(' '));
      const span = document.createElement('span');
      span.className = 'quantity';
      span.textContent = `(${this.quantity})`;   // '(' + quantity + ')'
      listItem.appendChild(span);
    }

    listItem.appendChild(deleteButton);
    return listItem;
  }
}
