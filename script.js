const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  const element = document.createElement("div");
  element.textContent = value;
  element.addEventListener("click", () => {
    if (element.style.textDecoration === "line-through") {
      element.style.textDecoration = "none";
    } else {
      element.style.textDecoration = "line-through";
    }
  });
  list.append(element);
  input.value = "";
});
