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

    const span = document.createElement('span');
    span.textContent = this.name;

    const icon = document.createElement('i');
    icon.className = 'fa fa-trash';

    const deleteButton = document.createElement('button')
    deleteButton.className = 'deleteButton';
    deleteButton.appendChild(icon);

    listItem.appendChild(span);

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
