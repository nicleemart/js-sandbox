window.addEventListener("load", function() {
    var tab = document.getElementsByClassName("js-tabs");
    var active = document.getElementsByClassName("tabs__tab--active");
    var content = document.getElementsByClassName("js-content");

    for (i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", changeActiveState.bind(null, i));
    };

    function changeActiveState(index) {
        for (x = 0; x < tab.length; x++) {
            tab[x].classList.remove("tabs__tab--active");
        };
        tab[index].classList.add("tabs__tab--active");
    }

    var goToTab = function(index) {
        if (index !== activeIndex && index >= 0 && index <= tab.length) {
            tab[activeIndex].classList.remove("tabs__tab--active");
            tab[index].classList.add("tabs__tab--active");
            content[activeIndex].classList.remove("js-content--active");
            content[index].classList.add("js-content--active");
            activeIndex = index;
        }
    };

});