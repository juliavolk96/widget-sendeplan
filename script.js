function updateDateTime() {
  let datetimeElements = document.getElementsByClassName('datetime');
  for(let i = 0; i < datetimeElements.length; i++) {
    let now = new Date();
    let date = now.toLocaleDateString();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    datetimeElements[i].innerText = `${date} ${hours}:${minutes}`;
  }
}
setInterval(updateDateTime, 1000);