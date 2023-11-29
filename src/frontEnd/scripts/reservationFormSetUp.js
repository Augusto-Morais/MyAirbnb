const titleInput = document.querySelector("[name='Title']");
const title = document.getElementById("Title").textContent;
titleInput.setAttribute("value", title);

const pricePerNightP = document.getElementById("PricePerNight").textContent;
const pricePerNight = pricePerNightP.replace("R$", "");

// console.log(pricePerNight);

const cleaningCharge = document.getElementById("CleaningCharge");
cleaningCharge.textContent = Math.floor(pricePerNight * 0.159);

const myAirbnbServiceCharge = document.getElementById("MyAirbnbServiceCharge");
myAirbnbServiceCharge.textContent = Math.floor(pricePerNight * 0.745);

const totalValue = document.getElementById("TotalValue");

// console.log(pricePerNight + cleaningCharge.textContent + myAirbnbServiceCharge.textContent);


const cleaningChargeInputValue = document.querySelector(
  "[name='CleaningCharge']"
);
cleaningChargeInputValue.setAttribute(
  "value",
  Math.floor(cleaningCharge.textContent)
);

const myAirbnbServiceChargeInputValue = document.querySelector(
  "[name='MyAirbnbServiceCharge']"
);
myAirbnbServiceChargeInputValue.setAttribute(
  "value",
  Math.floor(myAirbnbServiceCharge.textContent)
);

const totalValueInputValue = document.querySelector("[name='TotalValue']");


// console.log(cleaningChargeInputValue.getAttribute("value"),myAirbnbServiceChargeInputValue.getAttribute("value"), totalValueInputValue.getAttribute("value"));

const checkInInput = document.getElementById("CheckIn");
const checkOutInput = document.getElementById("CheckOut");
let checkInDate;
let checkOutDate;
// console.log(checkInInput);

let checkInDateInMs;
let checkOutDateInMs;

let checkInState = false;
let checkOutState = false;

const nNights = document.getElementById("nNights");
const NightsPrice = document.getElementById("NightsPrice");

function daysBetweenDates(checkInDate, checkOutDate) {
  const dayInMs = 86400000;

  const Result =
    Math.round(checkOutDate.getTime() - checkInDate.getTime()) / dayInMs;

  const gapInDays = Result.toFixed(0);

  return gapInDays;
}

// const totalValueInputValue

checkInInput.addEventListener("change", () => {
  checkInState = true;
  checkInDate = new Date(checkInInput.value);
  checkOutDate = new Date(checkOutInput.value);

  checkOutInput.setAttribute("min", checkInDate.toISOString().split("T")[0]);

  if (checkOutState) {
    nNights.textContent = daysBetweenDates(checkInDate, checkOutDate);
    NightsPrice.textContent = Number.parseInt(pricePerNight) * Number.parseInt(nNights.textContent) ;

    totalValue.textContent =
  Math.floor(cleaningCharge.textContent) +
  Math.floor(myAirbnbServiceCharge.textContent) + 
  Number.parseInt(NightsPrice.textContent);

  totalValueInputValue.setAttribute("value", Math.floor(totalValue.textContent));

  // console.log(checkOutDate.toISOString().split("T")[0]);
  }
});
checkOutInput.addEventListener("change", () => {
  checkOutState = true;

  checkInDate = new Date(checkInInput.value);
  checkOutDate = new Date(checkOutInput.value);
  // console.log(checkOutDate,checkOutDate.getDay());
  checkInInput.setAttribute("max", checkOutDate.toISOString().split("T")[0]);


  if (checkInState) {
    // console.log(daysBetweenDates(checkInDate, checkOutDate));
    nNights.textContent = daysBetweenDates(checkInDate, checkOutDate);
    // console.log(nNights.textContent);
    // console.log(pricePerNight);
    NightsPrice.textContent =  Number.parseInt(pricePerNight) * Number.parseInt(nNights.textContent);
    // totalValue.textContent = Number.parseInt(totalValue.textContent) + Number.parseInt(NightsPrice.textContent);
    totalValue.textContent =
  Math.floor(cleaningCharge.textContent) +
  Math.floor(myAirbnbServiceCharge.textContent) + 
  Number.parseInt(NightsPrice.textContent);

  totalValueInputValue.setAttribute("value", Math.floor(totalValue.textContent));
    // NightsPrice.textContent = pricePerNight.textContent;
    // console.log(checkInDate.toISOString().split("T")[0]);

  }
});
