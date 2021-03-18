let loggedOn = false;

function toggleVpsOn() {
  let name = document.getElementById('name').value;
  let message = 'I have logged on to the VPS.'
  if(loggedOn){
    message = 'I have logged off from the VPS.'
    loggedOn = false;
    document.getElementById('btn').innerText = "Log On";
  } else {
    document.getElementById('btn').innerText = "Log Off";
    loggedOn = true;
  }
  fetch(
  'https://discord.com/api/webhooks/821877690251739136/dRYegfYzpph1MGMMl2edkclK2uWvv3GJYEU_KuDMJBI4b_jSob6dSKmvuMfccTCw3a56',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // the username to be displayed
      username: name,
      // the avatar to be displayed
      avatar_url:
        'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
      // contents of the message to be sent
      content:
        message,
    }),
  }
  );
}
