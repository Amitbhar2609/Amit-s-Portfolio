const addActiveClass = () => {
    const list = document.querySelectorAll('.list');

    //active the class and handle the navbar icon
    function activeLink() {
        list.forEach(e => {
            e.classList.remove('active');
        });
        this.classList.add('active');
    }
    // whenever someone click on the navbar icon it call the function 
    list.forEach(elem => {
        elem.addEventListener('click', activeLink)
    })
};
export {
    addActiveClass
}