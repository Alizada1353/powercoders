document.addEventListener('DOMContentLoaded', function (event) {
  let Data = document.getElementById('data');
  let showButton = document.getElementById('show');
  let hideButton = document.getElementById('hide');

  showButton.addEventListener('click', function (evnt) {
    Data.className = 'showedData';
    hideButton.className = 'hideButton';
    showButton.className = 'hide';
  });

  hideButton.addEventListener('click', function (evnt) {
    Data.className = 'hiddenData';
    hideButton.className = 'hide';
    showButton.className = 'show';
  });

   Data.className = 'hiddenData';
  hideButton.className = 'hide';
  showButton.className = 'show';
});