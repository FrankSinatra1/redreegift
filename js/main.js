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
			button.not("button").on("click", function () {
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

					    if (i == 2) {
					    	$(stepCaption[0]).parent().css({
					    		marginLeft: "-235px"
					    	});
					    }

					    stepItem[stepItemCur].classList.add("active");


					    var heightStepItemActive = $(stepItem[stepItemCur]).height();
					    $(".page-zayavka .middle-content__main").css({
					    	minHeight: heightStepItemActive
					    });
					}, 258)

				if ($(this).parent().hasClass("middle-content__main-carts__cart")) {
					var el = ($(this).parent());
					setTimeout(function () {
						$(".middle-content__oplata--selTarif h3").after(el);
						el.addClass("idealcart");
						el.find(".button").remove();
						el.append("<a class='button' href='../html/success.html'>Перейти к оплате</a>");
					},1000)
				}

			})
		}
		
	$("#form-contact").validate({
		submitHandler: function (form){

		   $.post(form.action, $(form).serialize(), function (result, xhr){
			if(result == "true"){
			   $("#form-contact").find("input").val("");
			   console.log(1)
			}
			else {
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
				}, 228)
			}
		   });
		},
		rules:{
			name: {
				required: true,
				minlength: 2,
			},
			email: {
				required: true,
				email: true,
				minlength: 10,
			},
			telephone: {
				required: true,
				minlength: 13,
			},
			nameCompany: {
				required: true,
				minlength: 2,
			},
			textareaTask: {
				required: true,
				minlength: 3,
			}
		}
	});
  
	$("#telephone").mask("+7 (999) 999-99-99");
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