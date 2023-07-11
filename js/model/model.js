export class Model {
   constructor({ onMemChanged, onSelectInit, onTextChanged }) {
      this.namesOfMem = [];
      this.text = {};
      this.isError = false;
      this.onMemChanged = onMemChanged;
      this.onSelectInit = onSelectInit;
      this.onTextChanged = onTextChanged;
   }

   searchMem(nameMem) {
      // console.log('model.searchMem')
      
      const arr = this.namesOfMem;
      let url = null;

      arr.data.memes.forEach(element => {
         if (element.name === nameMem) {
            url = element.url; 
         }
         return url;
      });

      this.onMemChanged(url)
   }

   createText(textTop, textBottom) {
      // console.log('model.createText')

      this.isError = false;
      
      if (this._isTextValid(textTop, textBottom)) {

         this.text = ({
            textTop,
            textBottom,
         });
      } else {
         console.error('Error')
         this.isError = true;
      }

      this.onTextChanged(this.text, this.isError);
   }

   createMemArr(namesOfMem) {
      // console.log('model.createMemArr')

      this.namesOfMem = namesOfMem;
      const memArr = []
      namesOfMem.data.memes.forEach(element => {
         const name = element.name;
         memArr.push({
            name
         })
      });

      this.onSelectInit(memArr, this.isError);
   }

   _isTextValid(textTop, textBottom) {
      // console.log('model._isTextValid')

      return textTop.length <= 30 && textBottom.length <= 30; 
   }
}
