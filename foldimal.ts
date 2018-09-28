/**
 * Control of the Foldio animal.
 */
//% Id=device_no_blockID block="my block"  icon="\uF006" color=#e59920 weight=97
    namespace foldio {


    /**
     * event handler for touching the ears of the foldio animal
     *
     * @param value current value to plot
     * @param high maximum value. If 0, maximum value adjusted automatically, eg: 0
     */
    //% help=led/plot-bar-graph weight=20
    //% block
    //% 
    //blockExternalInputs=true
    //% parts="ledmatrix"
     export function useless (a:number , b : number) : void {
            
            a = used(a,b);
            basic.showString(a.toString());
    }


 /**
     * event handler for touching the ears of the foldio animal
     *
     * @param value current value to plot
     * @param high maximum value. If 0, maximum value adjusted automatically, eg: 0
     */
    //% help=led/plot-bar-graph weight=20
    //% blockId=device_foldio block="useless block" 
    //blockExternalInputs=true
    //% parts="ledmatrix"
   export function used (a :number , b : number) : number  {
        return a/b

    }

    /**
     * event handler for touching the ears of the foldio animal
     *
     * @param value current value to plot
     * @param high maximum value. If 0, maximum value adjusted automatically, eg: 0
     */
    //% blockId=device_foldio block="On Left Ear touch" 
    //blockExternalInputs=false
     //% parts="ledmatrix"
    export function onLeftEar(body: Action): void {
        input.onEarPressed(TouchPin.P0,body)
    }


}
