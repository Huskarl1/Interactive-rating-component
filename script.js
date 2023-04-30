
  const wrapper = document.querySelector('.wrapper');
  const selectionScreen = document.querySelector('.selectionScreen');
  const resultScreen = document.querySelector('.resultScreen');
  const submitBtn = document.getElementById('submitBtn');
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll('button:not(.submitButton):not(.rateBtn)');
  const rateAgain = document.getElementById("rate-again");
  
  submitBtn.addEventListener("click",() =>{
    selectionScreen.style.display = "none";
    resultScreen.classList.remove("hidden");
  });

  // rateAgain.addEventListener("click",() =>{
  //   selectionScreen.style.display="block";
  //  resultScreen.classList.add("hidden");
    
  // })


  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Tüm butonların üzerindeki işaretlemeleri kaldır
      buttons.forEach(function(btn) {
        btn.classList.remove("selected");
      });
      // Tıklanan butonu işaretle
      button.classList.add("selected");
      // Seçilen butonun içeriğini yazdır
      result.innerHTML = button.innerHTML;
    });
  });





