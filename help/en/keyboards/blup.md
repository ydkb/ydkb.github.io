# BLUP / BLE40

<table_w30x70>

|Author |YANG |
|:--- |:--- |
|Case |Xikii|
|MCU|Atmel32u4|

</table_w30x70>


## BLUP's hardware infomation

|COL|0|1|2|3|4|5|6|7|8|9|10|11|
|---|||||||||||||
|PIN|B4|B5|B6|C6|C7|E2|F0|F6|F5|F4|F1|E6|

|ROW|0|1|2|3|
|---|||||
|PIN|F7|D7|B2|B3|

|WS2812 Data|WS2812 Power|Bluetooth Power|IS31FL3737 SDB|
|---||||
|D1|B7|D5|D4|


## BLE40's hardware infomation

|COL|0|1|2|3|4|5|6|7|8|9|10|
|---||||||||||||
|PIN|D6|D7|B4|B5|B6|C6|C7|E2|F7|F6|F5|

|ROW|0|1|2|3|
|---|||||
|PIN|F4|F1|F0|E6|

|WS2812 Data|WS2812 Power|Bluetooth Power|IS31FL3737 SDB|
|---||||
|B3|B1|D5|D4|



## Pictures

![](/assets/blup-01.jpg?660)

## Bluetooth pairing

For Bluetooth pairing, please refer to [BLE dual mode use] (/en/ble-series)

Simply put, you do not need to enable the pairing mode separately, as long as the Bluetooth is not connected and discoverable, you can pair. Mac and ios can't be found. There are also ways to deal with it in the above document. In addition, there are ways to deal with connection errors.

Every time the keyboard is started (such as turning off the switch and reopening, or reinserting the USB data cable), the two axis lights in the upper left corner will first flash blue quickly, indicating that the Bluetooth is not connected. Once the Bluetooth is connected, they will turn green Slow flashing, after flashing two or three times, it will go out automatically. When using the keyboard normally, you can also press **LShift+RShift+S** to check the Bluetooth connection status. The indication method is the same as the previous one.


## How to flash firmware
See [BootHID Bootloader](/en/bootloader/boothid)

The same reflashh method is used to modify the keymap and update the firmware. The HEX file downloaded after setting the buttons on the website already contains the latest firmware on the website and the keymap you set.