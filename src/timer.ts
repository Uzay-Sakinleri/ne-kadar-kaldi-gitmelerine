
const countDate = new Date("2023, 5, 28, 22:00:00").getTime();

// Update the count down every 1 second
const timer = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector<HTMLDivElement>("#timer")!.innerHTML = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye Kaldı`
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector<HTMLDivElement>("demo")!.innerHTML = "20 yıllık bir ızdırap sonunda bitti, hepinize geçmiş olsun.";
  }
}, 1000);
