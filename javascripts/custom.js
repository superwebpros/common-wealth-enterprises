
	// Map Markers
	var mapMarkers = [
	
	
	{
		address: "934 Clark Street, Lansing, MI 48906",
		html: "<strong>Headquarters</strong><br>934 Clark Street, Lansing, MI 48906<br><br><a href='#' onclick='mapCenterAt({latitude: 42.74479, longitude: -84.53166, zoom: 16}, event)'>[+] zoom here</a>",
		icon: {
			image: "/images/pin.png",
			iconsize: [26, 46],
			iconanchor: [12, 46]
		}
	},
	
	
		
	];

	// Map Initial Location
	var initLatitude = 42.73974;
	var initLongitude = -84.6182087;

	// Map Extended Settings
	var mapSettings = {
		controls: {
			draggable: (($.browser.mobile) ? false : true),
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			scaleControl: true,
			streetViewControl: true,
			overviewMapControl: true
		},
		scrollwheel: false,
		markers: mapMarkers,
		latitude: initLatitude,
		longitude: initLongitude,
		zoom: 10
	};

	var map = $("#googlemaps").gMap(mapSettings);

	// Map Center At
	var mapCenterAt = function(options, e) {
		e.preventDefault();
		$("#googlemaps").gMap("centerAt", options);
	}

;
