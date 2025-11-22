class ItemCard extends HTMLElement {
  connectedCallback() {

    const ichref = this.getAttribute("ichref") || "#";
    const icsrc = this.getAttribute("src") || "/res/apps/no-image.svg";
    const icwidth = this.getAttribute("icwidth") || "125px";
    const icname = this.getAttribute("icname");

    this.innerHTML = `
      <a href="${ichref}" target="_blank">
        <div class="item-card">
          <img
            src="${icsrc}"
            alt=""
            class="item_card_icon"
            width="${icwidth}"
          />
          <h3 class="item_card_name">${icname}</h3>
        </div>
      </a>
    `
  }
}

customElements.define("item-card", ItemCard);