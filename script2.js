window.addEventListener("load", function() {

    var tabs = document.getElementsByClassName("js-tabs");

    var active = document.getElementsByClassName("tabs__tab--active");

    var contents = document.getElementsByClassName("js-content");

    for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(event) {
            changeActiveState(event.target)
            // goToTab();
        });
    };

    function changeActiveState(tab) {
        for (x = 0; x < tabs.length; x++) {
            tabs[x].classList.remove("tabs__tab--active");
        };

        tab.classList.add("tabs__tab--active");
        tab.dataset.content;
        var content = document.querySelector("[data-content-for=" + tab.dataset.content + "]");

        for (var n = contents.length - 1; n >= 0; n--) {
            contents[n].classList.remove("js-content--active");
        }

        content.classList.add("js-content--active");
    };

    // function goToTab() {	
    //     }
    // };

});