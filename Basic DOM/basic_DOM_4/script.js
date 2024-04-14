const form = document.querySelector('.form-container');
const priceCalc = () => {
    const typeSelect = document.querySelector('#type');
    const checkAllBoxes = document.querySelectorAll('input[type="checkbox"]');
    const priceBanner = document.querySelector('#totalPrice');

    let totalAmount = parseInt(typeSelect.value);

    for (const item of checkAllBoxes) {
        if (item.checked) {

            totalAmount += parseInt(item.value);
        }
    }
    priceBanner.textContent = `$${totalAmount}`;

    console.log(totalAmount);
};
form.addEventListener('change', priceCalc);