const account = document.querySelector("[src='/images/user.svg']");
const entirePage = document.querySelector("*");
const h1 = document.querySelector("h1");
// const content = document.querySelector("[id='content']");
const register = document.querySelector("[id='register']");
// const formDiv = document.getElementById('register');
const form = document.querySelector("form");
const closeIcon = document.querySelector("[alt='Close Icon']");
const userOptions = document.querySelector("[id='userOptions']");
const userName = document.querySelector("[id='UserName']");
const reservationsBox = document.querySelector("[id='ReservationsBox']");
// console.log(closeIcon);

// register.style.display = "none";

// closeIcon.addEventListener("click", () => {
//   content.style.cssText = "-webkit-filter: none; filter: none; pointer-events: auto; user-select: auto";
//   register.style.display = "none";
// })

userOptions.style.display = "none";
// userName.style.display = "none";
// reservationsBox.style.display = "none";



// function toggle() {}

account.addEventListener("click", () => {
  // content.style.cssText = "-webkit-filter: blur(5px); filter: blur(5px); pointer-events:none; user-select: none";

  // console.log(register.style.display);
  // console.log(userOptions.style);

  // #userOptions{

  // }

  if (userOptions.style.display === "none") {

    account.style.transform = "scale(1.2)";

    userOptions.style.display = "inline-block";
    userOptions.style.border = "0.1em solid rgba(92, 92, 92, 0.5)";
    userOptions.style.width = "10em";
    userOptions.style.height = "3.6em";
    userOptions.style.position = "relative";
    userOptions.style.left = "88.5em";
    userOptions.style.bottom = "5.8em";
    userOptions.style.borderRadius = "0.5em";
    userOptions.style.backgroundColor = "rgb(238, 238, 238)";
    // console.log(userOptions.style);

    // #UserName
    userName.style.textAlign = "center";
    userName.style.marginBottom = "0.5em";
    userName.style.paddingTop = "0.1em";
    userName.style.backgroundColor = "rgb(219, 219, 219)";
    userName.style.paddingBottom = "0.2em";
    userName.style.fontFamily = '"Rajdhani", sans-serif';
    userName.textContent = "Sample User";
    // Sample User
    // userName.style.display = "inline";


    // #Reservations
    reservationsBox.style.textAlign = "center";
    reservationsBox.style.fontFamily = "'Open Sans', sans-serif";
    reservationsBox.style.cursor = "pointer";
    reservationsBox.textContent = "Your Reservations";
    // Your Reservations
    // reservationsBox.style.display = "inline";


    // form.style.width = "20em";
    // form.style.height = "20em";
    // form.style.border = "0.1em solid";
    // form.style.backgroundColor = "white";
  } else {
    // userOptions.style.display = "none";
    // account.style.transform = "scale(1.0)";
    userOptions.style.display = "none";
    account.style.transform = "scale(1.0)";

  }
});

reservationsBox.addEventListener("click", () => {
  location.assign("/reservations");
});

