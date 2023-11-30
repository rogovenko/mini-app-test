// import { init, type InitResult } from '@tma.js/sdk';

const API_CRYPTO_BOT = "10048:AAPDJ3XUkBm6BMsgH3IIPVxGTEMaWG7HofB"

// function onInit({ mainButton, backButton }: InitResult) {
//   let counter = 0;

//   const setCounter = (value: number) => {
//     counter = value;

//     if (counter === 0) {
//       backButton.hide();
//     } else {
//       backButton.show();
//     }

//     mainButton.setText(`Counter: ${counter}`);
//   };

//   backButton.on('click', () => setCounter(counter - 1));
//   mainButton.on('click', () => setCounter(counter + 1));
//   mainButton.setText('Click me').enable().show();
// }

// function onError(e: unknown) {
//   const div = document.createElement('div');
//   div.innerText = e instanceof Error ? e.message : JSON.stringify(e);

//   document.body.appendChild(div);
// }

function initUI(){
  const buy_btns = document.querySelectorAll(".btn")
  const buy_screen = document.querySelector(".purchase-container")
  const purchase_btn = document.querySelector(".btn-purchase")

  buy_btns.forEach(el => {
    el.addEventListener("click", ()=>{
      console.log("CLICK")
      buy_screen!.classList.remove("transform-up")
    })
  })

  purchase_btn!.addEventListener("click", ()=>{
    console.log("CLICK PURCHASE")
    createCryptoBotInvoice()
  })

  const cross_btn = document.querySelector(".cross-btn")
  cross_btn!.addEventListener("click", ()=>{
    buy_screen!.classList.add("transform-up")
  })
}

initUI()

function createCryptoBotInvoice(){
  const apiUrl = 'https://testnet-pay.crypt.bot'
  const method = 'getMe'
  const apiToken = API_CRYPTO_BOT

  const url = `${apiUrl}/api/${method}`
  const headers = new Headers({
    'Crypto-Pay-API-Token': apiToken,
  });

  // Making a GET request
  fetch(url, {
    method: 'GET',
    headers: headers,
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      // Handle the response data here
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors here
    });
}

// Initialize SDK with debug mode on.
// init({ debug: true })
//   .then(onInit)
//   .catch(onError);