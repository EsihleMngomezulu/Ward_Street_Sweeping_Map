ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2017711.309206, -4047559.195701, 2119570.264369, -3964811.108334]);
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
var format_Wards_1 = new ol.format.GeoJSON();
var features_Wards_1 = format_Wards_1.readFeatures(json_Wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_1.addFeatures(features_Wards_1);
var lyr_Wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wards_1, 
                style: style_Wards_1,
                popuplayertitle: 'Wards',
                interactive: true,
                title: '<img src="styles/legend/Wards_1.png" /> Wards'
            });
var format_Regions_2 = new ol.format.GeoJSON();
var features_Regions_2 = format_Regions_2.readFeatures(json_Regions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_2.addFeatures(features_Regions_2);
var lyr_Regions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_2, 
                style: style_Regions_2,
                popuplayertitle: 'Regions',
                interactive: true,
                title: '<img src="styles/legend/Regions_2.png" /> Regions'
            });
var format_RIM_DST_3 = new ol.format.GeoJSON();
var features_RIM_DST_3 = format_RIM_DST_3.readFeatures(json_RIM_DST_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIM_DST_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIM_DST_3.addFeatures(features_RIM_DST_3);
var lyr_RIM_DST_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIM_DST_3, 
                style: style_RIM_DST_3,
                popuplayertitle: 'RIM_DST',
                interactive: true,
    title: 'RIM_DST<br />\
    <img src="styles/legend/RIM_DST_3_0.png" /> District 1<br />\
    <img src="styles/legend/RIM_DST_3_1.png" /> District 2<br />\
    <img src="styles/legend/RIM_DST_3_2.png" /> District 3<br />\
    <img src="styles/legend/RIM_DST_3_3.png" /> District 4<br />\
    <img src="styles/legend/RIM_DST_3_4.png" /> District 5<br />\
    <img src="styles/legend/RIM_DST_3_5.png" /> District 6<br />\
    <img src="styles/legend/RIM_DST_3_6.png" /> District 7<br />\
    <img src="styles/legend/RIM_DST_3_7.png" /> District 8<br />\
    <img src="styles/legend/RIM_DST_3_8.png" /> <br />' });

lyr_ESRITopo_0.setVisible(true);lyr_Wards_1.setVisible(true);lyr_Regions_2.setVisible(true);lyr_RIM_DST_3.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_Wards_1,lyr_Regions_2,lyr_RIM_DST_3];
lyr_Wards_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD_NAME': 'WARD_NAME', 'WARD_YEAR': 'WARD_YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Regions_2.set('fieldAliases', {'GIS_KEY': 'GIS_KEY', 'SAP_KEY': 'SAP_KEY', 'DSTR_NMBR': 'DSTR_NMBR', 'DSTR_NAME': 'DSTR_NAME', 'MNGR1_NAME': 'MNGR1_NAME', 'MNGR1_PHN': 'MNGR1_PHN', 'MNGR1_CELL': 'MNGR1_CELL', 'MNGR2_NAME': 'MNGR2_NAME', 'MNGR2_PHN': 'MNGR2_PHN', 'MNGR2_CELL': 'MNGR2_CELL', 'GIS_TECH_N': 'GIS_TECH_N', 'GIS_TECH_P': 'GIS_TECH_P', 'CMNT': 'CMNT', 'TEMP_ID1': 'TEMP_ID1', 'TEMP_ID2': 'TEMP_ID2', 'DPT_CODE': 'DPT_CODE', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'GlobalID': 'GlobalID', });
lyr_RIM_DST_3.set('fieldAliases', {'RIM_Type': 'RIM_Type', });
lyr_Wards_1.set('fieldImages', {'OBJECTID': 'Range', 'WARD_NAME': 'TextEdit', 'WARD_YEAR': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Regions_2.set('fieldImages', {'GIS_KEY': 'TextEdit', 'SAP_KEY': 'TextEdit', 'DSTR_NMBR': 'TextEdit', 'DSTR_NAME': 'TextEdit', 'MNGR1_NAME': 'TextEdit', 'MNGR1_PHN': 'TextEdit', 'MNGR1_CELL': 'TextEdit', 'MNGR2_NAME': 'TextEdit', 'MNGR2_PHN': 'TextEdit', 'MNGR2_CELL': 'TextEdit', 'GIS_TECH_N': 'TextEdit', 'GIS_TECH_P': 'TextEdit', 'CMNT': 'TextEdit', 'TEMP_ID1': 'TextEdit', 'TEMP_ID2': 'TextEdit', 'DPT_CODE': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'GlobalID': 'TextEdit', });
lyr_RIM_DST_3.set('fieldImages', {'RIM_Type': 'TextEdit', });
lyr_Wards_1.set('fieldLabels', {'OBJECTID': 'no label', 'WARD_NAME': 'inline label - always visible', 'WARD_YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Regions_2.set('fieldLabels', {'GIS_KEY': 'no label', 'SAP_KEY': 'no label', 'DSTR_NMBR': 'no label', 'DSTR_NAME': 'inline label - always visible', 'MNGR1_NAME': 'no label', 'MNGR1_PHN': 'no label', 'MNGR1_CELL': 'no label', 'MNGR2_NAME': 'no label', 'MNGR2_PHN': 'no label', 'MNGR2_CELL': 'no label', 'GIS_TECH_N': 'no label', 'GIS_TECH_P': 'no label', 'CMNT': 'no label', 'TEMP_ID1': 'no label', 'TEMP_ID2': 'no label', 'DPT_CODE': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'GlobalID': 'no label', });
lyr_RIM_DST_3.set('fieldLabels', {'RIM_Type': 'inline label - always visible', });
lyr_RIM_DST_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});