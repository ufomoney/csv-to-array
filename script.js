let selectedFile;
document.getElementById('input').addEventListener('change', event => {
  selectedFile = event.target.files[0];
});

let show = document.getElementById('show');

document.getElementById('btn').addEventListener('click', () => {
  if (selectedFile) {
    let fileReader = new FileReader();
    let div = '';
    fileReader.readAsText(selectedFile);
    fileReader.onload = event => {
      const result = event.target.result.trim().split('\n');
      const newArray = result.map(item => {
        const [wallet, amount] = item.split(',');
        const newAmount = BigInt(amount * 10 ** 18);
        div += `<div>{<span>wallet: "${wallet}"</span>, <span>amount: ${newAmount}</span>},</div>`;

        return { wallet, amount: newAmount };
      });
      const elem = div.slice(0, -7) + '</div>';
      show.insertAdjacentHTML('afterBegin', `[${elem}]`);
      console.log(newArray);
    };
  }
});
