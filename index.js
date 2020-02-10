const bold = document.getElementById("bold");
const italic = document.getElementById("italic");

const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");
const heading3 = document.getElementById("heading3");
const heading4 = document.getElementById("heading4");
const heading5 = document.getElementById("heading5");
const heading6 = document.getElementById("heading6");

const content = document.getElementById("content");
const innerHTML = document.getElementById("innerHTML");

const arial = document.getElementById("arial");

const removeFormat = document.getElementById("remove-format");

const insertImage = document.getElementById("insert-image");

const redo = document.getElementById("redo");
const undo = document.getElementById("undo");

document.execCommand("defaultParagraphSeparator", false, "p");
document.execCommand("styleWithCSS", true);

redo.addEventListener("click", () => {
  document.execCommand("redo", false);
});
undo.addEventListener("click", () => {
  document.execCommand("undo", false);
});

insertImage.addEventListener("click", () => {
  document.execCommand(
    "insertImage",
    false,
    "https://images.pexels.com/photos/2724373/pexels-photo-2724373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  );
});

content.addEventListener("change", e => {
  innerHTML.innerText = e.target.value;
});

italic.addEventListener("click", e => {
  document.execCommand("italic", false, null);
});

removeFormat.addEventListener("click", e => {
  document.execCommand("removeFormat", false, null);
});

bold.addEventListener("click", e => {
  document.execCommand("bold", false, null);
});

heading1.addEventListener("click", e => {
  document.execCommand("formatBlock", false, "h1");
});

heading2.addEventListener("click", e => {
  document.execCommand("formatBlock", false, "h2");
});

heading3.addEventListener("click", e => {
  document.execCommand("formatBlock", false, "h3");
});

heading4.addEventListener("click", e => {
  document.execCommand("formatBlock", false, "h4");
});

heading5.addEventListener("click", e => {
  document.execCommand("formatBlock", false, "h5");
});

heading6.addEventListener("click", e => {
  document.execCommand("formatBlock", false, "h6");
});

arial.addEventListener("click", e => {
  document.execCommand("fontName", false, "Arial");
});
