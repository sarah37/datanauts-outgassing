// copied from https://github.com/NASADatanauts/JasonsOutgassingDBClient/blob/gh-pages/javascripts/client.js

$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json",
  data: {},
  success: function(data) {
    $("pre").text(JSON.stringify(data, null, "\t"));
  },
  error: function(msg) {
    //todo: handle error gracefully
  }
});