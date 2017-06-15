export const removeActiveHome = () => {
    let pathname = window.location.pathname
        if (pathname != '/') {
            console.log(document.getElementById('home-link').parentElement)
            document.getElementById('home-link').parentElement.removeAttribute('class')
        } else {
            console.log(document.getElementById('home-link').parentElement)
            document.getElementById('home-link').parentElement.setAttribute('class', 'active')
        }
}