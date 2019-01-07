/*console.log('console show my message!');    //Javascript code goes here

function greet(name) {
  console.log('hello, ' + name);
}*/

function setClass(className) {
  document.getElementById('mypara').className = className;
}


document.addEventListener('DOMContentLoaded', function (event) {

  document.getElementById('make-warning').addEventListener('click', function (event) {
    setClass('warning');
  });

 document.getElementById('make-tip').addEventListener('click', function (event) {
    setClass('tip');
  });

  document.getElementById('make-normal').addEventListener('click', function (event) {
    setClass('');
  });
});


/*function makeTip() {
  let el = document.getElementById('mypara');
  el.className = 'tip';
}

function makeWarning() {
  let el = document.getElementById('mypara');
  el.className = 'warning';
}

function clearClass() {
  let el = document.getElementById('mypara');
  el.className = '';
}*/

