(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UIKit~details~landing~search"],{

/***/ "./components/ui-kit/modules/burger/burger.js":
/*!****************************************************!*\
  !*** ./components/ui-kit/modules/burger/burger.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(function(){
 const $headerBurgerInput = $('.js-header-burger');
 $headerBurgerInput.click(function (event) {
  $('.header-burger,.js-header-nav').toggleClass('burger-active');
 });
})
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/ui-kit/modules/dropdown/dropdown-count.js":
/*!**************************************************************!*\
  !*** ./components/ui-kit/modules/dropdown/dropdown-count.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_counter_dropdown_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-counter/dropdown-counter */ "./components/ui-kit/modules/dropdown/dropdown-counter/dropdown-counter.js");


class DropdownCount {
 constructor(rootElem) {
  this.data = 0;
  this.dropdownType = '';
  this.spellCases = {};
  this.dropdownCounters = [];
  this.rootElem = rootElem;
  this._getElems();
  this._bindEvents();
 }
 _getElems() {
  this.spellCases = {
   guests: ["гость", "гостя", "гостей"],
   infants: ['младенец', 'младенца', 'младенцев'],
   bedrooms: ['спальня', 'спальни', 'спален'],
   beds: ['кровать', 'кровати', 'кроватей'],
   baths: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
  };
  this.arrow = this.rootElem.querySelector(".dropdown__arrow");
  this.input = this.rootElem.querySelector(".dropdown__input");
  this.body = this.rootElem.querySelector(".dropdown__body");
  this.counters = this.rootElem.querySelectorAll(".dropdown-counter");
  if (this.rootElem.classList.contains("dropdown__room")) {
   this.dropdownType = 'room';
  } else if (this.rootElem.classList.contains("dropdown__guests")) {
   this.dropdownType = 'guests';
   this.applyButton = this.rootElem.querySelector(".buttons-dropdown__apply");
   this.clearButton = this.rootElem.querySelector(".buttons-dropdown__clear");
  }
  this.counters.forEach(elem => {
   this.dropdownCounters.push(new _dropdown_counter_dropdown_counter__WEBPACK_IMPORTED_MODULE_0__["default"](elem));
  });
 }
 showDropdown() {
  this.rootElem.classList.add("dropdown_active");
  this.body.classList.add("dropdown_active");
 }
 hideDropdown() {
  this.rootElem.classList.remove("dropdown_active");
  this.body.classList.remove("dropdown_active");
 }
 _bindEvents() {
  this.arrow.addEventListener('click', this._handleDropdown.bind(this));
  if (this.dropdownType === 'guests') {
   this.clearButton.addEventListener('click', this._handleClearButton.bind(this));
   this.applyButton.addEventListener('click', this._handleApplyButton.bind(this));
  }
  this.rootElem.addEventListener('counterChanged', this._handleCounter.bind(this));
  document.addEventListener('click', this._handleClickOutsideDropdown.bind(this));
 }
 _handleClickOutsideDropdown(e) {
  const target = e.target;
  const its_dropdown = target === this.rootElem || this.rootElem.contains(target);
  if (!its_dropdown) {
   this.hideDropdown();
  }
 }
 _handleCounter() {
  if (this.dropdownType === 'guests') {
   this._showClearButton();
  }
  if (this.dropdownType === 'room') {
   this.setData(this._collectData());
  }
 }
 _handleDropdown() {
  if (this.rootElem.classList.contains("dropdown_active")) {
   this.hideDropdown();
  } else this.showDropdown();
 }
 _handleApplyButton() {
  this.setData(this._collectData());
  this.hideDropdown();
  this._showClearButton();
 }
 _handleClearButton() {
  this._clearData();
  this._hideClearButton();
 }
 _collectData() {
  if (this.dropdownType === 'guests') {
   let guests = {};
   guests.total = 0;
   guests.infants = 0;
   for (let i = 0; i < this.dropdownCounters.length; i++) {
    guests.total += this.dropdownCounters[i].getData();
    if (i === this.dropdownCounters.length - 1) {
     guests.infants = this.dropdownCounters[i].getData();
    }
   }
   return guests;
  }
  else {
   let room = {};
   room.bedrooms = this.dropdownCounters[0].getData();
   room.beds = this.dropdownCounters[1].getData();
   room.baths = this.dropdownCounters[2].getData();
   return room;
  }
 }
 _getPosInSpellCasesArray(result) {
  if (result === 1) {
   return 0;
  }
  else if (result >= 5 && result < 21) {
   return 2;
  }
  else if
   (Number(this.getLastNumber(result)) >= 2 && Number(this.getLastNumber(result)) <= 4) {
   return 1;
  }
  else {
   return 2;
  }
 }
 setData() {
  let result = this._collectData();

  if (this.dropdownType === 'guests') {
    let temp = '';
    temp = result.total + " " + this.spellCases.guests[this._getPosInSpellCasesArray(result.total)];
    if (result.infants > 0) {
     temp += ',  ' + result.infants + " " + this.spellCases.infants[this._getPosInSpellCasesArray(result.infants)];
    }
    this.input.value = temp;
  }
  else {
    let temp = '';
    if (result.bedrooms > 0) {
     temp += result.bedrooms + " " + this.spellCases.bedrooms[this._getPosInSpellCasesArray(result.bedrooms)];
    }
    if (result.beds > 0) {
     if (temp.length > 0) {
      temp += ",  " + result.beds + " " + this.spellCases.beds[this._getPosInSpellCasesArray(result.beds)];
     }
     else temp += result.beds + " " + this.spellCases.beds[this._getPosInSpellCasesArray(result.beds)];
    }
    if (result.baths > 0) {
     if (temp.length > 0) {
      temp += ",  " + result.baths + " " + this.spellCases.baths[this._getPosInSpellCasesArray(result.baths)];
     }
     else temp += result.baths + " " + this.spellCases.baths[this._getPosInSpellCasesArray(result.baths)];
    }
    temp += '...';
    this.input.value = temp;
  }
 }
 getLastNumber(value) {
  return value.toString().split("").pop();
 }
 _clearData() {
  this.input.value = "";
  this.dropdownCounters.forEach(elem => {
   elem.resetData();
  });
 }
 _showClearButton() {
  this.clearButton.classList.remove('buttons-dropdown_hidden');
 }
 _hideClearButton() {
  this.clearButton.classList.add('buttons-dropdown_hidden');
 }
}
/* harmony default export */ __webpack_exports__["default"] = (DropdownCount);

/***/ }),

/***/ "./components/ui-kit/modules/dropdown/dropdown-counter/dropdown-counter.js":
/*!*********************************************************************************!*\
  !*** ./components/ui-kit/modules/dropdown/dropdown-counter/dropdown-counter.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DropdownCounter {

 constructor(container) {
  this.container = container;
  this._getElements();
  this._bindEvents();
 }
 _getElements() {
  this.minus = this.container.querySelector('.js-container-dropdown__decrease');
  this.plus = this.container.querySelector('.js-container-dropdown__increase');
  this.value = this.container.querySelector('.js-container-dropdown__value');
  this.valueNumber = parseInt(this.value.textContent, 10);
 }
 _bindEvents() {
  this.minus.addEventListener('click', this._handleMinus.bind(this));
  this.plus.addEventListener('click', this._handlePlus.bind(this));
 }
 _handleMinus() {
  if (this.valueNumber > 0) {
   this.valueNumber--;
   this.value.innerHTML = this.valueNumber;
  }
  if (this.valueNumber === 0) {
   this.minus.classList.remove('container-dropdown__decrease_dark');
  }
  this.container.dispatchEvent(new CustomEvent("counterChanged", { bubbles: true }));
 }
 _handlePlus() {
  this.valueNumber++;
  this.value.innerHTML = this.valueNumber;
  this.minus.classList.add('container-dropdown__decrease_dark');
  this.container.dispatchEvent(new CustomEvent("counterChanged",{bubbles:true}));
 }
 getData() {
  return this.valueNumber;
 }
 resetData() {
  this.value.innerHTML = '0';
  this.valueNumber = 0;
  this.minus.classList.remove('container-dropdown__decrease_dark');
 }
}

/* harmony default export */ __webpack_exports__["default"] = (DropdownCounter);

/***/ }),

/***/ "./components/ui-kit/modules/dropdown/dropdown-date.js":
/*!*************************************************************!*\
  !*** ./components/ui-kit/modules/dropdown/dropdown-date.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsd-datepicker.js */ "./components/ui-kit/modules/dropdown/fsd-datepicker.js");
/* harmony import */ var _fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_0__);

class DropdownDate {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this._getElems();
  this._init();
  this._bindEvents();
 }
 _getElems() {
  this.startInput = this.rootElem.querySelectorAll(".dropdown__input")[0];
  this.endInput = this.rootElem.querySelectorAll(".dropdown__input")[1];
  this.$dpInput = $(this.startInput);
  this.$endInput = $(this.endInput);
  this.arrows = this.rootElem.querySelectorAll('.dropdown__arrow');
  this.startDropdownArrow = this.arrows[0];
  this.endDropdownArrow = this.arrows[1];
 }
 _bindEvents() {
  this.startDropdownArrow.addEventListener('click', this._handlerStartArrowDropdown.bind(this));
  this.endDropdownArrow.addEventListener('click', this._handlerEndArrowDropdown.bind(this));
 }

 _init() {
  this.$dpInput.fsdDatepicker({
   applyButton: true, clearButton: true, range: true,
   multipleDatesSeparator: '     ',
   onSelect: function (fd, d, picker) {
    const $leftDatepicker = picker.$el;
    const $rightDatepicker = picker.$el.parent().parent().children().last().children().first();
    $leftDatepicker.val(fd.split('     ')[0]);
    $rightDatepicker.val(fd.split('     ')[1]);
    if (fd.length === 0) {
     $rightDatepicker.val('');
    }
   }
  });
 }
 _handlerStartArrowDropdown() {
  this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
 }
 _handlerEndArrowDropdown() {
  this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
 }
}
/* harmony default export */ __webpack_exports__["default"] = (DropdownDate);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/ui-kit/modules/dropdown/dropdown-filter.js":
/*!***************************************************************!*\
  !*** ./components/ui-kit/modules/dropdown/dropdown-filter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsd-datepicker.js */ "./components/ui-kit/modules/dropdown/fsd-datepicker.js");
