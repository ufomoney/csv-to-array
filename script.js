let selectedFile;
document.getElementById('input').addEventListener('change', event => {
  selectedFile = event.target.files[0];
});

document.getElementById('btn').addEventListener('click', () => {
  if (selectedFile) {
    let fileReader = new FileReader();
    fileReader.readAsText(selectedFile);
    fileReader.onload = event => {
      const result = event.target.result.trim().split('\n');
      const newArray = result.map(item => {
        const [wallet, amount] = item.split(',');
        return { wallet, amount };
      });
      console.log(newArray);
    };
  }
});
