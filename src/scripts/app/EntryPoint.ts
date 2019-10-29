import { DisplayManager } from "./Wrapper/DisplayManager";
export class EntryPoint {
    private _displayManager: DisplayManager;
    constructor() {
        this._displayManager = new DisplayManager({ width: 1280, height: 720, resolution: 1 });
    }
}