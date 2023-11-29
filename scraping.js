import puppeteer from "puppeteer";
const url = "https://www.airbnb.com.br/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-09-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&category_tag=Tag%3A8538&search_type=category_change";

class User{
    constructor(email, password, reservations){
        this.email = email;
        this.password = password;
        this.reservations = reservations;
    }
}

class Rental{
    constructor(category,title, location , images, link, pricePerNight){
        this.category = category;
        this.title = title;
        this.location = location
        this.images = images;
        this.originalLink = link;
        this.pricePerNight = pricePerNight;
    }
}

class Reservation{
    constructor(Rental, guests, checkIn, checkOut, pricePerNight, cleaningCharge,
        myAirbnbServiceChange, totalValue){
        this.Rental = Rental;
        this.guests = guests;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.cleaningCharge = cleaningCharge;
        this.myAirbnbServiceChange = myAirbnbServiceChange;
        this.totalValue = totalValue;
    }
}
// rental: itemListElement



async function getRentals(url, category){

    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: "networkidle0"
    });

    const links = await page.evaluate(() => {
        
        const values = document.querySelectorAll('a');
        
        const links = [];
        
        const initPart = "https://www.airbnb.com.br";

        values.forEach((value) => {
            const link = value.getAttribute("href");
            if(link.startsWith("/rooms") && !links.includes(initPart + link)){
                    links.push(initPart + link);
            }

        })


    return links;
    });

    const rentals = [];
    let cont = 0;

    for (const link of links) {
        // if(cont == 5) break; 
        // cont++;

       await page.goto(link,{
        waitUntil: ["networkidle2", "domcontentloaded"]
    });

    let title;
    let images;
    let location;
    let pricePerNight;
    try {
        // isBlocked = await page.$$eval(".l1ovpqvx.c1h5tsj6.dir.dir-ltr", els => els.map(el => el))
        // if(isBlocked != null) isBlocked = true;
        
        title = await page.$$eval("h1", els => els.map(el => el.textContent));

        location = await page.$$eval("._9xiloll", els => els.map(el => el.textContent))

        images = await page.$$eval(".itu7ddv.i1mla2as.i1cqnm0r.dir.dir-ltr",els => els.map(el => el.getAttribute("src")));

        pricePerNight = 200 + Math.floor(Math.random() * 1000);
        
    } catch (error) {
        console.log(error.message);
        title = "Not Found"
    }
    
    if(title[0] != null) rentals.push(new Rental(category,title[0], location[0], images,link, pricePerNight));

    }

    await page.close();

    return rentals;

}

export default getRentals;