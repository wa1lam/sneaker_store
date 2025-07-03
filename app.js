const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 459,
    colors: [
      {
        code: "pink",
        img: "./img/Product/airforce.png",
      },
      {
        code: "hotpink",
        img: "./img/Product/airforce2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Dunk Low",
    price: 105,
    colors: [
      {
        code: "pink",
        img: "./img/Product/dunklow.png",
      },
      {
        code: "brick",
        img: "./img/Product/dunklow2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Dunk Low SE",
    price: 609,
    colors: [
      {
        code: "purple",
        img: "./img/Product/dunklowse.png",
      },
      {
        code: "pink",
        img: "./img/Product/dunklowse2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Court Borough Low Recraft",
    price: 215 ,
    colors: [
      {
        code: "pink",
        img: "./img/Product/CBLR.png",
      },
      {
        code: "hotpink",
        img: "./img/Product/CBLR2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Air Max Portal",
    price: 509,
    colors: [
      {
        code: "pink",
        img: "./img/Product/Air_max_portal.png",
      },
      {
        code: "lavender",
        img: "./img/Product/Air_max_portal2.png",
      },
    ],
  },
  {
    id: 6,
    title: "Blazer",
    price: 99,
    colors: [
      {
        code: "white",
        img: "./img/Product/blazer.png",
      },
      {
        code: "green",
        img: "./img/Product/blazer2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

