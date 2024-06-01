ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([58.728616, 8.084829, 95.823016, 33.258240]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BaseMapGrey_1 = new ol.layer.Tile({
            'title': 'Base Map (Grey)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_sugarcane_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "sugarcane",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/sugarcane_3.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [58.832378, -19.249563, 142.998708, 43.750185]
                            })
                        });
var format_Sugarcane_4 = new ol.format.GeoJSON();
var features_Sugarcane_4 = format_Sugarcane_4.readFeatures(json_Sugarcane_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sugarcane_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sugarcane_4.addFeatures(features_Sugarcane_4);
var lyr_Sugarcane_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sugarcane_4, 
                style: style_Sugarcane_4,
                popuplayertitle: "Sugarcane ",
                interactive: true,
    title: 'Sugarcane <br />\
    <img src="styles/legend/Sugarcane_4_0.png" /> 10 - 75 kTons<br />\
    <img src="styles/legend/Sugarcane_4_1.png" /> 75 - 80 kTons<br />\
    <img src="styles/legend/Sugarcane_4_2.png" /> 80 - 100 kTons<br />\
    <img src="styles/legend/Sugarcane_4_3.png" /> 100 - 125 kTons<br />\
    <img src="styles/legend/Sugarcane_4_4.png" /> 125 - 150 kTons<br />\
    <img src="styles/legend/Sugarcane_4_5.png" /> 150 - 300 kTons<br />\
    <img src="styles/legend/Sugarcane_4_6.png" /> 300 - 500 kTons<br />\
    <img src="styles/legend/Sugarcane_4_7.png" /> > 500 kTons<br />'
        });
var format_IndiaBoundary_5 = new ol.format.GeoJSON();
var features_IndiaBoundary_5 = format_IndiaBoundary_5.readFeatures(json_IndiaBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaBoundary_5.addFeatures(features_IndiaBoundary_5);
var lyr_IndiaBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndiaBoundary_5, 
                style: style_IndiaBoundary_5,
                popuplayertitle: "India Boundary",
                interactive: false,
                    title: '<img src="styles/legend/IndiaBoundary_5.png" /> India Boundary'
                });
var format_PaperMills_6 = new ol.format.GeoJSON();
var features_PaperMills_6 = format_PaperMills_6.readFeatures(json_PaperMills_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMills_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMills_6.addFeatures(features_PaperMills_6);
var lyr_PaperMills_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMills_6, 
                style: style_PaperMills_6,
                popuplayertitle: "Paper Mills",
                interactive: true,
                    title: '<img src="styles/legend/PaperMills_6.png" /> Paper Mills'
                });
var format_PaperMillssugarcaneTOP20_7 = new ol.format.GeoJSON();
var features_PaperMillssugarcaneTOP20_7 = format_PaperMillssugarcaneTOP20_7.readFeatures(json_PaperMillssugarcaneTOP20_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PaperMillssugarcaneTOP20_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaperMillssugarcaneTOP20_7.addFeatures(features_PaperMillssugarcaneTOP20_7);
var lyr_PaperMillssugarcaneTOP20_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaperMillssugarcaneTOP20_7, 
                style: style_PaperMillssugarcaneTOP20_7,
                popuplayertitle: "Paper Mills sugarcane TOP 20",
                interactive: true,
    title: 'Paper Mills sugarcane TOP 20<br />\
    <img src="styles/legend/PaperMillssugarcaneTOP20_7_0.png" /> 101231 - 155423 kTons<br />\
    <img src="styles/legend/PaperMillssugarcaneTOP20_7_1.png" /> 155423 - 184938 kTons<br />\
    <img src="styles/legend/PaperMillssugarcaneTOP20_7_2.png" /> 184938 - 202601 kTons<br />'
        });
var group_PaperMills = new ol.layer.Group({
                                layers: [lyr_PaperMills_6,lyr_PaperMillssugarcaneTOP20_7,],
                                fold: "open",
                                title: "Paper Mills"});
var group_Feedstock = new ol.layer.Group({
                                layers: [lyr_sugarcane_3,lyr_Sugarcane_4,],
                                fold: "open",
                                title: "Feedstock"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_ESRIPhysical_0,lyr_BaseMapGrey_1,lyr_GoogleSatellite_2,],
                                fold: "open",
                                title: "Base map "});

lyr_ESRIPhysical_0.setVisible(true);lyr_BaseMapGrey_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_sugarcane_3.setVisible(true);lyr_Sugarcane_4.setVisible(true);lyr_IndiaBoundary_5.setVisible(true);lyr_PaperMills_6.setVisible(true);lyr_PaperMillssugarcaneTOP20_7.setVisible(true);
var layersList = [group_Basemap,group_Feedstock,lyr_IndiaBoundary_5,group_PaperMills];
lyr_Sugarcane_4.set('fieldAliases', {'Sugarcane': 'Sugarcane', });
lyr_IndiaBoundary_5.set('fieldAliases', {'fid_1': 'fid_1', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', });
lyr_PaperMills_6.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'Sugarcane': 'Sugarcane', });
lyr_PaperMillssugarcaneTOP20_7.set('fieldAliases', {'Site Code': 'Site Code', 'Company Na': 'Company Na', 'Site Name': 'Site Name', 'Site City': 'Site City', 'Site State': 'Site State', 'Site Count': 'Site Count', 'My Site In': 'My Site In', 'My Site _1': 'My Site _1', 'Sugarcane': 'Sugarcane', 'N° TOP 20': 'N° TOP 20', });
lyr_Sugarcane_4.set('fieldImages', {'Sugarcane': 'TextEdit', });
lyr_IndiaBoundary_5.set('fieldImages', {'fid_1': 'TextEdit', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_PaperMills_6.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'Sugarcane': 'TextEdit', });
lyr_PaperMillssugarcaneTOP20_7.set('fieldImages', {'Site Code': 'TextEdit', 'Company Na': 'TextEdit', 'Site Name': 'TextEdit', 'Site City': 'TextEdit', 'Site State': 'TextEdit', 'Site Count': 'TextEdit', 'My Site In': 'TextEdit', 'My Site _1': 'TextEdit', 'Sugarcane': 'TextEdit', 'N° TOP 20': 'TextEdit', });
lyr_Sugarcane_4.set('fieldLabels', {'Sugarcane': 'inline label - always visible', });
lyr_IndiaBoundary_5.set('fieldLabels', {'fid_1': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', });
lyr_PaperMills_6.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'Sugarcane': 'inline label - always visible', });
lyr_PaperMillssugarcaneTOP20_7.set('fieldLabels', {'Site Code': 'inline label - always visible', 'Company Na': 'inline label - always visible', 'Site Name': 'inline label - always visible', 'Site City': 'inline label - always visible', 'Site State': 'inline label - always visible', 'Site Count': 'inline label - always visible', 'My Site In': 'hidden field', 'My Site _1': 'hidden field', 'Sugarcane': 'inline label - always visible', 'N° TOP 20': 'inline label - always visible', });
lyr_PaperMillssugarcaneTOP20_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});