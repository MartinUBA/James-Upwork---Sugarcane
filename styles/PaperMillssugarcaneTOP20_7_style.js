var size = 0;
var placement = 'point';

var style_PaperMillssugarcaneTOP20_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Sugarcane");
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 101231.000000 && value <= 155423.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.2 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(201,197,169,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(43,131,76,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 155423.000000 && value <= 184937.666667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.2 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(201,197,169,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,191,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 184937.666667 && value <= 202601.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.2 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(201,197,169,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
