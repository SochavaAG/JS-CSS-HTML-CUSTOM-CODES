var formatNumber = {
 separador: ".", // separador para los miles
 sepDecimal: ',', // separador para los decimales
 formatear:function (num){
 num +='';
 var splitStr = num.split('.');
 var splitLeft = splitStr[0];
 var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
 var regx = /(\d+)(\d{3})/;
 while (regx.test(splitLeft)) {
 splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
 }
 return this.simbol + splitLeft +splitRight;
 },
 new:function(num, simbol){
 this.simbol = simbol ||'';
 return this.formatear(num);
 }
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation__ = __webpack_require__(1);




(function ($) {

	// Cache selectors
	var currSection = void 0,
	    currStep = void 0,
	    topMenu = $(".header__sub .nav"),
	    headerHeight = topMenu.closest("header.header").outerHeight(true),

	// All list items
	menuItems = topMenu.find("a:not(.def-link)"),

	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function () {
		var item = $(this).attr("href") != "#" ? $($(this).attr("href")) : false;
		if (item.length) {
			return item;
		}
	}),

	//Step items
	stepItems = $(".steps .step"),

	//Pricing car header
	$priceCard = $(".pricing-card"),
	    $priceHeader = $(".pricing-card__header"),
	    priceHeaderTop = $priceHeader.length ? $priceHeader.offset().top : 0,
	    $priceHeaderWidth = $priceHeader.outerWidth(true),
	    $priceHeaderHeight = $priceHeader.outerHeight(true),
	    $priceCardHeight = $priceCard.outerHeight(true),
	    $priceCardFinish = 0;

	//Calculate finish point for price card
	function calculateFinishPoint() {
		$priceCardHeight = $priceCard.outerHeight(true);
		$priceCardFinish = priceHeaderTop + $priceCardHeight - ($priceHeaderHeight + 180);
	}

	var anfix = anfix || {};

	anfix = {

		header: {
			sticky: {
				setup: function setup() {
					if (!$("header.header.header--fixed").length) return false;

					var header = $("header.header.header--fixed");

					// Hide Header on on scroll down
					var didScroll = void 0;
					var lastScrollTop = 0;
					var delta = 5;
					var navbarHeight = header.outerHeight();

					$(window).scroll(function (event) {
						didScroll = true;
					});

					setInterval(function () {
						if (didScroll) {

							if ($(window).outerWidth(true) < 1200) {
								hasScrolled();
							} else {
								if ($(this).scrollTop() > 99) {
									$('body').addClass('header-sticky');

									header.find('.nav--white .btn').removeClass('btn-white').addClass('btn-success');
								} else {
									$('body').removeClass('header-sticky');

									header.find('.nav--white .btn').removeClass('btn-success').addClass('btn-white');
								}
							}

							didScroll = false;
						}
					}, 250);

					function hasScrolled() {
						var st = $(window).scrollTop();

						// Make sure they scroll more than delta
						if (Math.abs(lastScrollTop - st) <= delta) return;

						if (st > lastScrollTop && st > navbarHeight) {
							// Scroll Down
							header.removeClass('header--down').addClass('header--up');
						} else {

							if (st + $(window).height() < $(document).height()) {
								// Scroll Up
								$('body').addClass('header-sticky');

								header.find('.nav--white .btn').removeClass('btn-white').addClass('btn-success');

								header.removeClass('header--up').addClass('header--down');
							}

							if (st < navbarHeight) {
								$('body').removeClass('header-sticky');

								header.find('.nav--white .btn').removeClass('btn-success').addClass('btn-white');
							}
						}

						lastScrollTop = st;
					}
				}
			},
			menu: {
				setup: function setup() {
					if (!$(".header .header__burger").length) return false;

					$('.header__burger').on('click', function () {
						if ($(this).find('.burger').hasClass('burger--close')) {
							$(this).find('.burger').removeClass('burger--close');
							$(this).closest('header').removeClass('active-nav');
							$('html').removeClass('overflow');
						} else {
							$(this).find('.burger').addClass('burger--close');
							$(this).closest('header').addClass('active-nav');
							$('html').addClass('overflow');
						}
					});
				}
			},
			submenu: {
				setup: function setup() {
					if (!$(".header__nav .has-submenu").length) return false;

					$('.nav .has-submenu > a').on('click', function () {

						var $current_parrent = $(this).closest('li'),
						    hasActive = $current_parrent.hasClass('active-submenu');

						$('.header__nav .active-submenu').find('.sub-menu').hide();
						$('.header__nav .has-submenu').removeClass('active-submenu');

						if (!hasActive) {
							$current_parrent.find('.sub-menu').show();
							$current_parrent.addClass('active-submenu');
						}
					});
				}
			},

			setup: function setup() {
				anfix.header.sticky.setup();
				anfix.header.menu.setup();
				anfix.header.submenu.setup();
			}
		},
		form: {
			parsley: {
				//Init Parsley validation
				setup: function setup() {
					if (!$("form.form").length) return false;

					$(document).ready(function () {
						$('form.form').parsley({
							trigger: 'change',
							successClass: "is-valid",
							errorClass: "is-invalid",
							classHandler: function classHandler(el) {
								return el.$element.closest('.form__field');
							},
							errorsWrapper: '<ul class="form__tooltip"></ul>',
							errorsContainer: function errorsContainer(field) {
								return field.$element.closest('.form__field');
							},

							excluded: 'select[name=country_code]'
						});
					});
				}
			},
			formValidation: {
				//Checking form (valid or not) add remove disabled class
				setup: function setup() {
					if (!$("form.form").length) return false;

					$(document).ready(function () {

						window.Parsley.on('field:validate', function () {
							var form = this.$element.closest("form.form"),
							    submit = form.find('[type="submit"]');

							if (form.parsley().isValid()) {
								submit.removeAttr("disabled");
							} else {
								submit.attr("disabled", "disabled");
							}
						});
					});
				}
			},
			select2: {
				//Init select2
				setup: function setup() {
					if (!$(".select2").length) return false;
					$(document).ready(function () {
						$('.select2').select2({
							width: '100%',
							placeholder: "Elige una opción"
						});
					});
				}
			},
			select2Flags: {
				//Init select2 Flags
				setup: function setup() {
					if (!$(".select2-flags").length) return false;

					$(function () {

						var countryData = __webpack_require__(2);

						function formatCountry(country) {
							if (!country.id) {
								return country.text;
							}
							var $country = $('<span class="flag flag-' + country.code.toLowerCase() + '"></span>\n\t\t\t\t\t\t\t\t\t<span class="flag-text">' + country.text + '</span>');
							return $country;
						}

						function formatSelection(data) {
							var $template = $('<span class="flag flag-' + data.code.toLowerCase() + '"></span>');

							$(data.element).attr('data-country-code', data.id);

							return $template;
						}

						$(".select2-flags").select2({
							placeholder: "Select a country",
							templateResult: formatCountry,
							templateSelection: formatSelection,
							data: countryData,
							dropdownAutoWidth: true
						});
					});
				}
			},
			inputs: {
				//Checking input value (empty or not)
				setup: function setup() {
					if (!$(".form .form__field").length) return false;

					var inputs = $(".form__field input:not([submit])");

					$(function () {

						inputs.each(function (i, input) {

							checkValue($(input));
						});
					});

					inputs.on('keyup change', function () {

						checkValue($(this));
					});

					function checkValue(el) {

						var value = el.val();

						value ? el.addClass('not-empty') : el.removeClass('not-empty');
					}
				}
			},
			radioBlock: {
				//Add checked class for parent
				setup: function setup() {
					if (!$(".radio-block").length) return false;

					$(".radio-block input[type='radio']").on('click', function () {

						$(".radio-block").removeClass('radio-block--checked');

						$(this).closest(".radio-block").addClass('radio-block--checked');
					});
				}
			},
			phone: {
				//Add masked input for phone
				setup: function setup() {
					if (!$(".select2-flags").length) return false;

					var callingCode = void 0;

					$(function () {

						callingCode = $(".select2-flags").select2('data')[0].id;

						addMask(callingCode);
					});

					$(".select2-flags").on('change', function () {
						callingCode = $(this).select2('data')[0].id;

						addMask(callingCode);
					});

					function addMask(code) {

						console.log(code);
						if (code == 34) {
							$(".form__field--phone input#phone").mask("(999) 99 99 99");
							console.log('true');
						} else {
							$(".form__field--phone input#phone").unmask();
							console.log('false');
						}
					}
				}
			},
			autoComplete: {
				setup: function setup() {
					if (!$(".form__field--company-name input[type='text']").length) return false;

					$(".form__field--company-name input[type='text']").autocomplete({
						serviceUrl: '/companies.json',
						transformResult: function transformResult(response, originalQuery) {
							var query = originalQuery.toLowerCase();
							var data = JSON.parse(response);
							return {
								suggestions: $.map(data.outputData.CompanySearch, function (company) {
									var searchString = company.CompanyProvinceName + company.CompanyCommercialName;
									searchString = searchString.toLowerCase();
									if (searchString.indexOf(query) >= 0) {
										return { value: company.CompanyProvinceName, data: {
												id: company.CompanyIdentificationNumber,
												corpName: company.CompanyCorporateName,
												comName: company.CompanyCommercialName
											} };
									}
								})
							};
						},
						formatResult: function formatResult(suggestion, originalQuery) {
							if (!originalQuery) {
								return suggestion.value;
							}

							var pattern = '(' + originalQuery.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&") + ')';

							var comName = suggestion.data.comName.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
							var provName = suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');

							return '<b>' + comName + '</b> <i>' + provName + '</i>';
						},
						onSelect: function onSelect(suggestion) {
							$(this).val(suggestion.data.comName + ' - ' + suggestion.value);
						}
					});
				}
			},
			count: {
				setup: function setup() {
					if (!$(".count input").length) return false;

					$(document).ready(function () {
						$('.count__minus').click(function () {
							var $input = $(this).parent().find('input'),
							    inputVal = parseInt($input.val()),
							    count = inputVal -= 1;

							count = count < 1 ? 1 : count;
							$input.val(count);
							$input.change();
							return false;
						});
						$('.count__plus').click(function () {
							var $input = $(this).parent().find('input'),
							    inputVal = parseInt($input.val());

							$input.val(inputVal += 1);
							$input.change();
							return false;
						});

						$(".count input").on('change', function () {
							var $input = $(this).parent().find('input');

							if ($input.val() === "") $input.val(1);
						});
					});
				}
			},
			pricing: {
				setup: function setup() {
					if (!$(".pricing-card form").length) return false;

					$(document).ready(function () {

						$(".btn-group--pricing .btn").on('click', function () {
							var $input = $(this).find('input'),
							    discount = $input.data('discount') ? $input.data('discount') : 0,
							    $pricingCard = $('.pricing-card');

							$pricingCard.find('input[name="plan"]').val($input.val());
							$pricingCard.find('input[name="discount"]').val(discount);

							if ($input.val() !== 'year') {
								$pricingCard.find('.price__discount').hide();
								$pricingCard.find('.pricing-card__subprice').hide();
							} else {
								$pricingCard.find('.price__discount').show();
								$pricingCard.find('.pricing-card__subprice').show();
							}
							calculatePrice();
						});

						$(".switch input[data-stock-pr]").on('click', function () {
							var $stockInputs = $(".switch input[data-stock-pr]");

							checkboxSwitcher($stockInputs, $(this).prop("checked"));
							calculatePrice();
						});

						$(".switch input[data-management-pr]").on('click', function () {
							var $stockInputs = $(".switch input[data-management-pr]");

							checkboxSwitcher($stockInputs, $(this).prop("checked"));
							calculatePrice();
						});

						$(".count input").on('change', function () {
							calculatePrice();
						});

						//Hide or Show more information (mobile device)
						$(".btn-link--show-more").on('click', function () {
							$(this).closest('.pricing-card__content').find('.content-wrap').stop(true, true).slideToggle();
						});
					});

					//Turn On|Off all switchers of pricing card
					function checkboxSwitcher(arr, prop) {
						arr.each(function (i, obj) {

							var addContent = $(obj).closest('.add-on').find('.add-on__content');
							$(obj).prop("checked", prop);
							addContent.slideToggle('slow', function () {
								calculateFinishPoint();
							});
						});
					}

					//Calculate price for each pricing card
					function calculatePrice() {
						$.each(pricing, function (i, pricingCard) {
							var selector = '.pricing-card--' + i,
							    count = $(selector).find('input[name="count"]').val();

							if (i === 'freelancer') {
								count = 1;
							} /*else if (count > 10) {
								count = 10;
							}*/

							var price = count > 10 ? pricingCard.prices[9] : pricingCard.prices[count - 1];
							var monthly = price * count,
							    yearly = monthly * 12;

							if (price) {
								var plan = $(selector).find('input[name="plan"]').val(),
								    discount = $(selector).find('input[name="discount"]').val(),
								    stockState = $(selector).find('input[name="stock_control"]').prop('checked'),
								    managementState = $(selector).find('input[name="pr_management"]').prop('checked'),
								    stockPrice = pricingCard.stock[count - 1] * count,
								    pmPrice = pricingCard.pm[count - 1] * count,
								    stockTotal,
								    pmTotal,
								    _totalPrice = price;

								if (stockState) {
									_totalPrice += pricingCard.stock[count - 1];
									monthly += stockPrice;
									stockTotal = stockPrice * 12;
								}

								if (managementState) {
									_totalPrice += pricingCard.pm[count - 1];
									monthly += pmPrice;
									pmTotal = pmPrice * 12;
								}

								if (plan === 'year' && discount) {
									_totalPrice = _totalPrice - _totalPrice / 100 * discount;
									stockPrice = Math.round((stockPrice - stockPrice / 100 * discount) * 10) / 10;
									stockTotal = Math.round((stockTotal - stockTotal / 100 * discount) * 10) / 10;
									pmPrice = Math.round((pmPrice - pmPrice / 100 * discount) * 10) / 10;
									pmTotal = Math.round((pmTotal - pmTotal / 100 * discount) * 10) / 10;
									yearly = Math.round(yearly - yearly / 100 * discount);

									if (stockState) {
										yearly += stockTotal;
									}
									if (managementState) {
										yearly += pmTotal;
									}
									yearly = Math.round(yearly);
								}

								if (count) {
									_totalPrice *= count;
								}

								var _totalPrice = Math.round(_totalPrice * 10) / 10;
								$(selector).find('.price__val').text(formatNumber.new(_totalPrice));
								$(selector).find('.price__val')[_totalPrice >= 1000 ? 'addClass': 'removeClass']('thousands__visible');
								$(selector).find('.price__currency')[_totalPrice >= 1000 ? 'addClass': 'removeClass']('thousands__visible');
								$(selector).find('.price__discount').text(formatNumber.new(monthly) + '€/mes');
								$(selector).find('.text-blue-dark-100').text(formatNumber.new(yearly) + '€ al año');
								$(selector).find('.stock-control').text(formatNumber.new(stockPrice));
								$(selector).find('.pm').text(formatNumber.new(pmPrice));
							}
						});
					}

					calculatePrice();
				}
			},
			setup: function setup() {
				anfix.form.parsley.setup();
				anfix.form.formValidation.setup();
				anfix.form.select2.setup();
				// anfix.form.select2Flags.setup();
				anfix.form.inputs.setup();
				anfix.form.radioBlock.setup();
				// anfix.form.phone.setup();
				anfix.form.autoComplete.setup();
				anfix.form.count.setup();
				anfix.form.pricing.setup();
			}
		},
		slider: {
			testimonials: {
				//Init Testimonial slider
				setup: function setup() {
					if (!$(".owl-carousel.testimonials").length) return false;

					$(document).ready(function () {
						$(".owl-carousel.testimonials").owlCarousel({
							items: 1,
							nav: true,
							navText: ["", ""],
							loop: true,
							autoplay: true,
							autoplayHoverPause: true,
							smartSpeed: 1000
						});
					});
				}
			},
			testimonialsRangeSlider: {
				//Init Testimonial slider with range
				setup: function setup() {
					if (!$(".testimonials-slider .owl-carousel").length) return false;

					$(document).ready(function () {

						var owl = $(".testimonials-slider .owl-carousel"),
						    slider = $(".testimonials-slider .testimonials-slider__range"),
						    rangeInitialized = false,
						    startSlide = Math.floor(($(".testimonials-slider .testimonial").length - 1) / 2);

						owl.owlCarousel({
							items: 1,
							startPosition: startSlide,
							onInitialized: function onInitialized(event) {
								rangeInit(event.item.count);
							},
							onDragged: function onDragged(event) {
								if (rangeInitialized) changeRange(event.item.index);
							}
						});

						//Initialize range slider
						function rangeInit(sliderItems) {

							if (sliderItems > 1) {
								rangeInitialized = true;

								slider.slider({
									min: 0,
									max: sliderItems - 1,
									value: startSlide,
									animate: "fast",
									slide: function slide(event, ui) {
										changeSlide(ui.value);
									}
								});
							}
						}

						//Change carousel position
						function changeSlide(position) {
							owl.trigger("to.owl.carousel", position);
						}

						//Change range value
						function changeRange(val) {
							slider.slider("value", val);
						}
					});
				}
			},
			testimonialsCenter: {
				//Init Testimonial slider with center position
				setup: function setup() {
					if (!$(".testimonials-sl-center .owl-carousel").length) return false;

					var containerWidth = $(document).outerWidth(true),
					    autoWidth = containerWidth > 768 ? true : false;

					$(document).ready(function () {
						$(".testimonials-sl-center .owl-carousel").owlCarousel({
							center: true,
							loop: true,
							autoWidth: autoWidth,
							autoplay: true,
							autoplayHoverPause: true,
							responsive: {
								0: {
									items: 1
								},
								767: {
									items: 3
								}
							}
						});
					});
				}
			},
			circle: {
				setup: function setup() {
					if (!$(".slider-circle").length) return false;

					$(document).ready(function () {
						var state = [{ "transform": "translate(0 , 50%)", "z-index": "3" }, { "transform": "translate(25%, 85%)", "z-index": "2" }, { "transform": "translate(50%, 20%)", "z-index": "1" }];
						var items = $(".slider-circle__item"),
						    itemsCount = items.length,
						    cicle = 0,
						    position = [],
						    inervalId = void 0;

						function next() {

							for (var i = 0; i < itemsCount; i++) {

								if (cicle == 0) {
									position[i] = i;
								};

								position[i] == 0 ? $(items[i]).addClass('slider-circle__item--active') : $(items[i]).removeClass('slider-circle__item--active');

								$(items[i]).css(state[position[i]]);

								position[i] + 1 == itemsCount ? position[i] = 0 : position[i] += 1;
							}

							cicle++;
						}

						function startCarousel() {
							inervalId = setInterval(function () {
								next();
							}, 5000);
						}

						function stopCarousel() {
							clearInterval(inervalId);
						}

						startCarousel();

						items.hover(function () {
							stopCarousel();
						}, function () {
							startCarousel();
						});
					});
				}
			},
			vertical: {
				setup: function setup() {
					if (!$(".vertical-slider .vertical-slider__slider").length) return false;

					var $slider = $('.vertical-slider .vertical-slider__slider');

					$(document).ready(function () {

						$slider.slick({
							vertical: true,
							autoplay: true,
							draggable: false,
							swipe: false,
							slidesToShow: 1,
							slidesToScroll: 1,
							prevArrow: $('.vertical-slider__controls .arrow-up'),
							nextArrow: $('.vertical-slider__controls .arrow-down'),
							verticalSwiping: true
						});
					});

					$slider.on('init', function (slick) {
						var count = $(this).find('.slick-slide:not(.slick-cloned)').length,
						    $countContainer = $(".vertical-slider__count-all");

						$(this).closest('.vertical-slider').removeClass('invisible');

						if (count < 10) {
							$countContainer.text('0' + count);
						} else {
							$countContainer.text(count);
						}
					});

					$slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
						var $curContainer = $(".vertical-slider__count-cur");

						currentSlide += 1;

						if (currentSlide < 10) {
							$curContainer.text('0' + currentSlide);
						} else {
							$curContainer.text(currentSlide);
						}
					});
				}
			},
			setup: function setup() {
				anfix.slider.testimonials.setup();
				// anfix.slider.testimonialsRangeSlider.setup();
				anfix.slider.testimonialsCenter.setup();
				anfix.slider.circle.setup();
				anfix.slider.vertical.setup();
			}
		},
		alert: {
			sticky: {
				setup: function setup() {
					if (!$(".alert--cookies").length) return false;

					window.onload = function () {
						var subFooterOffset = $('.footer__sub').offset().top;

						$(window).scroll(function () {
							var $alert = $(".alert--cookies");
							if ($(this).scrollTop() + $(this).height() < subFooterOffset) {
								$alert.addClass('alert--sticky');
							} else {
								$alert.removeClass('alert--sticky');
							}
						});
					};
				}
			},
			close: {
				setup: function setup() {
					if (!$(".alert .alert__close").length) return false;

					$(".alert .alert__close").on('click', function () {
						var $patent = $(this).closest('.alert');

						if ($patent.hasClass('alert--cookies')) {
							$('.footer__main').removeClass('footer__main--indent');
							document.cookie = "cookieAccepted=true; path=/;";
						}

						$patent.slideUp();
					});
				}
			},
			setup: function setup() {
				anfix.alert.sticky.setup();
				anfix.alert.close.setup();
			}
		},
		video: {
			modal: {
				setup: function setup() {
					if (!$(".vimeo-video").length) return false;

					$(".vimeo-video").modalVideo({ channel: 'vimeo' });
				}
			},
			setup: function setup() {
				anfix.video.modal.setup();
			}
		},
		accordion: {
			setup: function setup() {
				if (!$(".accordion").length) return false;

				var accordion = $(".accordion");

				accordion.find('.accordion__item--active .accordion__body').slideDown();

				$(".accordion__header").on('click', function () {

					var parent = $(this).closest('.accordion__item'),
					    activated = parent.hasClass('accordion__item--active');

					accordion.find('.accordion__item').removeClass('accordion__item--active').find(".accordion__body").slideUp();

					if (!activated) {
						parent.addClass('accordion__item--active').find(".accordion__body").slideDown();
					}
				});
			}
		},
		scroller: {
			//Smooth scroll
			binds: function binds() {
				$(menuItems).on("click", function (event) {

					event.preventDefault();

					var destination = $(this).attr("href").replace("#", ""),
					    destinationTop = $("#" + destination).offset().top - headerHeight + 2;

					$("html,body").animate({
						scrollTop: destinationTop
					}, 500);
				});
			},

			//Activate | Deactivate navigation items
			activeParts: function activeParts() {

				var fromTop = $(window).scrollTop();

				var cur = scrollItems.map(function () {
					if ($(this).offset().top < fromTop + headerHeight) return this;
				});

				cur = cur[cur.length - 1];

				if ($(window).scrollTop() == $(document).height() - $(window).height()) {
					currSection = $(scrollItems).last();
					$(topMenu).find('li').removeClass("active");
					$(topMenu).find('li:last-of-type').addClass("active");
				} else if (currSection !== cur) {
					currSection = cur;
					var currID = $(cur).attr("id");
					$(topMenu).find('li').removeClass("active");
					$(topMenu).find('li a[href="#' + currID + '"]').closest('li').addClass("active");
				}
			},
			fixNav: function fixNav() {
				var fromTop = $(window).scrollTop();
				var header = $("header.header.header--fixed");
				var navbarHeight = header.outerHeight();

				if (fromTop >= priceHeaderTop - navbarHeight) {
					$priceCard.addClass("pricing-card--header-fixed");
					$priceHeader.css({
						width: $priceHeaderWidth + 'px',
						top: navbarHeight + 'px'
					});
				} else {
					$priceCard.removeClass("pricing-card--header-fixed");
					$priceHeader.css({
						width: '100%',
						top: '0'
					});
				}

				if (fromTop >= $priceCardFinish) {
					$priceHeader.css({
						opacity: 0,
						visibility: 'hidden'
					});
				} else {
					$priceHeader.css({
						opacity: 1,
						visibility: 'visible'
					});
				}
			},
			setup: function setup() {
				anfix.scroller.binds();

				if ($(topMenu).length) {

					$(window).scroll(function () {
						anfix.scroller.activeParts();
					});
				}

				if ($('.pricing-card__header').length && $(window).outerWidth(true) >= 1200) {

					$(window).scroll(function () {
						anfix.scroller.fixNav();
					});
				}
			}
		},
		steps: {
			//Activate step items
			activeParts: function activeParts() {

				var fromTop = $(window).scrollTop();

				var cur = stepItems.map(function () {
					if ($(this).offset().top < fromTop + 200) return this;
				});

				cur = cur[cur.length - 1];

				if (currStep !== cur) {
					currStep = cur;
					if (!$(cur).hasClass("step--active")) {
						$(cur).addClass("step--active");
					}
				}
			},
			setup: function setup() {
				if (!$(".steps").length) return false;

				$(window).scroll(function () {
					anfix.steps.activeParts();
				});
			}
		},
		tooltip: {
			setup: function setup() {
				if (!$('[data-toggle="tooltip"]').length) return false;

				$('[data-toggle="tooltip"]').tooltip();
			}
		},
		init: function init() {
			anfix.header.setup();
			anfix.form.setup();
			anfix.slider.setup();
			anfix.alert.setup();
			anfix.video.setup();
			anfix.accordion.setup();
			anfix.scroller.setup();
			anfix.steps.setup();
			anfix.tooltip.setup();
		}
	};

	$(function () {
		anfix.init();
		__WEBPACK_IMPORTED_MODULE_0__animation__["a" /* anfixAnim */].init();

		calculateFinishPoint();
	});
})(jQuery);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return anfixAnim; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var anfixAnim = anfixAnim || {};

