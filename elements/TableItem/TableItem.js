class TableItem extends HTMLElement {
  connectedCallback() {

    const tiname = this.getAttribute("tiname") || "#";
    const tistorage = this.getAttribute("tistorage") || "/res/apps/no-image.svg";
    const titime = this.getAttribute("titime") || "-";
    const tifragile = this.getAttribute("tifragile") || "-";

    if(titime === "y" || titime === "yes") {
      titime = "Yes";
    }
    if(tifragile === "y" || tifragile === "yes") {
      tifragile = "Yes";
    }


    // On page load:
    tbody.innerHTML += tableItemHTML({
      tiname: "Medicine",
      tistorage: "10",
      titime: "",
      tifragile: ""
    });

  }
}

customElements.define("table-item", TableItem);


// JavaScript: Generate HTML string from properties
function tableItemHTML({ tiname, tistorage, titime, tifragile }) {
  return `
  <tr>
  <td>${tiname}</td>
  <td>${tistorage}</td>
  <td>${titime || '-'}</td>
  <td>${tifragile || '-'}</td>
  </tr>`
  ;
}