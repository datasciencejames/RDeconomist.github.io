var Chart4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Covid-19 data, from ECDC",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/vega/master/db_ecdc_wide.csv"
  },
  "transform": [
    {"xxfilter": {"field": "deaths_cml","lt": 30000}},
    {"filter": {"field": "date","equal": 20201130}}
  ],
  
  
  "selection": {
    "paintbrush": {
      "type": "multi", "on": "mouseover",
      "nearest": true
    },
      "grid": {
      "type": "interval", "bind": "scales"}
  },


  "encoding": {
    "x": {
      "field": "cases_cml_pop",
      "type": "quantitative",
      "axis": {
        "title": "Cases / Population",
        "grid": false,
        "tickCount": 14,
        "format": ".1%",
        "labelOverlap": "greedy"
      }
    },
    "y": {
      "field": "deaths_cml_pop",
      "type": "quantitative",
      "axis": {
        "title": "Deaths / Population", 
        "grid": false, 
        "format": ".2%"}
      
    },
    "color": {
      "field": "continentexp",
      "type": "nominal",
      "scale": {"scheme": "category10"}
    },

    "size": {
             "condition": {"selection": "paintbrush", "value": 300},
      "value": 50
        },


    "tooltip": [
      {"field": "date2", "type": "temporal", "title":"Date"},
      {"field": "country", "type": "nominal", "title":"Country"},
      {"field": "deaths_cml_pop", "type": "nominal", "title":"Deaths per capita", "format": ".2%"},
      {"field": "cases_cml_pop", "type": "nominal", "title":"Cases per capita", "format": ".2%"}
    ]
  },
  "title": {
    "text": "COVID-19 - CASES AND DEATHS PER CAPITA",
    "anchor": "start",
    "color": "black"
  },
  "config": {"background": "#FcFdFd"},
  "height": 400,
  "width": 600,
  "mark": {
    "type": "point",
    "opacity": 1}
  };
      vegaEmbed('#vis4', Chart4);