var params = {
	renderer: 'svg',
	loop: true,
	autoplay: true
};

var anim = void 0;

window.sr = typeof ScrollReveal !== "undefined" ? ScrollReveal() : null;

var publicPath = '..';

if (typeof anfix !== "undefined" && typeof anfix.public_path !== "undefined") {
	publicPath = anfix.public_path;
}

anfixAnim = {

	home: {
		intro: {
			setup: function setup() {
				if (!$(".home #anim-intro").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-intro'),
					/*path: publicPath + '/animations/home/intro/data.json'*/
					path:  'JSON/intro/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".home #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					/*path: publicPath + '/animations/home/feature1/data.json'*/
					path: publicPath + 'JSON/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature2: {
			setup: function setup() {
				if (!$(".home #anim-feature2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature2'),
					/*path: publicPath + '/animations/home/feature2/data.json'*/
					path: publicPath + 'JSON/feature2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature3: {
			setup: function setup() {
				if (!$(".home #anim-feature3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature3'),
					/*path: publicPath + '/animations/home/feature3/data.json'*/
          path: publicPath + 'JSON/feature3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature4: {
			setup: function setup() {
				if (!$(".home #anim-feature4").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature4'),
					/*path: publicPath + '/animations/home/feature4/data.json'*/
          path: publicPath + 'JSON/feature4/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		appMobile: {
			setup: function setup() {
				if (!$(".home #anim-app-mobile").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-app-mobile'),
					/*path: publicPath + '/animations/home/app-mobile/data.json'*/
					path: publicPath + 'JSON/app-mobile/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.home.intro.setup();
			anfixAnim.home.feature1.setup();
			anfixAnim.home.feature2.setup();
			anfixAnim.home.feature3.setup();
			anfixAnim.home.feature4.setup();
			anfixAnim.home.appMobile.setup();
		}
	},
	freelancer: {
		benefit1: {
			setup: function setup() {
				if (!$(".page-template-freelancer #anim-benefit1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit1'),
					path: publicPath + '/animations/freelancer/benefit1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		benefit2: {
			setup: function setup() {
				if (!$(".page-template-freelancer #anim-benefit2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit2'),
					path: publicPath + '/animations/freelancer/benefit2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".page-template-freelancer #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/freelancer/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature2: {
			setup: function setup() {
				if (!$(".page-template-freelancer #anim-feature2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature2'),
					path: publicPath + '/animations/freelancer/feature2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature3: {
			setup: function setup() {
				if (!$(".page-template-freelancer #anim-feature3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature3'),
					path: publicPath + '/animations/freelancer/feature3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature4: {
			setup: function setup() {
				if (!$(".page-template-freelancer #anim-feature4").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature4'),
					path: publicPath + '/animations/freelancer/feature4/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature5: {
			setup: function setup() {
				if (!$(".page-template-freelancer #anim-feature5").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature5'),
					path: publicPath + '/animations/freelancer/feature5/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.freelancer.benefit1.setup();
			anfixAnim.freelancer.benefit2.setup();
			anfixAnim.freelancer.feature1.setup();
			anfixAnim.freelancer.feature2.setup();
			anfixAnim.freelancer.feature3.setup();
			anfixAnim.freelancer.feature4.setup();
			anfixAnim.freelancer.feature5.setup();
		}
	},
	sme: {
		benefit1: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-benefit1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit1'),
					path: publicPath + '/animations/sme/benefit1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		benefit2: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-benefit2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit2'),
					path: publicPath + '/animations/sme/benefit2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		benefit3: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-benefit3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit3'),
					path: publicPath + '/animations/sme/benefit3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/sme/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature2: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-feature2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature2'),
					path: publicPath + '/animations/sme/feature2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature3: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-feature3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature3'),
					path: publicPath + '/animations/sme/feature3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature4: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-feature4").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature4'),
					path: publicPath + '/animations/sme/feature4/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature5: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-feature5").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature5'),
					path: publicPath + '/animations/sme/feature5/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		addOnn1: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-add-on1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-add-on1'),
					path: publicPath + '/animations/sme/add-on1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		addOnn2: {
			setup: function setup() {
				if (!$(".page-template-sme #anim-add-on2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-add-on2'),
					path: publicPath + '/animations/sme/add-on2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.sme.benefit1.setup();
			anfixAnim.sme.benefit2.setup();
			anfixAnim.sme.benefit3.setup();
			anfixAnim.sme.feature1.setup();
			anfixAnim.sme.feature2.setup();
			anfixAnim.sme.feature3.setup();
			anfixAnim.sme.feature4.setup();
			anfixAnim.sme.feature5.setup();
			anfixAnim.sme.addOnn1.setup();
			anfixAnim.sme.addOnn2.setup();
		}
	},
	adviser: {
		feature1: {
			setup: function setup() {
				if (!$(".page-template-advisor #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/advisor/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		tax1: {
			setup: function setup() {
				if (!$(".page-template-advisor #anim-tax1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-tax1'),
					path: publicPath + '/animations/advisor/tax1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		tax2: {
			setup: function setup() {
				if (!$(".page-template-advisor #anim-tax2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-tax2'),
					path: publicPath + '/animations/advisor/tax2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		loyalty1: {
			setup: function setup() {
				if (!$(".page-template-advisor #anim-loyalty1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-loyalty1'),
					path: publicPath + '/animations/advisor/loyalty1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		loyalty2: {
			setup: function setup() {
				if (!$(".page-template-advisor #anim-loyalty2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-loyalty2'),
					path: publicPath + '/animations/advisor/loyalty2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.adviser.feature1.setup();
			anfixAnim.adviser.tax1.setup();
			anfixAnim.adviser.tax2.setup();
			anfixAnim.adviser.loyalty1.setup();
			anfixAnim.adviser.loyalty2.setup();
		}
	},
	invoicing: {
		intro: {
			setup: function setup() {
				if (!$(".page-template-invoicing #anim-intro").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-intro'),
					path: publicPath + '/animations/invoicing/intro/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".page-template-invoicing #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/invoicing/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		benefit1: {
			setup: function setup() {
				if (!$(".page-template-invoicing #anim-benefit1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit1'),
					path: publicPath + '/animations/invoicing/benefit1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		benefit2: {
			setup: function setup() {
				if (!$(".page-template-invoicing #anim-benefit2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit2'),
					path: publicPath + '/animations/invoicing/benefit2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		benefit3: {
			setup: function setup() {
				if (!$(".page-template-invoicing #anim-benefit3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit3'),
					path: publicPath + '/animations/invoicing/benefit3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		benefit4: {
			setup: function setup() {
				if (!$(".page-template-invoicing #anim-benefit4").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-benefit4'),
					path: publicPath + '/animations/invoicing/benefit4/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		simplestWay: {
			setup: function setup() {
				if (!$(".page-template-invoicing #anim-simplest-way").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-simplest-way'),
					path: publicPath + '/animations/invoicing/simplest-way/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		appMobile: {
			setup: function setup() {
				if (!$(".page-template-invoicing #anim-app-mobile").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-app-mobile'),
					path: publicPath + '/animations/invoicing/app-mobile/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.invoicing.intro.setup();
			anfixAnim.invoicing.feature1.setup();
			anfixAnim.invoicing.benefit1.setup();
			anfixAnim.invoicing.benefit2.setup();
			anfixAnim.invoicing.benefit3.setup();
			anfixAnim.invoicing.benefit4.setup();
			anfixAnim.invoicing.simplestWay.setup();
			anfixAnim.invoicing.appMobile.setup();
		}
	},
	whyAnfix: {
		argument1: {
			setup: function setup() {
				if (!$(".page-template-why-anfix #anim-argument1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-argument1'),
					path: publicPath + '/animations/why-anfix/argument1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		argument2: {
			setup: function setup() {
				if (!$(".page-template-why-anfix #anim-argument2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-argument2'),
					path: publicPath + '/animations/why-anfix/argument2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		innovation: {
			setup: function setup() {
				if (!$(".page-template-why-anfix #anim-innovation").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-innovation'),
					path: publicPath + '/animations/why-anfix/innovation/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.whyAnfix.argument1.setup();
			anfixAnim.whyAnfix.argument2.setup();
			anfixAnim.whyAnfix.innovation.setup();
		}
	},
	taxes: {
		intro: {
			setup: function setup() {
				if (!$(".page-template-taxes #anim-intro").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-intro'),
					path: publicPath + '/animations/taxes/intro/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".page-template-taxes #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/taxes/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		perfect1: {
			setup: function setup() {
				if (!$(".page-template-taxes #anim-perfect1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-perfect1'),
					path: publicPath + '/animations/taxes/perfect1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		taxes1: {
			setup: function setup() {
				if (!$(".page-template-taxes #anim-taxes1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-taxes1'),
					path: publicPath + '/animations/taxes/taxes1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.taxes.intro.setup();
			anfixAnim.taxes.feature1.setup();
			anfixAnim.taxes.perfect1.setup();
			anfixAnim.taxes.taxes1.setup();
		}
	},
	appMobile: {
		intro: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-intro").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-intro'),
					path: publicPath + '/animations/app-mobile/intro/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/app-mobile/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature2: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-feature2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature2'),
					path: publicPath + '/animations/app-mobile/feature2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature3: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-feature3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature3'),
					path: publicPath + '/animations/app-mobile/feature3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature4: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-feature4").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature4'),
					path: publicPath + '/animations/app-mobile/feature4/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature5: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-feature5").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature5'),
					path: publicPath + '/animations/app-mobile/feature5/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		watch1: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-watch1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-watch1'),
					path: publicPath + '/animations/app-mobile/watch1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		watch2: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-watch2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-watch2'),
					path: publicPath + '/animations/app-mobile/watch2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		watch3: {
			setup: function setup() {
				if (!$(".page-template-app-mobile #anim-watch3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-watch3'),
					path: publicPath + '/animations/app-mobile/watch3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.appMobile.intro.setup();
			anfixAnim.appMobile.feature1.setup();
			anfixAnim.appMobile.feature2.setup();
			anfixAnim.appMobile.feature3.setup();
			anfixAnim.appMobile.feature4.setup();
			anfixAnim.appMobile.feature5.setup();
			anfixAnim.appMobile.watch1.setup();
			anfixAnim.appMobile.watch2.setup();
			anfixAnim.appMobile.watch3.setup();
		}
	},
	stockControl: {
		intro: {
			setup: function setup() {
				if (!$(".page-template-stock-control #anim-intro").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-intro'),
					path: publicPath + '/animations/stock-control/intro/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".page-template-stock-control #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/stock-control/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature2: {
			setup: function setup() {
				if (!$(".page-template-stock-control #anim-feature2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature2'),
					path: publicPath + '/animations/stock-control/feature2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature3: {
			setup: function setup() {
				if (!$(".page-template-stock-control #anim-feature3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature3'),
					path: publicPath + '/animations/stock-control/feature3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		automate1: {
			setup: function setup() {
				if (!$(".page-template-stock-control #anim-automate1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-automate1'),
					path: publicPath + '/animations/stock-control/automate1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		manage1: {
			setup: function setup() {
				if (!$(".page-template-stock-control #anim-manage1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-manage1'),
					path: publicPath + '/animations/stock-control/manage1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		manage2: {
			setup: function setup() {
				if (!$(".page-template-stock-control #anim-manage2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-manage2'),
					path: publicPath + '/animations/stock-control/manage2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.stockControl.intro.setup();
			anfixAnim.stockControl.feature1.setup();
			anfixAnim.stockControl.feature2.setup();
			anfixAnim.stockControl.feature3.setup();
			anfixAnim.stockControl.automate1.setup();
			anfixAnim.stockControl.manage1.setup();
			anfixAnim.stockControl.manage2.setup();
		}
	},
	projectManagement: {
		intro: {
			setup: function setup() {
				if (!$(".page-template-project-management #anim-intro").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-intro'),
					path: publicPath + '/animations/project-management/intro/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".page-template-project-management #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/project-management/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature2: {
			setup: function setup() {
				if (!$(".page-template-project-management #anim-feature2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature2'),
					path: publicPath + '/animations/project-management/feature2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature3: {
			setup: function setup() {
				if (!$(".page-template-project-management #anim-feature3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature3'),
					path: publicPath + '/animations/project-management/feature3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature4: {
			setup: function setup() {
				if (!$(".page-template-project-management #anim-feature4").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature4'),
					path: publicPath + '/animations/project-management/feature4/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		automate1: {
			setup: function setup() {
				if (!$(".page-template-project-management #anim-automate1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-automate1'),
					path: publicPath + '/animations/project-management/automate1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		realTime: {
			setup: function setup() {
				if (!$(".page-template-project-management #anim-real-time").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-real-time'),
					path: publicPath + '/animations/project-management/real-time/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.projectManagement.intro.setup();
			anfixAnim.projectManagement.feature1.setup();
			anfixAnim.projectManagement.feature2.setup();
			anfixAnim.projectManagement.feature3.setup();
			anfixAnim.projectManagement.feature4.setup();
			anfixAnim.projectManagement.automate1.setup();
			anfixAnim.projectManagement.realTime.setup();
		}
	},
	accounting: {
		intro: {
			setup: function setup() {
				if (!$(".page-template-accounting #anim-intro").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-intro'),
					path: publicPath + '/animations/accounting/intro/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		feature1: {
			setup: function setup() {
				if (!$(".page-template-accounting #anim-feature1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-feature1'),
					path: publicPath + '/animations/accounting/feature1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		automate1: {
			setup: function setup() {
				if (!$(".page-template-accounting #anim-automate1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-automate1'),
					path: publicPath + '/animations/accounting/automate1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		automate2: {
			setup: function setup() {
				if (!$(".page-template-accounting #anim-automate2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-automate2'),
					path: publicPath + '/animations/accounting/automate2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		automate3: {
			setup: function setup() {
				if (!$(".page-template-accounting #anim-automate3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-automate3'),
					path: publicPath + '/animations/accounting/automate3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.accounting.intro.setup();
			anfixAnim.accounting.feature1.setup();
			anfixAnim.accounting.automate1.setup();
			anfixAnim.accounting.automate2.setup();
			anfixAnim.accounting.automate3.setup();
		}
	},
	costControl: {
		intro: {
			setup: function setup() {
				if (!$(".page-template-cost-control #anim-intro").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-intro'),
					path: publicPath + '/animations/cost-control/intro/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		step1: {
			setup: function setup() {
				if (!$(".page-template-cost-control #anim-step1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-step1'),
					path: publicPath + '/animations/cost-control/step1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		step2: {
			setup: function setup() {
				if (!$(".page-template-cost-control #anim-step2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-step2'),
					path: publicPath + '/animations/cost-control/step2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		step3: {
			setup: function setup() {
				if (!$(".page-template-cost-control #anim-step3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-step3'),
					path: publicPath + '/animations/cost-control/step3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		info1: {
			setup: function setup() {
				if (!$(".page-template-cost-control #anim-info1").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-info1'),
					path: publicPath + '/animations/cost-control/info1/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		info2: {
			setup: function setup() {
				if (!$(".page-template-cost-control #anim-info2").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-info2'),
					path: publicPath + '/animations/cost-control/info2/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		info3: {
			setup: function setup() {
				if (!$(".page-template-cost-control #anim-info3").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-info3'),
					path: publicPath + '/animations/cost-control/info3/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		app: {
			setup: function setup() {
				if (!$(".page-template-cost-control #anim-app").length) return false;

				var animParams = _extends({}, params, {
					container: document.getElementById('anim-app'),
					path: publicPath + '/animations/cost-control/app/data.json'
				});

				anim = bodymovin.loadAnimation(animParams);
			}
		},
		setup: function setup() {
			anfixAnim.costControl.intro.setup();
			anfixAnim.costControl.step1.setup();
			anfixAnim.costControl.step2.setup();
			anfixAnim.costControl.step3.setup();
			anfixAnim.costControl.info1.setup();
			anfixAnim.costControl.info2.setup();
			anfixAnim.costControl.info3.setup();
			anfixAnim.costControl.app.setup();
		}
	},
	scrollReveal: {
		contentText: {
			setup: function setup() {
				if (!$(".sr-content-text").length) return false;

				sr.reveal('.sr-content-text', {
					origin: 'bottom',
					distance: '20%',
					opacity: 1,
					scale: 1,
					duration: 1000,
					mobile: false
				});
			}
		},
		rightContent: {
			setup: function setup() {
				if (!$(".sr-right-content").length) return false;

				sr.reveal('.sr-right-content', {
					origin: 'right',
					distance: '30%',
					opacity: 1,
					scale: 1,
					duration: 1000,
					mobile: false
				});
			}
		},
		leftContent: {
			setup: function setup() {
				if (!$(".sr-left-content").length) return false;

				sr.reveal('.sr-left-content', {
					origin: 'left',
					distance: '30%',
					opacity: 1,
					scale: 1,
					duration: 1000,
					mobile: false
				});
			}
		},
		leftTitle: {
			setup: function setup() {
				if (!$(".sr-left-title").length) return false;

				sr.reveal('.sr-left-title', {
					origin: 'left',
					distance: '10%',
					opacity: 0,
					duration: 1000,
					scale: 1,
					delay: 100,
					mobile: false
				});
			}
		},
		leftSubTitle: {
			setup: function setup() {
				if (!$(".sr-left-subtitle").length) return false;

				sr.reveal('.sr-left-subtitle', {
					origin: 'left',
					distance: '30%',
					opacity: 0,
					scale: 1,
					duration: 1000,
					mobile: false
				});
			}
		},
		rightImg: {
			setup: function setup() {
				if (!$(".sr-right-img").length) return false;

				sr.reveal('.sr-right-img', {
					origin: 'right',
					distance: '30%',
					opacity: 0,
					duration: 1000,
					mobile: false
				});
			}
		},
		leftImg: {
			setup: function setup() {
				if (!$(".sr-left-img").length) return false;

				sr.reveal('.sr-left-img', {
					origin: 'left',
					distance: '30%',
					opacity: 0,
					scale: 1,
					duration: 1000,
					mobile: false
				});
			}
		},
		centerImg: {
			setup: function setup() {
				if (!$(".sr-center-img").length) return false;

				sr.reveal('.sr-center-img', {
					scale: .5,
					duration: 1000,
					mobile: false
				});
			}
		},
		introForm: {
			setup: function setup() {
				if (!$(".sr-intro-form").length) return false;

				sr.reveal('.sr-intro-form', {
					origin: 'left',
					distance: '10%',
					opacity: 0,
					duration: 1000,
					scale: 1,
					delay: 100,
					mobile: false
				});
			}
		},
		socialproof: {
			setup: function setup() {
				if (!$(".sr-socialproof").length) return false;

				sr.reveal('.sr-socialproof', {
					origin: 'bottom',
					distance: '70%',
					opacity: .1,
					duration: 1000,
					delay: 100,
					scale: 1,
					mobile: false
				});
			}
		},
		appMobileContent: {
			setup: function setup() {
				if (!$(".sr-appmob-content").length) return false;

				sr.reveal('.sr-appmob-content', {
					origin: 'bottom',
					distance: '40%',
					opacity: 0,
					duration: 1000,
					scale: 1,
					mobile: false
				});
			}
		},
		appMobileImg: {
			setup: function setup() {
				if (!$(".sr-appmob-img").length) return false;

				sr.reveal('.sr-appmob-img', {
					origin: 'left',
					distance: '20%',
					opacity: 0,
					duration: 1000,
					scale: .8,
					mobile: false

				});
			}
		},
		highlight: {
			setup: function setup() {
				if (!$(".sr-highlight").length) return false;

				sr.reveal('.sr-highlight', {
					origin: 'bottom',
					distance: '20%',
					opacity: 1,
					scale: 0.95,
					duration: 1000,
					mobile: false

				});
			}
		},
		setup: function setup() {
			anfixAnim.scrollReveal.contentText.setup();
			anfixAnim.scrollReveal.rightContent.setup();
			anfixAnim.scrollReveal.leftContent.setup();
			anfixAnim.scrollReveal.leftTitle.setup();
			anfixAnim.scrollReveal.leftSubTitle.setup();
			anfixAnim.scrollReveal.rightImg.setup();
			anfixAnim.scrollReveal.leftImg.setup();
			anfixAnim.scrollReveal.centerImg.setup();
			anfixAnim.scrollReveal.introForm.setup();
			anfixAnim.scrollReveal.socialproof.setup();
			anfixAnim.scrollReveal.appMobileContent.setup();
			anfixAnim.scrollReveal.appMobileImg.setup();
			anfixAnim.scrollReveal.highlight.setup();
		}
	},
	init: function init() {
		anfixAnim.home.setup();
		anfixAnim.freelancer.setup();
		anfixAnim.sme.setup();
		anfixAnim.adviser.setup();
		anfixAnim.invoicing.setup();
		anfixAnim.whyAnfix.setup();
		anfixAnim.taxes.setup();
		anfixAnim.appMobile.setup();
		anfixAnim.stockControl.setup();
		anfixAnim.projectManagement.setup();
		anfixAnim.accounting.setup();
		anfixAnim.costControl.setup();
		anfixAnim.scrollReveal.setup();
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = [{"text":"Aruba","code":"AW","id":"297"},{"text":"Afghanistan","code":"AF","id":"93"},{"text":"Angola","code":"AO","id":"244"},{"text":"Anguilla","code":"AI","id":"1264"},{"text":"Ã…land Islands","code":"AX","id":"358"},{"text":"Albania","code":"AL","id":"355"},{"text":"Andorra","code":"AD","id":"376"},{"text":"United Arab Emirates","code":"AE","id":"971"},{"text":"Argentina","code":"AR","id":"54"},{"text":"Armenia","code":"AM","id":"374"},{"text":"American Samoa","code":"AS","id":"1684"},{"text":"Antigua and Barbuda","code":"AG","id":"1268"},{"text":"Australia","code":"AU","id":"61"},{"text":"Austria","code":"AT","id":"43"},{"text":"Azerbaijan","code":"AZ","id":"994"},{"text":"Burundi","code":"BI","id":"257"},{"text":"Belgium","code":"BE","id":"32"},{"text":"Benin","code":"BJ","id":"229"},{"text":"Burkina Faso","code":"BF","id":"226"},{"text":"Bangladesh","code":"BD","id":"880"},{"text":"Bulgaria","code":"BG","id":"359"},{"text":"Bahrain","code":"BH","id":"973"},{"text":"Bahamas","code":"BS","id":"1242"},{"text":"Bosnia and Herzegovina","code":"BA","id":"387"},{"text":"Saint BarthÃ©lemy","code":"BL","id":"590"},{"text":"Belarus","code":"BY","id":"375"},{"text":"Belize","code":"BZ","id":"501"},{"text":"Bermuda","code":"BM","id":"1441"},{"text":"Bolivia","code":"BO","id":"591"},{"text":"Brazil","code":"BR","id":"55"},{"text":"Barbados","code":"BB","id":"1246"},{"text":"Brunei","code":"BN","id":"673"},{"text":"Bhutan","code":"BT","id":"975"},{"text":"Botswana","code":"BW","id":"267"},{"text":"Central African Republic","code":"CF","id":"236"},{"text":"Canada","code":"CA","id":"1"},{"text":"Cocos (Keeling) Islands","code":"CC","id":"61"},{"text":"Switzerland","code":"CH","id":"41"},{"text":"Chile","code":"CL","id":"56"},{"text":"China","code":"CN","id":"86"},{"text":"Ivory Coast","code":"CI","id":"225"},{"text":"Cameroon","code":"CM","id":"237"},{"text":"DR Congo","code":"CD","id":"243"},{"text":"Republic of the Congo","code":"CG","id":"242"},{"text":"Cook Islands","code":"CK","id":"682"},{"text":"Colombia","code":"CO","id":"57"},{"text":"Comoros","code":"KM","id":"269"},{"text":"Cape Verde","code":"CV","id":"238"},{"text":"Costa Rica","code":"CR","id":"506"},{"text":"Cuba","code":"CU","id":"53"},{"text":"CuraÃ§ao","code":"CW","id":"5999"},{"text":"Christmas Island","code":"CX","id":"61"},{"text":"Cayman Islands","code":"KY","id":"1345"},{"text":"Cyprus","code":"CY","id":"357"},{"text":"Czechia","code":"CZ","id":"420"},{"text":"Germany","code":"DE","id":"49"},{"text":"Djibouti","code":"DJ","id":"253"},{"text":"Dominica","code":"DM","id":"1767"},{"text":"Denmark","code":"DK","id":"45"},{"text":"Dominican Republic","code":"DO","id":"1809"},{"text":"Dominican Republic","code":"DO","id":"1829"},{"text":"Dominican Republic","code":"DO","id":"1849"},{"text":"Algeria","code":"DZ","id":"213"},{"text":"Ecuador","code":"EC","id":"593"},{"text":"Egypt","code":"EG","id":"20"},{"text":"Eritrea","code":"ER","id":"291"},{"text":"Western Sahara","code":"EH","id":"212"},{"text":"Spain","code":"ES","id":"34","selected":true},{"text":"Estonia","code":"EE","id":"372"},{"text":"Ethiopia","code":"ET","id":"251"},{"text":"Finland","code":"FI","id":"358"},{"text":"Fiji","code":"FJ","id":"679"},{"text":"Falkland Islands","code":"FK","id":"500"},{"text":"France","code":"FR","id":"33"},{"text":"Faroe Islands","code":"FO","id":"298"},{"text":"Micronesia","code":"FM","id":"691"},{"text":"Gabon","code":"GA","id":"241"},{"text":"United Kingdom","code":"GB","id":"44"},{"text":"Georgia","code":"GE","id":"995"},{"text":"Guernsey","code":"GG","id":"44"},{"text":"Ghana","code":"GH","id":"233"},{"text":"Gibraltar","code":"GI","id":"350"},{"text":"Guinea","code":"GN","id":"224"},{"text":"Guadeloupe","code":"GP","id":"590"},{"text":"Gambia","code":"GM","id":"220"},{"text":"Guinea-Bissau","code":"GW","id":"245"},{"text":"Equatorial Guinea","code":"GQ","id":"240"},{"text":"Greece","code":"GR","id":"30"},{"text":"Grenada","code":"GD","id":"1473"},{"text":"Greenland","code":"GL","id":"299"},{"text":"Guatemala","code":"GT","id":"502"},{"text":"French Guiana","code":"GF","id":"594"},{"text":"Guam","code":"GU","id":"1671"},{"text":"Guyana","code":"GY","id":"592"},{"text":"Hong Kong","code":"HK","id":"852"},{"text":"Honduras","code":"HN","id":"504"},{"text":"Croatia","code":"HR","id":"385"},{"text":"Haiti","code":"HT","id":"509"},{"text":"Hungary","code":"HU","id":"36"},{"text":"Indonesia","code":"ID","id":"62"},{"text":"Isle of Man","code":"IM","id":"44"},{"text":"India","code":"IN","id":"91"},{"text":"British Indian Ocean Territory","code":"IO","id":"246"},{"text":"Ireland","code":"IE","id":"353"},{"text":"Iran","code":"IR","id":"98"},{"text":"Iraq","code":"IQ","id":"964"},{"text":"Iceland","code":"IS","id":"354"},{"text":"Israel","code":"IL","id":"972"},{"text":"Italy","code":"IT","id":"39"},{"text":"Jamaica","code":"JM","id":"1876"},{"text":"Jersey","code":"JE","id":"44"},{"text":"Jordan","code":"JO","id":"962"},{"text":"Japan","code":"JP","id":"81"},{"text":"Kazakhstan","code":"KZ","id":"76"},{"text":"Kazakhstan","code":"KZ","id":"77"},{"text":"Kenya","code":"KE","id":"254"},{"text":"Kyrgyzstan","code":"KG","id":"996"},{"text":"Cambodia","code":"KH","id":"855"},{"text":"Kiribati","code":"KI","id":"686"},{"text":"Saint Kitts and Nevis","code":"KN","id":"1869"},{"text":"South Korea","code":"KR","id":"82"},{"text":"Kosovo","code":"XK","id":"383"},{"text":"Kuwait","code":"KW","id":"965"},{"text":"Laos","code":"LA","id":"856"},{"text":"Lebanon","code":"LB","id":"961"},{"text":"Liberia","code":"LR","id":"231"},{"text":"Libya","code":"LY","id":"218"},{"text":"Saint Lucia","code":"LC","id":"1758"},{"text":"Liechtenstein","code":"LI","id":"423"},{"text":"Sri Lanka","code":"LK","id":"94"},{"text":"Lesotho","code":"LS","id":"266"},{"text":"Lithuania","code":"LT","id":"370"},{"text":"Luxembourg","code":"LU","id":"352"},{"text":"Latvia","code":"LV","id":"371"},{"text":"Macau","code":"MO","id":"853"},{"text":"Saint Martin","code":"MF","id":"590"},{"text":"Morocco","code":"MA","id":"212"},{"text":"Monaco","code":"MC","id":"377"},{"text":"Moldova","code":"MD","id":"373"},{"text":"Madagascar","code":"MG","id":"261"},{"text":"Maldives","code":"MV","id":"960"},{"text":"Mexico","code":"MX","id":"52"},{"text":"Marshall Islands","code":"MH","id":"692"},{"text":"Macedonia","code":"MK","id":"389"},{"text":"Mali","code":"ML","id":"223"},{"text":"Malta","code":"MT","id":"356"},{"text":"Myanmar","code":"MM","id":"95"},{"text":"Montenegro","code":"ME","id":"382"},{"text":"Mongolia","code":"MN","id":"976"},{"text":"Northern Mariana Islands","code":"MP","id":"1670"},{"text":"Mozambique","code":"MZ","id":"258"},{"text":"Mauritania","code":"MR","id":"222"},{"text":"Montserrat","code":"MS","id":"1664"},{"text":"Martinique","code":"MQ","id":"596"},{"text":"Mauritius","code":"MU","id":"230"},{"text":"Malawi","code":"MW","id":"265"},{"text":"Malaysia","code":"MY","id":"60"},{"text":"Mayotte","code":"YT","id":"262"},{"text":"Namibia","code":"NA","id":"264"},{"text":"New Caledonia","code":"NC","id":"687"},{"text":"Niger","code":"NE","id":"227"},{"text":"Norfolk Island","code":"NF","id":"672"},{"text":"Nigeria","code":"NG","id":"234"},{"text":"Nicaragua","code":"NI","id":"505"},{"text":"Niue","code":"NU","id":"683"},{"text":"Netherlands","code":"NL","id":"31"},{"text":"Norway","code":"NO","id":"47"},{"text":"Nepal","code":"NP","id":"977"},{"text":"Nauru","code":"NR","id":"674"},{"text":"New Zealand","code":"NZ","id":"64"},{"text":"Oman","code":"OM","id":"968"},{"text":"Pakistan","code":"PK","id":"92"},{"text":"Panama","code":"PA","id":"507"},{"text":"Pitcairn Islands","code":"PN","id":"64"},{"text":"Peru","code":"PE","id":"51"},{"text":"Philippines","code":"PH","id":"63"},{"text":"Palau","code":"PW","id":"680"},{"text":"Papua New Guinea","code":"PG","id":"675"},{"text":"Poland","code":"PL","id":"48"},{"text":"Puerto Rico","code":"PR","id":"1787"},{"text":"Puerto Rico","code":"PR","id":"1939"},{"text":"North Korea","code":"KP","id":"850"},{"text":"Portugal","code":"PT","id":"351"},{"text":"Paraguay","code":"PY","id":"595"},{"text":"Palestine","code":"PS","id":"970"},{"text":"French Polynesia","code":"PF","id":"689"},{"text":"Qatar","code":"QA","id":"974"},{"text":"RÃ©union","code":"RE","id":"262"},{"text":"Romania","code":"RO","id":"40"},{"text":"Russia","code":"RU","id":"7"},{"text":"Rwanda","code":"RW","id":"250"},{"text":"Saudi Arabia","code":"SA","id":"966"},{"text":"Sudan","code":"SD","id":"249"},{"text":"Senegal","code":"SN","id":"221"},{"text":"Singapore","code":"SG","id":"65"},{"text":"South Georgia","code":"GS","id":"500"},{"text":"Svalbard and Jan Mayen","code":"SJ","id":"4779"},{"text":"Solomon Islands","code":"SB","id":"677"},{"text":"Sierra Leone","code":"SL","id":"232"},{"text":"El Salvador","code":"SV","id":"503"},{"text":"San Marino","code":"SM","id":"378"},{"text":"Somalia","code":"SO","id":"252"},{"text":"Saint Pierre and Miquelon","code":"PM","id":"508"},{"text":"Serbia","code":"RS","id":"381"},{"text":"South Sudan","code":"SS","id":"211"},{"text":"SÃ£o TomÃ© and PrÃ­ncipe","code":"ST","id":"239"},{"text":"Suriname","code":"SR","id":"597"},{"text":"Slovakia","code":"SK","id":"421"},{"text":"Slovenia","code":"SI","id":"386"},{"text":"Sweden","code":"SE","id":"46"},{"text":"Swaziland","code":"SZ","id":"268"},{"text":"Sint Maarten","code":"SX","id":"1721"},{"text":"Seychelles","code":"SC","id":"248"},{"text":"Syria","code":"SY","id":"963"},{"text":"Turks and Caicos Islands","code":"TC","id":"1649"},{"text":"Chad","code":"TD","id":"235"},{"text":"Togo","code":"TG","id":"228"},{"text":"Thailand","code":"TH","id":"66"},{"text":"Tajikistan","code":"TJ","id":"992"},{"text":"Tokelau","code":"TK","id":"690"},{"text":"Turkmenistan","code":"TM","id":"993"},{"text":"Timor-Leste","code":"TL","id":"670"},{"text":"Tonga","code":"TO","id":"676"},{"text":"Trinidad and Tobago","code":"TT","id":"1868"},{"text":"Tunisia","code":"TN","id":"216"},{"text":"Turkey","code":"TR","id":"90"},{"text":"Tuvalu","code":"TV","id":"688"},{"text":"Taiwan","code":"TW","id":"886"},{"text":"Tanzania","code":"TZ","id":"255"},{"text":"Uganda","code":"UG","id":"256"},{"text":"Ukraine","code":"UA","id":"380"},{"text":"Uruguay","code":"UY","id":"598"},{"text":"United States","code":"US","id":"1"},{"text":"Uzbekistan","code":"UZ","id":"998"},{"text":"Vatican City","code":"VA","id":"3906698"},{"text":"Vatican City","code":"VA","id":"379"},{"text":"Saint Vincent and the Grenadines","code":"VC","id":"1784"},{"text":"Venezuela","code":"VE","id":"58"},{"text":"British Virgin Islands","code":"VG","id":"1284"},{"text":"United States Virgin Islands","code":"VI","id":"1340"},{"text":"Vietnam","code":"VN","id":"84"},{"text":"Vanuatu","code":"VU","id":"678"},{"text":"Wallis and Futuna","code":"WF","id":"681"},{"text":"Samoa","code":"WS","id":"685"},{"text":"Yemen","code":"YE","id":"967"},{"text":"South Africa","code":"ZA","id":"27"},{"text":"Zambia","code":"ZM","id":"260"},{"text":"Zimbabwe","code":"ZW","id":"263"}]

/***/ })
/******/ ]);
