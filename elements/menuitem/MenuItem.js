class MenuItem extends HTMLElement {
connectedCallback() {

    const mihref = this.getAttribute("mihref");
    const miname = this.getAttribute("miname");

    this.innerHTML = `
        <a href="${mihref}">
          <div class="menu-item" id="home-menu-item">${miname}</div>
        </a>
    `
  }
}

customElements.define("menu-item", MenuItem);