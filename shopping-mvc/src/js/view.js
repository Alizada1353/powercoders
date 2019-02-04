/** HTML View for the ShoppingList. */
class View {
  /**
   * @param model {!Model} App data model
   * @param controller {!Controller} App controller
   */
  constructor(model, controller) {
    console.log('View ready');

    /** @param {!Model} App data model */
    this.model_ = model;

    /** @param {!Controller} App controller */
    this.controller_= controller;
  }
}