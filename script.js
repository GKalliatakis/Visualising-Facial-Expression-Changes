


var number_of_players =[];



$(function () {

var session_data = [];
 $.ajaxSetup({
        async: false
    });
$.getJSON('SessionOutput.json', function(punchcard_data) {
	  sum_array=[{up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0},
				  {up:0,down:0,right:0,left:0}];
		var mySeries = [{
			
            name: 'HAPPINESS',
            data: [],
            stack: 'HAPPINESS/SADNESS'
        }, {
            name: 'SADNESSNESS',
            data: [],
            stack: 'HAPPINESS/SADNESS'
        }, {
            name: 'SURPRISE',
            data: [],
            stack: 'SURPRISE'
        }, {
            name: 'ANGER',
            data: [],
            stack: 'ANGER'
        }];
	  $.each(punchcard_data, function(playerIndex, player) {
		number_of_players.push(playerIndex+1);
		
        $.each(player.SessionData, function(sessionIndex, val) {
			if (val.time > 0 && val.time <= 2) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[0].up++;
				 log.console("aaaa");
			   } else if (val.emotion === "ANGER") {
				 sum_array[0].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[0].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[0].right++;
				}
			}
			if (val.time > 2 && val.time <= 4) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[1].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[1].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[1].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[1].right++;
				}

			}
			
			if (val.time > 4 && val.time <= 6) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[2].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[2].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[2].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[2].right++;
				}

			}
			
			if (val.time > 6 && val.time <= 8) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[3].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[3].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[3].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[3].right++;
				}

			}
			
			if (val.time > 8 && val.time <= 10) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[4].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[4].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[4].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[4].right++;
				}

			}
			if (val.time > 10 && val.time <= 12) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[5].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[5].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[5].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[5].right++;
				}

			}
			
			if (val.time > 12 && val.time <= 14) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[6].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[6].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[6].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[6].right++;
				}

			}
			if (val.time > 14 && val.time <= 16) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[7].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[7].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[7].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[7].right++;
				}

			}
			if (val.time > 16 && val.time <= 18) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[8].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[8].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[8].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[8].right++;
				}

			}
			if (val.time > 18 && val.time <= 20) { 
	 
				if (val.emotion === "SURPRISE") {
				 sum_array[9].up++;
			   } else if (val.emotion === "ANGER") {
				 sum_array[9].down++;
			   } else if (val.emotion === "SADNESS") {
				 sum_array[9].left++;
			   }
				else if (val.emotion === "HAPPINESS") {
				sum_array[9].right++;
				}

			}
			
			
			});

	  });
	
	$.each(sum_array, function(index, val) {
		mySeries[0].data.push(val.up)
		mySeries[1].data.push(val.down)
		mySeries[2].data.push(val.left)
		mySeries[3].data.push(val.right)
	});

	
	
// Load the fonts
Highcharts.createElement('link', {
   href: '//fonts.googleapis.com/css?family=Signika:400,700',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
   proceed.call(this);
   this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
});


Highcharts.theme = {
   colors: ["#55BF3B", "#7798BF", "#f7a35c", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: "Signika, serif"
      }
   },
   title: {
      style: {
         color: 'black',
         fontSize: '16px',
         fontWeight: 'bold'
      }
   },
   subtitle: {
      style: {
         color: 'black'
      }
   },
   tooltip: {
      borderWidth: 0
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   yAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   plotOptions: {
      series: {
         shadow: true
      },
      candlestick: {
         lineColor: '#404048'
      },
      map: {
         shadow: false
      }
   },

   // Highstock specific
   navigator: {
      xAxis: {
         gridLineColor: '#D0D0D8'
      }
   },
   rangeSelector: {
      buttonTheme: {
         fill: 'white',
         stroke: '#C0C0C8',
         'stroke-width': 1,
         states: {
            select: {
               fill: '#D0D0D8'
            }
         }
      }
   },
   scrollbar: {
      trackBorderColor: '#C0C0C8'
   },

   // General
   background2: '#E0E0E8'
   
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);	



    // draw chart
    $('#container').highcharts({


        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 25,
                beta: 15,
                viewDistance: 50,
                depth: 40
            },
            marginTop: 80,
            marginRight: 40
        },
        
        credits: {
            enabled: false},

        title: {
            text: "Total players' facial emotion, grouped by emotion"	
        },

        xAxis: {
		    //tickAmount: 10,
			//tickInterval: 2
            categories: ['0-2 sec', '2-4 sec', '4-6 sec', '6-8 sec', '8-10 sec', '10-12 sec', '12-14 sec', '14-16 sec', '16-18 sec', '18-20 sec']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of Facial emotions'
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40,
				pointPadding: 0.2
            }
        },

        series: mySeries
    });

   });



});
