document.write("<div>");
document.write("  <table width=\"100%\" border=\"0\">");
document.write("    <tr>");
document.write("      <td style=\"text-align:right; padding-right:1cm;\"><a class=\"top\" href=\"http:\/\/hku.hk\">HKU Home<\/a> | <a href=\"contact.html\" class=\"top\">Contact Us<\/a><\/td>");
document.write("    <\/tr>");
document.write("  <\/table>");
document.write("<\/div>");
document.write("<div class=\"heading\" id=\"heading\">");
document.write("  <table width=\"100%\" border=\"0\">");
document.write("      <tr>");
document.write("        <td width=\"138\"style=\"vertical-align:middle;\"><span class=\"SKLPB\"><img src=\"img\/sklpb.png\" width=\"120\"\/><\/span><\/td><td width=\"951\"><div style=\"font-size:50px;\">生物醫藥技術國家重點實驗室 <\/div>");
document.write("          <hr size=\"2\" noshade=\"noshade\" \/>");
document.write("          THE STATE KEY LABORATORY OF PHARMACEUTICAL BIOTECHNOLOGY<br \/>");
document.write("        THE UNIVERSITY OF HONG KONG<\/td>");
document.write("        <td width=\"138\" style=\"vertical-align:middle;\"><span class=\"hku_logo\"><img src=\"img\/hku_logo.png\" width=\"80\"  \/><\/span><\/td>");
document.write("      <\/tr>");
document.write("  <\/table>");
document.write("  <\/div>");
document.write("<div id=\"btnbarspacing\">");
document.write("<ul>");
document.write("   <li class=\"active\">");
document.write("		<a href=\"index.html\" class=\"btn_bar\" ");
document.write("            style=\"	-webkit-border-bottom-left-radius:10px;");
document.write("                    -moz-border-radius-bottomleft:10px;");
document.write("                    border-bottom-left-radius:10px;\">Home<\/a><\/li>");
document.write("		<li><a href=\"intro.html\" class=\"btn_bar\">Introduction<\/a><\/li>");
document.write("		<li class=\"has-sub\"><a href=\"#\" class=\"btn_bar\">People<\/a>");
document.write("		<ul>");
document.write("         	<li><a href=\"people.html\"><span>Laboratory Members<\/span><\/a><\/li>");
document.write("         	<li class='last'><a href=\"advisory.html\"><span>Academic Advisory Committee<\/span><\/a><\/li>");
document.write("      <\/ul><\/li>");
document.write("		<li><a href=\"research.html\" class=\"btn_bar\">Research<\/a><\/li>");
document.write("		<li><a href=\"events.html\" class=\"btn_bar\">News &amp; Events<\/a><\/li>");
document.write("		<li><a href=\"services.html\" class=\"btn_bar\">Services<\/a><\/li>");
document.write("		<li class=\"last\"><a href=\"resources.html\" class=\"btn_bar\" ");
document.write("            style=\"-webkit-border-top-right-radius:10px;");
document.write("            -moz-border-radius-topright:10px;");
document.write("            border-top-right-radius:10px;\">Useful Links<\/a><\/li><\/ul>");
document.write("<\/div>");

$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});

document.write("<p id=\"back-top\"><a href=\"#top\"><span><\/span>TOP<\/a><\/p>");