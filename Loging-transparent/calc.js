document.addEventListener('DOMContentLoaded', function(event) {
  let inputBox = document.form.textView;
  inputBox.focus();
});
function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
  let inputBox = document.form.textView;
  inputBox.focus();
}
function equal() {
  let inputBox = document.form.textView;
  let exp = document.form.textView.value;
  if (exp){
    document.form.textView.value = eval(exp);
  }
  inputBox.focus();
}
function clean() {
  document.form.textView.value = "";
  let inputBox = document.form.textView;
  inputBox.focus();
}
function back() {
  let exp = document.form.textView.value;
  document.form.textView.value = exp.substring(0,exp.length-1);
  let inputBox = document.form.textView;
  inputBox.focus();
}
