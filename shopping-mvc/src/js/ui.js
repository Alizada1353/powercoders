/**
 * Create the controller to run the application.
 */
function domContentLoaded() {
  new Controller();
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
