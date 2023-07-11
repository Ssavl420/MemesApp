export class View {
   constructor({ onNewMem, onNewText }) {
      this.memSelectNode = document.querySelector('#memesList');
      this.textTopNode = document.querySelector('#textTop');
      this.textBottomNode = document.querySelector('#textBottom');
      this.memPicture = document.querySelector('#memPic');

      this.memTextTop = document.querySelector('#memTextTop')
      this.memTextBottom = document.querySelector('#memTextBottom')

      this.memSelectNode.addEventListener('change', this._handleSelect);
      this.textTopNode.addEventListener('input', this._handleInput);
      this.textBottomNode.addEventListener('input', this._handleInput);
      this.errorNode = document.querySelector('#errorNode');
      this.onNewMem = onNewMem;
      this.onNewText = onNewText;
   }

   renderOptionsOfSelect(memArr) {
      // console.log('view.renderOptionsOfSelect');

      memArr.forEach(element => {
         this.memSelectNode.innerHTML +=
         `<option>${element.name}</option>`
      });
   }

   renderPicture = (url) => {
      // console.log('view.renderPicture');
      // this.memPicture.style.width = '100%'
      // this.memPicture.style.height = '100%'
      this.memPicture.setAttribute('src', `${url}`)
   }

   renderText = (text, isError) => {
      // console.log('view.renderText')

      if (isError) {
         this.errorNode.style.display = 'block';
         this.errorNode.innerHTML = 'Ошибка ВВОДА <br> Не более 30 символов';}
      if (!isError) {
         this.errorNode.style.display = 'none'}

      this.memTextTop.innerHTML = text.textTop;
      this.memTextBottom.innerHTML = text.textBottom;
   }

   _handleSelect = () => {
      // console.log('view._handleSelect')

      const nameMem = this.memSelectNode.value;
      this.onNewMem(nameMem)
   }

   _handleInput = () => {
      // console.log('view._handleInput')

      const textTop = this.textTopNode.value;
      const textBottom = this.textBottomNode.value;

      this.onNewText(textTop, textBottom);
   }


   _clearValue() {
      // console.log('view._clearValue')

      this.textTopNode.value = '';
      this.textBottomNode.value = '';
   }
}