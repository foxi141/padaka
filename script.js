
document.getElementById('submit').onclick = function() {
    var radio = document.querySelector('input[type=radio][name=template]:checked');
    radio.checked = false;
}

const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
	const styleSheet = document.getElementById("style");
	styleSheet.href = radio.value;
  });
});