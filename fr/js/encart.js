


// Animation complete.

// Bonus pédagogique
	$('#chouette1').click(function() {
		// Bonus activé si la chouette ne s'est pas déjà envolée
		if (! $('#chouette1').hasClass('envol1'))
		{
			// Envol de la chouette
			$('#chouette1').removeClass('atterrissage1').addClass('envol1');
			// Affichage en fondu lent de la bulle après 2 s d'attente
			$('#bulle1BIG').addClass('opacity');
			
			// En cas de click sur la chouette...
			$('#chouette1').click(function() {
				// Désactivation du click de souris et fin d'envol
				// $(this).unbind().removeClass('envol');
				$(this).unbind().removeClass('envol1').addClass('atterrissage1');
				// Fondu lent de la bulle
				$('#bulle1BIG').removeClass('opacity');
			});
		}
	});
	
	$('#chouette2').click(function() {
		// Bonus activé si la chouette ne s'est pas déjà envolée
		if (! $('#chouette2').hasClass('envol2'))
		{
			// Envol de la chouette
			$('#chouette2').removeClass('atterrissage1').addClass('envol2');
			// Affichage en fondu lent de la bulle après 2 s d'attente
			$('#bulle2BIG').addClass('opacity');
			
			// En cas de click sur la chouette...
			$('#chouette2').click(function() {
				// Désactivation du click de souris et fin d'envol
				// $(this).unbind().removeClass('envol');
				$(this).unbind().removeClass('envol2').addClass('atterrissage1');
				// Fondu lent de la bulle
				$('#bulle2BIG').removeClass('opacity');
			});
		}
	});
	
	$('#chouette3').click(function() {
		// Bonus activé si la chouette ne s'est pas déjà envolée
		if (! $('#chouette3').hasClass('envol3'))
		{
			// Envol de la chouette
			$('#chouette3').removeClass('atterrissage1').addClass('envol3');
			// Affichage en fondu lent de la bulle après 2 s d'attente
			$('#bulle3BIG').addClass('opacity');
			
			// En cas de click sur la chouette...
			$('#chouette3').click(function() {
				// Désactivation du click de souris et fin d'envol
				// $(this).unbind().removeClass('envol');
				$(this).unbind().removeClass('envol3').addClass('atterrissage1');
				// Fondu lent de la bulle
				$('#bulle3BIG').removeClass('opacity');
			});
		}
	});
	
	$('#chouette4').click(function() {
		// Bonus activé si la chouette ne s'est pas déjà envolée
		if (! $('#chouette4').hasClass('envol4'))
		{
			// Envol de la chouette
			$('#chouette4').removeClass('atterrissage1').addClass('envol4');
			// Affichage en fondu lent de la bulle après 2 s d'attente
			$('#bulle4BIG').addClass('opacity');
			
			// En cas de click sur la chouette...
			$('#chouette4').click(function() {
				// Désactivation du click de souris et fin d'envol
				// $(this).unbind().removeClass('envol');
				$(this).unbind().removeClass('envol4').addClass('atterrissage1');
				// Fondu lent de la bulle
				$('#bulle4BIG').removeClass('opacity');
			});
		}
	});
	
	$('#chouette5').click(function() {
		// Bonus activé si la chouette ne s'est pas déjà envolée
		if (! $('#chouette5').hasClass('envol5'))
		{
			// Envol de la chouette
			$('#chouette5').removeClass('atterrissage1').addClass('envol5');
			// Affichage en fondu lent de la bulle après 2 s d'attente
			$('#bulle5BIG').addClass('opacity');
			
			// En cas de click sur la chouette...
			$('#chouette5').click(function() {
				// Désactivation du click de souris et fin d'envol
				// $(this).unbind().removeClass('envol');
				$(this).unbind().removeClass('envol5').addClass('atterrissage1');
				// Fondu lent de la bulle
				$('#bulle5BIG').removeClass('opacity');
			});
		}
	});
	
	$('#chouette6').click(function() {
		// Bonus activé si la chouette ne s'est pas déjà envolée
		if (! $('#chouette6').hasClass('envol6'))
		{
			// Envol de la chouette
			$('#chouette6').removeClass('atterrissage1').addClass('envol6');
			// Affichage en fondu lent de la bulle après 2 s d'attente
			$('#bulle6BIG').addClass('opacity');
			
			// En cas de click sur la chouette...
			$('#chouette6').click(function() {
				// Désactivation du click de souris et fin d'envol
				// $(this).unbind().removeClass('envol');
				$(this).unbind().removeClass('envol6').addClass('atterrissage1');
				// Fondu lent de la bulle
				$('#bulle6BIG').removeClass('opacity');
			});
		}
	});
