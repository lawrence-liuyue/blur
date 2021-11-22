
import { _decorator, Component, Material, RenderTexture } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RTSetter
 * DateTime = Sat Nov 20 2021 15:31:42 GMT+0800 (中国标准时间)
 * Author = lpfysp
 * FileBasename = RTSetter.ts
 * FileBasenameNoExtension = RTSetter
 * URL = db://assets/scripts/RTSetter.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */

@ccclass('RTSetter')
export class RTSetter extends Component {
    @property(Material)
    material: Material = null!;

    @property(RenderTexture)
    srcRT: RenderTexture = null!;

    @property
    texSlotName = 'mainTexture';

    start () {
        this.material.setProperty(this.texSlotName, this.srcRT);
    }
}