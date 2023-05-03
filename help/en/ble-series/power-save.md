# Power Save & Lock Mode

## Automatic Power Saving

For daily use, let the keyboard automatically manage power saving. Its working mode is as follows:
  1. After the keyboard is idle for 3 seconds without pressing any key, it enters the general power saving mode. At this mode, the matrix is scanned every 30ms. If there is any key pressed, it exits the general power saving mode.
  2. If the keyboard's bluetooth is not connected for 90 seconds, or it is idle for more than 2.5 hours, it will turn off bluetooth and enter the deep power saving mode. Press any key to wake it up.
  3. Using Lock Mode will directly make the keyboard enter deep power saving mode. The difference from 2 is that by this way, you can press and hold only F and J together to wake it up.

The power consumption of the deep power saving mode is very low. For daily use you don't need to turn the power switch off, just leave the keybaord to let itselt enter power saving mode. If you want take it away in a bag, it is recommended to make it enter Lock Mode to prevent unexpectedly wake up.

For some keyboards like HHKB BLE / BLE660C / BLE980C, pressing and holding for a few seconds is needed to wake up the keyboard.


## Manually Toggle

You can use the shortcut key <kbd>LShift+RShift+P</kbd> to manually switch the general power saving mode. Press where you can type, it will also output a number 0 or 1, 0 means power saving is off, 1 means on. 

Every time the keyboard restarts or resumes from the deep power saving mode, the general power saving mode is turned on by default.

There is a change that the firmware after 2023.5.3 only restores from the deep power saving (including Lock Mode), and still maintains the current setting state.

In order to prevent the battery from draining, the deep power saving will not be turned off here. That is, after 90 seconds of no connection, it will still enter the deep power saving mode.


## Lock Mode

In the **LEDs and Functions**, you can find the following button.

<html><button style=" text-align: center; line-height: 19px; width: 46px; height: 42px; font-size:12px">Lock<br>Mode</button></html>

Set it to your keymap. After pressing this key, the keyboard immediately turns off Bluetooth and enters the deep power-saving mode. by only pressing F and J at the same time, or re-plugging the USB cable, or turning the power on and off again can wake the keyboard up. It is desinged for putting in the bag without turning off the switch.

Note: The F and J referred to here refer to the positions of F and J in the default settings. They are fixed and cannot be changed at present.

For some keyboards like HHKB BLE / BLE660C / BLE980C, pressing and holding F and J for a few seconds is needed to wake up the keyboard.