var vg_1 = "VISindex.vg.json"
vegaEmbed("#graph_chart", vg_1, { "actions": false }) .then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}) .catch(console.error);

var vg_2 = "VISindex2.vg.json"
vegaEmbed("#bar_chart", vg_2, { "actions": false }) .then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}) .catch(console.error);

var vg_3 = "VISindex3.vg.json"
vegaEmbed("#pie_chart", vg_3, { "actions": false }) .then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}) .catch(console.error);