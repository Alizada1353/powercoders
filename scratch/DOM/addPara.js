document.addEventListener('DOMContentLoaded', function(event){
    document.getElementById('para').addEventListener('click', function (event) {
        let elP = document.createElement('p');
        let pContent = document.createTextNode('Hi!, I am a new paragraph.');
        elP.appendChild(pContent);
        let elBody = document.getElementById('body');
        elBody.appendChild(elP);
    });
});


/*function addPara() {
    let elP = document.createElement('p');
    let pContent = document.createTextNode('Hi!, I am a new paragraph.');
    elP.appendChild(pContent);
    let elBody = document.getElementById('body');
    elBody.appendChild(elP);
};

document.addEventListener('DOMContentLoaded', function(event){
    document.getElementById('para').addEventListener('click', addPara)
});
*/



/*

function addPara() {
    let elP = document.createElement('p');
    let pContent = document.createTextNode('Hi!, I am a new paragraph.');
    elP.appendChild(pContent);
    let elBody = document.getElementById('body');
    elBody.appendChild(elP);
};

document.addEventListener('DOMContentLoaded', function(event){
    document.getElementById('para').addEventListener('click', function (event) {
        addPara();
    })
});

*/

