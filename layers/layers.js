ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2066124.641103, -4030751.502065, 2077252.852808, -4023188.639740]);
var wms_layers = [];


        var lyr_esri_topo_0 = new ol.layer.Tile({
            'title': 'esri_topo',
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

lyr_esri_topo_0.setVisible(true);lyr_Wards_1.setVisible(true);
var layersList = [lyr_esri_topo_0,lyr_Wards_1];
lyr_Wards_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD_NAME': 'WARD_NAME', 'WARD_YEAR': 'WARD_YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Wards_1.set('fieldImages', {'OBJECTID': 'Range', 'WARD_NAME': 'TextEdit', 'WARD_YEAR': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Wards_1.set('fieldLabels', {'OBJECTID': 'no label', 'WARD_NAME': 'inline label - always visible', 'WARD_YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Wards_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});