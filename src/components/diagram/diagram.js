import DiagramChart from './diagram-chart.js';

const diagramChartRootElem = document.querySelector('.js-diagram-donut');
const diagramChart = new DiagramChart(diagramChartRootElem, 
                                      { number: 260,
                                      label: 'голосов', 
                                      segments: 
                                              { perfect: 130,
                                                good: 65, 
                                                satisfactory: 65, 
                                                poor: 0, 
                                              } 
                                      });