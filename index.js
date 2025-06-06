function downloadInstaller(fileName, downloaded) {
  const link = document.createElement('a');
  link.href = fileName;  // URL to your installer
  link.download = downloaded;  // Suggested file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}