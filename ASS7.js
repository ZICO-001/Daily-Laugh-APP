const jokeDisplay = document.getElementById("joke-text");
const button = document.getElementById("btn");
const moodOptions = document.querySelectorAll(".mood > div");
async function getJoke() {
  jokeDisplay.textContent = "finding something funny...";
  const url =
    "https://v2.jokeapi.dev/joke/Programming,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
  try {
    const response = await fetch(url);
    const data = await response.json();
    jokeDisplay.innerHTML = `${data.joke}`;
  } catch (error) {
    jokeDisplay.textContent = "something is wrong somewhere!";
  }
}
button.addEventListener("click", getJoke);

moodOptions.forEach((mood) => {
  mood.addEventListener("click", () => {
    moodOptions.forEach((moodBox) => (moodBox.style.border = "none"));
    mood.style.border = "1px solid #00f2fe";
    jokeDisplay.textContent = "Now hit the button below!";
  });
});
