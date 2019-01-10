function addList() {
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    ul.appendChild(li1).innerText = 'li 1';

    let li2 = document.createElement("li");
    ul.appendChild(li2).innerText = 'before';

    let em = document.createElement("em");
    li2.appendChild(em).innerText = ' emphasized';

    let li2Text2 = document.createTextNode(' after');
    ul.appendChild(li2Text2);

    let  li3 = document.createElement("li");
    ul.appendChild(li3).innerText = 'I am li3 Text.';

    let Body = document.getElementById('body');
    Body.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', function(event){
    document.getElementById('clicker').addEventListener('click', function (event) {
        addList();
    })
});






// one line commend ...

/*The shorthand of the above code

    let liText2 = document.createTextNode('list item.');
    elLi2.appendChild(liText2);

  elLi2.appendChild(document.createTextNode('list item.'));

*/
