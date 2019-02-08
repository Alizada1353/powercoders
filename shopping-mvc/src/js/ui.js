/**
 * Create the controller to run the application.
 */
function domContentLoaded() {
  const quantityBox = document.getElementById('quantity');
  new Controller();
  quantityBox.focus();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}
