/*costanti form*/

const formEl = document.querySelector("form");

const nameEl = document.getElementById("name");

const distanceEl = document.getElementById("distance");

const ageEl = document.getElementById("age");

/* costanti card*/

const cardHeader = document.querySelector(".card-header");
const cardbodyName = document.querySelector(".name");
const cardbodySeat = document.querySelector(".seat");
const cardbodyTrip = document.querySelector(".trip");
const cardbodyTotalprice = document.querySelector(".total_price");
const cardbodyDisount = document.querySelector(".discount");
const cardbodyQrcode = document.querySelector(".qr_code");

/* console.log(
  cardHeader,
  cardbodyName,
  cardbodySeat,
  cardbodyTrip,
  cardbodyTotalprice,
  cardbodyDisount,
  cardbodyQrcode
);
 */

/*variabili prezzo*/

const price = parseFloat(distanceEl.value) * 0.21;

const overagePrice = price - (price / 100) * 40;

const underagePrice = price - (price / 100) * 20;

//RICEVERE I DATI DAL FORM SOLO ALL'INVIO TRAMITE BUTTON

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  //LEGGERE I VALOR GLI IMPUT

  const nameelValue = nameEl.value;
  const distanceelValue = distanceEl.value;
  const ageelValue = ageEl.value;

  //COMPILARE LA CARD

  const price = parseFloat(distanceelValue) * 0.21;
  const overagePrice = price - (price / 100) * 40;
  const underagePrice = price - (price / 100) * 20;

  const numbSeat = Math.floor(Math.random() * 6) + 1;
  const letterSeat = String.fromCharCode(Math.floor(Math.random() * 6) + 97);

  cardbodyName.innerHTML = nameelValue;
  cardbodySeat.innerHTML = numbSeat + letterSeat;
  cardbodyTrip.innerHTML = distanceelValue;
  cardbodyTotalprice.innerHTML = userAge() + "€";
  cardbodyDisount.innerHTML = ageEl.value;
  cardbodyQrcode.innerHTML = "";

  function userAge(ageelValue) {
    if (ageEl.value === "tariffa minori") {
      return underagePrice;
    } else if (ageEl.value === "tariffa anziani") {
      return overagePrice;
    } else {
      return price;
    }
  }
});
