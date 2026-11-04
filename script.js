// Intersection Observer for entrance animations
document.addEventListener('DOMContentLoaded', function () {
    var animElems = document.querySelectorAll('.ksfe-anim, .ksfe-anim-text');
    var config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    var observer = new IntersectionObserver(function (entries, self) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                addanimations(entries[i].target, i);
                self.unobserve(entries[i].target);
            }
        }
    }, config);

    for (var i = 0; i < animElems.length; i++) {
        observer.observe(animElems[i]);
    }

    function addanimations(elem, indx) {
        setTimeout(function () {
            elem.classList.add('anime');
        }, 200 * indx);
    }
});
