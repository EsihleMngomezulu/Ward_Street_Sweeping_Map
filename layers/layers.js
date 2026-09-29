ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2027825.441614, -4050726.767408, 2128271.122638, -3982462.712344]);
var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Official_Planning_Suburbs_1 = new ol.format.GeoJSON();
var features_Official_Planning_Suburbs_1 = format_Official_Planning_Suburbs_1.readFeatures(json_Official_Planning_Suburbs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Official_Planning_Suburbs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Official_Planning_Suburbs_1.addFeatures(features_Official_Planning_Suburbs_1);
var lyr_Official_Planning_Suburbs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Official_Planning_Suburbs_1, 
                style: style_Official_Planning_Suburbs_1,
                popuplayertitle: 'Official_Planning_Suburbs',
                interactive: true,
                title: '<img src="styles/legend/Official_Planning_Suburbs_1.png" /> Official_Planning_Suburbs'
            });
var format_Wards_2 = new ol.format.GeoJSON();
var features_Wards_2 = format_Wards_2.readFeatures(json_Wards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_2.addFeatures(features_Wards_2);
var lyr_Wards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wards_2, 
                style: style_Wards_2,
                popuplayertitle: 'Wards',
                interactive: true,
                title: '<img src="styles/legend/Wards_2.png" /> Wards'
            });

lyr_ESRITopo_0.setVisible(true);lyr_Official_Planning_Suburbs_1.setVisible(true);lyr_Wards_2.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_Official_Planning_Suburbs_1,lyr_Wards_2];
lyr_Official_Planning_Suburbs_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'SL_OFC_SBR': 'SL_OFC_SBR', 'OFC_SBRB_N': 'OFC_SBRB_N', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Wards_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD_NAME': 'WARD_NAME', 'WARD_YEAR': 'WARD_YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Official_Planning_Suburbs_1.set('fieldImages', {'OBJECTID': 'Range', 'GlobalID': 'TextEdit', 'SL_OFC_SBR': 'Range', 'OFC_SBRB_N': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Wards_2.set('fieldImages', {'OBJECTID': 'Range', 'WARD_NAME': 'TextEdit', 'WARD_YEAR': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Official_Planning_Suburbs_1.set('fieldLabels', {'OBJECTID': 'no label', 'GlobalID': 'no label', 'SL_OFC_SBR': 'no label', 'OFC_SBRB_N': 'inline label - always visible', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Wards_2.set('fieldLabels', {'OBJECTID': 'no label', 'WARD_NAME': 'inline label - always visible', 'WARD_YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Wards_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});