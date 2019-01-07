document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('button').addEventListener('click', function (event) {
        console.log(document.getElementById('item').value);
    });
});





//this is just the more detailed way
/*
document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('button').addEventListener('click', function (event) {
        let inputBox = document.getElementById('item');
        console.log(inputBox.value);
    });
});
*/