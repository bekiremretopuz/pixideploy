export interface ApplicationOptions {
    autoStart?: boolean;
    width?: number;
    height?: number;
    view?: HTMLCanvasElement;
    transparent?: boolean;
    autoDensity?: boolean;
    antialias?: boolean;
    preserveDrawingBuffer?: boolean;
    resolution?: number;
    backgroundColor?: number;
    clearBeforeRender?: boolean;
    forceFXAA?: boolean;
    powerPreference?: string;
    resizeTo?: Window | HTMLElement;
}

export class DisplayManager extends PIXI.utils.EventEmitter {
    private _app: PIXI.Application;
    
    constructor(options: ApplicationOptions) {
        super(); 
        this._app = new PIXI.Application(options); 
        document.body.appendChild(this._app.view);  
        this._app.ticker.add(this.update.bind(this));
    } 
    private update() {
        this._app.renderer.render(this._app.stage);
    }
}