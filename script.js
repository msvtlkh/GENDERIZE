const form = document.querySelector('.form')
const input = document.querySelector('input')
const btn = document.querySelector('btn')

function genderize(event) {
    event.preventDefault()

    const firstName = input.value;
    const serverUrl = 'https://api.genderize.io';

    const url = `${serverUrl}?name=${firstName}`;

    fetch(url)
    .then(response => response.json())
    .then(data => alert(`${firstName} is a ${data.gender}`))

    input.value = ''

}

form.addEventListener('submit', genderize)



