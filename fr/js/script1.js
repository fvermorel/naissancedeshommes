$(document).ready(function(){
	
		 loadAssets([
  
 

/*       "resources/LNDH_001.mp4",
	   "resources/LNDH_002.mp4",
	   "resources/LNDH_003.mp4",
	   "resources/LNDH_004.mp4",
	   "resources/LNDH_005.mp4",
	   
	   "resources/LNDH_006.mp4",
	   "resources/LNDH_007.mp4",
	   "resources/LNDH_008.mp4",
	   "resources/LNDH_009.mp4",
	   "resources/LNDH_0010.mp4",
	   
	   "resources/LNDH_0011.mp4",
	   "resources/LNDH_0012.mp4",
	   "resources/LNDH_0013.mp4",
	   "resources/LNDH_0014.mp4",
	   "resources/LNDH_0015.mp4",
	   
	   "resources/LNDH_0016.mp4",
	   "resources/LNDH_0017.mp4",
	   "resources/LNDH_0018.mp4",
	   "resources/LNDH_0019.mp4",
	   "resources/LNDH_0020.mp4",
	   
	   "resources/LNDH_0021.mp4",
	   "resources/LNDH_0022.mp4",
	   "resources/LNDH_0023.mp4",
	   "resources/LNDH_0024.mp4"*/
   
    ], function() {
        startApp();
    });
	
	 $('.encart').animate({

          opacity: 1

          }, 2000, function() {

          // Animation complete.

          });

          $(".ecrit").click(function (){

          $(".encart").toggleClass("encartbaisse");

          $(".ecrit").toggleClass("ecrithover");

          });
		  
		   /* $(".son").click(function (){

        

          $(".son").toggleClass("sonhover");

          });*/
	
	
	 $("#menu").click(function (){

          $(".chapitres").toggleClass("visible");

          });
		  
		   $(".chapitresfermer").click(function (){

          $(".chapitres").toggleClass("visible");

          });
	
   

   
   
});




// Préchargement des images




