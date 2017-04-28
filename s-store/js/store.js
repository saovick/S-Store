function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);



$(document).ready(function(){
	$(".palet-gear").on('click', function(){
		$(".color-palet").toggleClass("color-paletext",1000);
		
		
	});
	$('link[href*="nav-green.css"]').prop('disabled', false);
        $('link[href*="nav-blue.css"]').prop('disabled', true);
		$('link[href*="nav-orng.css"]').prop('disabled', true);
	    $('link[href*="nav-pnk.css"]').prop('disabled', true);
		$('link[href*="nav-purp.css"]').prop('disabled', true);
		$('link[href*="nav-teal.css"]').prop('disabled', true);
	$(".clr-blu").on('click',function(){
		$('link[href*="nav-green.css"]').prop('disabled', true);
        $('link[href*="nav-blue.css"]').prop('disabled', false);
		$('link[href*="nav-orng.css"]').prop('disabled', true);
		$('link[href*="nav-pnk.css"]').prop('disabled', true);
		$('link[href*="nav-purp.css"]').prop('disabled', true);
		$('link[href*="nav-teal.css"]').prop('disabled', true);
		$(".fagear").addClass("fagearbl");
		$(".fa-logo").addClass("fa-logobl");
		 $(".msk").addClass("mskbl");
		 $(".palet-head").addClass("palet-headbl");
		$(".i-dd").addClass("abl");
		$(".faclh").addClass("faclhbl");
		
		$(".fa-logo-media").addClass("fa-logo-mediabl");
		$(".carou-item1-btn").addClass("carou-item1-btnbl");
	    $(".carou-item2-btn").addClass("carou-item2-btnbl");
	    $(".carou-item3-btn").addClass("carou-item3-btnbl");
		$(".product-display-title2 h5").addClass("h5bl");
		$(".orderbtn").addClass("orderbtnbl");
		$(".about-btn").addClass("about-btnbl");
	
		$(".btnsubs").addClass("btnsubsbl");
		$(".btnop").addClass("btnopbl");
		$(".section-assurance").addClass("assurancebl");
		$(".feedbackbtn").addClass("feedbackbtnbl");
		$(".footerleft-container").addClass("footerleft-containerbl");
		$(".btntc").addClass("btntcbl");
		
		
		
		
		
		$(".fagear").removeClass("fagearteal");
		$(".fa-logo").removeClass("fa-logoteal");
		
		$(".palet-head").removeClass("palet-headteal");
		$(".palet-head").removeClass("palet-headpurp");
		$(".palet-head").removeClass("palet-headpnk");
		$(".palet-head").removeClass("palet-headorng");
		
		
		$(".i-dd").removeClass("ateal");
        $(".msk").removeClass("mskteal");
		$(".fa-logo-media").removeClass("fa-logo-mediateal");
		$(".carou-item1-btn").removeClass("carou-item1-btnteal");
	    $(".carou-item2-btn").removeClass("carou-item2-btnteal");
	    $(".carou-item3-btn").removeClass("carou-item3-btnteal");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5teal");
		$(".orderbtn").removeClass("orderbtnteal");
		$(".about-btn").removeClass("about-btnteal");
	    $(".faclh").removeClass("faclhteal");
		
		$(".btnsubs").removeClass("btnsubsteal");
		$(".btnop").removeClass("btnopteal");
		$(".section-assurance").removeClass("assuranceteal");
		$(".feedbackbtn").removeClass("feedbackbtnteal");
		$(".footerleft-container").removeClass("footerleft-containerteal");
		$(".btntc").removeClass("btntcteal");
		
		
		
		
		$(".fagear").removeClass("fagearpurp");
		$(".fa-logo").removeClass("fa-logopurp");
		
		$(".i-dd").removeClass("apurp");
        $(".msk").removeClass("mskpurp");
		$(".fa-logo-media").removeClass("fa-logo-mediapurp");
		$(".carou-item1-btn").removeClass("carou-item1-btnpurp");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpurp");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpurp");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5purp");
		$(".orderbtn").removeClass("orderbtnpurp");
		$(".about-btn").removeClass("about-btnpurp");
	    $(".faclh").removeClass("faclhpurp");
		
		$(".btnsubs").removeClass("btnsubspurp");
		$(".btnop").removeClass("btnoppurp");
		$(".section-assurance").removeClass("assurancepurp");
		$(".feedbackbtn").removeClass("feedbackbtnpurp");
		$(".footerleft-container").removeClass("footerleft-containerpurp");
		$(".btntc").removeClass("btntcpurp");
		
		
		
		$(".fagear").removeClass("fagearpnk");
		$(".fa-logo").removeClass("fa-logopnk");
		
		$(".i-dd").removeClass("apnk");
        $(".msk").removeClass("mskpnk");
		$(".fa-logo-media").removeClass("fa-logo-mediapnk");
		$(".carou-item1-btn").removeClass("carou-item1-btnpnk");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpnk");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpnk");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5pnk");
		$(".orderbtn").removeClass("orderbtnpnk");
		$(".about-btn").removeClass("about-btnpnk");
	    $(".faclh").removeClass("faclhpnk");
		
		$(".btnsubs").removeClass("btnsubspnk");
		$(".btnop").removeClass("btnoppnk");
		$(".section-assurance").removeClass("assurancepnk");
		$(".feedbackbtn").removeClass("feedbackbtnpnk");
		$(".footerleft-container").removeClass("footerleft-containerpnk");
		$(".btntc").removeClass("btntcpnk");
		
		
		
		
		$(".fagear").removeClass("fagearorng");
		$(".fa-logo").removeClass("fa-logoorng");
		
		$(".i-dd").removeClass("aorng");
        $(".msk").removeClass("mskorng");
		$(".fa-logo-media").removeClass("fa-logo-mediaorng");
		$(".carou-item1-btn").removeClass("carou-item1-btnorng");
	    $(".carou-item2-btn").removeClass("carou-item2-btnorng");
	    $(".carou-item3-btn").removeClass("carou-item3-btnorng");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5orng");
		$(".orderbtn").removeClass("orderbtnorng");
		$(".about-btn").removeClass("about-btnorng");
	    $(".faclh").removeClass("faclhorng");
		
		$(".btnsubs").removeClass("btnsubsorng");
		$(".btnop").removeClass("btnoporng");
		$(".section-assurance").removeClass("assuranceorng");
		$(".feedbackbtn").removeClass("feedbackbtnorng");
		$(".footerleft-container").removeClass("footerleft-containerorng");
		$(".btntc").removeClass("btntcorng");
		
		
	});
	
	$(".clr-orng").on('click',function(){
		$('link[href*="nav-green.css"]').prop('disabled', true);
        $('link[href*="nav-blue.css"]').prop('disabled', true);
		$('link[href*="nav-orng.css"]').prop('disabled', false);
		$('link[href*="nav-pnk.css"]').prop('disabled', true);
		$('link[href*="nav-purp.css"]').prop('disabled', true);
		$('link[href*="nav-teal.css"]').prop('disabled', true);
		$(".fagear").addClass("fagearorng");
		$(".fa-logo").addClass("fa-logoorng");
		$(".faclh").addClass("faclhorng");
		$(".i-dd").addClass("aorng");
		$(".palet-head").addClass("palet-headorng");
		
        $(".msk").addClass("mskorng");
		$(".fa-logo-media").addClass("fa-logo-mediaorng");
		$(".carou-item1-btn").addClass("carou-item1-btnorng");
	    $(".carou-item2-btn").addClass("carou-item2-btnorng");
	    $(".carou-item3-btn").addClass("carou-item3-btnorng");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").addClass("h5orng");
		$(".orderbtn").addClass("orderbtnorng");
		$(".about-btn").addClass("about-btnorng");
	
		$(".btnsubs").addClass("btnsubsorng");
		$(".btnop").addClass("btnoporng");
		$(".section-assurance").addClass("assuranceorng");
		$(".feedbackbtn").addClass("feedbackbtnorng");
		$(".footerleft-container").addClass("footerleft-containerorng");
		$(".btntc").addClass("btntcorng");
		
		
		
		
		
		$(".fagear").removeClass("fagearteal");
		$(".fa-logo").removeClass("fa-logoteal");
		$(".palet-head").removeClass("palet-headbl");
		
		$(".palet-head").removeClass("palet-headteal");
		$(".palet-head").removeClass("palet-headpurp");
		$(".palet-head").removeClass("palet-headpnk");
		
		
		
		$(".i-dd").removeClass("ateal");
        $(".msk").removeClass("mskteal");
		$(".fa-logo-media").removeClass("fa-logo-mediateal");
		$(".carou-item1-btn").removeClass("carou-item1-btnteal");
	    $(".carou-item2-btn").removeClass("carou-item2-btnteal");
	    $(".carou-item3-btn").removeClass("carou-item3-btnteal");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5teal");
		$(".orderbtn").removeClass("orderbtnteal");
		$(".about-btn").removeClass("about-btnteal");
	    $(".faclh").removeClass("faclhteal");
		
		$(".btnsubs").removeClass("btnsubsteal");
		$(".btnop").removeClass("btnopteal");
		$(".section-assurance").removeClass("assuranceteal");
		$(".feedbackbtn").removeClass("feedbackbtnteal");
		$(".footerleft-container").removeClass("footerleft-containerteal");
		$(".btntc").removeClass("btntcteal");
		
		
		
		
		$(".fagear").removeClass("fagearpurp");
		$(".fa-logo").removeClass("fa-logopurp");
		
		$(".i-dd").removeClass("apurp");
        $(".msk").removeClass("mskpurp");
		$(".fa-logo-media").removeClass("fa-logo-mediapurp");
		$(".carou-item1-btn").removeClass("carou-item1-btnpurp");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpurp");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpurp");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5purp");
		$(".orderbtn").removeClass("orderbtnpurp");
		$(".about-btn").removeClass("about-btnpurp");
	    $(".faclh").removeClass("faclhpurp");
		
		$(".btnsubs").removeClass("btnsubspurp");
		$(".btnop").removeClass("btnoppurp");
		$(".section-assurance").removeClass("assurancepurp");
		$(".feedbackbtn").removeClass("feedbackbtnpurp");
		$(".footerleft-container").removeClass("footerleft-containerpurp");
		$(".btntc").removeClass("btntcpurp");
		
		
		
		$(".fagear").removeClass("fagearpnk");
		$(".fa-logo").removeClass("fa-logopnk");
		
		$(".i-dd").removeClass("apnk");
        $(".msk").removeClass("mskpnk");
		$(".fa-logo-media").removeClass("fa-logo-mediapnk");
		$(".carou-item1-btn").removeClass("carou-item1-btnpnk");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpnk");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpnk");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5pnk");
		$(".orderbtn").removeClass("orderbtnpnk");
		$(".about-btn").removeClass("about-btnpnk");
	    $(".faclh").removeClass("faclhpnk");
		
		$(".btnsubs").removeClass("btnsubspnk");
		$(".btnop").removeClass("btnoppnk");
		$(".section-assurance").removeClass("assurancepnk");
		$(".feedbackbtn").removeClass("feedbackbtnpnk");
		$(".footerleft-container").removeClass("footerleft-containerpnk");
		$(".btntc").removeClass("btntcpnk");
		
		
		$(".fagear").removeClass("fagearbl");
		$(".fa-logo").removeClass("fa-logobl");
		
		$(".i-dd").removeClass("abl");
        $(".msk").removeClass("mskbl");
		$(".fa-logo-media").removeClass("fa-logo-mediabl");
		$(".carou-item1-btn").removeClass("carou-item1-btnbl");
	    $(".carou-item2-btn").removeClass("carou-item2-btnbl");
	    $(".carou-item3-btn").removeClass("carou-item3-btnbl");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5bl");
		$(".orderbtn").removeClass("orderbtnbl");
		$(".about-btn").removeClass("about-btnbl");
	    $(".faclh").removeClass("faclhbl");
		
		$(".btnsubs").removeClass("btnsubsbl");
		$(".btnop").removeClass("btnopbl");
		$(".section-assurance").removeClass("assurancebl");
		$(".feedbackbtn").removeClass("feedbackbtnbl");
		$(".footerleft-container").removeClass("footerleft-containerbl");
		$(".btntc").removeClass("btntcbl");
		
	});
	$(".clr-pnk").on('click',function(){
		$('link[href*="nav-green.css"]').prop('disabled', true);
        $('link[href*="nav-blue.css"]').prop('disabled', true);
		$('link[href*="nav-orng.css"]').prop('disabled', true);
		$('link[href*="nav-pnk.css"]').prop('disabled', false);
		$('link[href*="nav-purp.css"]').prop('disabled', true);
		$('link[href*="nav-teal.css"]').prop('disabled', true);
		$(".fagear").addClass("fagearpnk");
		$(".fa-logo").addClass("fa-logopnk");
		$(".faclh").addClass("faclhpnk");
		$(".palet-head").addClass("palet-headpnk");
		$(".i-dd").addClass("apnk");
        $(".msk").addClass("mskpnk");
		$(".fa-logo-media").addClass("fa-logo-mediapnk");
		$(".carou-item1-btn").addClass("carou-item1-btnpnk");
	    $(".carou-item2-btn").addClass("carou-item2-btnpnk");
	    $(".carou-item3-btn").addClass("carou-item3-btnpnk");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").addClass("h5pnk");
		$(".orderbtn").addClass("orderbtnpnk");
		$(".about-btn").addClass("about-btnpnk");
	
		$(".btnsubs").addClass("btnsubspnk");
		$(".btnop").addClass("btnoppnk");
		$(".section-assurance").addClass("assurancepnk");
		$(".feedbackbtn").addClass("feedbackbtnpnk");
		$(".footerleft-container").addClass("footerleft-containerpnk");
		$(".btntc").addClass("btntcpnk");
		
		
		
		
		
		
		$(".fagear").removeClass("fagearorng");
		$(".fa-logo").removeClass("fa-logoorng");
		$(".palet-head").removeClass("palet-headorng");
		
		$(".palet-head").removeClass("palet-headteal");
		$(".palet-head").removeClass("palet-headpurp");
	    $(".palet-head").removeClass("palet-headbl");
		
		
		$(".i-dd").removeClass("aorng");
        $(".msk").removeClass("mskorng");
		$(".fa-logo-media").removeClass("fa-logo-mediaorng");
		$(".carou-item1-btn").removeClass("carou-item1-btnorng");
	    $(".carou-item2-btn").removeClass("carou-item2-btnorng");
	    $(".carou-item3-btn").removeClass("carou-item3-btnorng");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5orng");
		$(".orderbtn").removeClass("orderbtnorng");
		$(".about-btn").removeClass("about-btnorng");
	    $(".faclh").removeClass("faclhorng");
		
		$(".btnsubs").removeClass("btnsubsorng");
		$(".btnop").removeClass("btnoporng");
		$(".section-assurance").removeClass("assuranceorng");
		$(".feedbackbtn").removeClass("feedbackbtnorng");
		$(".footerleft-container").removeClass("footerleft-containerorng");
		$(".btntc").removeClass("btntcorng");
		
		
		$(".fagear").removeClass("fagearteal");
		$(".fa-logo").removeClass("fa-logoteal");
		
		$(".i-dd").removeClass("ateal");
        $(".msk").removeClass("mskteal");
		$(".fa-logo-media").removeClass("fa-logo-mediateal");
		$(".carou-item1-btn").removeClass("carou-item1-btnteal");
	    $(".carou-item2-btn").removeClass("carou-item2-btnteal");
	    $(".carou-item3-btn").removeClass("carou-item3-btnteal");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5teal");
		$(".orderbtn").removeClass("orderbtnteal");
		$(".about-btn").removeClass("about-btnteal");
	    $(".faclh").removeClass("faclhteal");
		
		$(".btnsubs").removeClass("btnsubsteal");
		$(".btnop").removeClass("btnopteal");
		$(".section-assurance").removeClass("assuranceteal");
		$(".feedbackbtn").removeClass("feedbackbtnteal");
		$(".footerleft-container").removeClass("footerleft-containerteal");
		$(".btntc").removeClass("btntcteal");
		
		
		
		
		$(".fagear").removeClass("fagearpurp");
		$(".fa-logo").removeClass("fa-logopurp");
		
		$(".i-dd").removeClass("apurp");
        $(".msk").removeClass("mskpurp");
		$(".fa-logo-media").removeClass("fa-logo-mediapurp");
		$(".carou-item1-btn").removeClass("carou-item1-btnpurp");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpurp");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpurp");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5purp");
		$(".orderbtn").removeClass("orderbtnpurp");
		$(".about-btn").removeClass("about-btnpurp");
	    $(".faclh").removeClass("faclhpurp");
		
		$(".btnsubs").removeClass("btnsubspurp");
		$(".btnop").removeClass("btnoppurp");
		$(".section-assurance").removeClass("assurancepurp");
		$(".feedbackbtn").removeClass("feedbackbtnpurp");
		$(".footerleft-container").removeClass("footerleft-containerpurp");
		$(".btntc").removeClass("btntcpurp");
		
		
		$(".fagear").removeClass("fagearbl");
		$(".fa-logo").removeClass("fa-logobl");
		
		$(".i-dd").removeClass("abl");
        $(".msk").removeClass("mskorng");
		$(".fa-logo-media").removeClass("fa-logo-mediabl");
		$(".carou-item1-btn").removeClass("carou-item1-btnbl");
	    $(".carou-item2-btn").removeClass("carou-item2-btnbl");
	    $(".carou-item3-btn").removeClass("carou-item3-btnbl");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5bl");
		$(".orderbtn").removeClass("orderbtnbl");
		$(".about-btn").removeClass("about-btnbl");
	    $(".faclh").removeClass("faclhbl");
		
		$(".btnsubs").removeClass("btnsubsbl");
		$(".btnop").removeClass("btnopbl");
		$(".section-assurance").removeClass("assurancebl");
		$(".feedbackbtn").removeClass("feedbackbtnbl");
		$(".footerleft-container").removeClass("footerleft-containerbl");
		$(".btntc").removeClass("btntcbl");
		
	});
	
	
	$(".clr-purp").on('click',function(){
		$('link[href*="nav-green.css"]').prop('disabled', true);
        $('link[href*="nav-blue.css"]').prop('disabled', true);
		$('link[href*="nav-orng.css"]').prop('disabled', true);
		$('link[href*="nav-pnk.css"]').prop('disabled', true);
		$('link[href*="nav-purp.css"]').prop('disabled', false);
		$('link[href*="nav-teal.css"]').prop('disabled', true);
		$(".fagear").addClass("fagearpurp");
		$(".fa-logo").addClass("fa-logopurp");
	    $(".palet-head").addClass("palet-headpurp");
		
		$(".faclh").addClass("faclhpurp");
		$(".i-dd").addClass("apurp");
        $(".msk").addClass("mskpurp");
		$(".fa-logo-media").addClass("fa-logo-mediapurp");
		$(".carou-item1-btn").addClass("carou-item1-btnpurp");
	    $(".carou-item2-btn").addClass("carou-item2-btnpurp");
	    $(".carou-item3-btn").addClass("carou-item3-btnpurp");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").addClass("h5purp");
		$(".orderbtn").addClass("orderbtnpurp");
		$(".about-btn").addClass("about-btnpurp");
	
		$(".btnsubs").addClass("btnsubspurp");
		$(".btnop").addClass("btnoppurp");
		$(".section-assurance").addClass("assurancepurp");
		$(".feedbackbtn").addClass("feedbackbtnpurp");
		$(".footerleft-container").addClass("footerleft-containerpurp");
		$(".btntc").addClass("btntcpurp");
		
		
		
		
		
		
		$(".fagear").removeClass("fagearpnk");
		$(".fa-logo").removeClass("fa-logopnk");
		$(".palet-head").removeClass("palet-headpnk");
		
		$(".palet-head").removeClass("palet-headteal");
	    $(".palet-head").removeClass("palet-headorng");
		$(".palet-head").removeClass("palet-headbl");
		$(".i-dd").removeClass("apnk");
        $(".msk").removeClass("mskpnk");
		$(".fa-logo-media").removeClass("fa-logo-mediapnk");
		$(".carou-item1-btn").removeClass("carou-item1-btnpnk");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpnk");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpnk");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5pnk");
		$(".orderbtn").removeClass("orderbtnpnk");
		$(".about-btn").removeClass("about-btnpnk");
	    $(".faclh").removeClass("faclhpnk");
		
		$(".btnsubs").removeClass("btnsubspnk");
		$(".btnop").removeClass("btnoppnk");
		$(".section-assurance").removeClass("assurancepnk");
		$(".feedbackbtn").removeClass("feedbackbtnpnk");
		$(".footerleft-container").removeClass("footerleft-containerpnk");
		$(".btntc").removeClass("btntcpnk");
		
		
		
		$(".fagear").removeClass("fagearorng");
		$(".fa-logo").removeClass("fa-logoorng");
		
		$(".i-dd").removeClass("aorng");
        $(".msk").removeClass("mskorng");
		$(".fa-logo-media").removeClass("fa-logo-mediaorng");
		$(".carou-item1-btn").removeClass("carou-item1-btnorng");
	    $(".carou-item2-btn").removeClass("carou-item2-btnorng");
	    $(".carou-item3-btn").removeClass("carou-item3-btnorng");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5orng");
		$(".orderbtn").removeClass("orderbtnorng");
		$(".about-btn").removeClass("about-btnorng");
	    $(".faclh").removeClass("faclhorng");
		
		$(".btnsubs").removeClass("btnsubsorng");
		$(".btnop").removeClass("btnoporng");
		$(".section-assurance").removeClass("assuranceorng");
		$(".feedbackbtn").removeClass("feedbackbtnorng");
		$(".footerleft-container").removeClass("footerleft-containerorng");
		$(".btntc").removeClass("btntcorng");
		
		
		$(".fagear").removeClass("fagearteal");
		$(".fa-logo").removeClass("fa-logoteal");
		
		$(".i-dd").removeClass("ateal");
        $(".msk").removeClass("mskteal");
		$(".fa-logo-media").removeClass("fa-logo-mediateal");
		$(".carou-item1-btn").removeClass("carou-item1-btnteal");
	    $(".carou-item2-btn").removeClass("carou-item2-btnteal");
	    $(".carou-item3-btn").removeClass("carou-item3-btnteal");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5teal");
		$(".orderbtn").removeClass("orderbtnteal");
		$(".about-btn").removeClass("about-btnteal");
	    $(".faclh").removeClass("faclhteal");
		
		$(".btnsubs").removeClass("btnsubsteal");
		$(".btnop").removeClass("btnopteal");
		$(".section-assurance").removeClass("assuranceteal");
		$(".feedbackbtn").removeClass("feedbackbtnteal");
		$(".footerleft-container").removeClass("footerleft-containerteal");
		$(".btntc").removeClass("btntcteal");
		
		$(".fagear").removeClass("fagearbl");
		$(".fa-logo").removeClass("fa-logobl");
		
		$(".i-dd").removeClass("abl");
        $(".msk").removeClass("mskorng");
		$(".fa-logo-media").removeClass("fa-logo-mediabl");
		$(".carou-item1-btn").removeClass("carou-item1-btnbl");
	    $(".carou-item2-btn").removeClass("carou-item2-btnbl");
	    $(".carou-item3-btn").removeClass("carou-item3-btnbl");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5bl");
		$(".orderbtn").removeClass("orderbtnbl");
		$(".about-btn").removeClass("about-btnbl");
	    $(".faclh").removeClass("faclhbl");
		
		$(".btnsubs").removeClass("btnsubsbl");
		$(".btnop").removeClass("btnopbl");
		$(".section-assurance").removeClass("assurancebl");
		$(".feedbackbtn").removeClass("feedbackbtnbl");
		$(".footerleft-container").removeClass("footerleft-containerbl");
		$(".btntc").removeClass("btntcbl");
	});
	$(".clr-teal").on('click',function(){
		$('link[href*="nav-green.css"]').prop('disabled', true);
        $('link[href*="nav-blue.css"]').prop('disabled', true);
		$('link[href*="nav-orng.css"]').prop('disabled', true);
		$('link[href*="nav-pnk.css"]').prop('disabled', true);
		$('link[href*="nav-purp.css"]').prop('disabled', true);
		$('link[href*="nav-teal.css"]').prop('disabled', false);
		$(".fagear").addClass("fagearteal");
		$(".fa-logo").addClass("fa-logoteal");
		$(".palet-head").addClass("palet-headteal");
		
		$(".faclh").addClass("faclhteal");
		$(".i-dd").addClass("ateal");
        $(".msk").addClass("mskteal");
		$(".fa-logo-media").addClass("fa-logo-mediateal");
		$(".carou-item1-btn").addClass("carou-item1-btnteal");
	    $(".carou-item2-btn").addClass("carou-item2-btnteal");
	    $(".carou-item3-btn").addClass("carou-item3-btnteal");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").addClass("h5teal");
		$(".orderbtn").addClass("orderbtnteal");
		$(".about-btn").addClass("about-btnteal");
	
		$(".btnsubs").addClass("btnsubsteal");
		$(".btnop").addClass("btnopteal");
		$(".section-assurance").addClass("assuranceteal");
		$(".feedbackbtn").addClass("feedbackbtnteal");
		$(".footerleft-container").addClass("footerleft-containerteal");
		$(".btntc").addClass("btntcteal");
		
		
		
		
		
		
		$(".fagear").removeClass("fagearpurp");
		$(".fa-logo").removeClass("fa-logopurp");
		$(".palet-head").removeClass("palet-headpurp");
		
		
		$(".palet-head").removeClass("palet-headpnk");
		$(".palet-head").removeClass("palet-headorng");
		$(".palet-head").removeClass("palet-headbl");
		$(".i-dd").removeClass("apurp");
        $(".msk").removeClass("mskpurp");
		$(".fa-logo-media").removeClass("fa-logo-mediapurp");
		$(".carou-item1-btn").removeClass("carou-item1-btnpurp");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpurp");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpurp");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5purp");
		$(".orderbtn").removeClass("orderbtnpurp");
		$(".about-btn").removeClass("about-btnpurp");
	    $(".faclh").removeClass("faclhpurp");
		
		$(".btnsubs").removeClass("btnsubspurp");
		$(".btnop").removeClass("btnoppurp");
		$(".section-assurance").removeClass("assurancepurp");
		$(".feedbackbtn").removeClass("feedbackbtnpurp");
		$(".footerleft-container").removeClass("footerleft-containerpurp");
		$(".btntc").removeClass("btntcpurp");
		
		$(".fagear").removeClass("fagearpnk");
		$(".fa-logo").removeClass("fa-logopnk");
		
		$(".i-dd").removeClass("apnk");
        $(".msk").removeClass("mskpnk");
		$(".fa-logo-media").removeClass("fa-logo-mediapnk");
		$(".carou-item1-btn").removeClass("carou-item1-btnpnk");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpnk");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpnk");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5pnk");
		$(".orderbtn").removeClass("orderbtnpnk");
		$(".about-btn").removeClass("about-btnpnk");
	    $(".faclh").removeClass("faclhpnk");
		
		$(".btnsubs").removeClass("btnsubspnk");
		$(".btnop").removeClass("btnoppnk");
		$(".section-assurance").removeClass("assurancepnk");
		$(".feedbackbtn").removeClass("feedbackbtnpnk");
		$(".footerleft-container").removeClass("footerleft-containerpnk");
		$(".btntc").removeClass("btntcpnk");
		
		
		
		
		$(".fagear").removeClass("fagearorng");
		$(".fa-logo").removeClass("fa-logoorng");
		
		$(".i-dd").removeClass("aorng");
        $(".msk").removeClass("mskorng");
		$(".fa-logo-media").removeClass("fa-logo-mediaorng");
		$(".carou-item1-btn").removeClass("carou-item1-btnorng");
	    $(".carou-item2-btn").removeClass("carou-item2-btnorng");
	    $(".carou-item3-btn").removeClass("carou-item3-btnorng");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5orng");
		$(".orderbtn").removeClass("orderbtnorng");
		$(".about-btn").removeClass("about-btnorng");
	    $(".faclh").removeClass("faclhorng");
		
		$(".btnsubs").removeClass("btnsubsorng");
		$(".btnop").removeClass("btnoporng");
		$(".section-assurance").removeClass("assuranceorng");
		$(".feedbackbtn").removeClass("feedbackbtnorng");
		$(".footerleft-container").removeClass("footerleft-containerorng");
		$(".btntc").removeClass("btntcorng");
		
		
		
		
		$(".fagear").removeClass("fagearbl");
		$(".fa-logo").removeClass("fa-logobl");
		
		$(".i-dd").removeClass("abl");
        $(".msk").removeClass("mskorng");
		$(".fa-logo-media").removeClass("fa-logo-mediabl");
		$(".carou-item1-btn").removeClass("carou-item1-btnbl");
	    $(".carou-item2-btn").removeClass("carou-item2-btnbl");
	    $(".carou-item3-btn").removeClass("carou-item3-btnbl");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5bl");
		$(".orderbtn").removeClass("orderbtnbl");
		$(".about-btn").removeClass("about-btnbl");
	    $(".faclh").removeClass("faclhbl");
		
		$(".btnsubs").removeClass("btnsubsbl");
		$(".btnop").removeClass("btnopbl");
		$(".section-assurance").removeClass("assurancebl");
		$(".feedbackbtn").removeClass("feedbackbtnbl");
		$(".footerleft-container").removeClass("footerleft-containerbl");
		$(".btntc").removeClass("btntcbl");
		
	});
	$(".clr-grn").on('click',function(){
		$('link[href*="nav-green.css"]').prop('disabled', false);
        $('link[href*="nav-blue.css"]').prop('disabled', true);
		$('link[href*="nav-orng.css"]').prop('disabled', true);
		$('link[href*="nav-pnk.css"]').prop('disabled', true);
		$('link[href*="nav-purp.css"]').prop('disabled', true);
		$('link[href*="nav-teal.css"]').prop('disabled', true);
		
		
		
		$(".fagear").removeClass("fagearteal");
		$(".fa-logo").removeClass("fa-logoteal");
		
		$(".palet-head").removeClass("palet-headteal");
		$(".palet-head").removeClass("palet-headpurp");
		$(".palet-head").removeClass("palet-headpnk");
		$(".palet-head").removeClass("palet-headorng");
		$(".palet-head").removeClass("palet-headbl");
		$(".i-dd").removeClass("ateal");
        $(".msk").removeClass("mskteal");
		$(".fa-logo-media").removeClass("fa-logo-mediateal");
		$(".carou-item1-btn").removeClass("carou-item1-btnteal");
	    $(".carou-item2-btn").removeClass("carou-item2-btnteal");
	    $(".carou-item3-btn").removeClass("carou-item3-btnteal");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5teal");
		$(".orderbtn").removeClass("orderbtnteal");
		$(".about-btn").removeClass("about-btnteal");
	    $(".faclh").removeClass("faclhteal");
		
		$(".btnsubs").removeClass("btnsubsteal");
		$(".btnop").removeClass("btnopteal");
		$(".section-assurance").removeClass("assuranceteal");
		$(".feedbackbtn").removeClass("feedbackbtnteal");
		$(".footerleft-container").removeClass("footerleft-containerteal");
		$(".btntc").removeClass("btntcteal");
		
		
		
		
		$(".fagear").removeClass("fagearpurp");
		$(".fa-logo").removeClass("fa-logopurp");
		
		$(".i-dd").removeClass("apurp");
        $(".msk").removeClass("mskpurp");
		$(".fa-logo-media").removeClass("fa-logo-mediapurp");
		$(".carou-item1-btn").removeClass("carou-item1-btnpurp");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpurp");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpurp");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5purp");
		$(".orderbtn").removeClass("orderbtnpurp");
		$(".about-btn").removeClass("about-btnpurp");
	    $(".faclh").removeClass("faclhpurp");
		
		$(".btnsubs").removeClass("btnsubspurp");
		$(".btnop").removeClass("btnoppurp");
		$(".section-assurance").removeClass("assurancepurp");
		$(".feedbackbtn").removeClass("feedbackbtnpurp");
		$(".footerleft-container").removeClass("footerleft-containerpurp");
		$(".btntc").removeClass("btntcpurp");
		
		
		
		$(".fagear").removeClass("fagearpnk");
		$(".fa-logo").removeClass("fa-logopnk");
		
		$(".i-dd").removeClass("apnk");
        $(".msk").removeClass("mskpnk");
		$(".fa-logo-media").removeClass("fa-logo-mediapnk");
		$(".carou-item1-btn").removeClass("carou-item1-btnpnk");
	    $(".carou-item2-btn").removeClass("carou-item2-btnpnk");
	    $(".carou-item3-btn").removeClass("carou-item3-btnpnk");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5pnk");
		$(".orderbtn").removeClass("orderbtnpnk");
		$(".about-btn").removeClass("about-btnpnk");
	    $(".faclh").removeClass("faclhpnk");
		
		$(".btnsubs").removeClass("btnsubspnk");
		$(".btnop").removeClass("btnoppnk");
		$(".section-assurance").removeClass("assurancepnk");
		$(".feedbackbtn").removeClass("feedbackbtnpnk");
		$(".footerleft-container").removeClass("footerleft-containerpnk");
		$(".btntc").removeClass("btntcpnk");
		
		
		
		
		$(".fagear").removeClass("fagearorng");
		$(".fa-logo").removeClass("fa-logoorng");
		
		$(".i-dd").removeClass("aorng");
        $(".msk").removeClass("mskorng");
		$(".fa-logo-media").removeClass("fa-logo-mediaorng");
		$(".carou-item1-btn").removeClass("carou-item1-btnorng");
	    $(".carou-item2-btn").removeClass("carou-item2-btnorng");
	    $(".carou-item3-btn").removeClass("carou-item3-btnorng");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5orng");
		$(".orderbtn").removeClass("orderbtnorng");
		$(".about-btn").removeClass("about-btnorng");
	    $(".faclh").removeClass("faclhorng");
		
		$(".btnsubs").removeClass("btnsubsorng");
		$(".btnop").removeClass("btnoporng");
		$(".section-assurance").removeClass("assuranceorng");
		$(".feedbackbtn").removeClass("feedbackbtnorng");
		$(".footerleft-container").removeClass("footerleft-containerorng");
		$(".btntc").removeClass("btntcorng");
		
		
		
		
		$(".fagear").removeClass("fagearbl");
		$(".fa-logo").removeClass("fa-logobl");
		
		$(".i-dd").removeClass("abl");
        $(".msk").removeClass("mskbl");
		$(".fa-logo-media").removeClass("fa-logo-mediabl");
		$(".carou-item1-btn").removeClass("carou-item1-btnbl");
	    $(".carou-item2-btn").removeClass("carou-item2-btnbl");
	    $(".carou-item3-btn").removeClass("carou-item3-btnbl");
		$(".store-carou-indicators .active").css({'background-color':'none'});
		$(".product-display-title2 h5").removeClass("h5bl");
		$(".orderbtn").removeClass("orderbtnbl");
		$(".about-btn").removeClass("about-btnbl");
	    $(".faclh").removeClass("faclhbl");
		
		$(".btnsubs").removeClass("btnsubsbl");
		$(".btnop").removeClass("btnopbl");
		$(".section-assurance").removeClass("assurancebl");
		$(".feedbackbtn").removeClass("feedbackbtnbl");
		$(".footerleft-container").removeClass("footerleft-containerbl");
		$(".btntc").removeClass("btntcbl");
    });
});