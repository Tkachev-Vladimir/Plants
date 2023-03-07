
// function showHide(city) {
//   let obj = document.getElementById(city);
//   if (obj.style.display != "block") {
//     obj.style.display = "block";
//   } else {
//     obj.style.display = "none";
//   }
// }
const btn_title = document.querySelector(".title_button");
btn_title.addEventListener("click", () => {
  btn_title.classList.toggle("active");
});
//Burger
document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger_three").classList.toggle("active");
  document.querySelector(".burger_two").classList.toggle("active");
  document.querySelector(".nav_list").classList.toggle("active");
  document.querySelector("#nav").classList.toggle("active");
  document.querySelector(".burger").classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav_item");
navItems.forEach((el) =>
  el.addEventListener("click", () => {
    document.querySelector(".burger_three").classList.remove("active");
    document.querySelector(".burger_two").classList.remove("active");
    document.querySelector(".nav_list").classList.remove("active");
    document.querySelector("#nav").classList.remove("active");
    document.querySelector(".burger").classList.remove("active");
  })
);

window.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest(".burger")) {
    document.querySelector(".burger_three").classList.remove("active");
    document.querySelector(".burger_two").classList.remove("active");
    document.querySelector(".nav_list").classList.remove("active");
    document.querySelector("#nav").classList.remove("active");
    document.querySelector(".burger").classList.remove("active"); // если этот элемент или его родительские элементы не окно навигации и не кнопка
  }
});
//Burger

// Blur
const plantings = document.querySelectorAll(".service_item_planting");
const lawnCares = document.querySelectorAll(".service_item_lawnCare");
const gardens = document.querySelectorAll(".service_item_garden");

const btns = document.querySelectorAll(".btn");
const btn_contact = document.querySelector(".btn_contact");


btns.forEach(el => el.addEventListener('click',function(){
  el.classList.toggle('active')



  for(let i= 0; i <btns.length; i++){
    if(btns[0].classList.contains('active') && btns[1].classList.contains('active')){
      btns[2].classList.remove('active')
    }
    
  }
}))


////////////
// btn_contact.addEventListener("click", () => {
//   btn_contact.classList.toggle("active");
// });

// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", (event) => {
//     for (let o = 0; o < btns.length; o++) {
      
//       btns[o].classList.remove("active");
//     }
//   });
// }
// btns.forEach((el) => {
//   el.addEventListener("click", () => {
//     el.classList.toggle("active");
//   });
// });
const garden = (event) => {

  if(btns[0].classList.contains('active')){

    plantings.forEach((el) => {
      el.classList.add("active");
    });
    lawnCares.forEach((lawn) => {
      lawn.classList.add("active");
    });
    gardens.forEach((garden) => {
      garden.classList.remove("active");
    });
  }
  else {
     plantings.forEach((el) => {
       el.classList.remove("active");
     });
     lawnCares.forEach((lawn) => {
       lawn.classList.remove("active");
     });
  }
};



const lawnCare = (event) => {
  if(btns[1].classList.contains('active')){

    gardens.forEach((el) => {
      el.classList.add("active");
    });
    plantings.forEach((el) => {
      el.classList.add("active");
    });
    lawnCares.forEach((lawn) => {
      lawn.classList.remove("active");
    });
  }else {
     gardens.forEach((el) => {
       el.classList.remove("active");
     });
     plantings.forEach((el) => {
       el.classList.remove("active");
     });
  }
};
const planting = (event) => {
  if(btns[2].classList.contains('active')){

    gardens.forEach((el) => {
      el.classList.add("active");
    });
    lawnCares.forEach((lawn) => {
      lawn.classList.add("active");
    });
    plantings.forEach((el) => {
      el.classList.remove("active");
    });
  }else if( !btns[2].classList.contains('active')){

    gardens.forEach((el) => {
      el.classList.remove("active");
    });
    lawnCares.forEach((lawn) => {
      lawn.classList.remove("active");
    });
  }
  
};
// Blur
btns[0].addEventListener('click',garden)
btns[1].addEventListener('click',lawnCare)
btns[2].addEventListener('click',planting)

//Price
const box = document.querySelectorAll(".item_box");
const price_btn = document.querySelectorAll(".price_btn");
const acc = document.querySelectorAll(".acc");
const item_box = document.querySelectorAll(".item_box");
const price_items = document.querySelector(".prices_items");
const order = document.querySelectorAll(".order");
const sections = document.querySelector("#section_contact");

// активная кнопка на секцию старкт
order.forEach((el) => {
  el.addEventListener("click", () => {
    sections.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// секция прайса начало
item_box.forEach((el) =>
  el.lastElementChild.addEventListener("click", function () {
    el.lastElementChild.classList.toggle("active");

    for (let i = 0; i < acc.length; i++) {
      acc.forEach((el) => el.classList.remove("active"));
    }
    for (let i = 0; i < item_box.length; i++) {
      item_box.forEach((lele) => lele.classList.remove("active"));
    }
    for (let i = 0; i < price_btn; i++) {
      price_btn.forEach((el) => el.classList.remove("active"));
    }

    if (el.lastElementChild.classList.contains("active")) {
      el.classList.add("active");
      el.nextElementSibling.classList.add("active");
      price_items.classList.add("active");
    } else {
      el.classList.remove("active");
      el.nextElementSibling.classList.remove("active");
      price_items.classList.remove("active");
    }

    console.log(el.nextElementSibling.classList.contains("active"));
  })
);
//Price

//Dropmenu_city
const btn = document.querySelector(".contact_btn");
const dropdown = document.querySelector(".dropdown");
const dropCity = document.querySelectorAll(".drop_city");
const city = document.querySelector(".city");
const drop_content = document.querySelector(".drop_content");
const cont_item_box = document.querySelector(".contact_item_box");
const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");

dropCity.forEach((el) =>
  el.addEventListener("click", (event) => {
    el.classList.remove("active");

    for (let i = 0; i < dropCity.length; i++) {
      dropCity.forEach((el) => el.classList.remove("active"));
    }

    el.classList.toggle("active");

    if (el.classList.contains("active")) {
      cont_item_box.classList.add("active");
      dropdown.classList.remove("active");
      city.innerHTML = event.target.innerHTML;
    }
  })
);

btn.addEventListener("click", (dropOpen) => {
  dropdown.classList.toggle("active");
  btn.classList.toggle("active");
  if (dropdown.classList.contains("active")) {
    card.forEach((el) => el.classList.remove("active"));
  }
});

for (let i = 0; i < dropCity.length; i++) {
  dropCity[i].addEventListener("click", () => {
    if (dropCity[0].classList.contains("active")) {
      cont_item_box.classList.remove("active");
    }

    if (dropCity[1].classList.contains("active")) {
      card[0].classList.toggle("active");
    } else {
      card[0].classList.remove("active");
    }

    if (dropCity[2].classList.contains("active")) {
      card[1].classList.toggle("active");
    } else {
      card[1].classList.remove("active");
    }

    if (dropCity[3].classList.contains("active")) {
      card[2].classList.toggle("active");
    } else {
      card[2].classList.remove("active");
    }

    if (dropCity[4].classList.contains("active")) {
      card[3].classList.toggle("active");
    } else {
      card[3].classList.remove("active");
    }
  });
}
//Dropmenu_city
