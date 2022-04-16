const image_input = document.querySelector("#image_input");
const display_image = document.querySelector("#display-image");
const predictions = document.querySelector("#predictions");
// predictions.style.display = "none";
predictions.innerHTML = "No image provided yet!";
image_input.addEventListener("change", (event) => {
  image_input.disabled = true;
  // predictions.style.display = "none";
  predictions.innerHTML = "Please wait! Your image is processing...";
  display_image.src = URL.createObjectURL(event.target.files[0]);
  // const url = "http://localhost:8000/api/";
  const url = "https://whispering-earth-53299.herokuapp.com/api/";
  const data = new FormData();
  data.append("id", "3");
  data.append("name", "ImageZ");
  data.append("image", event.target.files[0]);

  axios
    .post(url, data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      // console.log(response);
      // predictions.style.display = "block";
      predictions.innerHTML = response.data.predictions;
      image_input.disabled = false;
    })
    .catch(function (error) {
      // predictions.style.display = "block";
      predictions.innerHTML = "Error occured please try again!";
      image_input.disabled = false;
    });
});
