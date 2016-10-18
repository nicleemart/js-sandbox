window.addEventListener("load", function() {
    var tab = document.getElementsByClassName("js-tabs");
    var inactive = document.getElementsByClassName("tabs__tab--inactive");
    var active = document.getElementsByClassName("tabs__tab--active");

    for (i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", changeActiveState.bind(null, i));
    };

    function changeActiveState(index) {

        if (inactive[index].className === "tabs__tab tabs__tab--inactive js-tabs") {
            inactive[index].className = "tabs__tab tabs__tab--active js-tabs";

        } else {
            inactive[index].className = "tabs__tab tabs__tab--active js-tabs";
        }
    }

});