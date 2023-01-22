# Reset BLE

This operation is to reset the configuration of Bluetooth to the default, and then initialize it by the keyboard firmware. Bluetooth can be properly reset and re-initialized, and it can generally be assumed that the Bluetooth hardware is fine.

## When Reset BLE is needed

When you follow the steps to [BLE Troubleshooting](en/ble-series/troubleshooting) , you can know when you need to reset.

Brief summary: When the text output battery level is 44 or 45, you need to do Reset BLE. Or when connection exceptions cannot be resolved by other methods.

> [!yddh] Suggestion
> - There are not many cases of Bluetooth configuration errors. Once errors occur, you can recall what the latest operation was.
> - If there is a way to stably reproduce the error situation, please contact me. Then there is a way to improve it in the firmware.


## key command reset method

Please update the firmware first, it is better after 2023. Use <kbd>Reset</kbd> in the enhanced function, if it is not set, you need to set it to the keyboard first.

![](assets/reset-ble-01.jpg)

Then confirm that the current power output is not 12-0 or 120-0, that is, confirm that the Bluetooth function is not turned off.

Then use the key <kbd>LAlt+LWin+Reset</kbd> or <kbd>LOpt+LCmd+Reset</kbd> to reset Bluetooth. The keyboard will restart.

1. If the bluetooth name is first changed back to Adafruit Bluefruit LE, then it is automatically initialized to the keyboard name. The keyboard performed a hardware reset with this command. 
2. If the bluetooth name changes back to Adafruit Bluefruit LE and then stays the same, a software reset was performed. Restart the keyboard with <kbd>LShift+RShift+B</kbd> and it will reinitialize to the keyboard name. 
3. Finally, use <kbd>LShift+RShift+V</kbd> to see <u>the output battery value  text is not 44 or 45 which means the reset is successful. </u>

> [!yddh] reminder
> - The modifier keys to be pressed must all be left. 
> - Generally <kbd>Reset</kbd> will not be set to Layer 0, so you may press more than 3 physical keys.

If the keyboard supports hardware reset (not in the unsupported list), but this method fails to reset successfully, it may be a hardware problem.

If hardware reset is not supported, you can also use the following `circuit short reset method` to try.

> [!yddl] Keyboards that do not support hardware reset by default (mostly released before 2020)
> - 1800mini
> - Master98 Pro
> - Sairo64
> - X-8086K
> - BLE40
> - BLUP
> - CAD66
> - Chicory
> - Fmini
> - Just60
> - Just68
> - Just66 v1.2/1.4
> - Just660
> - Just68 v1
> - Minira v1
> - YD60BLE
> - YDP50
> - YDPM40BLE 1.0
> - HHKB_BLEv2.3/4
> - BLE660C v1/2.0
> - BLE980C v2.0
> - BLE980M

> [!yddl] Some of above, support hardware reset on newer hardware versions
> - Just66 v1.6
> - HHKB BLE v2.5
> - BLE660C v2.2
> - BLE980C v2.2

## Line short reset method

> [!yddh] HINT
> - As long as the Bluetooth module can be powered, this method would at least restore its name to default..
> - If the reset is still not successful, one is to confirm that the Bluetooth function is not turned off; the other is to replace the shorting tool. Some wires have insulating varnish on the surface, which is not conductive, or they touch the adjacent feet too much.

This requires disassembling the keyboard and shorting the pins on the Bluetooth module with a wire. 

### 1 Turn off the battery switch on the keyboard 

The battery is no longer used during the whole process, it is better to be able to unplug the battery (this is not a necessary operation). This is to ensure that only the USB is powered when the keyboard is plugged in, and there is no power when the USB is unplugged.

### 2 delete the paired device on the computer. 

If this keyboard is paired on the computer, delete it. Delete it to be able to search for this keyboard later, and then observe the Bluetooth name.

### 3 Short the Reset Pins on the module

Short the pin Factory Reset and the pin GND as shown below. While keeping them shorted, plug in the USB cable. After a few seconds, the Bluetooth name should revert to Adafruit Bluefruit LE from the Bluetooth searching interface. At this time, you don’t need to keep the shorting. Unplug the USB cable and plug it in again. The name will change back to the default Bluetooth keyboard name. Reset is complete.

![](assets/reset-ble-07.jpg)

Added: some of the keyboard next to the Bluetooth module left two holes, and there is text marked with  <b><u>BLE Reset</u></b>, you can also direct the two short holes. Note not <b><u>Reset</u></b>.

There are also a small number of keyboards with more than one switch, and the short circuit of the Bluetooth hardware reset can also be realized directly by the switch itself.

| Keyboard  | Method of resetting Bluetooth with switch |
| --- | --- |
| Just660 | The DIP switch on the back, 3 and 4 are turned on at the same time, which is equivalent to the short circuit of hardware reset. |
| BLE980M | The DIP switch on the back, 3 and 4 are turned on at the same time, which is equivalent to the short circuit of hardware reset. |

### 4 Restart the keyboard again

After successful reset, it is recommended to unplug the cable and plug it in again, and then connect to Bluetooth.


## Hardware reset patch for older models

Even if the keyboard does not support key command hardware reset by default, it can be supported by adding a patch. Add a 10K resistor between the two pins of the Bluetooth module. The size of the resistor on the picture is 1206.

```ad-yddcol0
##### The earliest YD60BLE

![](assets/reset-ble-patch-01.jpg)
```

```ad-yddcol1
##### HHKB BLE v2.4

![](assets/reset-ble-patch-02.jpg)
```

> [!ydda] Note
> - This patch is not a non-essential operation, and it will not affect the use without it.
> - Soldering this resistor is a more delicate job, much more difficult than soldering the shaft. It is not worth the loss if you solder the legs on the side of the module without soldering.
> - When the old model is repaired, you can ask the store to add this for you.

