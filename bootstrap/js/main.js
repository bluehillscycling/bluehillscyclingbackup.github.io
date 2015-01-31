// JavaScript Document
	$(function () {
		
		
		
	//alert(navigator.userAgent.match(/iPad/i));
      // Slideshow 1
      $("#slider1").responsiveSlides({
        maxwidth: 800,
        speed: 800,
		pause: true,
		 
      });

    });
   
	$(document).ready(function() {
	


!function(d,s,id){
    
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");
	

     // highlight current page





     });
var currentPage = $("body").data("current-page");
if (currentPage) {
    $("a[data-page-id='" + currentPage + "']").addClass("active");
}
	 

	  function macleodModal(){
		 
		 
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Pete MacLeod');
		 $('#rider-title').html('Mountain Bike Race Team Director');
		 $('.rider-image').attr('src', "/images/race_team/large/Pete.png")
		 $('#rider-age').html('33');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('MTB:');
		 $('#race-discipline1Cat').html('Pro');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 1');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('MTB:');
		 $('#bike-1').html('Specialized Epic and Stumpjumer');
		 
		 $('#bike-type-2').html('Road:');
		 $('#bike-2').html('Specialized Tarmac');
		 
		 $('#bike-type-3').html('');
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Winding Trails');
		 $('#Harpoon-of-Choice').html('Storm Trooper');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("MTBers who don't ride road are usually slow. Roadies who don't ride MTB are usually [expletive]");
		 $('#plugs').html('<a href="http://www.holdfastcoaching.com">http://www.holdfastcoaching.com</a>');
		 
		 
		 executeModal(name)
		 
		 
	 }
	 
	 
	 function shocketModal(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Ari Shocket');
		 $('#rider-title').html('Road  Race Team Director');
		 $('.rider-image').attr('src', "/images/race_team/large/ari.png");
		 $('#rider-age').html('40');
		
		
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 3');
		 
		 $('#race-discipline2').html('MTB:');
		 $('#race-discipline2Cat').html('CAT 2');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Cannondale CAAD10');
		 
		 $('#bike-type-2').html('MTB:');
		 $('#bike-2').html('Felt Niner');
		 
		 $('#bike-type-3').html('');
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Portsmouth Criterium, Barn Burner');
		 $('#Harpoon-of-Choice').html('UFO White');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("\"If you try to win you might lose, but if you don't try to win you'll definitely lose.\" - Jens Voigt's Dad");
		  $('#plugs').html('');
		
		
		
		 executeModal(name)
		 
		 
		  
		 
	}
	
		 function scottModal(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('James Scott');
		 $('#rider-title').html('Cyclocross Race Team Director');
		 $('.rider-image').attr('src', "/images/race_team/large/james.png")
		 $('#rider-age').html('41');
		 
	 	 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('CX:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('MTB:');
		 $('#race-discipline2Cat').html('CAT 3');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('CX:');
		 $('#bike-1').html('Spooky Supertouch');
		 
		 $('#bike-type-2').html('MTB:');
		 $('#bike-2').html('Spooky Darkside 650');
		 
		 $('#bike-type-3').html('');
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html(' Providence CX Fest, Barn Burner');
		 $('#Harpoon-of-Choice').html('100 Barrel Series');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("\"Believe you can and you're halfway there\" -- Teddy Roosevelt");
		 $('#plugs').html('');
		 executeModal(name)
		 
		 
		  
		 
	}
	
		function rider1(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Kioko Mwosa');
		 $('#rider-title').html('Captain - Cat 4/5 Road Team');
		 $('.rider-image').attr('src', "/images/race_team/large/kioko.png")
		 $('#rider-age').html('39');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('MTB:');
		 $('#race-discipline2Cat').html('CAT3');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Giant');
		 
		 $('#bike-type-2').html('MTB:');
		 $('#bike-2').html('Giant');
		 
		 $('#bike-type-3').html('');
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Blue Hills Classic');
		 $('#Harpoon-of-Choice').html('UFO Hefeweizen');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("I'll begin any ride that ends with beer.");
		 $('#plugs').html('');
		 executeModal(name)
		 
		}
		
		function rider2(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Philip Golden');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/phil.png")
		 $('#rider-age').html('39');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('MTB:');
		 $('#race-discipline1Cat').html('CAT 2');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 3');
		 
		 $('#race-discipline3').html('Road:');
		 $('#race-discipline3Cat').html('CAT 4');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('MTB:');
		 $('#bike-1').html('Specialized epic');
		 
		 $('#bike-type-2').html('Road:');
		 $('#bike-2').html('Cervelo S5');
		 
		 $('#bike-type-3').html('CX:');
		 $('#bike-3').html('Trek XO2');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Vermont 50');
		 $('#Harpoon-of-Choice').html('UFO');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("I'm a big believer in luck.  The harder I work, the more of it I seem to have.");
		 $('#plugs').html('');
		 executeModal(name)
		 
		 
		  
		 
	}
	
		function rider3(){
		 
	     var name = ".rider-modal"
		 
		 $('#rider-name').html('Pete Werner');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/pedro.png")
		 $('#rider-age').html('38');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('MTB:');
		 $('#race-discipline1Cat').html('CAT 1');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 3');
		 
		 $('#race-discipline3').html('Road');
		 $('#race-discipline3Cat').html('CAT 4');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('MTB:');
		 $('#bike-1').html('Cannondale Scalpel');
		 
		 $('#bike-type-2').html('CX:');
		 $('#bike-2').html('Salsa Chili Con Crosso');
		 
		 $('#bike-type-3').html('Road:');
		 $('#bike-3').html('Trek Domane');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Gnar Weasels');
		 $('#Harpoon-of-Choice').html('IPA ');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("Ignore the noise");
		 $('#plugs').html('');
		 executeModal(name)
		}
		
		function rider4(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Jim Norcott');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/place_holder.jpg")
		 $('#rider-age').html('28');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('');
		 $('#race-discipline2Cat').html('');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Scott CR1 Pro');
		 
		 $('#bike-type-2').html('');
		 $('#bike-2').html('');
		 
		 $('#bike-type-3').html('');
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Blue Hills Classic');
		 $('#Harpoon-of-Choice').html(' IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("Go big or go home.");
		 $('#plugs').html('');
		 executeModal(name)
		 
		}
		
		function rider5(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Nate Sievers');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/nates.png")
		 $('#rider-age').html('18');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 4');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Parlee Z5');
		 
		 $('#bike-type-2').html('CX:');
		 $('#bike-2').html('Raleigh Rx 2.0');
		 
		 $('#bike-type-3').html('');
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Jamestown Classic');
		 $('#Harpoon-of-Choice').html('N/A');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("Ride hard");
		 $('#plugs').html('');
		 executeModal(name)
		}
		
		function rider6(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Tucker Walsh');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/tuker.png")
		 $('#rider-age').html('45');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('MTB');
		 $('#race-discipline1Cat').html('CAT 3');
		 
		 $('#race-discipline2').html('CX');
		 $('#race-discipline2Cat').html('CAT 5');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('MTB:');
		 $('#bike-1').html('Giant Anthem 29er');
		 
		 $('#bike-type-2').html('CX:');
		 $('#bike-2').html('Ridley X-Fire Ultegra');
		 
		 $('#bike-type-3').html('Road:');
		 $('#bike-3').html('Lightspeed');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Weeping Willow');
		 $('#Harpoon-of-Choice').html('Harpoon IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("the bicycle is the most civilized conveyance known to man. other forms of transport grow daily more nightmarish. Only the bicycle remains pure in heart. - Iris Murdoch, The Green And the Red….and….\"shut up legs?\"");
		 $('#plugs').html('');
		 executeModal(name)
		}
		
		 function rider7(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Mark Brownell');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/mark_brownell.png")
		 $('#rider-age').html('48');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 4');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Parlee Z5 and');
		 
		 $('#bike-type-2').html('CX:');
		 $('#bike-2').html('Giant TCX');
		 
		 $('#bike-type-3').html('MTB:');
		 $('#bike-3').html('Giant Revel');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Ice Weasels, Tour of the Battenkill');
		 $('#Harpoon-of-Choice').html('Boston Irish Stout');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("\"All right, they're on our left, they're on our right, they're in front of us, they're behind us...they can't get away this time.\"  - Chesty Puller");
		 $('#plugs').html('');
		 executeModal(name)
		}
		
		 function rider8(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Torrance Kopfer');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/place_holder.jpg")
		 $('#rider-age').html('38');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 3');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 3');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Specialized Tarmac and Parlee Z-Zero');
		 
		 $('#bike-type-2').html('CX:');
		 $('#bike-2').html('Specialized Crux');
		 
		 $('#bike-type-3').html('');
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Battenkill and Yarmouth; Providence CX and Northampton CX');
		 $('#Harpoon-of-Choice').html('Leviathin IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("Paraphrasing Mark Twain, \"There has been much [biking] pain in my life; and at least half of it actually happened.\" ");
		 $('#plugs').html('');
		 executeModal(name)
		}
		 function rider9(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Adam Shutes');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/adam.png")
		 $('#rider-age').html('39');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('CX:');
		 $('#race-discipline1Cat').html('CAT 3');
		 
		 $('#race-discipline2').html('Road:');
		 $('#race-discipline2Cat').html('CAT 4');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('CX:');
		 $('#bike-1').html(' Kona Jake the Snake');
		 
		 $('#bike-type-2').html('Road:');
		 $('#bike-2').html(' Cannondale SuperSix Evo2');
		 
		 $('#bike-type-3').html('MTB:');
		 $('#bike-3').html('Kona NuNu');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Night Weasels');
		 $('#Harpoon-of-Choice').html('IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("");
		 $('#plugs').html('');
		 executeModal(name)
		}
	     
		 function rider10(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Ted Myles');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/ted_myles.png")
		 $('#rider-age').html('42');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('MTB:');
		 $('#race-discipline2Cat').html('CAT 3');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Trek Madone 6.7');
		 
		 $('#bike-type-2').html('MTB:');
		 $('#bike-2').html("Specialized Stumpy 29'er");
		 
		 $('#bike-type-3').html("");
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Battenkill');
		 $('#Harpoon-of-Choice').html('Leviathan IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("I wish I discovered cycling earlier but I sure am glad that I discovered it.  Mental and physical fitness and the opportunity to hang out with a bunch of middle-aged guys in colorful tights, what's not to love?");
		 $('#plugs').html( '<a href="http://www.strava.com/athletes/292041s">Strava Ted Myles</a>');
		 executeModal(name)
		}
		 
	
		 function rider11(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Jonathan Doller');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/doller.png")
		 $('#rider-age').html('40');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 4');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Specialized Tarmac and Venge ');
		 
		 $('#bike-type-2').html('');
		 $('#bike-2').html("");
		 
		 $('#bike-type-3').html("");
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Blue Hills Classic, Jamestown Classic');
		 $('#Harpoon-of-Choice').html('IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("\"Shut up legs!\"—Jens Voigt");
		 $('#plugs').html( '<a href="http://www.strava.com/athletes/jdoller">Strava J. Doller</a>');
		 executeModal(name)
		}
				 
				 
		function rider12(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Jeff Muldoon');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/muldoon.png")
		 $('#rider-age').html('31');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 4');
		 
		 $('#race-discipline3').html('MTB:');
		 $('#race-discipline3Cat').html('CAT 3');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Trek Madone 6 series');
		 
		 $('#bike-type-2').html('MTB:');
		 $('#bike-2').html("Specialized Stump Jumper");
		 
		 $('#bike-type-3').html("CX:");
		 $('#bike-3').html('Specialized Crux');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Providence CX festival, Barn Burner ');
		 $('#Harpoon-of-Choice').html('IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("\"Shut up legs!\"—Jens Voigt");
		 $('#plugs').html( '');
		 executeModal(name)
		}
		 	
			
		 function rider13(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html('Bruce Pierce');
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/place_holder.jpg")
		 $('#rider-age').html('41');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 3');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 3');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Specialized Tarmac Pro');
		 
		 $('#bike-type-2').html('CX:');
		 $('#bike-2').html("Kona Jake the Snake");
		 
		 $('#bike-type-3').html("");
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Green Mountain Stage Race');
		 $('#Harpoon-of-Choice').html('IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("");
		 $('#plugs').html( '<a href="http://www.usacycling.org/results/?compid=163849&all=1">Results</a>');
		 executeModal(name)
		}
		
		function rider14(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html("Michael O'Donnell");
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/mikeod.png")
		 $('#rider-age').html('41');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('CX:');
		 $('#race-discipline2Cat').html('CAT 5');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Kestrel, Giant');
		 
		 $('#bike-type-2').html('MTB:');
		 $('#bike-2').html("Trek");
		 
		 $('#bike-type-3').html("");
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Blue Hills Classic and Norwell');
		 $('#Harpoon-of-Choice').html('Oktoberfest');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("\"it's not whether you get knocked down, it's whether you get up.\" -Vince Lombardi");
		 $('#plugs').html( '');
		 executeModal(name)
		}
		 	
		function rider15(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html("Andy Rothstein");
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/andy.png")
		 $('#rider-age').html('40');
		 
		 //--Race Disciplines and Categries
		 
		 $('#race-discipline1').html('Road:');
		 $('#race-discipline1Cat').html('CAT 4');
		 
		 $('#race-discipline2').html('');
		 $('#race-discipline2Cat').html('');
		 
		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('Road:');
		 $('#bike-1').html('Cannondale CAAD 10');
		 
		 $('#bike-type-2').html('');
		 $('#bike-2').html("");
		 
		 $('#bike-type-3').html("");
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Blue Hills Classic');
		 $('#Harpoon-of-Choice').html('IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("");
		 $('#plugs').html( '');
		 executeModal(name)
		}
		 
		
		
		function rider16(){
		 
		 var name = ".rider-modal"
		 
		 $('#rider-name').html("Scott Taylor");
		 $('#rider-title').html('');
		 $('.rider-image').attr('src', "/images/race_team/large/scott_taylor.png")
		 $('#rider-age').html('40');
		 
		 //--Race Disciplines and Categries
		 $('#race-discipline1').html('MTB:');
		 $('#race-discipline1Cat').html('CAT 2');
		 
		 $('#race-discipline2').html('Road:');
		 $('#race-discipline2Cat').html('CAT 4');
		 

		 $('#race-discipline3').html('');
		 $('#race-discipline3Cat').html('');
		 
		 //--Rider Equipment
		 
		 $('#bike-type-1').html('MTB:');
		 $('#bike-1').html('Specialized Stumpy 29er, hard tail');
		 
		 $('#bike-type-2').html('Road:');
		 $('#bike-2').html("Cervelo S2");
		 
		 $('#bike-type-3').html("");
		 $('#bike-3').html('');
		 
		 //--Rider Favorites - Race - Harpon
		 $('#rider-favorite-race').html('Vermont 50');
		 $('#Harpoon-of-Choice').html('IPA');
		 
		 
		 //--Personal Note and Plugs
		 
		 $('#rider-personal-note').html("Love bikes. Love the life we lead, the friends we have and the opportunities for epic adventures that come our way as a result of riding them- a lot.  My mission is to get EVERY one I meet on a bike.");
		 $('#plugs').html( '');
		 executeModal(name)
		}
		
		 	 
	 
	 
	 function executeModal(modalName){
		     
		
        var modalDefaultHeight = 500;
       
        
        $(modalName).css({"top":"400px"})
        var screenTop = $(document).scrollTop();
        var windowH = $(window).height();

        var modalH = $(modalName).height();
        var newHeight = (windowH/2) - (modalH/2)

       //$(".rider-modal").css({"height":(windowH/2)-300 + "px"});
       
      // $(".rider-modal").css({"top":(screenTop)+"px"});
       

		$(modalName).modal('show');

			if(modalH > windowH)
			{
                //alert(windowH)
            
            //$(".rider-modal").css({"height":windowH +"px"});
			
               // $(".rider-modal").css({"height":"200px"});
               
			}	


		 }
	

   