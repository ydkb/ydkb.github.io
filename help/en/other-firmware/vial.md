# VIA / Vial firmware update
## Necessary instructions

This page provides the Vial firmware for some YDKB keyboards. After updating the firmware, you can use the functions of Vial and modify the keys.

At the same time, this firmware also supports VIA, please refer to the instructions below to import the JSON file into VIA, then VIA can recognize and connect the keyboard.

In order to easily distinguish the firmware version, when the USB is plugged in, the name of the USB device, the firmware that supports VIA / Vial is followed by (VIAL_Dxxx), xxx is the firmware date; and the YDKB is (USB_Dxxx).

Vial's firmware functions, so most of the content in this help document will be invalid. Vial supports many functions, and I am not familiar with all of them. For specific usage, please refer to the relevant help of Vial.

If you encounter a bug, you can contact me in the YDKB QQ group ② "767441859", and I will try to solve it.


## Currently supported keyboards


### 1 Download the VIA / Vial supported firmware and flash it to the keyboard

If your keyboard already supports VIA / Vial firmware (judging from the name of the USB device), if the version is consistent with the table below, you don’t need to update it repeatedly.

The firmware update method in the table below is consistent with ydkb.io. Most use [Mass Storage Device Bootloader](en/bootloader/msd-bootloader.md).

> [!ydda] Note
> - Updating the firmware may cause the previous button configuration to be reset to default. It is recommended to save and back up the button settings to the local before updating the firmware.
> - If it is `Vial`, use <u>File -> Save current layout</u> to save the current key layout locally. After updating, you can use <u>File -> Load saved layout</u> to import the previously saved layout. Note: The web version of vial.rocks does not support saving and importing.
> - If it is `VIA`, use <u>Save Current Layout</u> in <u>SAVE+LOAD</u> to save the current key layout to the local. After updating, you can use the <u>Load saved layout</u> here to import again.

<br>

In order to control the size of the firmware, the functions of some keyboards may be slightly reduced. Some have Tap Dance disabled, and some also have Combos disabled.

To download the JSON file, right-click the corresponding JSON link and select Save As.

| Eevee series??25% | VIA / Vial Firmware | VIA JSON | Supplementary Notes |
| ---- | ---- | ---- | ---- |
| Eevee \#EE60 | [2023-11-30_DNBU](other-firmware/vial/ydkb_eevee_ee60_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_ee60_via.json ':ignore') |  |
| Eevee \#HFKB | [2023-11-30_DNBU](other-firmware/vial/ydkb_eevee_hfkb_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_hfkb_via.json ':ignore') |  |
| Eevee \#40A | [2023-11-30_DNBU](other-firmware/vial/ydkb_eevee_40a_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_40a_via.json ':ignore') |  |
| Eevee \#40B | [2023-11-30_DNBU](other-firmware/vial/ydkb_eevee_40b_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_40b_via.json ':ignore') |  |

| Keyboard??25% | VIA / Vial Firmware | VIA JSON | Supplementary Notes |
| ---- | ---- | ---- | ---- |
| BLE660C/BLE980C | [2023-05-03_DN53](other-firmware/vial/ydkb_ble660c_980c_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_ble660c_980c_via.json ':ignore') | in LAYOUTS to choose 660c or 980c |
| HHKB BLE | [2023-12-08_DNC8](other-firmware/vial/ydkb_hhkb_ble_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_hhkb_ble_via.json ':ignore') | Select US / JP in LAYOUTS |
| Chicory | [2023-04-16_DN4G](other-firmware/vial/ydkb_chicory_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_chicory_via.json ':ignore') | Beta! backlight only supports on or off |
| Duang60 v1 | [2023-01-23_DN1N](other-firmware/vial/ydkb_duang60v1_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_duang60v1_via.json ':ignore') | |
| Duang60 v2 | [2023-08-25_DN8P](other-firmware/vial/ydkb_duang60v2_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_duang60v2_via.json ':ignore') | |
| Just68 v2 | [2023-01-23_DN1N](other-firmware/vial/ydkb_just68v2_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_just68v2_via.json ':ignore') | |
| Louise | [2023-01-23_DN1N](other-firmware/vial/ydkb_louise_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_louise_via.json ':ignore') | |
| Minira v2 | [2023-01-23_DN1N](other-firmware/vial/ydkb_minira_v2_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_minira_v2_via.json ':ignore') | |
| Pearly v1 | [2022-12-23_DMCN](other-firmware/vial/ydkb_pearly_v1_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_pearly_v1_via.json ':ignore') | |
| Pearly v2 | [2022-12-23_DMCN](other-firmware/vial/ydkb_pearly_v2_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_pearly_v2_via.json ':ignore') | |
| Xikii i6x | [2023-09-01_DN91](other-firmware/vial/ydkb_xikii_i6x_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_i6x_via.json ':ignore') | |
| Xikii i8x | [2023-09-01_DN91](other-firmware/vial/ydkb_xikii_i8x_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_i8x_via.json ':ignore') | |
| Xikii i104 | [2023-09-01_DN91](other-firmware/vial/ydkb_xikii_i104_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_i104_via.json ':ignore') | |
| Xikii Sasuke No.01 | [2022-12-22_DMCM](other-firmware/vial/ydkb_xikii_sasuke01_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_sasuke01_via.json ':ignore') | |
| YDPM40BLE | [2022-12-24_DMCO](other-firmware/vial/ydkb_ydpm40ble_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_ydpm40ble_via.json ':ignore') | |

