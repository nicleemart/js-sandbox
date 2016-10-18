window.addEventListener("load", function() {
    var tab = document.getElementsByClassName("js-tabs");
    var active = document.getElementsByClassName("tabs__tab--active");

    for (i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", changeActiveState.bind(null, i));
    };

    function changeActiveState(index) {

    for (x = 0; x < tab.length; x++) {
    	tab[x].classList.remove("tabs__tab--active");
    };
    console.log(index);
    	tab[index].classList.add("tabs__tab--active");

    }

});