import DiagramDonut from './diagram-donut.js';

const diagramChartRootElem = document.querySelector('.js-diagram-donut');
const diagramChart = new DiagramDonut(diagramChartRootElem, 
                                      { number: 260,
                                      label: 'голосов', 
                                      segments: 
                                              { perfect: 130,
                                                good: 65, 
                                                satisfactory: 65, 
                                                poor: 0, 
                                              } 
                                      });