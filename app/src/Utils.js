export const removeActiveHome = () => {
    let pathname = window.location.pathname
        if (pathname != '/') {
            document.getElementById('home-link').parentElement.removeAttribute('class')
        } else {
            document.getElementById('home-link').parentElement.setAttribute('class', 'active')
        }
}

export const jacy_images =
    [{
            src: "http://i.imgur.com/QPLiSkq.jpg",
            thumbnail: "http://i.imgur.com/QPLiSkq.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 300,
            // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
            src: "http://i.imgur.com/K64NDEu.jpg",
            thumbnail: "http://i.imgur.com/K64NDEu.jpg",
            thumbnailWidth: 520,
            thumbnailHeight: 350
    },
    
    {
            src: "http://i.imgur.com/OPqiQQ1.jpg",
            thumbnail: "http://i.imgur.com/OPqiQQ1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            src: "http://i.imgur.com/Br44HJv.jpg",
            thumbnail: "http://i.imgur.com/Br44HJv.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
            src: "http://i.imgur.com/KfS19ts.png",
            thumbnail: "http://i.imgur.com/KfS19ts.png",
            thumbnailWidth: 320,
            thumbnailHeight: 250
    },
    {
            src: "http://i.imgur.com/i41nAqF.jpg",
            thumbnail: "http://i.imgur.com/i41nAqF.jpg",
            thumbnailWidth: 300,
            thumbnailHeight: 212
    },
    {
            src: "http://i.imgur.com/nJ5XbuS.png",
            thumbnail: "http://i.imgur.com/nJ5XbuS.png",
            thumbnailWidth: 350,
            thumbnailHeight: 230
    },
    {
            src: "http://i.imgur.com/PzNYmGy.jpg",
            thumbnail: "http://i.imgur.com/PzNYmGy.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 230
    },
    {
            src: "http://i.imgur.com/nA0hVAR.jpg",
            thumbnail: "http://i.imgur.com/nA0hVAR.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 230
    }]
