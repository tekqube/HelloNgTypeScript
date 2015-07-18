var HelloNgTypeScriptService = (function () {
    function HelloNgTypeScriptService() {
        console.log(' Hello Ng TypeScript Service');
    }
    HelloNgTypeScriptService.prototype.injection = function () {
        return [
            HelloNgTypeScriptService
        ];
    };
    HelloNgTypeScriptService.prototype.getHelloMessage = function () {
        return "Hello, ng TypeScript";
    };
    return HelloNgTypeScriptService;
})();
exports.HelloNgTypeScriptService = HelloNgTypeScriptService;
