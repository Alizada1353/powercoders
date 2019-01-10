document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById('item').focus();

  document.querySelector('button').addEventListener('click', function (event) {
    let inputBox = document.getElementById('item');
    let li = createNewListItem(inputBox.value);
    document.querySelector('ul').appendChild(li);

    if (inputBox.value === '') {
      li.remove();
      document.querySelector('button').style.backgroundColor = ('red');
    }

    else {
      document.querySelector('button').style.backgroundColor =  ('limegreen');
    }

    inputBox.value = '';
    document.getElementById('item').focus();
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      let inputBox = document.getElementById('item');
      let li = createNewListItem(inputBox.value);
      document.querySelector('ul').appendChild(li);
      if (inputBox.value === '') {
        li.remove();
        document.querySelector('button').style.backgroundColor = ('red');
      }
      else {
        document.querySelector('button').style.backgroundColor =  ('limegreen');
      }
      inputBox.value = '';
    }
  });
});

function createNewListItem(itemName) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  li.appendChild(span).innerText = itemName;

  let button = document.createElement("button");
  li.appendChild(button).innerText = 'Delete';

  button.addEventListener('click', function () {
    li.remove();
  });

  return li;
}



