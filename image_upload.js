const image_input = document.querySelector("#image_input");
const display_image = document.querySelector("#display-image");
image_input.addEventListener("change", (event) => {
  console.log(event.target.files[0]);
  // console.log(URL.createObjectURL(event.target.files[0]));
  display_image.src = URL.createObjectURL(event.target.files[0]);

  const url = "http://127.0.0.1:8000/api/";
  const data = event.target.files[0];
  // const otherParams = {
  //   headers: { "content-type": "text/plain" },
  //   body: JSON.stringify(data),
  //   method: "POST",
  // };
  // fetch(url, otherParams)
  //   .then((data) => data.json())
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  let xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  xhr.send(JSON.stringify(data));

  // axios
  //   .post(url, JSON.stringify(data), {
  //     headers: {
  //       "Content-Type": "application/json",
  //       // "Access-Control-Allow-Origin": "*",
  //       // "Access-Control-Allow-Headers":
  //       //   "Origin, X-Requested-With, Content-Type, Accept",
  //       // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //     },
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
});