/* harmony import */ var _fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fsd_datepicker_js__WEBPACK_IMPORTED_MODULE_0__);

class DropdownFilter {
  constructor(rootElem) {
    this.rootElem = rootElem;
    this._getElems();
    this._init();
    this._bindEvents();
  }
  _getElems() {
    this.input = this.rootElem.querySelector(".dropdown__input");
    this.arrow = this.rootElem.querySelector('.dropdown__arrow');
  }
  _bindEvents() {
    this.arrow.addEventListener('click', this._handlerArrowDropdown.bind(this));
  }

  _init() {
    this.$dpInput = $('.dropdown__filter input');
    this.$dpInput.fsdDatepicker({
      applyButton: true, clearButton: true, range: true, dateFormat: 'dd M',
      onSelect: function (fd, d, picker) {
        picker.$el.val(fd);
        if (fd.length === 0) {
          picker.$el.val('');
        }
      }
    });
  }
  _handlerArrowDropdown() {
    this.$dpInput.fsdDatepicker().data('fsd-datepicker').show();
  }
}
/* harmony default export */ __webpack_exports__["default"] = (DropdownFilter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/ui-kit/modules/dropdown/dropdown-main.js":
/*!*************************************************************!*\
  !*** ./components/ui-kit/modules/dropdown/dropdown-main.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-date */ "./components/ui-kit/modules/dropdown/dropdown-date.js");
/* harmony import */ var _dropdown_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-count */ "./components/ui-kit/modules/dropdown/dropdown-count.js");
/* harmony import */ var _dropdown_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-filter */ "./components/ui-kit/modules/dropdown/dropdown-filter.js");




class DropdownMain {
 constructor(rootElem) {
  this.rootElem = rootElem;
  this._initDropdowns();
 }
 _initDropdowns() {
  this.rootElem.forEach(elem => {
   if (elem.classList.contains("dropdown__filter-date")) {
    new _dropdown_date__WEBPACK_IMPORTED_MODULE_0__["default"](elem);
   }
   else if (elem.classList.contains("dropdown__filter")) {
    new _dropdown_filter__WEBPACK_IMPORTED_MODULE_2__["default"](elem);
   }
   else {
    new _dropdown_count__WEBPACK_IMPORTED_MODULE_1__["default"](elem)
   };
  });
 }
}
/* harmony default export */ __webpack_exports__["default"] = (DropdownMain);

/***/ }),

/***/ "./components/ui-kit/modules/dropdown/dropdown.js":
/*!********************************************************!*\
  !*** ./components/ui-kit/modules/dropdown/dropdown.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-main.js */ "./components/ui-kit/modules/dropdown/dropdown-main.js");

const dropdown = new _dropdown_main_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelectorAll('.js-dropdown'));


/***/ }),

