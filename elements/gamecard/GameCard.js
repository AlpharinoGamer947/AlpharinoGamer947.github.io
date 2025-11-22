class GameCard extends HTMLElement {
  connectedCallback() {
    const gchref = this.getAttribute("gchref") || "#";
    const gcsrc =  this.getAttribute("src") || "/res/apps/no-image.svg";
    const gcimgwidth = this.getAttribute("width");
    const gcname = this.getAttribute("gcname");

    this.innerHTML = `

      <a href="${gchref}">
        <div class="game-card">
          <div class="image-card">
            <img
              src="${gcsrc}"
              alt=""
              width="${gcimgwidth}"
              class="game-card-img"
            />
          </div>
          <div class="game-card-name">${gcname}</div>
        </div>
      </a>
    `
  }
}

customElements.define("game-card", GameCard);