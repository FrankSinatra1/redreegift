$( function() {
    $( "#slider-range-min" ).slider({
		range: "min",
		value: 500,
		min: 500,
		max: 50000,
		step: 100,
		slide: function( event, ui ) {
		$( ".amount" ).val(ui.value + ".-");
		}
    });
    $( ".amount" ).val( $( "#slider-range-min" ).slider( "value" ) + ".-" );
});

$( function () {
	var nextStepButton = $(".nextStepButton"),
		button = $(".button"),
		stepCaption = $(".middle-conten__item-nextStep .step-caption"),
		stepItemActive = $(".middle-content__main-item.active"),
		stepItem = $(".middle-content__main-item"),
		stepItemCur = 0,
		i = 0;

		if (stepCaption.length) {
			$(".step-caption").on("click", function () {
				if ($(this).hasClass("active")) {
					stepCaption.removeClass("not");
				} else {
					$(this).addClass("not");
				}
				setTimeout(function () {
					stepCaption.removeClass("not");
				}, 800);
			})
		}

		if (stepCaption.length) {
			button.on("click", function (e) {
				e.preventDefault();
				$(".checkbox").trigger("click");
					setTimeout(function () {
						stepCaption[i].classList.remove("active");
					     i = i + 1;
					     
					     if(i >= stepCaption.length){
					         i = 0;
					     }


					    stepCaption[i].classList.add("active");
					    stepCaption[i].classList.add("line-through");
						stepItem[stepItemCur].classList.remove("active");
					    stepItemCur = stepItemCur + 1;
					     
					    if(stepItemCur >= stepItem.length){
					        stepItemCur = 0;
					    }

					    stepItem[stepItemCur].classList.add("active");


					    var heightStepItemActive = $(stepItem[stepItemCur]).height();
					    $(".page-zayavka .middle-content__main").css({
					    	minHeight: heightStepItemActive
					    });
					}, 300)

				if ($(this).parent().hasClass("middle-content__main-carts__cart")) {
					var el = ($(this).parent());
					setTimeout(function () {
						$(".middle-content__oplata--selTarif h3").after(el);
						el.addClass("idealcart");
						el.find(".button").text("Перейти к оплате");
					},1000)
				}

			})
		}
			
});

$(function () {
	if (window.matchMedia("(max-width: 500px)").matches) {
		var wrapElement = $(".middle-content-wrapper"),
			dragElement = $(".drag-wrapper__step");
		dragElement.draggable({ 
			containment: wrapElement,
			axis: "x"
		});

	}
});