| KBDFans Keyboard??25% | VIA / Vial Firmware | VIA JSON | Supplementary Notes |
| ---- | ---- | ---- | ---- |
| Boop65 | [2023-11-08_DNB8](other-firmware/vial/ydkb_kbdfans_boop65_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_boop65_via.json ':ignore') | |
| KBD8x Mk3 | [2023-11-08_DNB8](other-firmware/vial/ydkb_kbdfans_kbd8xmk3_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_kbd8xmk3_via.json ':ignore') | |
| Kunlun | [2023-07-15_DN7F](other-firmware/vial/ydkb_kunlun_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kunlun_via.json ':ignore') | |
| Mountain | [2023-07-15_DN7F](other-firmware/vial/ydkb_mountain_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_mountain_via.json ':ignore') | |
| Taco(75%) | [2023-11-08_DNB8](other-firmware/vial/ydkb_kbdfans_taco75_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_taco75_via.json ':ignore') | |
| Taco Pad | [2023-11-08_DNB8](other-firmware/vial/ydkb_kbdfans_tacopad_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_tacopad_via.json ':ignore') | |
| YD67BLE (KBD67 lite) | [2023-07-15_DN7F](other-firmware/vial/ydkb_yd67ble_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_yd67ble_via.json ':ignore') | |


For 40% keyboards, it is recommended to try the firmware of ydkb.io. I use 40 more, and the ydkb firmware has more small optimizations for the use of 40.

For the update content, please refer to the update record of ydkb firmware. In addition to the difference in core functions (based on the difference between tmk and qmk), such as the update of the matrix buttons of the Bluetooth and the keyboard itself, the version date is the same, and the update content is basically the same.

### 2 Connect Vial

Vial does not require a separate json file, it can be used by connecting to its software.

Vial's local software download can be found at: https://get.vial.today/download/ , and its use can be found in other content of this document.

You can also use the online version https://vial.rocks/ .

### 3 Connect VIA

For local software downloads of VIA, see: https://github.com/the-via/releases/releases

Its use can be found on the official website: https://www.caniusevia.com/

If you use a version higher than VIA 2.0.4, or the online version [https://usevia.app/](https://usevia.app/), please open `Show Design Tab` in `SETTINGS` first, and then It may be necessary to set `Render Mode` to `3D`.

![|700](assets/via-ydkb-21.jpg)

Then in `DESIGN`, according to the display on the page, select `Use V2 definitios(deprecated)` to ensure that it supports V2 json files. Then use `Load` to load the json file to be recognized and loaded normally.

![|700](assets/via-ydkb-22.jpg)

Finally, connect the keyboard. If there is a problem with the display when the `Render Mode` is `2D`, switch to `3D`. Click the icon in the picture below and select keyboard connection.

![|700](assets/via-ydkb-23.jpg)


## Additional instructions

### 1 Bluetooth function button
Several function setting buttons of Bluetooth, when setting in Vial / VIA, use several buttons in User / CUSTOM to control.

In addition to setting the buttons yourself, the following four main Bluetooth functions have corresponding <kbd>LShift+RShift+xx</kbd> shortcut keys.

![|700](assets/vial-ydkb-ble51.jpg)
![|700](assets/via-ydkb-ble51.jpg)

At present, the Bluetooth function of the firmware on this page has the following differences from the firmware of ydkb.io (there may be changes in the future).

1. Because there is no LEDMAP function, the upper and lower case indicators do not work in Bluetooth mode. But it can still indicate Bluetooth connection status, low battery, etc.
2. It is not supported to use YDKB Tool to modify the Bluetooth name. But you can use the YDKB firmware to modify it first, and then refresh the Vial firmware.
3. Does not support switching between Bluetooth devices, but supports switching between Bluetooth and USB. You can set the switch button, or use <kbd>LShift+RShift+U</kbd>
4. Support Lock Mode, and add the shortcut key of Lock Mode <kbd>LShift+RShift+L</kbd>.

If you encounter problems such as connection when using Bluetooth, you can still solve it according to [BLE Series Troubleshooting Guide](en/ble-series/troubleshooting.md).

### 2 RGB control
The control of RGB is different from that of qmk. Please refer to [rgblight](en/features/rgblight.md) for the instructions of RGB control in some firmwares on this page.

When setting in Vial / VIA, use a few buttons in User / CUSTOM to control.

Among them, the keys to control Mode (mode) / HUE (hue) / SAT (saturation) / LUM (brightness) do not need to be set for both addition and subtraction. You can press and hold <kbd>Shift</kbd> + the corresponding RGB control key to perform the reverse operation. For example, the function of <kbd>Shift</kbd>+<kbd>HUE++</kbd> is <kbd>HUE-</kbd>.

![|700](assets/vial-ydkb-rgb.jpg)
![|700](assets/via-ydkb-rgb.jpg)

If RGB is supported but there is no above button in User / CUSTOM. Then use the corresponding key control of VIA / Vial.

### 3 monochrome backlight
Use the VIA / Vial's backlit control buttons. However, due to the large size of the compiled firmware, many keyboards do not support the breathing mode of the backlight, but only support brightness adjustment.

### 4 Macro Macro
It is currently not supported to directly set macros such as {KC_XXX} in VIA. If you want to use complex consecutive keystroke macros, use the Vial setting. After setting, you can also choose to use it in VIA, but some garbled characters are displayed in VIA.