/***/ "./components/ui-kit/modules/dropdown/fsd-datepicker.js":
/*!**************************************************************!*\
  !*** ./components/ui-kit/modules/dropdown/fsd-datepicker.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {; (function (window, $, undefined) {
    ; (function () {
        var VERSION = '2.2.3',
            pluginName = 'fsd-datepicker',
            autoInitSelector = '.fsd-datepicker-here',
            $body, $datepickersContainer,
            containerBuilt = false,
            baseTemplate = '' +
                '<div class="datepicker">' +
                '<i class="datepicker--pointer"></i>' +
                '<nav class="datepicker--nav"></nav>' +
                '<div class="datepicker--content"></div>' +
                '</div>',
            defaults = {
                classes: '',
                inline: false,
                language: 'ru',
                startDate: new Date(),
                firstDay: '',
                weekends: [6, 0],
                dateFormat: '',
                altField: '',
                altFieldDateFormat: '@',
                toggleSelected: true,
                keyboardNav: true,

                position: 'bottom left',
                offset: 12,

                view: 'days',
                minView: 'days',

                showOtherMonths: true,
                selectOtherMonths: true,
                moveToOtherMonthsOnSelect: true,

                showOtherYears: true,
                selectOtherYears: true,
                moveToOtherYearsOnSelect: true,

                minDate: '',
                maxDate: '',
                disableNavWhenOutOfRange: true,

                multipleDates: false, // Boolean or Number
                multipleDatesSeparator: ' - ',
                range: false,

                applyButton: false,
                clearButton: false,

                showEvent: 'focus',
                autoClose: false,

                // navigation
                monthsField: 'monthsShort',
                prevHtml: 'arrow_back',
                nextHtml: 'arrow_forward',
                navTitles: {
                    days: 'MM <i>yyyy</i>',
                    months: 'yyyy',
                    years: 'yyyy1 - yyyy2'
                },

                // timepicker
                timepicker: false,
                onlyTimepicker: false,
                dateTimeSeparator: ' ',
                timeFormat: '',
                minHours: 0,
                maxHours: 24,
                minMinutes: 0,
                maxMinutes: 59,
                hoursStep: 1,
                minutesStep: 1,

                // events
                onSelect: '',
                onShow: '',
                onHide: '',
                onChangeMonth: '',
                onChangeYear: '',
                onChangeDecade: '',
                onChangeView: '',
                onRenderCell: ''
            },
            hotKeys = {
                'ctrlRight': [17, 39],
                'ctrlUp': [17, 38],
                'ctrlLeft': [17, 37],
                'ctrlDown': [17, 40],
                'shiftRight': [16, 39],
                'shiftUp': [16, 38],
                'shiftLeft': [16, 37],
                'shiftDown': [16, 40],
                'altUp': [18, 38],
                'altRight': [18, 39],
                'altLeft': [18, 37],
                'altDown': [18, 40],
                'ctrlShiftUp': [16, 17, 38]
            },
            fsdDatepicker;

        var Datepicker = function (el, options) {
            this.el = el;
            this.$el = $(el);

            this.opts = $.extend(true, {}, defaults, options, this.$el.data());

            if ($body == undefined) {
                $body = $('body');
            }

            if (!this.opts.startDate) {
                this.opts.startDate = new Date();
            }

            if (this.el.nodeName == 'INPUT') {
                this.elIsInput = true;
            }

            if (this.opts.altField) {
                this.$altField = typeof this.opts.altField == 'string' ? $(this.opts.altField) : this.opts.altField;
            }

            this.inited = false;
            this.visible = false;
            this.silent = false; // Need to prevent unnecessary rendering

            this.currentDate = this.opts.startDate;
            this.currentView = this.opts.view;
            this._createShortCuts();
            this.selectedDates = [];
            this.views = {};
            this.keys = [];
            this.minRange = '';
            this.maxRange = '';
            this._prevOnSelectValue = '';

            this.init()
        };

        fsdDatepicker = Datepicker;

        fsdDatepicker.prototype = {
            VERSION: VERSION,
            viewIndexes: ['days', 'months', 'years'],

            init: function () {
                if (!containerBuilt && !this.opts.inline && this.elIsInput) {
                    this._buildDatepickersContainer();
                }
                this._buildBaseHtml();
                this._defineLocale(this.opts.language);
                this._syncWithMinMaxDates();

                if (this.elIsInput) {
                    if (!this.opts.inline) {
                        // Set extra classes for proper transitions
                        this._setPositionClasses(this.opts.position);
                        this._bindEvents()
                    }
                    if (this.opts.keyboardNav && !this.opts.onlyTimepicker) {
                        this._bindKeyboardEvents();
                    }
                    this.$datepicker.on('mousedown', this._onMouseDownDatepicker.bind(this));
                    this.$datepicker.on('mouseup', this._onMouseUpDatepicker.bind(this));
                }

                if (this.opts.classes) {
                    this.$datepicker.addClass(this.opts.classes)
                }

                if (this.opts.timepicker) {
                    this.timepicker = new $.fn.datepicker.Timepicker(this, this.opts);
                    this._bindTimepickerEvents();
                }

                if (this.opts.onlyTimepicker) {
                    this.$datepicker.addClass('-only-timepicker-');
                }

                this.views[this.currentView] = new $.fn.fsdDatepicker.Body(this, this.currentView, this.opts);
                this.views[this.currentView].show();
                this.nav = new $.fn.fsdDatepicker.Navigation(this, this.opts);
                this.view = this.currentView;

                this.$el.on('clickCell.adp', this._onClickCell.bind(this));
                this.$datepicker.on('mouseenter', '.datepicker--cell', this._onMouseEnterCell.bind(this));
                this.$datepicker.on('mouseleave', '.datepicker--cell', this._onMouseLeaveCell.bind(this));

                this.inited = true;
            },

            _createShortCuts: function () {
                this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-8639999913600000);
                this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(8639999913600000);
            },

            _bindEvents: function () {
                this.$el.on(this.opts.showEvent + '.adp', this._onShowEvent.bind(this));
                this.$el.on('mouseup.adp', this._onMouseUpEl.bind(this));
                this.$el.on('blur.adp', this._onBlur.bind(this));
                this.$el.on('keyup.adp', this._onKeyUpGeneral.bind(this));
                $(window).on('resize.adp', this._onResize.bind(this));
                $('body').on('mouseup.adp', this._onMouseUpBody.bind(this));
            },

            _bindKeyboardEvents: function () {
                this.$el.on('keydown.adp', this._onKeyDown.bind(this));
                this.$el.on('keyup.adp', this._onKeyUp.bind(this));
                this.$el.on('hotKey.adp', this._onHotKey.bind(this));
            },

            _bindTimepickerEvents: function () {
                this.$el.on('timeChange.adp', this._onTimeChange.bind(this));
            },

            isWeekend: function (day) {
                return this.opts.weekends.indexOf(day) !== -1;
            },

            _defineLocale: function (lang) {
                if (typeof lang == 'string') {
                    this.loc = $.fn.fsdDatepicker.language[lang];
                    if (!this.loc) {
                        console.warn('Can\'t find language "' + lang + '" in Datepicker.language, will use "ru" instead');
                        this.loc = $.extend(true, {}, $.fn.fsdDatepicker.language.ru)
                    }

                    this.loc = $.extend(true, {}, $.fn.fsdDatepicker.language.ru, $.fn.fsdDatepicker.language[lang])
                } else {
                    this.loc = $.extend(true, {}, $.fn.fsdDatepicker.language.ru, lang)
                }

                if (this.opts.dateFormat) {
                    this.loc.dateFormat = this.opts.dateFormat
                }

                if (this.opts.timeFormat) {
                    this.loc.timeFormat = this.opts.timeFormat
                }

                if (this.opts.firstDay !== '') {
                    this.loc.firstDay = this.opts.firstDay
                }

                if (this.opts.timepicker) {
                    this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator);
                }

                if (this.opts.onlyTimepicker) {
                    this.loc.dateFormat = this.loc.timeFormat;
                }

                var boundary = this._getWordBoundaryRegExp;
                if (this.loc.timeFormat.match(boundary('aa')) ||
                    this.loc.timeFormat.match(boundary('AA'))
                ) {
                    this.ampm = true;
                }
            },

            _buildDatepickersContainer: function () {
                containerBuilt = true;
                $body.append('<div class="datepickers-container" id="datepickers-container"></div>');
                $datepickersContainer = $('#datepickers-container');
            },

            _buildBaseHtml: function () {
                var $appendTarget,
                    $inline = $('<div class="datepicker-inline">');

                if (this.el.nodeName == 'INPUT') {
                    if (!this.opts.inline) {
                        $appendTarget = $datepickersContainer;
                    } else {
                        $appendTarget = $inline.insertAfter(this.$el)
                    }
                } else {
                    $appendTarget = $inline.appendTo(this.$el)
                }

                this.$datepicker = $(baseTemplate).appendTo($appendTarget);
                this.$content = $('.datepicker--content', this.$datepicker);
                this.$nav = $('.datepicker--nav', this.$datepicker);
            },

            _triggerOnChange: function () {
                if (!this.selectedDates.length) {
                    // Prevent from triggering multiple onSelect callback with same argument (empty string) in IE10-11
                    if (this._prevOnSelectValue === '') return;
                    this._prevOnSelectValue = '';
                    return this.opts.onSelect('', '', this);
                }

                var selectedDates = this.selectedDates,
                    parsedSelected = fsdDatepicker.getParsedDate(selectedDates[0]),
                    formattedDates,
                    _this = this,
                    dates = new Date(
                        parsedSelected.year,
                        parsedSelected.month,
                        parsedSelected.date,
                        parsedSelected.hours,
                        parsedSelected.minutes
                    );

                formattedDates = selectedDates.map(function (date) {
                    return _this.formatDate(_this.loc.dateFormat, date)
                }).join(this.opts.multipleDatesSeparator);

                // Create new dates array, to separate it from original selectedDates
                if (this.opts.multipleDates || this.opts.range) {
                    dates = selectedDates.map(function (date) {
                        var parsedDate = fsdDatepicker.getParsedDate(date);
                        return new Date(
                            parsedDate.year,
                            parsedDate.month,
                            parsedDate.date,
                            parsedDate.hours,
                            parsedDate.minutes
                        );
                    })
                }

                this._prevOnSelectValue = formattedDates;
                this.opts.onSelect(formattedDates, dates, this);
            },

            next: function () {
                var d = this.parsedDate,
                    o = this.opts;
                switch (this.view) {
                    case 'days':
                        this.date = new Date(d.year, d.month + 1, 1);
                        if (o.onChangeMonth) o.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case 'months':
                        this.date = new Date(d.year + 1, d.month, 1);
                        if (o.onChangeYear) o.onChangeYear(this.parsedDate.year);
                        break;
                    case 'years':
                        this.date = new Date(d.year + 10, 0, 1);
                        if (o.onChangeDecade) o.onChangeDecade(this.curDecade);
                        break;
                }
            },

            prev: function () {
                var d = this.parsedDate,
                    o = this.opts;
                switch (this.view) {
                    case 'days':
                        this.date = new Date(d.year, d.month - 1, 1);
                        if (o.onChangeMonth) o.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case 'months':
                        this.date = new Date(d.year - 1, d.month, 1);
                        if (o.onChangeYear) o.onChangeYear(this.parsedDate.year);
                        break;
                    case 'years':
                        this.date = new Date(d.year - 10, 0, 1);
                        if (o.onChangeDecade) o.onChangeDecade(this.curDecade);
                        break;
                }
            },

            formatDate: function (string, date) {
                date = date || this.date;
                var result = string,
                    boundary = this._getWordBoundaryRegExp,
                    locale = this.loc,
                    leadingZero = fsdDatepicker.getLeadingZeroNum,
                    decade = fsdDatepicker.getDecade(date),
                    d = fsdDatepicker.getParsedDate(date),
                    fullHours = d.fullHours,
                    hours = d.hours,
                    ampm = string.match(boundary('aa')) || string.match(boundary('AA')),
                    dayPeriod = 'am',
                    replacer = this._replacer,
                    validHours;

                if (this.opts.timepicker && this.timepicker && ampm) {
                    validHours = this.timepicker._getValidHoursFromDate(date, ampm);
                    fullHours = leadingZero(validHours.hours);
                    hours = validHours.hours;
                    dayPeriod = validHours.dayPeriod;
                }

                switch (true) {
                    case /@/.test(result):
                        result = result.replace(/@/, date.getTime());
                    case /aa/.test(result):
                        result = replacer(result, boundary('aa'), dayPeriod);
                    case /AA/.test(result):
                        result = replacer(result, boundary('AA'), dayPeriod.toUpperCase());
                    case /dd/.test(result):
                        result = replacer(result, boundary('dd'), d.fullDate);
                    case /d/.test(result):
                        result = replacer(result, boundary('d'), d.date);
                    case /DD/.test(result):
                        result = replacer(result, boundary('DD'), locale.days[d.day]);
                    case /D/.test(result):
                        result = replacer(result, boundary('D'), locale.daysShort[d.day]);
                    case /mm/.test(result):
                        result = replacer(result, boundary('mm'), d.fullMonth);
                    case /m/.test(result):
                        result = replacer(result, boundary('m'), d.month + 1);
                    case /MM/.test(result):
                        result = replacer(result, boundary('MM'), this.loc.months[d.month]);
                    case /M/.test(result):
                        result = replacer(result, boundary('M'), locale.monthsShort[d.month]);
                    case /ii/.test(result):
                        result = replacer(result, boundary('ii'), d.fullMinutes);
                    case /i/.test(result):
                        result = replacer(result, boundary('i'), d.minutes);
                    case /hh/.test(result):
                        result = replacer(result, boundary('hh'), fullHours);
                    case /h/.test(result):
                        result = replacer(result, boundary('h'), hours);
                    case /yyyy/.test(result):
                        result = replacer(result, boundary('yyyy'), d.year);
                    case /yyyy1/.test(result):
                        result = replacer(result, boundary('yyyy1'), decade[0]);
                    case /yyyy2/.test(result):
                        result = replacer(result, boundary('yyyy2'), decade[1]);
                    case /yy/.test(result):
                        result = replacer(result, boundary('yy'), d.year.toString().slice(-2));
                }
                return result;
            },

            _replacer: function (str, reg, data) {
                return str.replace(reg, function (match, p1, p2, p3) {
                    return p1 + data + p3;
                })
            },

            _getWordBoundaryRegExp: function (sign) {
                var symbols = '\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;';

                return new RegExp('(^|>|' + symbols + ')(' + sign + ')($|<|' + symbols + ')', 'g');
            },


            selectDate: function (date) {
                var _this = this,
                    opts = _this.opts,
                    d = _this.parsedDate,
                    selectedDates = _this.selectedDates,
                    len = selectedDates.length,
                    newDate = '';

                if (Array.isArray(date)) {
                    date.forEach(function (d) {
                        _this.selectDate(d)
                    });
                    return;
                }

                if (!(date instanceof Date)) return;

                this.lastSelectedDate = date;

                // Set new time values from Date
                if (this.timepicker) {
                    this.timepicker._setTime(date);
                }

                // On this step timepicker will set valid values in it's instance
                _this._trigger('selectDate', date);

                // Set correct time values after timepicker's validation
                // Prevent from setting hours or minutes which values are lesser then `min` value or
                // greater then `max` value
                if (this.timepicker) {
                    date.setHours(this.timepicker.hours);
                    date.setMinutes(this.timepicker.minutes)
                }

                if (_this.view == 'days') {
                    if (date.getMonth() != d.month && opts.moveToOtherMonthsOnSelect) {
                        newDate = new Date(date.getFullYear(), date.getMonth(), 1);
                    }
                }

                if (_this.view == 'years') {
                    if (date.getFullYear() != d.year && opts.moveToOtherYearsOnSelect) {
                        newDate = new Date(date.getFullYear(), 0, 1);
                    }
                }

                if (newDate) {
                    _this.silent = true;
                    _this.date = newDate;
                    _this.silent = false;
                    _this.nav._render()
                }

                if (opts.multipleDates && !opts.range) { // Set priority to range functionality
                    if (len === opts.multipleDates) return;
                    if (!_this._isSelected(date)) {
                        _this.selectedDates.push(date);
                    }
                } else if (opts.range) {
                    if (len == 2) {
                        _this.selectedDates = [date];
                        _this.minRange = date;
                        _this.maxRange = '';
                    } else if (len == 1) {
                        _this.selectedDates.push(date);
                        if (!_this.maxRange) {
                            _this.maxRange = date;
                        } else {
                            _this.minRange = date;
                        }
                        // Swap dates if they were selected via dp.selectDate() and second date was smaller then first
                        if (fsdDatepicker.bigger(_this.maxRange, _this.minRange)) {
                            _this.maxRange = _this.minRange;
                            _this.minRange = date;
                        }
                        _this.selectedDates = [_this.minRange, _this.maxRange]

                    } else {
                        _this.selectedDates = [date];
                        _this.minRange = date;
                    }
                } else {
                    _this.selectedDates = [date];
                }

                //_this._setInputValue();

                // if (opts.onSelect) {
                //     _this._triggerOnChange();
                // }

                if (opts.autoClose && !this.timepickerIsActive) {
                    if (!opts.multipleDates && !opts.range) {
                        _this.hide();
                    } else if (opts.range && _this.selectedDates.length == 2) {
                        _this.hide();
                    }
                }

                _this.views[this.currentView]._render()
            },

            removeDate: function (date) {
                var selected = this.selectedDates,
                    _this = this;

                if (!(date instanceof Date)) return;

                return selected.some(function (curDate, i) {
                    if (fsdDatepicker.isSame(curDate, date)) {
                        selected.splice(i, 1);

                        if (!_this.selectedDates.length) {
                            _this.minRange = '';
                            _this.maxRange = '';
                            _this.lastSelectedDate = '';
                        } else {
                            _this.lastSelectedDate = _this.selectedDates[_this.selectedDates.length - 1];
                        }

                        _this.views[_this.currentView]._render();
                        _this._setInputValue();

                        if (_this.opts.onSelect) {
                            _this._triggerOnChange();
                        }


                        return true
                    }
                })
            },

            apply: function () {
                if (this.opts.onSelect) {
                    this._triggerOnChange()
                }
                this.hide();
            },

            clear: function () {
                this.selectedDates = [];
                this.minRange = '';
                this.maxRange = '';
                this.views[this.currentView]._render();
                this._setInputValue();
                if (this.opts.onSelect) {
                    this._triggerOnChange()
                }
            },

            /**
             * Updates datepicker options
             * @param {String|Object} param - parameter's name to update. If object then it will extend current options
             * @param {String|Number|Object} [value] - new param value
             */
            update: function (param, value) {
                var len = arguments.length,
                    lastSelectedDate = this.lastSelectedDate;

                if (len == 2) {
                    this.opts[param] = value;
                } else if (len == 1 && typeof param == 'object') {
                    this.opts = $.extend(true, this.opts, param)
                }

                this._createShortCuts();
                this._syncWithMinMaxDates();
                this._defineLocale(this.opts.language);
                this.nav._addButtonsIfNeed();
                if (!this.opts.onlyTimepicker) this.nav._render();
                this.views[this.currentView]._render();

                if (this.elIsInput && !this.opts.inline) {
                    this._setPositionClasses(this.opts.position);
                    if (this.visible) {
                        this.setPosition(this.opts.position)
                    }
                }

                if (this.opts.classes) {
                    this.$datepicker.addClass(this.opts.classes)
                }

                if (this.opts.onlyTimepicker) {
                    this.$datepicker.addClass('-only-timepicker-');
                }

                if (this.opts.timepicker) {
                    if (lastSelectedDate) this.timepicker._handleDate(lastSelectedDate);
                    this.timepicker._updateRanges();
                    this.timepicker._updateCurrentTime();
                    // Change hours and minutes if it's values have been changed through min/max hours/minutes
                    if (lastSelectedDate) {
                        lastSelectedDate.setHours(this.timepicker.hours);
                        lastSelectedDate.setMinutes(this.timepicker.minutes);
                    }
                }

                this._setInputValue();

                return this;
            },

            _syncWithMinMaxDates: function () {
                var curTime = this.date.getTime();
                this.silent = true;
                if (this.minTime > curTime) {
                    this.date = this.minDate;
                }

                if (this.maxTime < curTime) {
                    this.date = this.maxDate;
                }
                this.silent = false;
            },

            _isSelected: function (checkDate, cellType) {
                var res = false;
                this.selectedDates.some(function (date) {
                    if (fsdDatepicker.isSame(date, checkDate, cellType)) {
                        res = date;
                        return true;
                    }
                });
                return res;
            },

            _setInputValue: function () {
                var _this = this,
                    opts = _this.opts,
                    format = _this.loc.dateFormat,
                    altFormat = opts.altFieldDateFormat,
                    value = _this.selectedDates.map(function (date) {
                        return _this.formatDate(format, date)
                    }),
                    altValues;

                if (opts.altField && _this.$altField.length) {
                    altValues = this.selectedDates.map(function (date) {
                        return _this.formatDate(altFormat, date)
                    });
                    altValues = altValues.join(this.opts.multipleDatesSeparator);
                    this.$altField.val(altValues);
                }

                value = value.join(this.opts.multipleDatesSeparator);
                this.dateValue = value;
                //this.$el.val(value);
            },

            /**
             * Check if date is between minDate and maxDate
             * @param date {object} - date object
             * @param type {string} - cell type
             * @returns {boolean}
             * @private
             */
            _isInRange: function (date, type) {
                var time = date.getTime(),
                    d = fsdDatepicker.getParsedDate(date),
                    min = fsdDatepicker.getParsedDate(this.minDate),
                    max = fsdDatepicker.getParsedDate(this.maxDate),
                    dMinTime = new Date(d.year, d.month, min.date).getTime(),
                    dMaxTime = new Date(d.year, d.month, max.date).getTime(),
                    types = {
                        day: time >= this.minTime && time <= this.maxTime,
                        month: dMinTime >= this.minTime && dMaxTime <= this.maxTime,
                        year: d.year >= min.year && d.year <= max.year
                    };
                return type ? types[type] : types.day
            },

            _getDimensions: function ($el) {
                var offset = $el.offset();

                return {
                    width: $el.outerWidth(),
                    height: $el.outerHeight(),
                    left: offset.left,
                    top: offset.top
                }
            },

            _getDateFromCell: function (cell) {
                var curDate = this.parsedDate,
                    year = cell.data('year') || curDate.year,
                    month = cell.data('month') == undefined ? curDate.month : cell.data('month'),
                    date = cell.data('date') || 1;

                return new Date(year, month, date);
            },

            _setPositionClasses: function (pos) {
                pos = pos.split(' ');
                var main = pos[0],
                    sec = pos[1],
                    classes = 'datepicker -' + main + '-' + sec + '- -from-' + main + '-';

                if (this.visible) classes += ' active';

                this.$datepicker
                    .removeAttr('class')
                    .addClass(classes);
            },

            setPosition: function (position) {
                position = position || this.opts.position;

                var dims = this._getDimensions(this.$el),
                    selfDims = this._getDimensions(this.$datepicker),
                    pos = position.split(' '),
                    top, left,
                    offset = this.opts.offset,
                    main = pos[0],
                    secondary = pos[1];

                switch (main) {
                    case 'top':
                        top = dims.top - selfDims.height - offset;
                        break;
                    case 'right':
                        left = dims.left + dims.width + offset;
                        break;
                    case 'bottom':
                        top = dims.top + dims.height + offset;
                        break;
                    case 'left':
                        left = dims.left - selfDims.width - offset;
                        break;
                }

                switch (secondary) {
                    case 'top':
                        top = dims.top;
                        break;
                    case 'right':
                        left = dims.left + dims.width - selfDims.width;
                        break;
                    case 'bottom':
                        top = dims.top + dims.height - selfDims.height;
                        break;
                    case 'left':
                        left = dims.left;
                        break;
                    case 'center':
                        if (/left|right/.test(main)) {
                            top = dims.top + dims.height / 2 - selfDims.height / 2;
                        } else {
                            left = dims.left + dims.width / 2 - selfDims.width / 2;
                        }
                }

                this.$datepicker
                    .css({
                        left: left,
                        top: top
                    })
            },

            show: function () {
                var onShow = this.opts.onShow;

                this.setPosition(this.opts.position);
                this.$datepicker.addClass('active');
                this.visible = true;

                if (onShow) {
                    this._bindVisionEvents(onShow)
                }
            },

            hide: function () {
                var onHide = this.opts.onHide;

                this.$datepicker
                    .removeClass('active')
                    .css({
                        left: '-100000px'
                    });

                this.focused = '';
                this.keys = [];

                this.inFocus = false;
                this.visible = false;
                this.$el.blur();

                if (onHide) {
                    this._bindVisionEvents(onHide)
                }
            },

            down: function (date) {
                this._changeView(date, 'down');
            },

            up: function (date) {
                this._changeView(date, 'up');
            },

            _bindVisionEvents: function (event) {
                this.$datepicker.off('transitionend.dp');
                event(this, false);
                this.$datepicker.one('transitionend.dp', event.bind(this, this, true))
            },

            _changeView: function (date, dir) {
                date = date || this.focused || this.date;

                var nextView = dir == 'up' ? this.viewIndex + 1 : this.viewIndex - 1;
                if (nextView > 2) nextView = 2;
                if (nextView < 0) nextView = 0;

                this.silent = true;
                this.date = new Date(date.getFullYear(), date.getMonth(), 1);
                this.silent = false;
                this.view = this.viewIndexes[nextView];

            },

            _handleHotKey: function (key) {
                var date = datepicker.getParsedDate(this._getFocusedDate()),
                    focusedParsed,
                    o = this.opts,
                    newDate,
                    totalDaysInNextMonth,
                    monthChanged = false,
                    yearChanged = false,
                    decadeChanged = false,
                    y = date.year,
                    m = date.month,
                    d = date.date;

                switch (key) {
                    case 'ctrlRight':
                    case 'ctrlUp':
                        m += 1;
                        monthChanged = true;
                        break;
                    case 'ctrlLeft':
                    case 'ctrlDown':
                        m -= 1;
                        monthChanged = true;
                        break;
                    case 'shiftRight':
                    case 'shiftUp':
                        yearChanged = true;
                        y += 1;
                        break;
                    case 'shiftLeft':
                    case 'shiftDown':
                        yearChanged = true;
                        y -= 1;
                        break;
                    case 'altRight':
                    case 'altUp':
                        decadeChanged = true;
                        y += 10;
                        break;
                    case 'altLeft':
                    case 'altDown':
                        decadeChanged = true;
                        y -= 10;
                        break;
                    case 'ctrlShiftUp':
                        this.up();
                        break;
                }

                totalDaysInNextMonth = fsdDatepicker.getDaysCount(new Date(y, m));
                newDate = new Date(y, m, d);

                // If next month has less days than current, set date to total days in that month
                if (totalDaysInNextMonth < d) d = totalDaysInNextMonth;

                // Check if newDate is in valid range
                if (newDate.getTime() < this.minTime) {
                    newDate = this.minDate;
                } else if (newDate.getTime() > this.maxTime) {
                    newDate = this.maxDate;
                }

                this.focused = newDate;

                focusedParsed = datepicker.getParsedDate(newDate);
                if (monthChanged && o.onChangeMonth) {
                    o.onChangeMonth(focusedParsed.month, focusedParsed.year)
                }
                if (yearChanged && o.onChangeYear) {
                    o.onChangeYear(focusedParsed.year)
                }
                if (decadeChanged && o.onChangeDecade) {
                    o.onChangeDecade(this.curDecade)
                }
            },

            _registerKey: function (key) {
                var exists = this.keys.some(function (curKey) {
                    return curKey == key;
                });

                if (!exists) {
                    this.keys.push(key)
                }
            },

            _unRegisterKey: function (key) {
                var index = this.keys.indexOf(key);

                this.keys.splice(index, 1);
            },

            _isHotKeyPressed: function () {
                var currentHotKey,
                    found = false,
                    _this = this,
                    pressedKeys = this.keys.sort();

                for (var hotKey in hotKeys) {
                    currentHotKey = hotKeys[hotKey];
                    if (pressedKeys.length != currentHotKey.length) continue;

                    if (currentHotKey.every(function (key, i) { return key == pressedKeys[i] })) {
                        _this._trigger('hotKey', hotKey);
                        found = true;
                    }
                }

                return found;
            },

            _trigger: function (event, args) {
                this.$el.trigger(event, args)
            },

            _focusNextCell: function (keyCode, type) {
                type = type || this.cellType;

                var date = fsdDatepicker.getParsedDate(this._getFocusedDate()),
                    y = date.year,
                    m = date.month,
                    d = date.date;

                if (this._isHotKeyPressed()) {
                    return;
                }

                switch (keyCode) {
                    case 37: // left
                        type == 'day' ? (d -= 1) : '';
                        type == 'month' ? (m -= 1) : '';
                        type == 'year' ? (y -= 1) : '';
                        break;
                    case 38: // up
                        type == 'day' ? (d -= 7) : '';
                        type == 'month' ? (m -= 3) : '';
                        type == 'year' ? (y -= 4) : '';
                        break;
                    case 39: // right
                        type == 'day' ? (d += 1) : '';
                        type == 'month' ? (m += 1) : '';
                        type == 'year' ? (y += 1) : '';
                        break;
                    case 40: // down
                        type == 'day' ? (d += 7) : '';
                        type == 'month' ? (m += 3) : '';
                        type == 'year' ? (y += 4) : '';
                        break;
                }

                var nd = new Date(y, m, d);
                if (nd.getTime() < this.minTime) {
                    nd = this.minDate;
                } else if (nd.getTime() > this.maxTime) {
                    nd = this.maxDate;
                }

                this.focused = nd;

            },

            _getFocusedDate: function () {
                var focused = this.focused || this.selectedDates[this.selectedDates.length - 1],
                    d = this.parsedDate;

                if (!focused) {
                    switch (this.view) {
                        case 'days':
                            focused = new Date(d.year, d.month, new Date().getDate());
                            break;
                        case 'months':
                            focused = new Date(d.year, d.month, 1);
                            break;
                        case 'years':
                            focused = new Date(d.year, 0, 1);
                            break;
                    }
                }

                return focused;
            },

            _getCell: function (date, type) {
                type = type || this.cellType;

                var d = fsdDatepicker.getParsedDate(date),
                    selector = '.datepicker--cell[data-year="' + d.year + '"]',
                    $cell;

                switch (type) {
                    case 'month':
                        selector = '[data-month="' + d.month + '"]';
                        break;
                    case 'day':
                        selector += '[data-month="' + d.month + '"][data-date="' + d.date + '"]';
                        break;
                }
                $cell = this.views[this.currentView].$el.find(selector);

                return $cell.length ? $cell : $('');
            },

            destroy: function () {
                var _this = this;
                _this.$el
                    .off('.adp')
                    .data('datepicker', '');

                _this.selectedDates = [];
                _this.focused = '';
                _this.views = {};
                _this.keys = [];
                _this.minRange = '';
                _this.maxRange = '';

                if (_this.opts.inline || !_this.elIsInput) {
                    _this.$datepicker.closest('.datepicker-inline').remove();
                } else {
                    _this.$datepicker.remove();
                }
            },

            _handleAlreadySelectedDates: function (alreadySelected, selectedDate) {
                if (this.opts.range) {
                    if (!this.opts.toggleSelected) {
                        // Add possibility to select same date when range is true
                        if (this.selectedDates.length != 2) {
                            this._trigger('clickCell', selectedDate);
                        }
                    } else {
                        this.removeDate(selectedDate);
                    }
                } else if (this.opts.toggleSelected) {
                    this.removeDate(selectedDate);
                }

                // Change last selected date to be able to change time when clicking on this cell
                if (!this.opts.toggleSelected) {
                    this.lastSelectedDate = alreadySelected;
                    if (this.opts.timepicker) {
                        this.timepicker._setTime(alreadySelected);
                        this.timepicker.update();
                    }
                }
            },

            _onShowEvent: function (e) {
                if (!this.visible) {
                    this.show();
                }
            },

            _onBlur: function () {
                if (!this.inFocus && this.visible) {
                    this.hide();
                }
            },

            _onMouseDownDatepicker: function (e) {
                this.inFocus = true;
            },

            _onMouseUpDatepicker: function (e) {
                this.inFocus = false;
                e.originalEvent.inFocus = true;
                if (!e.originalEvent.timepickerFocus) this.$el.focus();
            },

            _onKeyUpGeneral: function (e) {
                var val = this.$el.val();

                if (!val) {
                    this.clear();
                }
            },

            _onResize: function () {
                if (this.visible) {
                    this.setPosition();
                }
            },

            _onMouseUpBody: function (e) {
                if (e.originalEvent.inFocus) return;

                if (this.visible && !this.inFocus) {
                    this.hide();
                }
            },

            _onMouseUpEl: function (e) {
                e.originalEvent.inFocus = true;
                setTimeout(this._onKeyUpGeneral.bind(this), 4);
            },

            _onKeyDown: function (e) {
                var code = e.which;
                this._registerKey(code);

                // Arrows
                if (code >= 37 && code <= 40) {
                    e.preventDefault();
                    this._focusNextCell(code);
                }

                // Enter
                if (code == 13) {
                    if (this.focused) {
                        if (this._getCell(this.focused).hasClass('-disabled-')) return;
                        if (this.view != this.opts.minView) {
                            this.down()
                        } else {
                            var alreadySelected = this._isSelected(this.focused, this.cellType);

                            if (!alreadySelected) {
                                if (this.timepicker) {
                                    this.focused.setHours(this.timepicker.hours);
                                    this.focused.setMinutes(this.timepicker.minutes);
                                }
                                this.selectDate(this.focused);
                                return;
                            }
                            this._handleAlreadySelectedDates(alreadySelected, this.focused)
                        }
                    }
                }

                // Esc
                if (code == 27) {
                    this.hide();
                }
            },

            _onKeyUp: function (e) {
                var code = e.which;
                this._unRegisterKey(code);
            },

            _onHotKey: function (e, hotKey) {
                this._handleHotKey(hotKey);
            },

            _onMouseEnterCell: function (e) {
                var $cell = $(e.target).closest('.datepicker--cell'),
                    date = this._getDateFromCell($cell);

                // Prevent from unnecessary rendering and setting new currentDate
                this.silent = true;

                if (this.focused) {
                    this.focused = ''
                }

                $cell.addClass('-focus-');

                this.focused = date;
                this.silent = false;

                if (this.opts.range && this.selectedDates.length == 1) {
                    this.minRange = this.selectedDates[0];
                    this.maxRange = '';
                    if (fsdDatepicker.less(this.minRange, this.focused)) {
                        this.maxRange = this.minRange;
                        this.minRange = '';
                    }
                    this.views[this.currentView]._update();
                }
            },

            _onMouseLeaveCell: function (e) {
                var $cell = $(e.target).closest('.datepicker--cell');

                $cell.removeClass('-focus-');

                this.silent = true;
                this.focused = '';
                this.silent = false;
            },

            _onTimeChange: function (e, h, m) {
                var date = new Date(),
                    selectedDates = this.selectedDates,
                    selected = false;

                if (selectedDates.length) {
                    selected = true;
                    date = this.lastSelectedDate;
                }

                date.setHours(h);
                date.setMinutes(m);

                if (!selected && !this._getCell(date).hasClass('-disabled-')) {
                    this.selectDate(date);
                } else {
                    this._setInputValue();
                    if (this.opts.onSelect) {
                        this._triggerOnChange();
                    }
                }
            },

            _onClickCell: function (e, date) {
                if (this.timepicker) {
                    date.setHours(this.timepicker.hours);
                    date.setMinutes(this.timepicker.minutes);
                }
                this.selectDate(date);
            },

            set focused(val) {
                if (!val && this.focused) {
                    var $cell = this._getCell(this.focused);

                    if ($cell.length) {
                        $cell.removeClass('-focus-')
                    }
                }
                this._focused = val;
                if (this.opts.range && this.selectedDates.length == 1) {
                    this.minRange = this.selectedDates[0];
                    this.maxRange = '';
                    if (fsdDatepicker.less(this.minRange, this._focused)) {
                        this.maxRange = this.minRange;
                        this.minRange = '';
                    }
                }
                if (this.silent) return;
                this.date = val;
            },

            get focused() {
                return this._focused;
            },

            get parsedDate() {
                return fsdDatepicker.getParsedDate(this.date);
            },

            set date(val) {
                if (!(val instanceof Date)) return;

                this.currentDate = val;

                if (this.inited && !this.silent) {
                    this.views[this.view]._render();
                    this.nav._render();
                    if (this.visible && this.elIsInput) {
                        this.setPosition();
                    }
                }
                return val;
            },

            get date() {
                return this.currentDate
            },

            set view(val) {
                this.viewIndex = this.viewIndexes.indexOf(val);

                if (this.viewIndex < 0) {
                    return;
                }

                this.prevView = this.currentView;
                this.currentView = val;

                if (this.inited) {
                    if (!this.views[val]) {
                        this.views[val] = new $.fn.fsdDatepicker.Body(this, val, this.opts)
                    } else {
                        this.views[val]._render();
                    }

                    this.views[this.prevView].hide();
                    this.views[val].show();
                    this.nav._render();

                    if (this.opts.onChangeView) {
                        this.opts.onChangeView(val)
                    }
                    if (this.elIsInput && this.visible) this.setPosition();
                }

                return val
            },

            get view() {
                return this.currentView;
            },

            get cellType() {
                return this.view.substring(0, this.view.length - 1)
            },

            get minTime() {
                var min = fsdDatepicker.getParsedDate(this.minDate);
                return new Date(min.year, min.month, min.date).getTime()
            },

            get maxTime() {
                var max = fsdDatepicker.getParsedDate(this.maxDate);
                return new Date(max.year, max.month, max.date).getTime()
            },

            get curDecade() {
                return fsdDatepicker.getDecade(this.date)
            }
        };

        //  Utils
        // -------------------------------------------------

        fsdDatepicker.getDaysCount = function (date) {
            return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        };

        fsdDatepicker.getParsedDate = function (date) {
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                fullMonth: (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1, // One based
                date: date.getDate(),
                fullDate: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
                day: date.getDay(),
                hours: date.getHours(),
                fullHours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
                minutes: date.getMinutes(),
                fullMinutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            }
        };

        fsdDatepicker.getDecade = function (date) {
            var firstYear = Math.floor(date.getFullYear() / 10) * 10;

            return [firstYear, firstYear + 9];
        };

        fsdDatepicker.template = function (str, data) {
            return str.replace(/#\{([\w]+)\}/g, function (source, match) {
                if (data[match] || data[match] === 0) {
                    return data[match]
                }
            });
        };

        fsdDatepicker.isSame = function (date1, date2, type) {
            if (!date1 || !date2) return false;
            var d1 = fsdDatepicker.getParsedDate(date1),
                d2 = fsdDatepicker.getParsedDate(date2),
                _type = type ? type : 'day',

                conditions = {
                    day: d1.date == d2.date && d1.month == d2.month && d1.year == d2.year,
                    month: d1.month == d2.month && d1.year == d2.year,
                    year: d1.year == d2.year
                };

            return conditions[_type];
        };

        fsdDatepicker.less = function (dateCompareTo, date, type) {
            if (!dateCompareTo || !date) return false;
            return date.getTime() < dateCompareTo.getTime();
        };

        fsdDatepicker.bigger = function (dateCompareTo, date, type) {
            if (!dateCompareTo || !date) return false;
            return date.getTime() > dateCompareTo.getTime();
        };

        fsdDatepicker.getLeadingZeroNum = function (num) {
            return parseInt(num) < 10 ? '0' + num : num;
        };

        /**
         * Returns copy of date with hours and minutes equals to 0
         * @param date {Date}
         */
        fsdDatepicker.resetTime = function (date) {
            if (typeof date != 'object') return;
            date = fsdDatepicker.getParsedDate(date);
            return new Date(date.year, date.month, date.date)
        };

        $.fn.fsdDatepicker = function (options) {
            return this.each(function () {
                if (!$.data(this, pluginName)) {
                    $.data(this, pluginName,
                        new Datepicker(this, options));
                } else {
                    var _this = $.data(this, pluginName);

                    _this.opts = $.extend(true, _this.opts, options);
                    _this.update();
                }
            });
        };

        $.fn.fsdDatepicker.Constructor = Datepicker;

        $.fn.fsdDatepicker.language = {
            ru: {
                days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
                daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                apply: 'Применить',
                clear: 'Очистить',
                dateFormat: 'dd.mm.yyyy',
                timeFormat: 'hh:ii',
                firstDay: 1
            }
        };

        $(function () {
            $(autoInitSelector).fsdDatepicker();
        })

    })();

    ; (function () {
        var templates = {
            days: '' +
                '<div class="datepicker--days datepicker--body">' +
                '<div class="datepicker--days-names"></div>' +
                '<div class="datepicker--cells datepicker--cells-days"></div>' +
                '</div>',
            months: '' +
                '<div class="datepicker--months datepicker--body">' +
                '<div class="datepicker--cells datepicker--cells-months"></div>' +
                '</div>',
            years: '' +
                '<div class="datepicker--years datepicker--body">' +
                '<div class="datepicker--cells datepicker--cells-years"></div>' +
                '</div>'
        },
            fsdDatepicker = $.fn.fsdDatepicker,
            dp = fsdDatepicker.Constructor;

        fsdDatepicker.Body = function (d, type, opts) {
            this.d = d;
            this.type = type;
            this.opts = opts;
            this.$el = $('');

            if (this.opts.onlyTimepicker) return;
            this.init();
        };

        fsdDatepicker.Body.prototype = {
            init: function () {
                this._buildBaseHtml();
                this._render();

                this._bindEvents();
            },

            _bindEvents: function () {
                this.$el.on('click', '.datepicker--cell', $.proxy(this._onClickCell, this));
            },

            _buildBaseHtml: function () {
                this.$el = $(templates[this.type]).appendTo(this.d.$content);
                this.$names = $('.datepicker--days-names', this.$el);
                this.$cells = $('.datepicker--cells', this.$el);
            },

            _getDayNamesHtml: function (firstDay, curDay, html, i) {
                curDay = curDay != undefined ? curDay : firstDay;
                html = html ? html : '';
                i = i != undefined ? i : 0;

                if (i > 7) return html;
                if (curDay == 7) return this._getDayNamesHtml(firstDay, 0, html, ++i);

                html += '<div class="datepicker--day-name' + (this.d.isWeekend(curDay) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[curDay] + '</div>';

                return this._getDayNamesHtml(firstDay, ++curDay, html, ++i);
            },

            _getCellContents: function (date, type) {
                var classes = "datepicker--cell datepicker--cell-" + type,
                    currentDate = new Date(),
                    parent = this.d,
                    minRange = dp.resetTime(parent.minRange),
                    maxRange = dp.resetTime(parent.maxRange),
                    opts = parent.opts,
                    d = dp.getParsedDate(date),
                    render = {},
                    html = d.date;

                switch (type) {
                    case 'day':
                        if (parent.isWeekend(d.day)) classes += " -weekend-";
                        if (d.month != this.d.parsedDate.month) {
                            classes += " -other-month-";
                            if (!opts.selectOtherMonths) {
                                classes += " -disabled-";
                            }
                            if (!opts.showOtherMonths) html = '';
                        }
                        break;
                    case 'month':
                        html = parent.loc[parent.opts.monthsField][d.month];
                        break;
                    case 'year':
                        var decade = parent.curDecade;
                        html = d.year;
                        if (d.year < decade[0] || d.year > decade[1]) {
                            classes += ' -other-decade-';
                            if (!opts.selectOtherYears) {
                                classes += " -disabled-";
                            }
                            if (!opts.showOtherYears) html = '';
                        }
                        break;
                }

                if (opts.onRenderCell) {
                    render = opts.onRenderCell(date, type) || {};
                    html = render.html ? render.html : html;
                    classes += render.classes ? ' ' + render.classes : '';
                }

                if (opts.range) {
                    if (dp.isSame(minRange, date, type)) classes += ' -range-from-';
                    if (dp.isSame(maxRange, date, type)) classes += ' -range-to-';

                    if (parent.selectedDates.length == 1 && parent.focused) {
                        if (
                            (dp.bigger(minRange, date) && dp.less(parent.focused, date)) ||
                            (dp.less(maxRange, date) && dp.bigger(parent.focused, date))) {
                            classes += ' -in-range-'
                        }

                        if (dp.less(maxRange, date) && dp.isSame(parent.focused, date)) {
                            classes += ' -range-from-'
                        }
                        if (dp.bigger(minRange, date) && dp.isSame(parent.focused, date)) {
                            classes += ' -range-to-'
                        }

                    } else if (parent.selectedDates.length == 2) {
                        if (dp.bigger(minRange, date) && dp.less(maxRange, date)) {
                            classes += ' -in-range-'
                        }
                    }
                }


                if (dp.isSame(currentDate, date, type)) classes += ' -current-';
                if (parent.focused && dp.isSame(date, parent.focused, type)) classes += ' -focus-';
                if (parent._isSelected(date, type)) classes += ' -selected-';
                if (!parent._isInRange(date, type) || render.disabled) classes += ' -disabled-';

                return {
                    html: html,
                    classes: classes
                }
            },

            /**
             * Calculates days number to render. Generates days html and returns it.
             * @param {object} date - Date object
             * @returns {string}
             * @private
             */
            _getDaysHtml: function (date) {
                var totalMonthDays = dp.getDaysCount(date),
                    firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
                    lastMonthDay = new Date(date.getFullYear(), date.getMonth(), totalMonthDays).getDay(),
                    daysFromPevMonth = firstMonthDay - this.d.loc.firstDay,
                    daysFromNextMonth = 6 - lastMonthDay + this.d.loc.firstDay;

                daysFromPevMonth = daysFromPevMonth < 0 ? daysFromPevMonth + 7 : daysFromPevMonth;
                daysFromNextMonth = daysFromNextMonth > 6 ? daysFromNextMonth - 7 : daysFromNextMonth;

                var startDayIndex = -daysFromPevMonth + 1,
                    m, y,
                    html = '';

                for (var i = startDayIndex, max = totalMonthDays + daysFromNextMonth; i <= max; i++) {
                    y = date.getFullYear();
                    m = date.getMonth();

                    html += this._getDayHtml(new Date(y, m, i))
                }

                return html;
            },

            _getDayHtml: function (date) {
                var content = this._getCellContents(date, 'day');

                return '<div class="' + content.classes + '" ' +
                    'data-date="' + date.getDate() + '" ' +
                    'data-month="' + date.getMonth() + '" ' +
                    'data-year="' + date.getFullYear() + '">' + content.html + '</div>';
            },

            /**
             * Generates months html
             * @param {object} date - date instance
             * @returns {string}
             * @private
             */
            _getMonthsHtml: function (date) {
                var html = '',
                    d = dp.getParsedDate(date),
                    i = 0;

                while (i < 12) {
                    html += this._getMonthHtml(new Date(d.year, i));
                    i++
                }

                return html;
            },

            _getMonthHtml: function (date) {
                var content = this._getCellContents(date, 'month');

                return '<div class="' + content.classes + '" data-month="' + date.getMonth() + '">' + content.html + '</div>'
            },

            _getYearsHtml: function (date) {
                var d = dp.getParsedDate(date),
                    decade = dp.getDecade(date),
                    firstYear = decade[0] - 1,
                    html = '',
                    i = firstYear;

                for (i; i <= decade[1] + 1; i++) {
                    html += this._getYearHtml(new Date(i, 0));
                }

                return html;
            },

            _getYearHtml: function (date) {
                var content = this._getCellContents(date, 'year');

                return '<div class="' + content.classes + '" data-year="' + date.getFullYear() + '">' + content.html + '</div>'
            },

            _renderTypes: {
                days: function () {
                    var dayNames = this._getDayNamesHtml(this.d.loc.firstDay),
                        days = this._getDaysHtml(this.d.currentDate);

                    this.$cells.html(days);
                    this.$names.html(dayNames)
                },
                months: function () {
                    var html = this._getMonthsHtml(this.d.currentDate);

                    this.$cells.html(html)
                },
                years: function () {
                    var html = this._getYearsHtml(this.d.currentDate);

                    this.$cells.html(html)
                }
            },

            _render: function () {
                if (this.opts.onlyTimepicker) return;
                this._renderTypes[this.type].bind(this)();
            },

            _update: function () {
                var $cells = $('.datepicker--cell', this.$cells),
                    _this = this,
                    classes,
                    $cell,
                    date;
                $cells.each(function (cell, i) {
                    $cell = $(this);
                    date = _this.d._getDateFromCell($(this));
                    classes = _this._getCellContents(date, _this.d.cellType);
                    $cell.attr('class', classes.classes)
                });
            },

            show: function () {
                if (this.opts.onlyTimepicker) return;
                this.$el.addClass('active');
                this.acitve = true;
            },

            hide: function () {
                this.$el.removeClass('active');
                this.active = false;
            },

            //  Events
            // -------------------------------------------------

            _handleClick: function (el) {
                var date = el.data('date') || 1,
                    month = el.data('month') || 0,
                    year = el.data('year') || this.d.parsedDate.year,
                    dp = this.d;
                // Change view if min view does not reach yet
                if (dp.view != this.opts.minView) {
                    dp.down(new Date(year, month, date));
                    return;
                }
                // Select date if min view is reached
                var selectedDate = new Date(year, month, date),
                    alreadySelected = this.d._isSelected(selectedDate, this.d.cellType);

                if (!alreadySelected) {
                    dp._trigger('clickCell', selectedDate);
                    return;
                }

                dp._handleAlreadySelectedDates.bind(dp, alreadySelected, selectedDate)();

            },

            _onClickCell: function (e) {
                var $el = $(e.target).closest('.datepicker--cell');

                if ($el.hasClass('-disabled-')) return;

                this._handleClick.bind(this)($el);
            }
        };
    })();

    ; (function () {
        var template = '' +
            '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div>' +
            '<div class="datepicker--nav-title">#{title}</div>' +
            '<div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
            buttonsContainerTemplate = '<div class="datepicker--buttons"></div>',
            button = '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
            fsdDatepicker = $.fn.fsdDatepicker,
            dp = fsdDatepicker.Constructor;

        fsdDatepicker.Navigation = function (d, opts) {
            this.d = d;
            this.opts = opts;

            this.$buttonsContainer = '';

            this.init();
        };

        fsdDatepicker.Navigation.prototype = {
            init: function () {
                this._buildBaseHtml();
                this._bindEvents();
            },

            _bindEvents: function () {
                this.d.$nav.on('click', '.datepicker--nav-action', $.proxy(this._onClickNavButton, this));
                this.d.$nav.on('click', '.datepicker--nav-title', $.proxy(this._onClickNavTitle, this));
                this.d.$datepicker.on('click', '.datepicker--button', $.proxy(this._onClickNavButton, this));
            },

            _buildBaseHtml: function () {
                if (!this.opts.onlyTimepicker) {
                    this._render();
                }
                this._addButtonsIfNeed();
            },

            _addButtonsIfNeed: function () {
                if (this.opts.clearButton) {
                    this._addButton('clear')
                }
                if (this.opts.applyButton) {
                    this._addButton('apply')
                }
            },

            _render: function () {
                var title = this._getTitle(this.d.currentDate),
                    html = dp.template(template, $.extend({ title: title }, this.opts));
                this.d.$nav.html(html);
                if (this.d.view == 'years') {
                    $('.datepicker--nav-title', this.d.$nav).addClass('-disabled-');
                }
                this.setNavStatus();
            },

            _getTitle: function (date) {
                return this.d.formatDate(this.opts.navTitles[this.d.view], date)
            },

            _addButton: function (type) {
                if (!this.$buttonsContainer.length) {
                    this._addButtonsContainer();
                }

                var data = {
                    action: type,
                    label: this.d.loc[type]
                },
                    html = dp.template(button, data);

                if ($('[data-action=' + type + ']', this.$buttonsContainer).length) return;
                this.$buttonsContainer.append(html);
            },

            _addButtonsContainer: function () {
                this.d.$datepicker.append(buttonsContainerTemplate);
                this.$buttonsContainer = $('.datepicker--buttons', this.d.$datepicker);
            },

            setNavStatus: function () {
                if (!(this.opts.minDate || this.opts.maxDate) || !this.opts.disableNavWhenOutOfRange) return;

                var date = this.d.parsedDate,
                    m = date.month,
                    y = date.year,
                    d = date.date;

                switch (this.d.view) {
                    case 'days':
                        if (!this.d._isInRange(new Date(y, m - 1, 1), 'month')) {
                            this._disableNav('prev')
                        }
                        if (!this.d._isInRange(new Date(y, m + 1, 1), 'month')) {
                            this._disableNav('next')
                        }
                        break;
                    case 'months':
                        if (!this.d._isInRange(new Date(y - 1, m, d), 'year')) {
                            this._disableNav('prev')
                        }
                        if (!this.d._isInRange(new Date(y + 1, m, d), 'year')) {
                            this._disableNav('next')
                        }
                        break;
                    case 'years':
                        var decade = dp.getDecade(this.d.date);
                        if (!this.d._isInRange(new Date(decade[0] - 1, 0, 1), 'year')) {
                            this._disableNav('prev')
                        }
                        if (!this.d._isInRange(new Date(decade[1] + 1, 0, 1), 'year')) {
                            this._disableNav('next')
                        }
                        break;
                }
            },

            _disableNav: function (nav) {
                $('[data-action="' + nav + '"]', this.d.$nav).addClass('-disabled-')
            },

            _activateNav: function (nav) {
                $('[data-action="' + nav + '"]', this.d.$nav).removeClass('-disabled-')
            },

            _onClickNavButton: function (e) {
                var $el = $(e.target).closest('[data-action]'),
                    action = $el.data('action');

                this.d[action]();
            },

            _onClickNavTitle: function (e) {
                if ($(e.target).hasClass('-disabled-')) return;

                if (this.d.view == 'days') {
                    return this.d.view = 'months'
                }

                this.d.view = 'years';
            }
        }

    })();

    ; (function () {
        var template = '<div class="datepicker--time">' +
            '<div class="datepicker--time-current">' +
            '   <span class="datepicker--time-current-hours">#{hourVisible}</span>' +
            '   <span class="datepicker--time-current-colon">:</span>' +
            '   <span class="datepicker--time-current-minutes">#{minValue}</span>' +
            '</div>' +
            '<div class="datepicker--time-sliders">' +
            '   <div class="datepicker--time-row">' +
            '      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>' +
            '   </div>' +
            '   <div class="datepicker--time-row">' +
            '      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>' +
            '   </div>' +
            '</div>' +
            '</div>',
            fsdDatepicker = $.fn.fsdDatepicker,
            dp = fsdDatepicker.Constructor;

        fsdDatepicker.Timepicker = function (inst, opts) {
            this.d = inst;
            this.opts = opts;

            this.init();
        };

        fsdDatepicker.Timepicker.prototype = {
            init: function () {
                var input = 'input';
                this._setTime(this.d.date);
                this._buildHTML();

                if (navigator.userAgent.match(/trident/gi)) {
                    input = 'change';
                }

                this.d.$el.on('selectDate', this._onSelectDate.bind(this));
                this.$ranges.on(input, this._onChangeRange.bind(this));
                this.$ranges.on('mouseup', this._onMouseUpRange.bind(this));
                this.$ranges.on('mousemove focus ', this._onMouseEnterRange.bind(this));
                this.$ranges.on('mouseout blur', this._onMouseOutRange.bind(this));
            },

            _setTime: function (date) {
                var _date = dp.getParsedDate(date);

                this._handleDate(date);
                this.hours = _date.hours < this.minHours ? this.minHours : _date.hours;
                this.minutes = _date.minutes < this.minMinutes ? this.minMinutes : _date.minutes;
            },

            /**
             * Sets minHours and minMinutes from date (usually it's a minDate)
             * Also changes minMinutes if current hours are bigger then @date hours
             * @param date {Date}
             * @private
             */
            _setMinTimeFromDate: function (date) {
                this.minHours = date.getHours();
                this.minMinutes = date.getMinutes();

                // If, for example, min hours are 10, and current hours are 12,
                // update minMinutes to default value, to be able to choose whole range of values
                if (this.d.lastSelectedDate) {
                    if (this.d.lastSelectedDate.getHours() > date.getHours()) {
                        this.minMinutes = this.opts.minMinutes;
                    }
                }
            },

            _setMaxTimeFromDate: function (date) {
                this.maxHours = date.getHours();
                this.maxMinutes = date.getMinutes();

                if (this.d.lastSelectedDate) {
                    if (this.d.lastSelectedDate.getHours() < date.getHours()) {
                        this.maxMinutes = this.opts.maxMinutes;
                    }
                }
            },

            _setDefaultMinMaxTime: function () {
                var maxHours = 23,
                    maxMinutes = 59,
                    opts = this.opts;

                this.minHours = opts.minHours < 0 || opts.minHours > maxHours ? 0 : opts.minHours;
                this.minMinutes = opts.minMinutes < 0 || opts.minMinutes > maxMinutes ? 0 : opts.minMinutes;
                this.maxHours = opts.maxHours < 0 || opts.maxHours > maxHours ? maxHours : opts.maxHours;
                this.maxMinutes = opts.maxMinutes < 0 || opts.maxMinutes > maxMinutes ? maxMinutes : opts.maxMinutes;
            },

            /**
             * Looks for min/max hours/minutes and if current values
             * are out of range sets valid values.
             * @private
             */
            _validateHoursMinutes: function (date) {
                if (this.hours < this.minHours) {
                    this.hours = this.minHours;
                } else if (this.hours > this.maxHours) {
                    this.hours = this.maxHours;
                }

                if (this.minutes < this.minMinutes) {
                    this.minutes = this.minMinutes;
                } else if (this.minutes > this.maxMinutes) {
                    this.minutes = this.maxMinutes;
                }
            },

            _buildHTML: function () {
                var lz = dp.getLeadingZeroNum,
                    data = {
                        hourMin: this.minHours,
                        hourMax: lz(this.maxHours),
                        hourStep: this.opts.hoursStep,
                        hourValue: this.hours,
                        hourVisible: lz(this.displayHours),
                        minMin: this.minMinutes,
                        minMax: lz(this.maxMinutes),
                        minStep: this.opts.minutesStep,
                        minValue: lz(this.minutes)
                    },
                    _template = dp.template(template, data);

                this.$timepicker = $(_template).appendTo(this.d.$datepicker);
                this.$ranges = $('[type="range"]', this.$timepicker);
                this.$hours = $('[name="hours"]', this.$timepicker);
                this.$minutes = $('[name="minutes"]', this.$timepicker);
                this.$hoursText = $('.datepicker--time-current-hours', this.$timepicker);
                this.$minutesText = $('.datepicker--time-current-minutes', this.$timepicker);

                if (this.d.ampm) {
                    this.$ampm = $('<span class="datepicker--time-current-ampm">')
                        .appendTo($('.datepicker--time-current', this.$timepicker))
                        .html(this.dayPeriod);

                    this.$timepicker.addClass('-am-pm-');
                }
            },

            _updateCurrentTime: function () {
                var h = dp.getLeadingZeroNum(this.displayHours),
                    m = dp.getLeadingZeroNum(this.minutes);

                this.$hoursText.html(h);
                this.$minutesText.html(m);

                if (this.d.ampm) {
                    this.$ampm.html(this.dayPeriod);
                }
            },

            _updateRanges: function () {
                this.$hours.attr({
                    min: this.minHours,
                    max: this.maxHours
                }).val(this.hours);

                this.$minutes.attr({
                    min: this.minMinutes,
                    max: this.maxMinutes
                }).val(this.minutes)
            },

            /**
             * Sets minHours, minMinutes etc. from date. If date is not passed, than sets
             * values from options
             * @param [date] {object} - Date object, to get values from
             * @private
             */
            _handleDate: function (date) {
                this._setDefaultMinMaxTime();
                if (date) {
                    if (dp.isSame(date, this.d.opts.minDate)) {
                        this._setMinTimeFromDate(this.d.opts.minDate);
                    } else if (dp.isSame(date, this.d.opts.maxDate)) {
                        this._setMaxTimeFromDate(this.d.opts.maxDate);
                    }
                }

                this._validateHoursMinutes(date);
            },

            update: function () {
                this._updateRanges();
                this._updateCurrentTime();
            },

            /**
             * Calculates valid hour value to display in text input and datepicker's body.
             * @param date {Date|Number} - date or hours
             * @param [ampm] {Boolean} - 12 hours mode
             * @returns {{hours: *, dayPeriod: string}}
             * @private
             */
            _getValidHoursFromDate: function (date, ampm) {
                var d = date,
                    hours = date;

                if (date instanceof Date) {
                    d = dp.getParsedDate(date);
                    hours = d.hours;
                }

                var _ampm = ampm || this.d.ampm,
                    dayPeriod = 'am';

                if (_ampm) {
                    switch (true) {
                        case hours == 0:
                            hours = 12;
                            break;
                        case hours == 12:
                            dayPeriod = 'pm';
                            break;
                        case hours > 11:
                            hours = hours - 12;
                            dayPeriod = 'pm';
                            break;
                        default:
                            break;
                    }
                }

                return {
                    hours: hours,
                    dayPeriod: dayPeriod
                }
            },

            set hours(val) {
                this._hours = val;

                var displayHours = this._getValidHoursFromDate(val);

                this.displayHours = displayHours.hours;
                this.dayPeriod = displayHours.dayPeriod;
            },

            get hours() {
                return this._hours;
            },

            //  Events
            // -------------------------------------------------

            _onChangeRange: function (e) {
                var $target = $(e.target),
                    name = $target.attr('name');

                this.d.timepickerIsActive = true;

                this[name] = $target.val();
                this._updateCurrentTime();
                this.d._trigger('timeChange', [this.hours, this.minutes]);

                this._handleDate(this.d.lastSelectedDate);
                this.update()
            },

            _onSelectDate: function (e, data) {
                this._handleDate(data);
                this.update();
            },

            _onMouseEnterRange: function (e) {
                var name = $(e.target).attr('name');
                $('.datepicker--time-current-' + name, this.$timepicker).addClass('-focus-');
            },

            _onMouseOutRange: function (e) {
                var name = $(e.target).attr('name');
                if (this.d.inFocus) return; // Prevent removing focus when mouse out of range slider
                $('.datepicker--time-current-' + name, this.$timepicker).removeClass('-focus-');
            },

            _onMouseUpRange: function (e) {
                this.d.timepickerIsActive = false;
            }
        };
    })();
})(window, jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=UIKit~details~landing~search.1e904912de94d2b70cf4.js.map