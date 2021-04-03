let loggedOn = false;


let a;
fetch('https://api.ipify.org?format=json').then(res => console.log(a = res.json()))
console.log(a);
// function sendToDiscord(mes) {
//   let name = document.getElementById('name').value;

//   fetch(
//   'https://discord.com/api/webhooks/826544206402551876/c47IRG9l40vx2c6BO7Hpf-3NO82v_JuKqc0YjXjHnfvvnF1rTT4NnjK2A0gYez1BbTJx',
//   {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       // the username to be displayed
//       username: name,
//       // the avatar to be displayed
//       avatar_url:
//         'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
//       // contents of the message to be sent
//       content:
//         mes,
//     }),
//   }
//   );
// }
