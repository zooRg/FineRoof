'use strict';

(function () {
  var formBlock = document.querySelector('.popup');


  var inputFileElem = formBlock.querySelector('#file');
  var dropFileElem = formBlock.querySelector('.text-file');
  var appendFileBlock = formBlock.querySelector('.text-file__name');

  var fileRegExp = "text.*|image.*|application.*";
  var fileErrorMsg = 'Ошибка при загрузке файла';


  var checkUploadMethod = function (event, callback) {
    var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;

    callback(files);
  };

  var renderFilePreviewElem = function (name) {
    var nameBlock = document.createElement('span');
    nameBlock.classList.add('text-file__item');
    nameBlock.textContent = name;

    appendFileBlock.appendChild(nameBlock);
  };

  var renderFiles = function (files) {
    Array.from(files)
      .forEach(function (file) {
        if (!file.type.match(fileRegExp)) {
          	window.utils.errorMsg(fileErrorMsg);
          	return;
        }
        var reader = new FileReader();

        reader.addEventListener('load', renderFilePreviewElem(file.name));
        reader.readAsDataURL(file);
      });
  };

  var setFileUploadListeners = function (dropZoneElem, inputFileElem, renderFunction) {
    inputFileElem.addEventListener('change', function (event) {
      checkUploadMethod(event, renderFunction);
    });

    document.addEventListener('dragover', function (event) {
      event.stopPropagation();
      event.preventDefault();
    });

    dropZoneElem.addEventListener('dragenter', function (event) {
      event.stopPropagation();
      event.preventDefault();
      event.target.classList.add('text-file__span_active');
    });

    dropZoneElem.addEventListener('dragleave', function (event) {
      event.stopPropagation();
      event.preventDefault();
      event.target.classList.remove('text-file__span_active');
    });

    dropZoneElem.addEventListener('drop', function (event) {
      event.stopPropagation();
      event.preventDefault();
      event.target.classList.remove('text-file__span_active');
      checkUploadMethod(event, renderFunction);
    });
  };

  setFileUploadListeners(dropFileElem, inputFileElem, renderFiles);

})();
