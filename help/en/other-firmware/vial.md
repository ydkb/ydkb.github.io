# VIA / Vial firmware update
## Necessary instructions

This page provides the Vial firmware for some YDKB keyboards. After updating the firmware, you can use the functions of Vial and modify the keys.

At the same time, this firmware also supports VIA, please refer to the instructions below to import the JSON file into VIA, then VIA can recognize and connect the keyboard.

In order to easily distinguish the firmware version, when the USB is plugged in, the name of the USB device, the firmware that supports VIA / Vial is followed by (VIAL_Dxxx), xxx is the firmware date; and the YDKB is (USB_Dxxx).

For the firmware functions of Vial, please refer to the relevant documents of Vial and qmk. Some detailed functions are different from the firmware of ydkb.io.
. Vial supports many functions, and I am not familiar with all of them. For specific usage, please refer to the relevant help of Vial.

If you encounter a bug, you can contact me in the YDKB QQ group ② "767441859", and I will try to solve it.

If you need source code, you can visit: https://github.com/yangdigi/vial-qmk/tree/vial/keyboards/ydkb/

## Currently supported keyboards


### 1 Download the VIA / Vial supported firmware and flash it to the keyboard

If your keyboard already supports VIA / Vial firmware (judging from the name of the USB device), if the version is consistent with the table below, you don’t need to update it repeatedly.

The firmware update method in the table below is consistent with ydkb.io. Most use [Mass Storage Device Bootloader](en/bootloader/msd-bootloader.md).

> [!ydda] Note
> - Updating the firmware may cause the previous button configuration to be reset to default. It is recommended to save and back up the button settings to the local before updating the firmware.
> - If it is `Vial`, use <u>File -> Save current layout</u> to save the current key layout locally. After updating, you can use <u>File -> Load saved layout</u> to import the previously saved layout. Note: The web version of vial.rocks does not support saving and importing.
> - If it is `VIA`, use <u>Save Current Layout</u> in <u>SAVE+LOAD</u> to save the current key layout to the local. After updating, you can use the <u>Load saved layout</u> here to import again.

<br>

To download the JSON file, right-click the corresponding JSON link and select Save As.

| Eevee series??25% | VIA / Vial Firmware | VIA JSON | Supplementary Notes |
| ------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------- | ---- |
| Eevee \#EE60 | [2024-06-22_DO6M](other-firmware/vial/ydkb_eevee_ee60_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_ee60_via.json ':ignore') |      |
| Eevee \#HFKB | [2024-06-22_DO6M](other-firmware/vial/ydkb_eevee_hfkb_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_hfkb_via.json ':ignore') |      |
| Eevee \#40A  | [2024-06-22_DO6M](other-firmware/vial/ydkb_eevee_40a_vial.zip ':ignore')  | [JSON](other-firmware/vial/ydkb_eevee_40a_via.json ':ignore')  |      |
| Eevee \#40B  | [2024-06-22_DO6M](other-firmware/vial/ydkb_eevee_40b_vial.zip ':ignore')  | [JSON](other-firmware/vial/ydkb_eevee_40b_via.json ':ignore')  |      |

