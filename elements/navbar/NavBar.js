
class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header">
    <nav>
      <div class="nav-container">
        <menu-item mihref="/index.html" miname="Home"></menu-item>
        <!-- <menu-item mihref="/html/apps/apps.html" miname="Apps"></menu-item> -->
        <!-- <menu-item mihref="/html/games/games.html" miname="Gaming"></menu-item> -->
        <!-- <menu-item mihref="/html/electronics/electronics.html" miname="Electronics"></menu-item> -->
        <!-- <menu-item mihref="/html/test.html" miname="Test"></menu-item> -->
      </div>
    </nav>
  </header>
    `
  }
}

customElements.define("nav-bar", NavBar);