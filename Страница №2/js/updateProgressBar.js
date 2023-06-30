function updateProgressBar(progressBar) {
    var value = parseInt(progressBar.dataset.value);
    var maxValue = parseInt(progressBar.dataset.maxValue);
    var progress = (maxValue - value) / maxValue * 100;
    var progressElement = progressBar.getElementsByClassName("progress")[0];
    progressElement.style.width = progress + "%"; 
}
  
  
var progressBars = document.getElementsByClassName("progress-bar");
  
for (var i = 0; i < progressBars.length; i++) {
    var progressBar = progressBars[i];
    updateProgressBar(progressBar);
}
  