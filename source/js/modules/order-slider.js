import noUiSlider from 'nouislider';

export function createSlider () {
var slider = document.querySelector('[data-form-slider]');
var sliderValue = document.querySelector('[data-form-percent-value]');
var sliderInput = document.querySelector('[data-order-percent]');
noUiSlider.create(slider, {
    start: 75,
    range: {
        'min': 0,
        'max': 100
    },
    behaviour: 'snap',
})

slider.noUiSlider.on('update', function (values, handle) {
    sliderValue.innerHTML = Math.round(values[handle])+ "%";
    sliderInput.value = sliderValue.innerHTML
});
}