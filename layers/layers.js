ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2068322.236514, -4021707.473572, 2080788.273442, -4014097.392890]);
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
var format_Subcouncils_2 = new ol.format.GeoJSON();
var features_Subcouncils_2 = format_Subcouncils_2.readFeatures(json_Subcouncils_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subcouncils_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subcouncils_2.addFeatures(features_Subcouncils_2);
var lyr_Subcouncils_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subcouncils_2, 
                style: style_Subcouncils_2,
                popuplayertitle: 'Subcouncils',
                interactive: true,
    title: 'Subcouncils<br />\
    <img src="styles/legend/Subcouncils_2_0.png" /> Subcouncil 9<br />\
    <img src="styles/legend/Subcouncils_2_1.png" /> Subcouncil 8<br />\
    <img src="styles/legend/Subcouncils_2_2.png" /> Subcouncil 7<br />\
    <img src="styles/legend/Subcouncils_2_3.png" /> Subcouncil 6<br />\
    <img src="styles/legend/Subcouncils_2_4.png" /> Subcouncil 5<br />\
    <img src="styles/legend/Subcouncils_2_5.png" /> Subcouncil 4<br />\
    <img src="styles/legend/Subcouncils_2_6.png" /> Subcouncil 3<br />\
    <img src="styles/legend/Subcouncils_2_7.png" /> Subcouncil 20<br />\
    <img src="styles/legend/Subcouncils_2_8.png" /> Subcouncil 2<br />\
    <img src="styles/legend/Subcouncils_2_9.png" /> Subcouncil 19<br />\
    <img src="styles/legend/Subcouncils_2_10.png" /> Subcouncil 18<br />\
    <img src="styles/legend/Subcouncils_2_11.png" /> Subcouncil 17<br />\
    <img src="styles/legend/Subcouncils_2_12.png" /> Subcouncil 16<br />\
    <img src="styles/legend/Subcouncils_2_13.png" /> Subcouncil 15<br />\
    <img src="styles/legend/Subcouncils_2_14.png" /> Subcouncil 14<br />\
    <img src="styles/legend/Subcouncils_2_15.png" /> Subcouncil 13<br />\
    <img src="styles/legend/Subcouncils_2_16.png" /> Subcouncil 12<br />\
    <img src="styles/legend/Subcouncils_2_17.png" /> Subcouncil 11<br />\
    <img src="styles/legend/Subcouncils_2_18.png" /> Subcouncil 10<br />\
    <img src="styles/legend/Subcouncils_2_19.png" /> Subcouncil 1<br />\
    <img src="styles/legend/Subcouncils_2_20.png" /> <br />' });
var format_Wards_3 = new ol.format.GeoJSON();
var features_Wards_3 = format_Wards_3.readFeatures(json_Wards_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_3.addFeatures(features_Wards_3);
var lyr_Wards_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wards_3, 
                style: style_Wards_3,
                popuplayertitle: 'Wards',
                interactive: true,
                title: '<img src="styles/legend/Wards_3.png" /> Wards'
            });

lyr_ESRITopo_0.setVisible(true);lyr_Official_Planning_Suburbs_1.setVisible(true);lyr_Subcouncils_2.setVisible(true);lyr_Wards_3.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_Official_Planning_Suburbs_1,lyr_Subcouncils_2,lyr_Wards_3];
lyr_Official_Planning_Suburbs_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'SL_OFC_SBR': 'SL_OFC_SBR', 'OFC_SBRB_N': 'OFC_SBRB_N', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Subcouncils_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SUB_CNCL_N': 'SUB_CNCL_N', 'SUB_CNCL_1': 'SUB_CNCL_1', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Wards_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD_NAME': 'WARD_NAME', 'WARD_YEAR': 'WARD_YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Official_Planning_Suburbs_1.set('fieldImages', {'OBJECTID': 'Range', 'GlobalID': 'TextEdit', 'SL_OFC_SBR': 'Range', 'OFC_SBRB_N': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Subcouncils_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'SUB_CNCL_N': 'TextEdit', 'SUB_CNCL_1': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Wards_3.set('fieldImages', {'OBJECTID': 'Range', 'WARD_NAME': 'TextEdit', 'WARD_YEAR': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Official_Planning_Suburbs_1.set('fieldLabels', {'OBJECTID': 'no label', 'GlobalID': 'no label', 'SL_OFC_SBR': 'no label', 'OFC_SBRB_N': 'inline label - always visible', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Subcouncils_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SUB_CNCL_N': 'inline label - always visible', 'SUB_CNCL_1': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Wards_3.set('fieldLabels', {'OBJECTID': 'no label', 'WARD_NAME': 'inline label - always visible', 'WARD_YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Wards_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});