/**
 * Functions for the Seeedstudio Grove Relay.
 *
 * @author MagicMarvMan
 */


//% weight=2 color=#1174EE block="Grove Relay"
//% parts="grove_relay"
namespace grove_relay {

    //% weight=210
    //% blockId=grove_relay_on block="Relay on"
    //% blockExternalInputs=1
    //% parts="grove_relay"
    export function relay_on(): void {
      pins.digitalWritePin(DigitalPin.C16, 1)
    }
    
    //% weight=210
    //% blockId=grove_relay_off block="Relay off"
    //% blockExternalInputs=1
    //% parts="grove_relay"
    export function relay_off(): void {
      pins.digitalWritePin(DigitalPin.C16, 0)
    }
}
