# STM32 HID Bootloader

For now, some of the STM60 series use this bootloader, which does not need third-party driver(it uses the system's default HIDUSB driver).

When the firmware works well, generally press and hold the top-left button on the keyboard and meanwhile insert the USB data cable. Then, drag the hex file of the firmware to ydkbs-reflash.exe, and the firmware will automatically start to refresh. The keyboard will restart when the reflash is complete.

There may be some problems during the brushing process. such as:


## After entering the flash mode, an unrecognized device is displayed.

Unplug the USB cable and re-enter the flash mode to ensure it is recognized. And the name displayed in the device after recognition is as follows:

<div style="width: 400px">

![](/assets/stm32_hidbl01.png?400)
</div>


## The device can be recoginzed, but it will not start to reflash the firmware.

If the firmware does not work, refer to the instructions in BootHID, check the driver of the following device. Remember to make the device enter the flash mode first.

<div style="width: 600px">

![](/assets/stm32_hid_bl_01.png?600)
</div>


## After reflashing and re-plugging the USB, the keyboard is not recognized.

As shown in the figure below, after the normal refresh is completed, it will display OK. At this time, if the keyboard is not recognized after re-plugging the USB, you can reflash the firmware once more. It may be that the firmware reflashing is not complete or the firmware itself has a problem.

<div style="width: 600px">

![](/assets/stm32_hidbl03.png?600)
</div>

