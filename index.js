function downloadInstaller(fileName) {
  const link = document.createElement('a');
  link.href = fileName;  // URL to your installer
  link.download = 'Rho (0.0.1).exe';  // Suggested file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}