$(document).ready(function() {		
	/* MPC 1/11/2012
	   .not-logged-in = only anonymous users
	   .drupal-tabs = the mini panel tabs
		
	   when clicked run the click rule code
	   if access is denied, send to velvet rope
	*/
	$('.not-logged-in .drupal-tabs').bind('tabsselect', function(event, ui) {	
		var allow = true;
		$.ajax({
			url: "../click_rule_ajax",
			async: false,
			dataType: "json",
			success: function(data){
				$.each(data, function(key, val) {
					if(key == 'response' && val == false) {						
						allow = false;
					}
				});
			}	
		});
		if(!allow){
			event.preventDefault();
			window.location ='/velvet-rope';
		}
	});
	
	//changed 'parent()' to 'parents()' so the code will still work with devel themer enabled
	var hsubmenu = $("#help-menu-item").parents("li").find("ul.menu");
	var wsubmenu = $("#welcome-message").parents("li").find("ul");
		
	//prepare welcome submenu		
	wsubmenu.css('margin-left', '163px');
	wsubmenu.css('width', '150px');
	wsubmenu.find("li, a").css('float', 'left');
	wsubmenu.find("li, a").css('display', 'block');
	wsubmenu.find("li, a").css('clear', 'both');
		
	//prepare help sub-menu
	hsubmenu.append('<li class="contact-info"> <h3>Call Us</h3> <p><strong>USA</strong><br />(800) 375-4685</p><p><strong>International</strong><br />+1 (630) 734-4610</p></li>');
	
	
	$("#help-menu-item").click(function(){
		wsubmenu.slideUp();
		$('#utility-map-modal').slideUp(); 
		hsubmenu.slideToggle(); 
		return false;
	});
	hsubmenu.mouseleave(function(){
		hsubmenu.slideUp();
	});
	
	$("#welcome-message").click(function(){	
		hsubmenu.slideUp();
		$('#utility-map-modal').slideUp();	
		wsubmenu.slideToggle(); 
		return false;
	});
	wsubmenu.mouseleave(function(){
		wsubmenu.slideUp();
	});
	
	
	$("#navigation div.content ul.nice-menu").addClass("equal-widths");
	$(".equal-widths").equalWidths(); 
	//$(".equal-heights").equalHeights(); 
	
});

$(function(evt){	
	$("#utility-search-label").overlabel();
	
	$("#map-menu-item").bind("click",function(){
		$("#help-menu-item").parents("li").find("ul.menu").slideUp();
		$("#welcome-message").parents("li").find("ul").slideUp();
		if ($('#utility-map-modal').length == 0){
            $("#utility-bar").append('<div id="utility-map-modal"></div>');
            $("<iframe frameborder=0 scrolling='no' id='utility-map-iframe'" + ($.browser.msie ? " allowtransparency='true'" : '') + "/>")
            .attr({src: "http://www.andrewharper.com/regions/worldwide?map=true", name: "utility-map-iframe"})
            .appendTo("#utility-map-modal");
            $("#utility-map-modal").slideDown(function(){
                $(this).block(block_settings);
                $('iframe#utility-map-iframe').load(function(){
                    $("#utility-map-modal").unblock();  
                });
            });
        }else{
            $('#utility-map-modal').slideToggle();
        }
        return false;
	});	
	
    // Online booking/Request rate form
    try {		
		$('#fromdate').datepicker({
			showOn: "button",
			buttonImage: "/sites/all/themes/andrew_harper/images/AH/date-picker.png",
			buttonImageOnly: true,
			minDate: +3
		});
		$('#todate').datepicker({
			showOn: "button",
			buttonImage: "/sites/all/themes/andrew_harper/images/AH/date-picker.png",
			buttonImageOnly: true
		});
                
        // locked articles go to /login
        $('#hideaway-reports .locked').bind('click', function(e){
            window.location = "/login";
        }).css('cursor', 'pointer');
    } catch(e) {}
 
    $('#request-rate').submit(function(){
		var fromDate, toDate, plus3Date;
		fromDate = new Date($('#fromdate').val());
		toDate = new Date($('#todate').val());
		
		// Stupid Javascript date math...
		plus3Date = new Date();
		plus3Date = new Date(plus3Date.getFullYear(), plus3Date.getMonth(), plus3Date.getDate());
		plus3Date = new Date(plus3Date.getTime() + (1000 * 60 * 60 * 24 * 3));
		
		if(fromDate > toDate){
			alert("The Start Date may not be greater than the End Date");
			return false;
		}
		
		if(fromDate < plus3Date){
			alert("Online booking requests must be made at least 48 hours prior to your desired travel date.");
			return false;
		}
		
		//MPC 4/23/2012 SwiftTrip deep link	
		var curr_date = fromDate.getDate();
		var curr_month = fromDate.getMonth() + 1; //months are zero based
		var curr_year = fromDate.getFullYear();
		var fdate = curr_month + "-" + curr_date + "-" + curr_year;
		
		curr_date = toDate.getDate();
		curr_month = toDate.getMonth() + 1; //months are zero based
		curr_year = toDate.getFullYear();
		var tdate = curr_month + "-" + curr_date + "-" + curr_year;
		
		var link = '/get_swifttrip_link/'+$('#fname').val()+'/'+$('#lname').val()+'/'+$('#hid').val()+'/'+$('#email').val()+'/'+fdate+'/'+tdate;
		$.getJSON(link, function(data) {
			$.each(data, function(key, val) {
				window.open(val,'_blank','status=yes,menubar=yes,scrollbars=yes,resizable=yes,toolbar=yes,width=1000,height=600');
				
			});
		});
		
		
		
		//MPC 3/20/2012
		// replaced original form action with the value in the "param" field (in andrewharper.module)
		// so that it doesn't show up in search results - hidden fields are shown...
		/* I'm not sure that helped and this is broken on prod so reverting for now
		window.open($(this).attr('action') + "&roomcount=" +$(this).find('#roomcount').val() 
				+ "&fromdate=" +$(this).find('#fromdate').val() + "&todate=" +$(this).find('#todate').val() 
    			+ "&Adults=" +$(this).find('#Adults').val() + "&Children=" +$(this).find('#Children').val() 
				+ "&MemberID=" +$(this).find('#MemberId').val());
				
		//alert($(this).attr('action'));
		*/
		
		//original
		/*
		window.open($(this).find('#params').val() + "&roomcount=" +$(this).find('#roomcount').val() 
				+ "&fromdate=" +$(this).find('#fromdate').val() + "&todate=" +$(this).find('#todate').val() 
    			+ "&Adults=" +$(this).find('#Adults').val() + "&Children=" +$(this).find('#Children').val() 
				+ "&MemberID=" +$(this).find('#MemberId').val());
    	*/
		return false;
	});   
});

