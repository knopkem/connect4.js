
class RenderManager {
    
    constructor(ctx) {
        this._ctx = ctx;
    } 
    
    public start() {
        this._ctx.fillStyle = "rgb(100, 100, 100)";
        this._ctx.fillRect(10, 10, 400, 400);
    }
    
    private _ctx;
}

function exec() {
    var canv = document.createElement("canvas");
    canv.width = 512;
    canv.height = 512;
    document.body.appendChild(canv);
    var ctx = canv.getContext("2d");
    var renderer = new RenderManager(ctx);
    renderer.start();
}

exec();