/* TOGGLE MENU */
const addToggleMenu = i => {
  // target the input element
  const input = document.getElementById(`action__input_${i}`);
  // click handler
  const toggleMenu = event => {
    // target the menu element
    const menu = document.getElementById(`action__menu_${i}`);
    menu.classList.toggle(`hidden`);
    document.querySelectorAll(".action__menu").forEach(cell => {
      if (cell.id !== `action__menu_${i}`) {
        cell.classList.add('hidden');
      }
    })
  };
  // bind the event
  input.addEventListener("click", toggleMenu);
}
addToggleMenu(1);

/* GENERATE ROWS */
// target the table body
const tableBody = document.querySelector(".table__body");
// add rows to table body
for (let i = 2; i < 20; i++) {
  let tableRow = document.createElement("tr");
  tableRow.classList.add("table__row");
  tableRow.innerHTML = `
          <td class="table__cell table__cell--checkbox">
            <input type="checkbox" />
          </td>
          <td class="table__cell table__cell--id">ID</td>
          <td class="table__cell table__cell--name">Name</td>
          <td class="table__cell table__cell--advertiser">
            <span class="cell__advertiser__line">Advertiser</span>
            <span class="cell__advertiser__line cell__advertiser__line--group">Group</span>
          </td>
          <td class="table__cell table__cell--description">Description</td>
          <td class="table__cell table__cell--price">Price</td>
          <td class="table__cell table__cell--starttime">Start Time</td>
          <td class="table__cell table__cell--endtime">End Time</td>
          <td class="table__cell table__cell--action">
            <img class="cell__action__icon" id="action__input_${i}" alt="menu" />
            <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_${i}" id="action__menu_${i}">
              <menu class="menu__body">
                <menuitem class="menu__item">
                  <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg" class="menu__item__icon" />
                  <span>Duplicate</span>
                </menuitem>
                <menuitem class="menu__item">
                <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg" class="menu__item__icon" />
                  <span>Edit</span>
                </menuitem>
                <menuitem class="menu__item">
                <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg" class="menu__item__icon" />
                <span>Delete</span>
                </menuitem>
              </menu>
            </div>
          </td>`;
  tableBody.append(tableRow);
  addToggleMenu(i);
}

/* DARK MODE */
// target the switch element
const darkModeToggle = document.getElementById("dark__mode__toggle");
// toggle handler
const darkModeToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
// bind the event
darkModeToggle.addEventListener("change", darkModeToggleHandler);


/* CHECKBOX BACKGROUND */
const checkboxCells = document.querySelectorAll(".table__cell--checkbox");

const checkRowHandler = event => {
  if (event.target.checked) {
    event.target.parentNode.parentNode.classList.add("table__cell--checked")
  } else {
    event.target.parentNode.parentNode.classList.remove("table__cell--checked")
  }
}

checkboxCells.forEach(cell => {
  cell.children[0].addEventListener("change", checkRowHandler);
})