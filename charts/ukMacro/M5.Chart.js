var ChartM5 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M5) USD to GBP exchange rate",

   "title": {
    "text": "USD/GBP exhange rate",
    "subtitle":"Calendar year average. Source: [tbc], OFX",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M5_USDGBP_LongRun.csv"},
  "height": 300,
  "width": 295,
  
  "encoding": {"x": {"field": "Year", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              "scale": {"domain": [0, 12]},
               "axis": {"grid": false}
              }
            },

        
        "layer": [{"mark": {"type": "line", "color": "darkblue"}},

                  {"transform": 

                      [{"filter": {"selection": "hover"}}], 

                        "mark": "point"}

      ]

    },

    {"mark": "rule", 

      "encoding": {
        "opacity": {
          "condition": {"value": 0.1, "selection": "hover"},
          "value": 0
        },

        "tooltip": [

          {"field": "Year", "type": "temporal", "format":"%B, %Y"},
          {"field": "Value", "title": "USD to GBP", "type": "quantitative", "format": ""}

        ]

      },


      
      "selection": {
        "hover": {
          "type": "single",
          "fields": ["Year"],
          "nearest": true,
          "on": "mouseover",
          "empty": "none",
          "clear": "mouseout"

        }

      }

    }

  ]

};


vegaEmbed('#ChartM5', ChartM5, {"actions": false});