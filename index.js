function downloadInstaller(fileName, saveAs) {
  if (isMobileDevice()) {
    showToast();
    return;
  }
  // Your actual download logic here, e.g.,
  const link = document.createElement("a");
  link.href = fileName;
  link.download = saveAs || fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.style.visibility = "visible";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
    // Wait for the transition to finish before hiding
    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 500);
  }, 3000); // Visible for 3 seconds
}

function animateSvgArrow() {
  const body = document.getElementById('Body');
  body.classList.add('slide-up');
  localStorage.setItem('pageHidden', 'true');
  const nextSection = document.getElementById("next-page");

  body.classList.add("hidden");

  setTimeout(() => {
    body.style.display = "none";
    nextSection.classList.add("show");
  }, 1000);
}

// On page load check localStorage
// window.addEventListener('load', () => {
// if (localStorage.getItem('pageHidden') === 'true') {
// const body = document.getElementById('Body');
// body.classList.add('slide-up');
// }
// });


window.addEventListener("wheel", (e) => {
  const bodyDiv = document.getElementById("Body");
  if (bodyDiv && !bodyDiv.classList.contains("hidden") && e.deltaY > 5) {
    animateSvgArrow();
  }
});

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


