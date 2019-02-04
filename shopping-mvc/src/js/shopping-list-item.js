/**
 * Create and return an 'li' element for inclusion in the shopping list.
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
      console.log('Delete is clicked');
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
