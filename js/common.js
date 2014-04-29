$(document).ready(function() {
	
	// select
    
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            select_list.hide();
            $(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
                return false;
            });
            $(".help").on('click', function(event){
                $(".js-select-list").hide();
                event.stopPropagation();
            });
        });

    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });

    // menu accordeon

    function menu(){
    	var menu_item = $(".submenu");
    	var menu_drop = $(".submenu__list");

    	menu_drop.hide();
    	menu_item.on('click', function(){
			if ($(this).find('.menu__link').hasClass('is-active')) {
				$(this).find('.menu__link').removeClass('is-active');
				$(this).find('.submenu__list').slideUp('fast');
			}
			else{
				menu_drop.slideUp('fast');
				menu_item.find('.menu__link').removeClass('is-active');
				$(this).find('.menu__link').addClass('is-active');
				$(this).find('.submenu__list').slideDown('fast');
			};
    	});
    }	
    menu();

    // tabs

    function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         $(this).parents(".js-tab-group").find(".js-tab1").show();
         $(this).find('li:nth-child(1)').addClass('is-active');
            tab_link.on("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).show();
                return false;
            });
        });
    }
    if ($(".js-tab-group").length) {
        tab();
    };

    $(document).click(function(event){
    	$(".js-select-list").slideUp('fast');
	});

});