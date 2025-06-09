function downloadInstaller(fileLink, saveAs) {
  if (isMobileDevice()) {
    showToast();
    return;
  }
  // Your actual download logic here, e.g.,
  window.open(fileLink, "_blank")
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
//   if (localStorage.getItem('pageHidden') === 'true') {
//     const body = document.getElementById('Body');
//     body.classList.add('slide-up');
//   }
//   animateSvgArrow();
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

function openTab(evt, tabId) {
  // Hide all contents
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  
  // Remove active from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  // Show selected tab and set button active
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copy");
  const codeElement = document.getElementById("rho-code");

  if (copyBtn && codeElement) {
    copyBtn.addEventListener("click", function () {
      const codeText = codeElement.textContent;

      navigator.clipboard.writeText(codeText)
        .then(() => {
          alert("Code copied to clipboard!");
        })
        .catch(err => {
          console.error("Failed to copy text: ", err);
        });
    });
  }
});


