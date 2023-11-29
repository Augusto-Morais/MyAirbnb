import scraping from "./scraping.js";
import Rental from "./src/DB/Models/Rental.js";
import con from "./src/DB/connection.js";

const rentals = []; 

const beachHouses = await scraping("https://www.airbnb.com.br/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-09-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A789","Beach Houses");
const cottageHouses = await  scraping("https://www.airbnb.com.br/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-09-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A5348", "Cottage Houses");
const castles = await scraping("https://www.airbnb.com.br/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-09-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8047", "Castles");
const lake = await scraping("https://www.airbnb.com.br/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-09-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8144", "Lake");
const treeHouses = await scraping("https://www.airbnb.com.br/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-09-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8188", "Tree Houses");

// console.log(beachHouses);
// console.log(cottageHouses);
// console.log(castles);
// console.log(lake);
// console.log(treeHouses);
rentals.push(...beachHouses,...cottageHouses,...castles,...lake,...treeHouses);
console.log(rentals);
console.log(`rentals.length: ` + rentals.length);
console.log(`beachHouses.length: ` + beachHouses.length);
console.log(`cottageHouses.length: ` + cottageHouses.length);
console.log(`castles.length: ` + castles.length);
console.log(`lake.length: ` + lake.length);
console.log(`treeHouses.length: ` + treeHouses.length);


con.on("error", console.error.bind(console, "connection error: "));
con.once("open", () => {
  console.log("Connected do Data Base");
});


// rentals.forEach(async (value) => {
//   const rental = new Rental({
//     Category: value.category,
//     Title: value.title,
//     Location: value.location,
//     Images: value.images,
//     OriginalLink: value.originalLink,
//     PricePerNight: value.pricePerNight
//   });

//   await rental.save();
// });





