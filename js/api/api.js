export class API {
   constructor() {
      this.baseUrl = 'https://api.imgflip.com';
   }

   fetchMemes() {
      // console.log('api.fetchMemes')
      
      return fetch(`${this.baseUrl}/get_memes`)
         .then(data => {
            if (data.ok !== true) return;
            return data.json();});
   }
}
