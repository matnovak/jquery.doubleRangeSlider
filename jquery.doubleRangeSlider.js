/*
 * name: doubleRangeSlider
 * author: Matej Novak
 * version:0.1.0
 * license: MIT
 */

 (function($){
 	$.fn.doubleRangeSlider=function(options){
 		//Default settings
 		var settings=$.extend({
 			rangeColor:'#2196F3',
 			rangeType:'round',
 			slider1Color:'#FF9800',
 			slider1Value:0,
 			slider2Color:'#E65100',
 			slider2Value:100,
 			sliderType:'round',
 			sliderSize:40,
 			direction:'horizontal'
 		},options);

 		return this.each(function(i,item){
 			var object=$(this);
 			var rangeWidth=$(object).innerHeight();
 			if(settings.direction=='horizontal'){
 				rangeWidth=$(object).innerWidth();
 			}
 			var minRange=0-settings.sliderSize/2;
 			var maxRange=(rangeWidth-settings.sliderSize/2)
 			//rangetype settings
			var rangeBorderRadius=0;
			if(settings.rangeType=='round'){
				rangeBorderRadius=(settings.sliderSize/4);
			}
			//add container default class
 			$(object).addClass('doubleRangeSlider');
 			//apply settings to control
 			if(settings.direction=='horizontal'){
	 			$(object).css({
	 				height:(settings.sliderSize/2),
	 				background:settings.rangeColor,
	 				'border-radius':rangeBorderRadius
	 			});
 			}else{
 				$(object).css({
	 				width:(settings.sliderSize/2),
	 				background:settings.rangeColor,
	 				'border-radius':rangeBorderRadius
	 			});
 			}

 			//sliderType settings
			var borderRadius=0;
			if(settings.sliderType=='round'){
				borderRadius=(settings.sliderSize/2);
			}
			var topPosition1=0,leftPosition1=0,topPosition2=0,leftPosition2=0;
			if(settings.direction=='horizontal'){
				 topPosition1=-(settings.sliderSize/4),
 				 leftPosition1=((rangeWidth*settings.slider1Value)/100-settings.sliderSize/2)
 				 topPosition2=-(settings.sliderSize/4),
 				 leftPosition2=((rangeWidth*settings.slider2Value)/100-settings.sliderSize/2)
			}else{
				 topPosition1=((rangeWidth*settings.slider1Value)/100-settings.sliderSize/2),
 				 leftPosition1=-(settings.sliderSize/4)
 				 topPosition2=((rangeWidth*settings.slider2Value)/100-settings.sliderSize/2),
 				 leftPosition2=-(settings.sliderSize/4)
			}
			//init slider 1
 			var slider1=$('<div class="dRSlider '+settings.sliderType+'" id="dRSlider'+i+'Slider1"></div>');
 			$(slider1).css({
 				width:settings.sliderSize,
 				height:settings.sliderSize,
 				background:settings.slider1Color,
 				top:topPosition1,
 				left:leftPosition1,
 				'border-radius':borderRadius
 			});
 			$(slider1).attr('data-value',settings.slider1Value);

 			////init slider 2
 			var slider2=$('<div class="dRSlider '+settings.sliderType+'" id="dRSlider'+i+'Slider2"></div>');
 			$(slider2).css({
 				width:settings.sliderSize,
 				height:settings.sliderSize,
 				background:settings.slider2Color,
 				top:topPosition2,
 				left:leftPosition2,
 				'border-radius':borderRadius
 			});
 			$(slider2).attr('data-value',settings.slider2Value);

 			// Slider 1 settings active state
 			$(slider1).on('mousedown',function(){
 				$(this).addClass('active');
 			});

 			// Slider 2 settings active state
 			$(slider2).on('mousedown',function(){
 				$(this).addClass('active');
 			});

 			// Mouse move event to set range of slider
 			$(object).on('mousemove',function(e){
 				var activeSlider=$(this).find(".dRSlider.active");
 				var offset = $(this).offset();
 				if($(activeSlider).length){
 					if(settings.direction=='horizontal'){
		 				var moveRange=(e.clientX-settings.sliderSize/2- offset.left);
		 				//validating constrains
		 				if(moveRange<minRange){
		 					moveRange=minRange;
		 				}else if(moveRange>maxRange){
		 					moveRange=maxRange;
		 				}
		 				//setting range slider left position	 				
		 				$(activeSlider).css('left',moveRange+'px');
	 				}else{
	 					var moveRange=(e.clientY-settings.sliderSize/2-offset.top);
		 				//validating constrains
		 				if(moveRange<minRange){
		 					moveRange=minRange;
		 				}else if(moveRange>maxRange){
		 					moveRange=maxRange;
		 				}
		 				//setting range slider left position	 				
		 				$(activeSlider).css('top',moveRange+'px');
	 				}
	 				//setting range slider value
	 				var newValue=Math.round(((moveRange+settings.sliderSize/2)*100)/(maxRange+settings.sliderSize/2));
	 				$(activeSlider).attr('data-value',newValue);
	 			}
 			}).on('mouseleave',function(){
 				$(this).find(".dRSlider.active").removeClass('active');
 			}).on('mouseup',function(){
 				$(this).find(".dRSlider.active").removeClass('active');
 			});

 			$(object).append(slider1);
 			$(object).append(slider2);
 		});


 	}
 }(jQuery));