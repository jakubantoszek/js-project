 $( function() {
	var availableTags = [
		"Akordeon",
		"Altówka",
		"Banjo",
		"Dudy",
		"Flet",
		"Fortepian",
		"Gramofony",
		"Harfa",
		"Harmonijka ustna",
		"Klarnet",
		"Kontrabas",
		"Ksylofon",
		"Mandolina",
		"Obój",
		"Organy",
		"Organy Hammonda",
		"Pad",
		"Pianino",
		"Puzon",
		"Róg",
		"Saksofon",
		"Sampler",
		"Skrzypce",
		"Theremin",
		"Trąbka",
		"Tuba",
		"Ukulele",
		"Werbel",
		"Wiolonczela"
	];
	
	$( "#instrumenty" ).autocomplete({
      source: availableTags
    });
 });