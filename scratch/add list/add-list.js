function addList() {
    let elUl = document.createElement("ul");
    let elLi1 = document.createElement("li");
    let li1Text = document.createTextNode('Hi! , I am the first list item.');
    elLi1.appendChild(li1Text);

    elUl.appendChild(elLi1);

    let elLi2 = document.createElement("li");
    let li2Text1 = document.createTextNode('Hi!, I am the ');
    elLi2.appendChild(li2Text1);

    let li2Em = document.createElement('em');
    let insidEm = document.createTextNode('second ');
    li2Em.appendChild(insidEm);

    elLi2.appendChild(li2Em);


    elLi2.appendChild(document.createTextNode('list item.'));
    elUl.appendChild(elLi2);

    let elLi3 = document.createElement("li");
    let li3Text = document.createTextNode('Hi! , I am the third list item.');
    elLi3.appendChild(li3Text);

    elUl.appendChild(elLi3);

    let elBody = document.getElementById('body');
    elBody.appendChild(elUl);
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
