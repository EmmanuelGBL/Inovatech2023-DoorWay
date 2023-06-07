var rwdImageMaps = function(img_el) {
	var img = img_el;

	var rwdImageMap = function() {
		img.forEach(function(elem) {
			if (typeof(elem.getAttribute('usemap')) == 'undefined')
				return;

			var that = elem;

			that.addEventListener('load', function() {
					w = that.getAttribute('width'),
					h = that.getAttribute('height');

				if (!w || !h) {
					var temp = new Image();
					temp.src = that.getAttribute('src');
					if (!w)
						w = temp.width;
					if (!h)
						h = temp.height;
				}

				var wPercent = that.clientWidth/100,
					hPercent = that.clientHeight/100,
					mapName = that.getAttribute('usemap').replace('#', '');

				document.querySelectorAll('map[name="' + mapName + '"] area').forEach(function(elemen) {
					if (!elemen.dataset.coords)
						elemen.dataset.coords = elemen.getAttribute('coords');

					var coords = elemen.dataset.coords.split(','),
						coordsPercent = new Array(coords.length);

					for (var i = 0; i < coordsPercent.length; ++i) {
						if (i % 2 === 0)
							coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
						else
							coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
					}
					elemen.setAttribute('coords', coordsPercent.toString());
				});
			})
			that.setAttribute('src', that.getAttribute('src'));
		});
	};
	window.addEventListener('resize', rwdImageMap);
	rwdImageMap();

	return this;
};