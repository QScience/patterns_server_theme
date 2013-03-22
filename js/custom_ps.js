jQuery(document).ready(function() {
	jQuery('.breadcrumb').css('display', 'none');
	jQuery('.page-header').css('display', 'none');

	//rate
	var rate_link = jQuery(".pattern_row .rate-link");
	jQuery.each( rate_link , function(ix,ele){
		if (jQuery(ele).text() == "Unlike") {
			jQuery(ele).addClass('rate-link-t');
		}
	});
    rate_link.click(function() {
		if (jQuery(this).text() == "Like") {
			jQuery(this).text("Unlike");
			//jQuery(this).css( 'background-image', 'url("../img/unlike01.png" )');
			jQuery(this).addClass('rate-link-t');
			var rate_times = jQuery(this).parent().prev().prev();
			var numb = Number(rate_times.text()) + 1; 
			rate_times.children().text(numb);
		}
		else {
			jQuery(this).text("Like");
			jQuery(this).removeClass('rate-link-t');
			var rate_times = jQuery(this).parent().prev().prev();
			var numb = Number(rate_times.text()) - 1; 
			rate_times.children().text(numb);
		}

        var url_div = jQuery(this).attr("href");
        url_div += " #one_pattern_div";
        jQuery("#one_pattern_div").load(url_div); 
        return false;
    });

});
