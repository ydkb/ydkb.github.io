# Default command keys
This is TMK's Magic Commands function (some keyboards do not have this feature enabled). Here is a list of all the default command keys supported by YDKB.

All references in the text to pressing <key>LShift+RShift+XX</key> or <key>LShift+RShift+LCtrl+XX</key> refer to holding down the left Shift and right Shift(maybe and left Ctrl) first and press XX key once. You can then release the left and right shifts. Only press one command at a time. To press another command, you need to release the left and right Shift keys, and then press the left and right Shift keys again.

!!> ATTENTION
  - <key>LShift+RShift+Key</key> is for preset functions. When you don’t know what that command means, don’t press them. Random pressing may cause configuration errors.


## Default command keys for BLE Series

The following is only supported by the BLE series.


| Keys??30% | Command Description |
| ---- | ---- |
| <kbd>LShift+RShift+W</kbd> | Bluetooth function ON |
| <kbd>LShift+RShift+LCtrl+W</kbd> | Bluetooth function OFF |
| <kbd>LShift+RShift+R</kbd> | Delete bonding information，for firmware before KAD<sup>1</sup> |
| <kbd>LShift+RShift+LCtrl+R</kbd> | Delete bonding information，for firmware after KAD<sup>1</sup> |
| <kbd>LShift+RShift+U</kbd> | Switch between bluetooth and USB mode |
| <kbd>LShift+RShift+I</kbd> | Set bluetooth to be discoverable |
| <kbd>LShift+RShift+O</kbd> | Set bluetooth to be not discoverable |
| <kbd>LShift+RShift+P</kbd> | Toggle bluetooth power save mode on/off |
| <kbd>LShift+RShift+S</kbd> | display bluetooth connection status |
| <kbd>LShift+RShift+V</kbd> | Output battery level in text<sup>2</sup> |
| <kbd>LShift+RShift+B</kbd> | Restart keyboard |

<sup>1</sup> A small number of people occasionally press <kbd>LShift+RShift+R</kbd> by mistake when using it, causing the keyboard pairing to be cleared. At this time, the computer (especially Mac) may show that it is connected, but The buttons cannot be used. Therefore, for the updated firmware after KAD (2020-10-13), you need to hold down <kbd>LShift+RShift+LCtrl+R</kbd> at the same time to clear the pairing, and after the key is successfully pressed, the Bluetooth connection status indicator The light will start to indicate, which can also be regarded as feedback on the successful triggering of this function. (This update is mentioned in other chapters and will be added later.)<br>
<sup>2</sup> Unlike the text output power selected from **Lights and Enhanced Functions**, most keyboards are in the newer firmware, <kbd>LShift+RShift+V</kbd> This set of shortcut keys output is XX -Y, this format. For example, 50-1, the front XX represents power, the back Y is 0 or 1, representing the Bluetooth connection status of the keyboard itself (0 not connected, 1 connected).


## Default command keys for all

The following is only supported by all YDKB keyboard that has this feature enabled.

| Keys??30% | Command Description |
| ---- | ---- |
| <kbd>LShift+RShift+F10,F1...F7</kbd> | Set default layer to 0...7 (removed in the firmware after 2020.7) |
| <kbd>LShift+RShift+0 ... 7</kbd> | Set default layer to 0...7 (removed in the firmware after 2020.7) |
| <kbd>LShift+RShift+N</kbd> | Toolge NKRO/6KRO in USB Mode<sup>1</sup> |
| <kbd>LShift+RShift+Pause</kbd> | Restart keyboard or enter flash mode<sup>2</sup> |

<sup>1</sup> The 6KRO means that except for the 8 modifier keys (left and right Ctrl, Shift, Alt, and Win), pressing any 6 keys at the same time will not conflict.<br>
<sup>2</sup> Enter flash mode is only for keyboard with atmel dfu bootloader.

There are some other commands that are unimportant or for debug, which will not be listed for now.