| Keyboard??25% | VIA / Vial Firmware | VIA JSON | Supplementary Notes |
| ------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------- |
| BLE660C/BLE980C    | [2024-05-30_DO5U](other-firmware/vial/ydkb_ble660c_980c_vial.zip ':ignore')   | [JSON](other-firmware/vial/ydkb_ble660c_980c_via.json ':ignore') | in LAYOUTS to choose 660c or 980c |
| HHKB BLE           | [2024-06-14_DO6E](other-firmware/vial/ydkb_hhkb_ble_vial.zip ':ignore')       | [JSON](other-firmware/vial/ydkb_hhkb_ble_via.json ':ignore') | Select US / JP in LAYOUTS |
| Chicory            | [2024-07-16_DO7G](other-firmware/vial/ydkb_chicory_vial.zip ':ignore')        | [JSON](other-firmware/vial/ydkb_chicory_via.json ':ignore')        |                     |
| Duang60 v1         | [2024-06-10_DO6A](other-firmware/vial/ydkb_duang60v1_vial.zip ':ignore')      | [JSON](other-firmware/vial/ydkb_duang60v1_via.json ':ignore')      |                     |
| Duang60 v2         | [2024-06-06_DO66](other-firmware/vial/ydkb_duang60v2_vial.zip ':ignore')      | [JSON](other-firmware/vial/ydkb_duang60v2_via.json ':ignore')      |                     |
| Just68 v2          | [2024-06-10_DO6A](other-firmware/vial/ydkb_just68v2_vial.zip ':ignore')       | [JSON](other-firmware/vial/ydkb_just68v2_via.json ':ignore')       |                     |
| Louise             | [2024-06-10_DO6A ](other-firmware/vial/ydkb_louise_vial.zip ':ignore')        | [JSON](other-firmware/vial/ydkb_louise_via.json ':ignore')         |                     |
| Minira v2          | [2024-06-10_DO6A](other-firmware/vial/ydkb_minira_v2_vial.zip ':ignore')      | [JSON](other-firmware/vial/ydkb_minira_v2_via.json ':ignore')      |                     |
| Pearly v1          | [2024-06-09_DO69](other-firmware/vial/ydkb_pearly_v1_vial.zip ':ignore')      | [JSON](other-firmware/vial/ydkb_pearly_v1_via.json ':ignore')      |                     |
| Pearly v2          | [2024-06-09_DO69](other-firmware/vial/ydkb_pearly_v2_vial.zip ':ignore')      | [JSON](other-firmware/vial/ydkb_pearly_v2_via.json ':ignore')      |                     |
| Xikii i6x          | [2024-06-22_DO6M](other-firmware/vial/ydkb_xikii_i6x_vial.zip ':ignore')      | [JSON](other-firmware/vial/ydkb_xikii_i6x_via.json ':ignore')      |                     |
| Xikii i8x          | [2024-06-22_DO6M](other-firmware/vial/ydkb_xikii_i8x_vial.zip ':ignore')      | [JSON](other-firmware/vial/ydkb_xikii_i8x_via.json ':ignore')      |                     |
| Xikii i104         | [2024-06-22_DO6M](other-firmware/vial/ydkb_xikii_i104_vial.zip ':ignore')     | [JSON](other-firmware/vial/ydkb_xikii_i104_via.json ':ignore')     |                     |
| Xikii Sasuke No.01 | [2022-12-22_DMCM](other-firmware/vial/ydkb_xikii_sasuke01_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_sasuke01_via.json ':ignore') |                     |
| YDPM40BLE          | [2024-06-10_DO6A](other-firmware/vial/ydkb_ydpm40ble_vial.zip ':ignore')      | [JSON](other-firmware/vial/ydkb_ydpm40ble_via.json ':ignore')      |                     |

| KBDFans Keyboard??25% | VIA / Vial Firmware | VIA JSON | Supplementary Notes |
| -------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---- |
| Boop65               | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_boop65_vial.zip ':ignore')          | [JSON](other-firmware/vial/ydkb_kbdfans_boop65_via.json ':ignore')          |      |
| Dusk67               | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_dusk67_vial.zip ':ignore')          | [JSON](other-firmware/vial/ydkb_kbdfans_dusk67_via.json ':ignore')          |      |
| Eden v2              | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_eden_v2_vial.zip ':ignore')         | [JSON](other-firmware/vial/ydkb_kbdfans_eden_v2_via.json ':ignore')         |      |
| KBD8x Mk3            | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_kbd8xmk3_vial.zip ':ignore')        | [JSON](other-firmware/vial/ydkb_kbdfans_kbd8xmk3_via.json ':ignore')        |      |
| KBD8x Mk3 OG         | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_kbd8xmk3_og_vial.zip ':ignore')     | [JSON](other-firmware/vial/ydkb_kbdfans_kbd8xmk3_og_via.json ':ignore')     |      |
| Kunlun               | [2023-07-15_DN7F](other-firmware/vial/ydkb_kunlun_vial.zip ':ignore')                  | [JSON](other-firmware/vial/ydkb_kunlun_via.json ':ignore')                  |      |
| Mountain             | [2023-07-15_DN7F](other-firmware/vial/ydkb_mountain_vial.zip ':ignore')                | [JSON](other-firmware/vial/ydkb_mountain_via.json ':ignore')                |      |
| PAVLOV               | [2024-06-23_DO6N](other-firmware/vial/ydkb_jolteon_pavlov_vial.zip ':ignore')          | [JSON](other-firmware/vial/ydkb_jolteon_pavlov_via.json ':ignore')          |      |
| Redux60RGB ANSI      | [2024-07-28_DO7S](other-firmware/vial/ydkb_kbdfans_redux60rgb_ansi_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_redux60rgb_ansi_via.json ':ignore') |      |
| Taco(75%)            | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_taco75_vial.zip ':ignore')          | [JSON](other-firmware/vial/ydkb_kbdfans_taco75_via.json ':ignore')          |      |
| Taco Pad             | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_tacopad_vial.zip ':ignore')         | [JSON](other-firmware/vial/ydkb_kbdfans_tacopad_via.json ':ignore')         |      |
| Tofu-fa              | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_tofufa_vial.zip ':ignore')          | [JSON](other-firmware/vial/ydkb_kbdfans_tofufa_via.json ':ignore')          |      |
| Uni88                | [2024-07-27_DO7R](other-firmware/vial/ydkb_kbdfans_uni88_vial.zip ':ignore')          | [JSON](other-firmware/vial/ydkb_kbdfans_uni88_via.json ':ignore')          |      |
| YD67BLE (KBD67 lite) | [2024-06-22_DO6M](other-firmware/vial/ydkb_yd67ble_vial.zip ':ignore')                 | [JSON](other-firmware/vial/ydkb_yd67ble_via.json ':ignore')                 |      |

