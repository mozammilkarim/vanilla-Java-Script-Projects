const dishes = [{
    name: 'ButterMilk Pancake',
    img: '#',
    cost: 50,
    detail: 'lorem12',
    category: 'breakfast'
}, {
    name: 'ButterMilk raita',
    img: '#',
    cost: 15,
    detail: 'lom12',
    category: 'lunch'
}, {
    name: 'Milk',
    img: '#',
    cost: 30,
    detail: 'lore1',
    category: 'shakes'
}];

const btnContainer = document.querySelector(".btn-Container");

const sectionCenter=document.getElementById('sectionCenter');

// display all items and buttons when page loads
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(dishes);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // here item denote the items of dishes array
        return `<article class="menu-item">
          <img src=${item.img} alt=${item.name} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.name}</h4>
              <h4 class="price">$${item.cost}</h4>
            </header>
            <p class="item-text">
              ${item.detail}
            </p>
          </div>
        </article>`;
    })
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    // this function is built to make dynamic buttons
    // reduce function also maps but it lets u store
    // only unique  values after comparing with the
    // second parameter passed
    // values firstly include 'all' passed
    const categories = dishes.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
      // dynamically adding buttons
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    // console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = dishes.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          displayMenuItems(dishes);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }