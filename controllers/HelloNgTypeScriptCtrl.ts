module helloApp {
    'use strict'; 

    export class HelloNgTypeScriptCtrl {
        message: string
        
        static $inject = ['helloNgTypeScriptService'];
        
        constructor(helloNgTypeScriptService : HelloNgTypeScriptService) {
            console.log ('test Controller..');
            this.message = helloNgTypeScriptService.getHelloMessage();
        }
    }
}