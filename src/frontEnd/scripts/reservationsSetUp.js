// const 
const reservations = document.querySelectorAll("div.reservation");

function titleToParam(title){
    const newTitle = title.replace("#","%23");
    const tokens = newTitle.split(" ");

    const param = tokens.join("+");

    return param;
}

for (const reservation of reservations) {
    // console.log(reservation);
    const deleteIcon = reservation.querySelector("[id='DeleteImg']");
    // const ReservationRentalTitle = reservation.querySelector("[id='Title']").textContent; 
    const ReservationTotalValue = reservation.querySelector("[id='TotalValue']").textContent;
    const checkInDate = reservation.querySelector("[id='CheckIn']").textContent;
    const checkOutDate = reservation.querySelector("[id='CheckOut']").textContent;

    deleteIcon.addEventListener("click", async function(){
        // console.log(titleToParam(ReservationRentalTitle));
        // console.log(ReservationTotalValue);
        reservation.style.display = "none";
        const checkInDateString = `${checkInDate.split("/")[2]}-${checkInDate.split("/")[1]}-${checkInDate.split("/")[0]}`;
        const checkOutDateString = `${checkOutDate.split("/")[2]}-${checkOutDate.split("/")[1]}-${checkOutDate.split("/")[0]}`;

        // console.log(checkInDateString);
        // console.log(`${checkOutDate.split("/")[2]}-${checkOutDate.split("/")[1]}-${checkOutDate.split("/")[0]}`);

        await fetch("/users/reservations/?CheckIn=" + checkInDateString + "&" + "CheckOut=" + checkOutDateString + "&" +
        "TotalValue=" + ReservationTotalValue,{
            method: "DELETE",
        });

        // let data = await response.text();

        // console.log(data);

    });


}