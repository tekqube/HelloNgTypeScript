module helloApp {
    "use strict";
    
    export class HelloNgTypeScriptDirective {
        constructor() {
            return helloApp.HelloNgTypeScriptDirective.addColor();
        }
        
        private static addColor() : any {
            return {
                restrict: 'E',
                template: '<div>Hello Ng TypeScript Directive</div>' 
            }
        }
    }
}