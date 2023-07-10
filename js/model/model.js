export class Model {
   constructor({ onMemChanged, onSelectInit, onTextChanged }) {
      this.names = [];
      this.text = {};
      this.isError = false;
      this.onMemChanged = onMemChanged;
      this.onSelectInit = onSelectInit;
      this.onTextChanged = onTextChanged;
   }

   searchMem(nameMem) {
      // console.log('model.searchMem')
      
      const arr = this.names;
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
      
      if (this._isPostValid(textTop, textBottom)) {
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

   // getPosts() {
      // console.log('model.getPosts')

   //    return this.posts;
   // }

   setPosts(names) {
      // console.log('model.setPosts')

      this.names = names;
      const pictureArr = []
      names.data.memes.forEach(element => {
         const name = element.name;
         pictureArr.push({
            name
         })
      });

      this.onSelectInit(pictureArr, this.isError);
   }

   _isPostValid(textTop, textBottom) {
      // console.log('model._isPostValid')

      return textTop.length <= 25 && textBottom.length <= 25; 
   }
}
