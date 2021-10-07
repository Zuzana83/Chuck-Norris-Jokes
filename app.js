const jokeBtn = document.querySelector(".joke-btn");
const jokeEl = document.querySelector(".joke");
const categoryEl = document.getElementById("category");
const jokeImg = document.querySelector(".joke-img");

let URL = "https://api.chucknorris.io/jokes/random?category=";

/*** Solution simple fetch ***/
// async function showJoke(url) {
//     const response = await fetch(URL);
//     const data = await response.json();

//     const {value} = data;

//     jokeEl.textContent = value;
// }


// jokeBtn.addEventListener("click", showJoke);



// *** Solution #2 ***
const fetchJoke = async() => {
    let cat = categoryEl.value;
   
    const res = await fetch(`${URL}${cat}`);
    const data = await res.json();
   
    return data;
}

const showJoke = async() => {
   const {value:joke} = await fetchJoke(URL);

    jokeImg.classList.add("anim-img");

   jokeEl.textContent = joke;

   let random = Math.random() * 1000;

   setTimeout(() => {
    jokeImg.classList.remove("anim-img");
   }, random);
}

jokeBtn.addEventListener("click", () => {
    showJoke();
});

