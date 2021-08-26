let bioContainer = document.querySelector('#bio');
let cardContainer = document.querySelector('#cardContainer');

let data = {}
data['cards'] = [
    {
        'iconSrc':'https://cdx.solo.to/images/link/twitter.svg',
        'name':'Twitter',
        'url': 'https://twitter.com/StealthValorant',
        'desc': 'Follow me on Twitter!'
    },
    {
        'iconSrc':'https://cdx.solo.to/images/link/twitch.svg',
        'name':'Twitch',
        'url': 'https://www.twitch.tv/stealthsv',
        'desc': 'Streaming everyday, Follow me on Twitch!'
    },
    {
        'iconSrc':'https://cdx.solo.to/images/link/youtube.svg',
        'name':'Youtube',
        'url':'https://www.youtube.com/channel/UCf7Gpr3OfBhR3yD8Z8KUZsQ',
        'desc': "Subscribe to my YouTube, no videos yet though :("
    },
    {
        'iconSrc':'https://cdx.solo.to/images/link/discord.svg',
        'name':'Discord',
        'url':'https://discord.gg/4sKgXcnc3t',
        'desc':'Join the discord for community events and updates on stream times!'
    }
]

data['bio'] = `Just an Immortal Valorant player who likes making people happy :)`

bioContainer.innerHTML = data['bio'];

data['cards'].forEach(element => {
    let tempContainer = document.createElement('a');
    tempContainer.classList.add("card");
    tempContainer.href=element.url
    tempContainer.target = "_blank"
    tempContainer.innerHTML = `
        <img class="icon" src="${element.iconSrc}">
        <div class="name">${element.name}</div>
        <div class="url">${element.url}</div>
        <img class="linkarrow" src="Graphics/right3.png">
    `;
    cardContainer.appendChild(tempContainer);
})