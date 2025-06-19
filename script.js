const url = 'https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'e6590903c8msh9259a8c8c66a593p1f143ajsncdb833c8e565',
        'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
    }
};

let selectFrom = document.querySelector('#from');
let selectTo = document.querySelector('#to');
let result = document.querySelector("#result")
let btn = document.querySelector("#btn")
let input = document.querySelector("#amount")


async function getCurrency() {
    try {
        const res = await fetch(url, options);
        const data = await res.json();

        console.log(data);
        const rates = data.result;

        Object.entries(rates).map(([currency, rate]) => {
            selectFrom.innerHTML += `
                    <option value="${rate}">${currency}</option>
                `;
        });
        Object.entries(rates).map(([currency, rate]) => {
            selectTo.innerHTML += `
                    <option value="${rate}">${currency}</option>
                `;
        });
    } catch (error) {
        console.error('Ошибка при загрузке курсов:', error);
    }
}

getCurrency();

selectFrom.addEventListener('change', () => {
    console.log('From:', selectFrom.value);
});
selectTo.addEventListener('change', () => {
    console.log('To:', selectTo.value);
});


btn.addEventListener('click', () => {
    result.innerHTML = +input.value * selectTo.value
})
