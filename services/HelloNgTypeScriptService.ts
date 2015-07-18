module helloApp {
    export class HelloNgTypeScriptService {
        constructor() {
            console.log (' Hello Ng TypeScript Service');
        }
        
        public getHelloMessage() : string {
            return "Hello, ng TypeScript";
        }
    }
}