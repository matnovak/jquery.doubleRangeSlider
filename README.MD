#Double range slider jQuery plugin#

**doubleRangeSlider** is jQuery plugin for creating double range slider control

##Version##
0.1.0

##Usage##
###Optional settings###
rangeColor:'#2196F3'

rangeType:'round|squere'

slider1Color:'#FF9800'

slider1Value:0 ###Default value in **%**###

slider2Color:'#E65100'

slider2Value:100 ###Default value in **%**###

sliderType:'round|squere'

sliderSize:40 ###Size in **px**###

direction:'horizontal|vertical'

###Horizontal###
	$(document).ready(function(){
   		$('#Slider1').doubleRangeSlider();
   		
    });

###Vertical###
 	$(document).ready(function(){
 		$('#Slider2').doubleRangeSlider({
   			direction:'vertical'
   		});
   	});

##Vendors##
jQuery - [http//jquery.com](http//jquery.com)

##License##
MIT License