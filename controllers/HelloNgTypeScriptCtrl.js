var HelloNgTypeScriptCtrl = (function () {
    //static $inject = ['helloNgTypeScriptService'];
    function HelloNgTypeScriptCtrl() {
        console.log('test Controller..');
        this.message = "test"; //helloNgTypeScriptService.getHelloMessage();
    }
    HelloNgTypeScriptCtrl.prototype.injection = function () {
        return [
            HelloNgTypeScriptCtrl
        ];
    };
    return HelloNgTypeScriptCtrl;
})();
exports.HelloNgTypeScriptCtrl = HelloNgTypeScriptCtrl;
