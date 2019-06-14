const adminPasswordHash = '7c9c894a8f4157c8d79da42863ee4422f53d2b2edda571e1c25347a16c865c0a';

document.addEventListener('DOMContentLoaded', function (event) {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const submit = document.getElementById('submit');

  submit.onclick = function(event) {
    if (password.value.length) {
      event.preventDefault();
      digestMessage(password.value).then(digest=> {
        hex = hexString(digest);
        if (hex === adminPasswordHash && username.value === 'admin') {

          location.href = "calc.html";
        } else {
          alert('incorrect name or password');
        }
      });
    }
  };
  username.focus();
});

function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  return window.crypto.subtle.digest('SHA-256', data);
}

function hexString(buffer) {
  const byteArray = new Uint8Array(buffer);

  const hexCodes = [...byteArray].map(value => {
    const hexCode = value.toString(16);
    const paddedHexCode = hexCode.padStart(2, '0');
    return paddedHexCode;
  });

  return hexCodes.join('');
}
