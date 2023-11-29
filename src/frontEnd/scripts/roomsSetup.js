const rooms = document.querySelectorAll("[class='result']");


function titleToParam(title){
    const newTitle = title.replace("#","%23");
    const tokens = newTitle.split(" ");

    const param = tokens.join("+");

    return param;
}

rooms.forEach((room) => {
    // console.log(room);
    const title = room.querySelector("p").textContent;
    const param = titleToParam(title);

    
    

    room.addEventListener("click", function(){
        location.assign(`/room?v=${param}`);
    })
})
// console.log(rooms);