var ChartI1 =
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Inflation UK",

   "title": {
    "text": "UK inflation, 1948-2021",
    "subtitle":"RPI all items, annual change (%), source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/czbh",
    "format": {"type": "json", "property": "months"}
  },
  "height": 300,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "orangered"
  },
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal",
      "axis": {
        "title": null,
        "grid": false,
        "xlabelOverlap": "greedy",
        "labelSeparation": 20,
        "ticks": false
      }
    },
    "y": {
      "field": "value",
      "type": "quantitative",
      "title": "",
      "axis": {"grid": false}
    }
  }
};
vegaEmbed('#ChartI1', ChartI1, {"actions": false});