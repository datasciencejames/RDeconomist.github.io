var chartC3 =
{
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/rapidcharts/master/waves/waveHeights_today.csv"
  },

   "title": {
    "text": "Llangennith",
    "subtitle": "Predicted wave height (ft), range.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "height":300,
  "width":300,

  "mark": {
    "type":"area",
    "color":"#0BB5FF"
      },
    
  "encoding": {
      
      "x": {
        "field": "days",
        "type": "quantitative",
        "title": "Forecast (days ahead)"        
      },
      
      "y": {
        "field": "llangennith_high",
        "type": "quantitative",
        "title": null,
        "scale": {"domain": [0, 12]},
        "grid":null
      },

      "y2": {
        "field": "llangennith_low",
        "type": "quantitative",
        "title": null,
        "grid":null
      }
    }
  };
vegaEmbed('#chartC3', chartC3, {"actions": false});