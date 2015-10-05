/*
waitMe - 1.13 [05.10.15]
Author: vadimsva
Github: https://github.com/vadimsva/waitMe
*/
(function($) {
  $.fn.waitMe = function(method) {
    return this.each(function() {

      var elem = $(this),
        elemClass = 'waitMe',
        waitMe_text,
        effectObj,
        effectElemCount,
        createSubElem = false,
        specificAttr = 'background-color',
        addStyle = '',
        effectElemHTML = '',
        waitMeObj,
        containerSize,
        elemSize,
        _options,
        currentID;

      var methods = {
        init : function() {
          var _defaults = {
            effect: 'bounce',
            text: '',
            bg: 'rgba(255,255,255,0.7)',
            color: '#000',
            sizeW: '',
            sizeH: '',
            source: ''
          };
          _options = $.extend(_defaults, method);

          currentID = new Date().getMilliseconds();
          waitMeObj = $('<div class="' + elemClass + '" data-waitme_id="' + currentID + '"></div>');
          var size = 'width:' + _options.sizeW + ';height:' + _options.sizeH;

          switch (_options.effect) {
            case 'none':
              effectElemCount = 0;
              break;
            case 'bounce':
              effectElemCount = 3;
              containerSize = '';
              elemSize = size;
              break;
            case 'rotateplane':
              effectElemCount = 1;
              containerSize = '';
              elemSize = size;
              break;
            case 'stretch':
              effectElemCount = 5;
              containerSize = '';
              elemSize = size;
              break;
            case 'orbit':
              effectElemCount = 2;
              containerSize = size;
              elemSize = '';
              break;
            case 'roundBounce':
              effectElemCount = 12;
              containerSize = size;
              elemSize = '';
              break;
            case 'win8':
              effectElemCount = 5;
              createSubElem = true;
              containerSize = size;
              elemSize = size;
              break;
            case 'win8_linear':
              effectElemCount = 5;
              createSubElem = true;
              containerSize = size;
              elemSize = '';
              break;
            case 'ios':
              effectElemCount = 12;
              containerSize = size;
              elemSize = '';
              break;
            case 'facebook':
              effectElemCount = 3;
              containerSize = '';
              elemSize = size;
              break;
            case 'rotation':
              effectElemCount = 1;
              specificAttr = 'border-color';
              containerSize = '';
              elemSize = size;
              break;
            case 'timer':
              effectElemCount = 2;
              addStyle = 'border-color:' + _options.color;
              containerSize = size;
              elemSize = '';
              break;
            case 'pulse':
              effectElemCount = 1;
              specificAttr = 'border-color';
              containerSize = '';
              elemSize = size;
              break;
            case 'progressBar':
              effectElemCount = 1;
              containerSize = '';
              elemSize = size;
              break;
            case 'bouncePulse':
              effectElemCount = 3;
              containerSize = '';
              elemSize = size;
              break;
            case 'img':
              effectElemCount = 1;
              containerSize = '';
              elemSize = size;
              break;
          }

          if (_options.sizeW === '' && _options.sizeH === '') {
            elemSize = '';
            containerSize = '';
          }
          if (containerSize !== '' && addStyle !== '') {
            addStyle = ';' + addStyle;
          }

          if (effectElemCount > 0) {
            effectObj = $('<div class="' + elemClass + '_progress ' + _options.effect + '"></div>');
            if(_options.effect == 'img') {
              effectElemHTML = '<img src="' + _options.source + '" style="' + elemSize + '">';
            } else {
              for (var i = 1; i <= effectElemCount; ++i) {
                if (createSubElem) {
                  effectElemHTML += '<div class="' + elemClass + '_progress_elem' + i + '" style="' + elemSize + '"><div style="' + specificAttr +':' + _options.color +'"></div></div>';
                } else {
                  effectElemHTML += '<div class="' + elemClass + '_progress_elem' + i + '" style="' + specificAttr + ':' + _options.color +';' + elemSize + '"></div>';
                }
              }
            }
            effectObj = $('<div class="' + elemClass + '_progress ' + _options.effect + '" style="' + containerSize + addStyle + '">' + effectElemHTML + '</div>');
          }

          if (_options.text) {
            waitMe_text = $('<div class="' + elemClass + '_text" style="color:' + _options.color + '">' + _options.text + '</div>');
          }
					var elemObj = elem.find('> .' + elemClass);

          if (elemObj) {
            elemObj.remove();
          }
          var waitMeDivObj = $('<div class="' + elemClass + '_content"></div>');
          waitMeDivObj.append(effectObj, waitMe_text);
          waitMeObj.append(waitMeDivObj);
          if (elem[0].tagName == 'HTML') {
            elem = $('body');
          }
          elem.addClass(elemClass + '_container').attr('data-waitme_id', currentID).append(waitMeObj);
					elemObj = elem.find('> .' + elemClass);
					var elemContentObj = elem.find('.' + elemClass + '_content');
          elemObj.css({background: _options.bg});
          elemContentObj.css({marginTop: - elemContentObj.outerHeight() / 2 + 'px'});

					function setElTop(getTop) {
						elemContentObj.css({top: 'auto', transform: 'translateY(' + getTop + 'px) translateZ(0)'});
					}
          if (elem.outerHeight() > $(window).height()) {
            var sTop = $(window).scrollTop(),
            elH = elemContentObj.outerHeight(),
            elTop = elem.offset().top,
            cH = elem.outerHeight(),
						getTop = sTop - elTop + $(window).height()/2;
						if (getTop < 0) {
							getTop = Math.abs(getTop);
						}
						if (getTop - elH >= 0 && getTop + elH <= cH) {
							if (elTop - sTop > $(window).height()/2) {
								getTop = elH;
							}
							setElTop(getTop);
						} else {
							if (sTop > elTop + cH - elH) {
								getTop = sTop - elTop - elH;
							} else {
								getTop = sTop - elTop + elH;
							}
							setElTop(getTop);
						}
            $(document).scroll(function() {
              var sTop = $(window).scrollTop(),
              getTop = sTop - elTop + $(window).height()/2;
              if (getTop - elH >= 0 && getTop + elH <= cH) {
								setElTop(getTop);
              }
            });
          }

        },
        hide : function() {
          waitMeClose();
        }
      };

      function waitMeClose() {
        var currentID = elem.attr('data-waitme_id');
        elem.removeClass(elemClass + '_container').removeAttr('data-waitme_id');
        elem.find('.' + elemClass + '[data-waitme_id="' + currentID + '"]').remove();
      }

      if (methods[method]) {
        return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || ! method) {
        return methods.init.apply(this, arguments);
      }

      $.event.special.destroyed = {
        remove: function(o) {
          if (o.handler) {
            o.handler();
          }
        }
      };

    });

  };
  $(window).load(function(){
    $('body.waitMe_body').addClass('hideMe');
    setTimeout(function(){
      $('body.waitMe_body').find('.waitMe_container:not([data-waitme_id])').remove();
      $('body.waitMe_body').removeClass('waitMe_body hideMe');
    },200);
  });
})(jQuery);
