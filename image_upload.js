const image_input = document.querySelector("#image_input");
const display_image = document.querySelector("#display-image");
image_input.addEventListener("change", (event) => {
  console.log(URL.createObjectURL(event.target.files[0]));
  display_image.src = URL.createObjectURL(event.target.files[0]);
});
