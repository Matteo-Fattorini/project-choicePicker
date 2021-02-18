textAreaEl = document.getElementById("textarea");
tagContainer = document.querySelector(".tags");
btnEl = document.getElementById("btn");
textAreaEl.focus();
let list = "";

textAreaEl.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    list = textAreaEl.value;
    textAreaEl.innerHTML = "";

    list.split(",").forEach((e) => {
      let tag = document.createElement("span");
      tag.classList.add("tag");
      tag.innerText = e;
      tagContainer.appendChild(tag);
    });
  }
});

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("selected");
}

function unhighlight(tag) {
  tag.classList.remove("selected");
}

function randomSelector() {
  const times = 30;
  const interval = setInterval(function () {
    const randomTag = pickRandomTag();
    highlight(randomTag);
    setTimeout(function () {
      unhighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
          const randomTag = pickRandomTag();
          highlight(randomTag);
      },100)
  }, times * 100);
}

btnEl.addEventListener("click", function () {
  randomSelector();
});
