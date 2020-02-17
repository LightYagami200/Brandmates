let yearlyPricing = false;

function togglePricing() {
  const toggleIcon = document.querySelector('#pricing-period-toggle i');
  const pricePeriodTexts = document.querySelectorAll('.price-period');
  const smallTierPricing = document.querySelector('#price-small');
  const growingTierPricing = document.querySelector('#price-growing');

  if (!yearlyPricing) {
    toggleIcon.classList.remove('black');
    toggleIcon.classList.add('blue');
    toggleIcon.textContent = 'toggle_on';
    pricePeriodTexts.forEach(t => (t.textContent = 'per year'));
    smallTierPricing.textContent = '$800';
    growingTierPricing.textContent = '$1150';
  } else {
    toggleIcon.classList.remove('blue');
    toggleIcon.classList.add('black');
    toggleIcon.textContent = 'toggle_off';
    pricePeriodTexts.forEach(t => (t.textContent = 'per month'));
    smallTierPricing.textContent = '$84';
    growingTierPricing.textContent = '$120';
  }

  yearlyPricing = !yearlyPricing;
}
