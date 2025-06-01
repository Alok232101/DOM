document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Started");

  let submit = document.getElementById("submit-name");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);

    const target = event.target;
    console.log(target);

    var tier_name_element = document.getElementById("tier_name");
    var tier_name_value = tier_name_element.value;
    console.log(tier_name_value);

    if (tier_name_value === "") {
      alert("Please enter a tier name!");
      return;
    }

    createTierLists(tier_name_value);
    tier_name_element.value = "";
  });

  // let submit_image = document.getElementById("submit-image");
  // submit_image.addEventListener("click", (event) => {
  //   event.preventDefault();
  //   console.log(event);

  //   const target = event.target;
  //   console.log(target);

  //   var tier_image_element = document.getElementById("tier_image");
  //   var tier_image_url = tier_image_element.value;
  //   console.log(tier_image_url);

  //   if (tier_image_url === "") {
  //     alert("Please enter a tier image Url!");
  //     return;
  //   }

  //   createimage(tier_image_url);
  //   tier_image_element.value = "";
  // });

  let submit_image = document.getElementById("submit-image");
  submit_image.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);

    var tier_image_element = document.getElementById("tier_image");
    var file = tier_image_element.files[0];
    console.log(file);

    if (!file) {
      alert("Please select an image file!");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    createimage(imageUrl);
    tier_image_element.value = ""; // reset input
  });

  // let click_input = document.getElementById("tier_name");
  // click_input.addEventListener("click", () => {
  //   click_input.value = "";
  // });

  function createTierLists(tier_name_value) {
    const newTierList = document.createElement("div");
    newTierList.classList.add("tier_list");

    const tier_list_heading = document.createElement("h2");
    tier_list_heading.classList.add("tier_list_heading");
    tier_list_heading.textContent = tier_name_value;

    const tierListitems = document.createElement("div");
    tierListitems.classList.add("tier_list_item");

    newTierList.appendChild(tier_list_heading);
    newTierList.appendChild(tierListitems);

    const teardiv = document.getElementById("tier_lists_wrapper");
    teardiv.appendChild(newTierList);
  }

  function createimage(tier_image_url) {
    const newTierImage = document.createElement("div");
    newTierImage.classList.add("tier_images");

    const tierImage = document.createElement("img");
    tierImage.classList.add("tier_image");
    // tierImage.setAttribute("src", tier_image_url);
    tierImage.src = tier_image_url;

    newTierImage.appendChild(tierImage);

    const tearimgdiv = document.getElementById("tier_images_wrapper");
    tearimgdiv.appendChild(newTierImage);
  }
});
