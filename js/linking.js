document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('.para');

    // Add more words with their respective links (or -> '#') in the array of text and links
    const words = [
        { text: 'Bangboo', link: '/html/videogames/zenlesszonezero/bangboos.zzz.vg.alpharinogamer947.html' },
        { text: 'Random Play', link: '#' },
        { text: 'Sixth Street', link: '#' },
        // {},
        { text: 'Remodelling Shop', link: '#' }
    ]
    // Run through the paragraphs
    paragraphs.forEach(paragraph => {

        // run through the words
        words.forEach(word => {
            // paragraph.textContent.indexOf(word);
            if (paragraph.textContent.indexOf(word) !== -1) {
                console.log(word.text.length)
            }
            // console.log('paragraph loop --> word loop');
        });
    });
});