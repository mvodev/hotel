import 'cleave.js'
var cleave = new Cleave('.txtField-input-date', {
 date: true,
 delimiter: '.',
 datePattern: ['d', 'm', 'Y']
});