/**
 * shopping list model.
 * This list is modelled as an array.
 */
class Model {
  /**@param controller {!Controller} App controller */
  constructor(controller) {
    console.log('Model initialized');

    /** @private {!ShoppingListItem[]} Item in the list */
    this.items_= [];
    /** @private {!View} View for this model. */
    this.view_ = new View(this, controller);

    this.view_.update();
  }
  get items() {
    return this.items_.slice();
  }

  /**
   * Appends a new item to the list.
   *
   * @param item {!ShoppingListItem}
   */
  append(item) {
    this.items_.push(item);
    this.view_.update();
  }

  /**
   * Delete the i'the item form the list.
   *
   * @param i {number}
   */
  delete(i) {
    this.items_.splice(i, 1);
    this.view_.update();
  }
  /**
   * Clear the shopping list of all items.
   */
  clear() {
    this.items_ = [];
    this.view_.update();
  }
}
