
if(!localStorage.getItem('s-blog.filter')) {
  localStorage.setItem('s-blog.filter', 'all')
}


function sortMeBy(arg, sel, elem, order) {
    var $selector = $(sel),
    $element = $selector.children(elem);
    $element.sort(function(a, b) {
            var an = parseInt(a.getAttribute(arg)),
            bn = parseInt(b.getAttribute(arg));
            if (order == "asc") {
                    if (an > bn)
                    return 1;
                    if (an < bn)
                    return -1;
            } else if (order == "desc") {
                    if (an < bn)
                    return 1;
                    if (an > bn)
                    return -1;
            }
            return 0;
    });
    $all = $(".grid-item").css({'order': 0}).length
    for(var i = 0; i < $element.length; i++) {
        $order = $all - i;
        $($element[i]).css({'order' : '-' + $order})
        $(".grid-item").addClass('is-animated').fadeIn()
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let options = {
        'draggable'     : true,
        'menuWidth'     : 100,
        'closeOnClick'  : true,
        'preventScrolling' : false
    
    };
    var elems = document.querySelectorAll('.sidenav');
    window.instances = M.Sidenav.init(elems, options);
})

var $filters = $('.order-seter.order-button'),
$boxes = $('.grid-item');

$filters.on('click', function(e) {
e.preventDefault();
var $this = $(this);

var $filterColor = $this.attr('data-order');
var last = localStorage.getItem('s-blog.filter')
if(last == $filterColor) {
  window.instances[0].close()
  return
}

localStorage.setItem('s-blog.filter', $filterColor)

if ($filterColor == 'all') {
  $boxes.removeClass('is-animated')
    .fadeOut().promise().done(function() {
      $boxes.addClass('is-animated').fadeIn();
    });
} else {
  $boxes.removeClass('is-animated')
    .fadeOut().promise().done(function() {
      $boxes.filter('.' + $filterColor)
        .addClass('is-animated').fadeIn();
    });
}
  window.instances[0].close()
});
