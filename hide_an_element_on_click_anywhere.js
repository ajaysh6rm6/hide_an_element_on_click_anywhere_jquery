$('.app_comment_setting_icon').click(function (event) {
        event.stopPropagation();
        $('.app_setting_drop').toggle();
    });
	
//START: HIDE ALL TOGGLE DIV
    $(document).mouseup(function () {            
        $('.app_setting_drop:visible').hide();
    });
    //END: HIDE ALL TOGGLE DIV	
	
	
	