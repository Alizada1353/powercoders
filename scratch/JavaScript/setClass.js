console.log('console show my message!');    //Javascript code goes here

function greet(name) {
  console.log('hello, ' + name);
}

function setClassTip(event) {
  let el = document.getElementById('mypara');
  el.className = 'tip';
}

function setClassWarning(event) {
  let el = document.getElementById('mypara');
  el.className = 'warning';
}

function clearClass(event) {
  let el = document.getElementById('mypara');
  el.className = '';
}