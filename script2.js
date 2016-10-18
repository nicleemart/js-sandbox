window.addEventListener("load", function() {
    var tab = document.getElementsByClassName("js-tabs");
    var active = document.getElementsByClassName("tabs__tab--active");

    for (i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", changeActiveState.bind(null, i));
    };

    function changeActiveState(index) {

    	tab[index].classList.add("tabs__tab--active");

    }

});