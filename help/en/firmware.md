# Firmware update

Every time when downloading the firmware file from ydkb.io, the file include the latest firmware and your keymaps.

Note the time of the Latest Firmware on the page. If it is newer than the one you last reflashed, this keyboard's firmware has been updated. 

To update, upload the your firmware file to read your keymaps and download the firmware from the site. Now it is the lateset and what you need to do is to reflash it to your keyboard.

Changing the keys and updating the firmware are actually the same operation.

Even if the reflash fails, or even the keyboard cannot be recognized, don't worry, as long as you can enter the flash mode again, the keyboard may has no problem.

For the BLE series, if the flashing fails or the firmware is flashed incorrectly, or the USB mode cannot be recognized, you need to turn off the battery switch, then re-enter the flash mode to reflash the correct firmware.


## Get the current firmware version

<u>The USB name of the device</u> mostly contains the date of the current firmware, the format of which is shown at the end of this article.

### 1 Connect the keyboard to the computer by wire.

!!> IMPORTANT:
  - Only in USB Mode its corresponding USB device name could be displayed.

### 2 View the name of the USB device for the wired keyboard

The way to view this name may differ on different systems.

```ad-yddcol0
##### Windows

In <u>Start Menu - Settings - Devices</u> (not Device Manager), check its USB keyboard name (not the Bluetooth connection name).

![win10](assets/firmware_01.jpg)
```

```ad-yddcol1
##### Mac
In <u>About this machine - System reports - USB</u>, as shown below

![mac](assets/firmware_mac_02.jpg)
```

## Changelog 

For keyboard firmware update records, you can select the corresponding keyboard on ydkb.io, click `Latest firmware` and jump to the corresponding link.

![|400](assets/ydkb-latest-firmware.jpg)


## Attachment: three-digit date display method
| Year | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | ... |
| --- ||||||||||||||
| Display | J | K | L | M | N | O | P | Q | R | S | T | U | ... |

| Month | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- |||||||||||||
| Display | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C |

| Day | 1...9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| ---- |||||||||||||
| Display | 1...9 | A  | B  | C  | D  | E  |  F | G  | H  | I  | J  | K |
| Day |  21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 ||
| Display |  L | M | N | O | P | Q | R | S | T | U | V ||