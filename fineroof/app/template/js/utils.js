"use strict";
(function () {
	var lastActionTimer;
	var createTemplateResponse = function (itemTemplate) {
	  var itemNode = itemTemplate.cloneNode(true);
	  var fragment = document.createDocumentFragment();

	  var removeItem = function () {
		document.body.removeChild(itemNode);
	  };
	  var btnOnEscPress = function (evt) {
		  if (evt.keyCode === 27) {
			removeItem();
		  }

	  };
	  itemNode.addEventListener('click', removeItem);

	  document.addEventListener('keydown', btnOnEscPress, {once: true});

	  fragment.appendChild(itemNode);
	  return fragment;
	}
	var createErrorMsg = function (errorMsg) {
		var itemTemplate = document.querySelector('#error')
							.content
							.querySelector('.error');

		var insertBeforeNode = document.querySelector('.header');

		var createdNode = createTemplateResponse(itemTemplate);
		createdNode.querySelector('.error__message').textContent = errorMsg;

		document.body.insertBefore(createdNode, insertBeforeNode);
		window.script.closePopup();
	}
	 var checkVisibility = function (target) {
	 	var targetPosition = {
	 			top: window.pageYOffset + target.getBoundingClientRect().top,
	 			left: window.pageXOffset + target.getBoundingClientRect().left,
	 			right: window.pageXOffset + target.getBoundingClientRect().right,
	 			bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	 		},
	 		windowPosition = {
	 			top: window.pageYOffset,
	 			left: window.pageXOffset,
	 			right: window.pageXOffset + document.documentElement.clientWidth,
	 			bottom: window.pageYOffset + document.documentElement.clientHeight
	 		};

			if (targetPosition.bottom > windowPosition.top &&
				targetPosition.top < windowPosition.bottom) {

				return false;
			} else {
				return true;
			};
		};

		var debounce = function (callback, debounceInterval) {
				if (lastActionTimer) {
					clearTimeout(lastActionTimer);
				}

				lastActionTimer = setTimeout(callback, debounceInterval);
		}

		window.utils = {
			visibility: checkVisibility,
			debounce: debounce,
			responce: createTemplateResponse,
			errorMsg: createErrorMsg,
		}
})();
