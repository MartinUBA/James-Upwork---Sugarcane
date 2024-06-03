var size = 0;
var placement = 'point';

var style_Sugarcane_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Sugarcane");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 10000.000000 && value <= 75000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,184,174,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 75000.000000 && value <= 80000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(158,217,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 80000.000000 && value <= 100000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(74,194,109,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 100000.000000 && value <= 125000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(31,162,136,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 125000.000000 && value <= 150000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(39,127,142,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 150000.000000 && value <= 300000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(54,92,141,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 300000.000000 && value <= 500000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,50,127,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 500000.000000 && value <= 600000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(68,1,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
