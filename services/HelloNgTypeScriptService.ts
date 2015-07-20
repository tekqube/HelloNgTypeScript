module helloApp {
    'use strict';

    export class HelloNgTypeScriptService {
        message:string

        constructor() {
            this.message = "Hello, ng TypeScript";
        }
        
        public getHelloMessage() : string {
            return this.message;
        }
    }
}