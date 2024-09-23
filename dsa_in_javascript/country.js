// let url = "https://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     console.log("button was clicked");
//     let country = document.querySelector("input").value;
//     console.log(country);
//     await getcolleges(country); // Pass the country parameter here
    
// });

// async function getcolleges(country) { // Accept the country parameter here
//     try {
//         let res = await axios.get(url + country);
//         console.log(res.data);
//     } catch (e) {
//         console.log("error", e);
//         return [];
//     }
// }
let url = "https://universities.hipolabs.com/search?name=";

let btn = document.querySelector("#searchButton");
btn.addEventListener("click", async () => {
    console.log("button was clicked");
    let country = document.querySelector("#countryInput").value;
    console.log(country);
    await getcolleges(country);
});
async function getcolleges(country) { // Accept the country parameter here
    try {
        let res = await axios.get(url + country);
        console.log(res.data);
    } catch (e) {
        console.log("error", e);
        return [];
    }
}