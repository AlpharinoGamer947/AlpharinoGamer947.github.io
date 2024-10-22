
document.addEventListener('DOMContentLoaded', function () {
    // console.log("DOMContentLoaded entered");

    // create navbar tag
    const navbar = document.getElementById('navbar');

    // create navbar container
    const container = document.createElement('div');
    container.className = 'container';

    // add container to navbar
    navbar.appendChild(container);

    // the links in the navigation bar
    // all in an array
    const navlinks = [
        { text: 'Home', link: '/index.html' },
        { text: 'VG', link: '/html/videogames/videogames.alpharinogamer947.html' },
        { text: 'Blender', link: '/html/blender/blender.alpharinogamer947.html' },
        { text: 'Notes', link: '/html/test.html' }
    ]

    // for each loop
    navlinks.forEach(item => {

        // create a div for each of the links
        const navitem = document.createElement('div');
        navitem.className = 'navlink';

        // create link for each item
        const link = document.createElement('a');
        link.textContent = item.text; // set text to div
        link.href = item.link; // set hyper-link

        // add link to div
        navitem.appendChild(link);

        // adds item to container
        container.appendChild(navitem);
    });
});

// 
{/* <div class="container">
        <a href="index.html" class="navlink">
            <div>Home</div>
        </a>
        <a href="#" class="navlink">
            <div>VG</div>
        </a>
    </div> 
*/}