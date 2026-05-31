define([
  "pipAPI",
  "https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.7.3/stiat/qualtrics/qstiat6.js"
], function(APIConstructor, stiatExtension){

  var API = new APIConstructor();

  return stiatExtension({

    category : {
      name  : "Luxury",
      title : {
        media : { word : "Luxury" },
        css   : { "font-size" : "2em" },
        height: 7
      },
      media : [
        { word : "craftsmanship" },
        { word : "unique" },
        { word : "prestige" },
        { word : "premium" },
        { word : "expensive" },
        { word : "sophisticated" }
      ],
      css : { "font-size" : "3em" }
    },

    attribute1 : {
      name  : "Self enhancement",
      title : {
        media : { word : "Self enhancement" },
        css   : { "font-size" : "2em" },
        height: 7
      },
      media : [
        { word : "power" },
        { word : "ambition" },
        { word : "achievement" },
        { word : "dominance" },
        { word : "money" },
        { word : "status" }
      ],
      css : { "font-size" : "3em" }
    },

    attribute2 : {
      name  : "Self transcendence",
      title : {
        media : { word : "Self transcendence" },
        css   : { "font-size" : "2em" },
        height: 7
      },
      media : [
        { word : "benevolence" },
        { word : "equality" },
        { word : "tolerance" },
        { word : "care" },
        { word : "harmony" },
        { word : "fairness" }
      ],
      css : { "font-size" : "3em" }
    }

  });
});
