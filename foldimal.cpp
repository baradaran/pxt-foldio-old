#include <input>

/**
 * Control of the Foldio animal.
 */
//% Id=device_no_blockID block="my block"  icon="\uF006" color=#e59920 weight=97
namespace foldio {
    /**
     * Do something when a pin is released.
     * @param name the pin that needs to be released, eg: TouchPin.P0
     * @param body the code to run when the pin is released
     */
    //% help=input/on-pin-released weight=6 blockGap=8
    //% blockId=device_ear_touched block="on Ear %NAME|Touched"
   void onEarPressed(TouchPin name, Action body) {
        auto pin = getPin((int)name);
        if (!pin) return;

        // Forces the PIN to switch to makey-makey style detection.
        pin->isTouched();
        registerWithDal((int)name, MICROBIT_BUTTON_EVT_CLICK, body);
    }

}