> [!ydda] Note for Linux users
> - Due to some permission issues, the online version of the general browser cannot be directly connected to the keyboard.
> - I personally recommend that Linux users download the local version of VIA or Vial and run it.

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

| Key | Function | The default shortcut comand keys |
| -------------- | --------------- | -------------------------- |
| BT/USB | Switch USB or Bluetooth connection | <kbd>LShift+RShift+U</kbd> |
| BLERST/RESET | is used to reset the Bluetooth | <kbd>LShift+RShift+B</kbd> |
| BAT% | Text output remaining battery | <kbd>LShift+RShift+V</kbd> |
| LkMode | enters the Lock Mode. | <kbd>LShift+RShift+L</kbd> |

At present, the Bluetooth function of the firmware on this page has the following differences from the firmware of ydkb.io (there may be changes in the future).

1. Because there is no LEDMAP function, the upper and lower case indicators do not work in Bluetooth mode. But it can still indicate Bluetooth connection status, low battery, etc.
2. It is not supported to use YDKB Tool to modify the Bluetooth name. But you can use the YDKB firmware to modify it first, and then refresh the Vial firmware.
3. Does not support switching between Bluetooth devices, but supports switching between Bluetooth and USB.

If you encounter problems such as connection when using Bluetooth, you can still solve it according to [BLE Series Troubleshooting Guide](en/ble-series/troubleshooting.md).

### 2 RGB control
The control of RGB is different from that of qmk. Please refer to [rgblight](en/features/rgblight.md) for the instructions of RGB control in some firmwares on this page.

When setting in Vial / VIA, use a few buttons in User / CUSTOM to control.

> [!ydda] If there is no button as shown below in User / CUSTOM
> - Some keyboards do not have RGB control keys in User / CUSTOM, but use VIA / Vial's own key controls.

Among them, the keys to control Mode (mode) / HUE (hue) / SAT (saturation) / LUM (brightness) do not need to be set for both addition and subtraction. You can press and hold <kbd>Shift</kbd> + the corresponding RGB control key to perform the reverse operation. For example, the function of <kbd>Shift</kbd>+<kbd>HUE++</kbd> is <kbd>HUE-</kbd>.

![|700](assets/vial-ydkb-rgb.jpg)
![|700](assets/via-ydkb-rgb.jpg)

If RGB is supported but there is no above button in User / CUSTOM. Then use the corresponding key control of VIA / Vial.

### 3 monochrome backlight
Use the VIA / Vial's backlit control buttons. However, due to the large size of the compiled firmware, many keyboards do not support the breathing mode of the backlight, but only support brightness adjustment.

### 4 Macro Macro
It is currently not supported to directly set macros such as {KC_XXX} in VIA. If you want to use complex consecutive keystroke macros, use the Vial setting. After setting, you can also choose to use it in VIA, but some garbled characters are displayed in VIA.