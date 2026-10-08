var size = 0;
var placement = 'point';

var style_Wards_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#e05ccc";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("WARD_NAME") !== null) {
        labelText = String(feature.get("WARD_NAME"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,26,205,0.9176470588235294)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.4079999999999995}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
