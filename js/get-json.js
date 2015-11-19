// function to get json data
function getJSON(url, success, error) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function(res) {
      status = xhr.status;
      if (status < 400) {
        var data = JSON.parse(xhr.responseText);
        resolve(data);
      } else {
        reject(xhr);
      }
    };
    xhr.onerror = reject;
    xhr.send();
  });
}
