var size = 0;
var placement = 'point';

var style_Official_Planning_Suburbs_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "bold 15.0px \'Open Sans\', sans-serif";
    var labelFill = "#1e4ade";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("OFC_SBRB_N") !== null) {
        labelText = String(feature.get("OFC_SBRB_N"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,121,177,0.3)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.688}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
