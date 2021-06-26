import 'cleave.js';
class TextField {
  constructor(textFieldInput) {
    this.textFieldInput = textFieldInput;
    this._init();
  }
  _init() {
    new Cleave(this.textFieldInput, {
    date: true,
    delimiter: '.',
    datePattern: ['d', 'm', 'Y']
    });
  }
}
export default TextField;