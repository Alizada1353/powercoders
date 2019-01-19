document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById('fname').focus();
});

function hideShipInfo() {
  if (document.getElementById('shipsame').checked) {
    document.getElementById('shipinfo').style.display='none';
  }else {
    document.getElementById('shipinfo').style.display='block';
  }
}