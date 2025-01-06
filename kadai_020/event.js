const outputBtn = document.getElementById('btn');
const textClick = document.getElementById('text');

outputBtn.addEventListener('click', () => {
  textClick.innerHTML = 'ボタンをクリックしました';
});