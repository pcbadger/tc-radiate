//----------------------
// HELPER METHODS
//----------------------
var utils = {

    //Used to append a timestamp to the url so the result isn't cached
    getTsQSParam : function() {
        return '';
        // return "?&ts=" + new Date().toTimeString();
    }
};

//----------------------
// AUTO SCROLL
//----------------------


function scroll(speed) {
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, speed, function() {
        $(this).animate({ scrollTop: 0 }, speed);
    });
}

// Set scrolling speed, the higher the number, the slower the scroll
speed = 100000;

scroll(speed)
setInterval(function(){scroll(speed)}, speed );

//----------------------
// KNOCKOUTJS EXTENSIONS
//----------------------

//Animate the showing and hiding of a bound element
ko.bindingHandlers.showHide = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        $(element).toggle(ko.utils.unwrapObservable(value));
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        ko.utils.unwrapObservable(value) ? $(element).fadeIn(500) : $(element).fadeOut(300);
    }
};

//Provides a way of accessing properties without them being null
ko.safeObservable = function (initialValue) {
    var result = ko.observable(initialValue);
    result.safe = ko.dependentObservable(function () {
        return result() || {};
    });
    return result;
};
