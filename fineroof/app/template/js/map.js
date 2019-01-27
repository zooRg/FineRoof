ymaps.ready(function() {
		var myMap, place1, place2;
		// Предполагаем, что points - исходный массив координат точек, добавляемых на карту

	})
	// Выполняем наш код, когда API загружен - ymaps.ready()
	ymaps.ready(function() {
		var myCollection = new ymaps.GeoObjectCollection()
		myMap = new ymaps.Map("ymap", {
			center: [51.732855, 36.263919], // Начальные значения центра карты
			zoom: 13, // Начальное значение зума карты

		});
		place1 = new ymaps.Placemark(
			[51.732855, 36.263919], {balloonContent: ''}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',

				// Своё изображение иконки метки.
				iconImageHref: '/template/img/mapholder.png',
				// Размеры метки.
				iconImageSize: [50, 49],
				// Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
				iconImageOffset: [-50, -49]
			});

		place2 = new ymaps.Placemark(
			[56.475722, 85.007216], {}, {
				iconLayout: 'default#image',
				iconImageHref: '/template/img/mapholder.png',
				iconImageSize: [50, 49],
				iconImageOffset: [-50, -49]
			});
		myCollection.add(place1);
		myCollection.add(place2);
		myMap.geoObjects.add(myCollection);
		myMap.geoObjects.add(place1);
		myMap.geoObjects.add(place2);

		myMap.behaviors.disable('scrollZoom'); //убрать зум по скроллу
		myMap.controls.remove('typeSelector'); // убрать выбор карт
		myMap.controls.remove('trafficControl'); // убрать пробки
		myMap.controls.remove('searchControl'); // убрать поиск
		// myMap.controls.remove('zoomControl'); // убрать зум
		// myMap.controls.remove('geolocationControl'); // убрать геолокация
		myMap.controls.remove('fullscreenControl'); // убрать фуллскрин
		myMap.controls.remove('rulerControl'); // убрать линейку
		// // Коллекция гео-точек, добавленных на карту
		// Вычисляем необходимые координаты краёв карты и устанавливаем их для нашего экземпляра карты

		// 	// Добавляем точки на карту
		// 	myMap.geoObjects.add(myCollection);


		var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};
		if (isMobile.any()) {
			myMap.behaviors.disable('drag');
		}
	});

	// $("#place1").click(function() {
	// 	myMap.panTo(place1.geometry.getCoordinates());
	// });
	// $("#place2").click(function() {
	// 	myMap.panTo(place2.geometry.getCoordinates());
	// });
	// $("#place3").click(function() {
	// 	myMap.panTo(place3.geometry.getCoordinates());
	// });
	// $("#place4").click(function() {
	// 	myMap.panTo(place4.geometry.getCoordinates());
	// });
	// $("#place5").click(function() {
	// 	myMap.panTo(place5.geometry.getCoordinates());
	// });
	// $("#place6").click(function() {
	// 	myMap.panTo(place6.geometry.getCoordinates());
	// });
	// $("#place7").click(function() {
	// 	myMap.panTo(place7.geometry.getCoordinates());
	// });
	// $("#place8").click(function() {
	// 	myMap.panTo(place8.geometry.getCoordinates());
	// });
	// $("#place9").click(function() {
	// 	myMap.panTo(place9.geometry.getCoordinates());
	// });
	// $("#place10").click(function() {
	// 	myMap.panTo(place10.geometry.getCoordinates());
	// });
	// $("#place11").click(function() {
	// 	myMap.panTo(place11.geometry.getCoordinates());
	// });
