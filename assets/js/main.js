
document.addEventListener('DOMContentLoaded', function() {
    let options = {
        'draggable'     : true,
        'menuWidth'     : 100,
        'closeOnClick'  : true,
        'preventScrolling' : false
    
    };
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });