ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1963235.485022, -4098390.163655, 2166953.395350, -3932893.988921]);
var wms_layers = [];


      var lyr_ESRITopo_0 = new ol.layer.Tile({
    'title': 'ESRI Topo',
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
    source: jsonSource_Official_Planning_Suburbs_1,
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
    source: jsonSource_Wards_2,
    style: style_Wards_2,
    popuplayertitle: 'Wards',
    interactive: true,
    title: '<img src="styles/legend/Wards_2.png" /> Wards'
});
var format_Sub_councils_3 = new ol.format.GeoJSON();
var features_Sub_councils_3 = format_Sub_councils_3.readFeatures(json_Sub_councils_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sub_councils_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sub_councils_3.addFeatures(features_Sub_councils_3);

var lyr_Sub_councils_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sub_councils_3,
    style: style_Sub_councils_3,
    popuplayertitle: 'Sub_councils',
    interactive: true,
    title: 'Subcouncils <details><summary>Show 20 subcouncils</summary>\
    <img src="styles/legend/Sub_councils_3_0.png" /> Subcouncil 1<br />\
    <img src="styles/legend/Sub_councils_3_1.png" /> Subcouncil 2<br />\
    <img src="styles/legend/Sub_councils_3_2.png" /> Subcouncil 3<br />\
    <img src="styles/legend/Sub_councils_3_3.png" /> Subcouncil 4<br />\
    <img src="styles/legend/Sub_councils_3_4.png" /> Subcouncil 5<br />\
    <img src="styles/legend/Sub_councils_3_5.png" /> Subcouncil 6<br />\
    <img src="styles/legend/Sub_councils_3_6.png" /> Subcouncil 7<br />\
    <img src="styles/legend/Sub_councils_3_7.png" /> Subcouncil 8<br />\
    <img src="styles/legend/Sub_councils_3_8.png" /> Subcouncil 9<br />\
    <img src="styles/legend/Sub_councils_3_9.png" /> Subcouncil 10<br />\
    <img src="styles/legend/Sub_councils_3_10.png" /> Subcouncil 11<br />\
    <img src="styles/legend/Sub_councils_3_11.png" /> Subcouncil 12<br />\
    <img src="styles/legend/Sub_councils_3_12.png" /> Subcouncil 13<br />\
    <img src="styles/legend/Sub_councils_3_13.png" /> Subcouncil 14<br />\
    <img src="styles/legend/Sub_councils_3_14.png" /> Subcouncil 15<br />\
    <img src="styles/legend/Sub_councils_3_15.png" /> Subcouncil 16<br />\
    <img src="styles/legend/Sub_councils_3_16.png" /> Subcouncil 17<br />\
    <img src="styles/legend/Sub_councils_3_17.png" /> Subcouncil 18<br />\
    <img src="styles/legend/Sub_councils_3_18.png" /> Subcouncil 19<br />\
    <img src="styles/legend/Sub_councils_3_19.png" /> Subcouncil 20<br />\
    </details>'
});

var format_RIM_DST_4 = new ol.format.GeoJSON();
var features_RIM_DST_4 = format_RIM_DST_4.readFeatures(json_RIM_DST_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIM_DST_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIM_DST_4.addFeatures(features_RIM_DST_4);
var lyr_RIM_DST_4 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RIM_DST_4,
    style: style_RIM_DST_4,
    popuplayertitle: 'RIM_DST',
    interactive: true,
    title: 'RIM_DST<br />\
    <img src="styles/legend/RIM_DST_4_0.png" /> District 1<br />\
    <img src="styles/legend/RIM_DST_4_1.png" /> District 2<br />\
    <img src="styles/legend/RIM_DST_4_2.png" /> District 3<br />\
    <img src="styles/legend/RIM_DST_4_3.png" /> District 4<br />\
    <img src="styles/legend/RIM_DST_4_4.png" /> District 5<br />\
    <img src="styles/legend/RIM_DST_4_5.png" /> District 6<br />\
    <img src="styles/legend/RIM_DST_4_6.png" /> District 7<br />\
    <img src="styles/legend/RIM_DST_4_7.png" /> District 8<br />\
    <img src="styles/legend/RIM_DST_4_8.png" /> <br />'
});
var format_Regions_5 = new ol.format.GeoJSON();
var features_Regions_5 = format_Regions_5.readFeatures(json_Regions_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_5.addFeatures(features_Regions_5);
var lyr_Regions_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_5, 
                style: style_Regions_5,
                popuplayertitle: 'Regions',
                interactive: true,
                title: '<img src="styles/legend/Regions_5.png" /> Regions'
            });

