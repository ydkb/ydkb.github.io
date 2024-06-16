# Other firmware updates

In addition to the ydkb.io firmware, some keyboards also offer other firmware options.

Other firmware may differ from the ydkb.io firmware in the features they support, and some of the feature descriptions in this document for ydkb.io will not be valid.

I am not familiar with all the firmware and I am only responsible for providing it. So please do your own research or check out the help on the corresponding firmware website for some specific usage.

To make it easier to distinguish the firmware version, the USB device name is different when plugging in the USB.

- The firmware for YDKB is KBD_NAME (USB_Dxxx)
- The firmware supporting VIA / Vial is KBD_NAME (VIAL_Dxxx)

where Dxxx represents the firmware date.

> [!ydda] Note
> - When updating firmware for VIA or Vial, it may cause the previous key configuration to be reset to the default.
> - It is recommended to save the key settings before the firmware update. Then you can import them later.

## View current firmware version

Device <u> as the name of the USB keyboard when connected</u> mostly contains the date of the current firmware, see the end of this post for instructions on counting the date.

### 1 Connect the keyboard to the computer with a wired connection

> [!ydda] Important
  - Only in USB Mode its corresponding USB device name could be displayed.


### 2 Checking the USB device name of a wired keyboard
The way to view this name may differ on different systems.

```ad-yddcol0
##### Windows

In <u>Start Menu - Settings - Devices</u> (not Device Manager), check its USB keyboard name (not the Bluetooth connection name).

![win10](../assets/firmware_01.jpg)
```

```ad-yddcol1
##### Mac

In <u>About this machine - System reports - USB</u>, as shown below

![mac](../assets/firmware_mac_02.jpg)
```


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