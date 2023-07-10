import { Model } from "../model/model.js";
import { View } from "../view/view.js";
import { API } from "../api/api.js";


export class Controller {
   constructor() {
      this.model = new Model({
         onSelectInit:  this.handleModelSelectInit,
         onMemChanged: this.handleModelMemChanged,
         onTextChanged: this.handleModelTextChanged
      });
      this.view = new View({
         onNewText: this.handleViewNewText,
         onNewMem: this.handleViewNewMem
      });

      this.api = new API();
   }

   init() {
      // console.log('controller.init')

      this.api.fetchMemes()
         .then(pictures => {
            if (pictures.success !== true) return;

            this.model.setPosts(pictures)
         })
   }

   handleModelSelectInit = (pictureArr) => {
      // console.log('controller.handleModelSelectInit')

      this.view.renderOptionsOfSelect(pictureArr);
   }

   handleModelMemChanged = (url) => {
      // console.log('controller.handleModelMemChanged')

      this.view.renderPicture(url);
   }

   handleModelTextChanged = (text, isError) => {
      // console.log('controller.handleModelTextChanged')

      this.view.renderText(text, isError);
   }

   handleViewNewMem = (nameMem) => {
      // console.log('controller.handleViewNewMem')

      this.model.searchMem(nameMem);
   }

   handleViewNewText = (textTop, textBottom) => {
      // console.log('controller.handleViewNewText')

      this.model.createText(textTop, textBottom);
   }
}
