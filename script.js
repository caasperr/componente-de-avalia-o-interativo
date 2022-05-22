let selectedScore = 0
let ratingItems = document.querySelectorAll('.ratingNum')
let button = document.querySelector('.submit')
let initialpage = document.querySelector('#container1')
let thankyou = document.querySelector('#container2')
let h4 = document.querySelector('#container2 h4')

ratingItems.forEach((selectedItem) => {
  selectedItem.addEventListener("click", () => {
    ratingItems.forEach((ratingItem) =>
      ratingItem.classList.remove("active")
    );

    selectedScore = selectedItem.innerHTML;
    selectedItem.classList.add("active")
  });
});


button.addEventListener('click', () => {
    if (selectedScore == 0) {
      alert('Select your rating')
    } else {
      h4.innerHTML = `You selected ${selectedScore} out of 5`
      thankyou.classList.remove('hide')
      initialpage.style.display = 'none'
    }
})