lyr_ESRITopo_0.setVisible(true);lyr_Official_Planning_Suburbs_1.setVisible(true);lyr_Wards_2.setVisible(true);lyr_Sub_councils_3.setVisible(true);lyr_RIM_DST_4.setVisible(true);lyr_Regions_5.setVisible(true);
var layersList = [
  lyr_ESRITopo_0,                    // Bottom: ESRI Topo
    lyr_Sub_councils_3,
    lyr_RIM_DST_4,
    lyr_Official_Planning_Suburbs_1,
    lyr_Wards_2,
    lyr_Regions_5                       // Top: Regions
];
lyr_Official_Planning_Suburbs_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'SL_OFC_SBR': 'SL_OFC_SBR', 'OFC_SBRB_N': 'OFC_SBRB_N', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Wards_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD_NAME': 'WARD_NAME', 'WARD_YEAR': 'WARD_YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Sub_councils_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUB_CNCL_N': 'SUB_CNCL_N', 'SUB_CNCL_1': 'SUB_CNCL_1', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RIM_DST_4.set('fieldAliases', {'RIM_Type': 'RIM_Type', });
lyr_Regions_5.set('fieldAliases', {'GIS_KEY': 'GIS_KEY', 'SAP_KEY': 'SAP_KEY', 'DSTR_NMBR': 'DSTR_NMBR', 'DSTR_NAME': 'DSTR_NAME', 'MNGR1_NAME': 'MNGR1_NAME', 'MNGR1_PHN': 'MNGR1_PHN', 'MNGR1_CELL': 'MNGR1_CELL', 'MNGR2_NAME': 'MNGR2_NAME', 'MNGR2_PHN': 'MNGR2_PHN', 'MNGR2_CELL': 'MNGR2_CELL', 'GIS_TECH_N': 'GIS_TECH_N', 'GIS_TECH_P': 'GIS_TECH_P', 'CMNT': 'CMNT', 'TEMP_ID1': 'TEMP_ID1', 'TEMP_ID2': 'TEMP_ID2', 'DPT_CODE': 'DPT_CODE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'GlobalID': 'GlobalID', });
lyr_Official_Planning_Suburbs_1.set('fieldImages', {'OBJECTID': 'Range', 'GlobalID': 'TextEdit', 'SL_OFC_SBR': 'Range', 'OFC_SBRB_N': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Wards_2.set('fieldImages', {'OBJECTID': 'Range', 'WARD_NAME': 'TextEdit', 'WARD_YEAR': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Sub_councils_3.set('fieldImages', {'OBJECTID': 'Range', 'SUB_CNCL_N': 'TextEdit', 'SUB_CNCL_1': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RIM_DST_4.set('fieldImages', {'RIM_Type': 'TextEdit', });
lyr_Regions_5.set('fieldImages', {'GIS_KEY': 'TextEdit', 'SAP_KEY': 'TextEdit', 'DSTR_NMBR': 'TextEdit', 'DSTR_NAME': 'TextEdit', 'MNGR1_NAME': 'TextEdit', 'MNGR1_PHN': 'TextEdit', 'MNGR1_CELL': 'TextEdit', 'MNGR2_NAME': 'TextEdit', 'MNGR2_PHN': 'TextEdit', 'MNGR2_CELL': 'TextEdit', 'GIS_TECH_N': 'TextEdit', 'GIS_TECH_P': 'TextEdit', 'CMNT': 'TextEdit', 'TEMP_ID1': 'TextEdit', 'TEMP_ID2': 'TextEdit', 'DPT_CODE': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'GlobalID': 'TextEdit', });
lyr_Official_Planning_Suburbs_1.set('fieldLabels', {'OBJECTID': 'no label', 'GlobalID': 'no label', 'SL_OFC_SBR': 'no label', 'OFC_SBRB_N': 'inline label - always visible', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Wards_2.set('fieldLabels', {'OBJECTID': 'no label', 'WARD_NAME': 'inline label - always visible', 'WARD_YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Sub_councils_3.set('fieldLabels', {'OBJECTID': 'no label', 'SUB_CNCL_N': 'inline label - always visible', 'SUB_CNCL_1': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RIM_DST_4.set('fieldLabels', {'RIM_Type': 'inline label - always visible', });
lyr_Regions_5.set('fieldLabels', {'GIS_KEY': 'no label', 'SAP_KEY': 'no label', 'DSTR_NMBR': 'no label', 'DSTR_NAME': 'inline label - always visible', 'MNGR1_NAME': 'no label', 'MNGR1_PHN': 'no label', 'MNGR1_CELL': 'no label', 'MNGR2_NAME': 'no label', 'MNGR2_PHN': 'no label', 'MNGR2_CELL': 'no label', 'GIS_TECH_N': 'no label', 'GIS_TECH_P': 'no label', 'CMNT': 'no label', 'TEMP_ID1': 'no label', 'TEMP_ID2': 'no label', 'DPT_CODE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'GlobalID': 'no label', });
lyr_Regions_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
