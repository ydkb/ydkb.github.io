# Keyboards using Bluetooth v2.1 module

Here is how to use the keyboard supported by ydkb using BT2.1 module, including UART2BT Bluetooth module.

This is a very simple module, mainly to transform some existing keyboards. Its function is also very simple. Compared with the BLE series, the main difference is that it does not support battery detection, does not support the modification of Bluetooth name, and does not support mouse buttons and some multimedia keys in Bluetooth mode.

The keyboards using this Bluetooth module are: NS60, YD68.

## UART2BT module

link: Firmware source code for gh60_bt:

https://github.com/yangdigi/tmk_keyboard/tree/master/keyboard/gh60_bt

## Bluetooth pairing

When the keyboard Bluetooth is not connected to any device and the Bluetooth discoverability is not turned off, the Bluetooth is in a searchable and connected state. After the computer or other devices find the keyboard Bluetooth, click it to pair and connect. There is no need to enter a PIN code to connect.

If you want to clear the pairing, for the UART2BT module, you need to short the two holes on `J4 Clear` on the module.

## Multi-device switching

USB and Bluetooth can be connected to different computers, and the keyboard is always in Bluetooth mode when the USB cable is not plugged in. When the keyboard is plugged into USB, it will automatically switch to USB mode. When the keyboard is plugged into the USB cable, you can switch between Bluetooth and USB, you can set a button yourself, or use <kbd>LShift+RShift+U</kbd>.

If multiple Bluetooth devices are paired, active switching between different Bluetooth devices is currently not supported, so to switch from A to B, assuming that A is currently connected, you need to turn off A’s Bluetooth and turn on B’s Bluetooth. This is limited by the fact that the module's own firmware does not support active switching.