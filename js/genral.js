

$( "#bookappointmnetdate").datepicker({});

$("#headtime").heapbox({});

$("#footertime").heapbox({});


(function($){
    $('.menu-icon').click(function(e){
    e.preventDefault();
    $('.nav-toggle').toggleClass('active');
    $('.main-menu').toggleClass('active');
    $('.nav-overlay').toggleClass('active');
    })
    })(jQuery);