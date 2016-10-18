window.addEventListener("load", function() {
    var tab = document.getElementsByClassName("js-tabs");

    for (i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", changeActiveState.bind(null, i));
    };

    function changeActiveState(index) {

        if (tab[index].className === "tabs__tab tabs__tab--inactive") {
            tab[index].className = "tabs__tab tabs__tab--active";

        } else {
            tab[index].className = "tabs__tab tabs__tab--inactive";
        }
    }

});