import autobind from 'autobind-decorator';

class Pagination {

  constructor(rootElem) {
    this.paginationRoot = rootElem;
    this.paginationBody = this.paginationRoot.querySelector('.js-pagination__body');
    this.paginationLabel = this.paginationRoot.querySelector('.pagination__label');
    this._calculateSettings();
    this._render();
    this._bindEvents();
  }

  _bindEvents() {
    this.forwardButton.addEventListener('click', this._handleArrowForwardClick);
    this.backButton.addEventListener('click', this._handleArrowBackClick);
  }

  _calculateSettings() {
    this.elemsOnPage =
      this.paginationBody.getAttribute('data-elems') !== null ? this.paginationBody.getAttribute('data-elems') : 0;
    this.totalElems =
      this.paginationBody.getAttribute('data-total') !== null ? this.paginationBody.getAttribute('data-total') : 0;
    this.rootRef = this.paginationBody.getAttribute('data-ref') !== null ? this.paginationBody.getAttribute('data-ref') : '';
    this.pagesToShow = Math.ceil(this.totalElems / this.elemsOnPage);
    this.settingsIsCorrect = (this.elemsOnPage > 0) && (this.totalElems > 0) && (this.rootRef.length > 0);
    if (this.settingsIsCorrect) {
      this.currentPage = 1;
    }
  }

  @autobind
  _handleArrowForwardClick(e) {
    if (this.pagesToShow > this.currentPage) {
      this.currentPage++;
    }
    this._reDrawPagination();
  }

  @autobind
  _handleArrowBackClick(e) {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this._reDrawPagination();
  }

  _isEllipsisMustBeShown() {
    return (this.pagesToShow - this.currentPage > 4);
  }

  _render() {
    if (this.settingsIsCorrect) {
      this.pages = [];
      this.backButton = document.createElement('a');
      this.backButton.classList.add('pagination__back-arrow');
      this.backButton.innerText = 'arrow_back';
      this.backButton.classList.add('pagination__back-arrow_invisible');
      this.backButton.href = `${this.rootRef}-${this.currentPage}`;
      this.paginationBody.append(this.backButton);
      for (let i = 1; i <= this.pagesToShow; i++) {
        const page = document.createElement('a');
        page.classList.add('pagination__number');
        page.href = `${this.rootRef}-${i}`;
        page.innerText = i;
        if (i === this.currentPage) {
          page.classList.add('pagination__number_selected');
        }
        this.pages.push(page);
        if (this._isEllipsisMustBeShown() && (i > 3 && (i <= this.pagesToShow - 1))) {
          page.classList.add('pagination__number_invisible');
        }
        this.paginationBody.append(page);
        if (this._isEllipsisMustBeShown() && (i === (this.pagesToShow - 1))) {
          this.ellipsis = document.createElement('div');
          this.ellipsis.classList.add('pagination__ellipsis');
          this.ellipsis.innerText = '...';
          this.paginationBody.append(this.ellipsis);
        }
      }
      this.forwardButton = document.createElement('a');
      this.forwardButton.classList.add('pagination__forward-arrow');
      this.forwardButton.innerText = 'arrow_forward';
      this.forwardButton.href = `${this.rootRef}-${this.currentPage}`
      this.paginationBody.append(this.forwardButton);
    }
    this._setLabel();
  }

  _setLabel() {
    const diapason = `${this.elemsOnPage * (this.currentPage - 1) + 1}-${this.elemsOnPage * (this.currentPage)}`;
    const totalElements = `${this.totalElems > 100 ? '100+' : this.totalElems}`;
    this.paginationLabel.innerText = `${diapason} из ${totalElements} вариантов аренды`;
  }

  _showBackArrow() {
    this.backButton.classList.remove('pagination__back-arrow_invisible');
  }

  _hideBackArrow() {
    this.backButton.classList.add('pagination__back-arrow_invisible');
  }

  _backArrowIsMustBeVisible() {
    return (this.currentPage > 1);
  }

  _setRefToBackArrow() {
    this.backButton.href = `${this.rootRef}-${this.currentPage - 1}`;
  }

  _setRefToForwardArrow() {
    this.forwardButton.href = `${this.rootRef}-${this.currentPage}`;
  }

  _reDrawPagination() {
    if (this._backArrowIsMustBeVisible()) {
      this._showBackArrow();
      this._setRefToBackArrow();
    } else this._hideBackArrow();
    this._setRefToForwardArrow();

    this.pages.forEach((elem, index) => {

      if (index === this.currentPage - 1) {
        elem.classList.add('pagination__number_selected');
      } else {
        elem.classList.remove('pagination__number_selected');
      }

      if (index < this.currentPage - 1) {
        elem.classList.add('pagination__number_invisible');
      }
      if (this._isEllipsisMustBeShown() && (index >= this.currentPage - 1 && index <= this.currentPage + 1)) {
        elem.classList.remove('pagination__number_invisible');
      }
      else if (!this._isEllipsisMustBeShown() && (index >= this.currentPage - 1)) {
        elem.classList.remove('pagination__number_invisible');
      } else if (this._isEllipsisMustBeShown() && (index !== this.pages.length - 1)) {
        elem.classList.add('pagination__number_invisible');
      }

    })

    if (this._isEllipsisMustBeShown()) {
      this.ellipsis.classList.remove('pagination__ellipsis_invisible');
    } else this.ellipsis.classList.add('pagination__ellipsis_invisible');

    this._setLabel();

  }

}
export default Pagination;