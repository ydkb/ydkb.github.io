# Bluetooth Switch & Connection Status

Note: YD60BLE v1.0 did not add the power control. So even if the Bluetooth function is turned off, the Bluetooth is still powered on and can be searched, but the related functions are invalid.


## Bluetooth Function switch

> [!ydda] ATTENTION
> Most people do not need this function. It is designed for those who do not use Bluetooth in some situation. 
> If you need to save battery manually in daily use, please use Lock Mode. 

Some keyboards of YDKB have a physical switch to turn off Bluetooth; some physical switches are only power switches, and after being turned off, the Bluetooth function is still available when the external power supply is plugged in.

Therefore, the Bluetooth switch is introduced, to completely turn off the Bluetooth function.

### 1 Use the Bluetooth function switch

You can set a key to switch Bluetooth, as shown below. You can also use the shortcut key <key>LShift+RShift+W</key>.

![|550](assets/conection_01.png)

- Press the set key or <kbd>LShift+RShift+W</kbd> to turn on the Bluetooth function, and the keyboard will restart. 
- If you keep pressing <kbd>LCtrl</kbd> first, and then press the shortcut key , the Bluetooth function will be turned off, and the keyboard will restart. 
- If the shortcut key outputs the battery value in text or the keyboard will not restart, that keyboard uses  a physical switch to control Bluetooth function.

After turning off Bluetooth function, the Bluetooth part of the keyboard no longer works. At this time, it is also recommended to turn off the battery switch.

### 2 View Bluetooth switch status
There are several ways to do this:
- When you plug in or turn on the power, there is no longer Bluetooth connection status indication.
- When using the keyboard with USB, <key>LShift+RShift+S</key> will not show the connection status.
- Output battery text is 12-0 and will not update. Or 120-0 if controlled by the physical switch.

### 3 Turn on bluetooth function
When the Bluetooth is turned off and the cable is not plugged in, the keyboard does not start normally. At this time, the Bluetooth cannot be turned on again by using the shortcut key. The following methods can be used:
1. Plug in the USB cable to start the keyboard in wired mode, and then use the shortcut key method to turn on the Bluetooth function.
2. Similar to wake up in Lock Mode, press <kbd>F</kbd> and <kbd>J</kbd> at the same time to turn on Bluetooth again when not plugged in.

Method 1 is suitable for all BLE series keyboards, and some keyboards of method 2 are not applicable.


## Bluetooth connection status

When the Bluetooth function is turned on, it will automatically display the Bluetooth connection status at each startup and other power state changes.

From this indication, you can confirm whether the keyboard is started normally and wake up normally.

Different keyboards display Bluetooth connection status in different ways. 

> [!yddh] Bluetooth connection status indicator general rule
> - LED flashes fast when not connected. If there are RGB lights, some RGB lights will flash blue.
> - LED flashes slower after connected. If there are RGB lights, some RGB lights will flash green slower.

While using the keyboard, you can also use <key>LShift+RShift+S</key> to manually check the Bluetooth connection status.

Because of the limited indicator leds, some keyboards that indicate Bluetooth connection status overlap with low-battery indicators. Give priority to low battery, only when the battery is not low, the Bluetooth connection status will be displayed.
