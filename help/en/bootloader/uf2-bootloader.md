# UF2 Bootloader (like disk drive)

For more details：https://github.com/mmoskal/uf2-stm32f103

Here are the main advantages of UF2 Bootloader:

  1. no need for any third-party driver or reflashing software.
  2. The firmware can be Identified by the keyboard. Only the firmware for the current keyboard will be reflashed.
  3. You can read your keymap from the current firmware from the USB disk of the bootloader.


| The keyboards with UF2 bootloader |||
| ---- |||
| Simpo40 | Simpo68| STM60||||

Note: STM60 sold before 2019.3.8 used STM32 HID Bootloader.


## Reflash method

The method of reflashing firmware is the same under Windows and Mac.

  - press and hold the top left key or some other designated key (see the guide and info displayed on the corresponding keyboard of ydkb.io for details). Insert the USB cable to enter the flash mode.When the OS shows the drive disk, you can release the key.
  - Drag the firmware uf2 file(no matter what the file name is.) to the disk drive.
  - It will automatically start reflashing process. And the keyboard will restart after reflash is complete.

If you don’t want to re-plug the USB cable to enter bootloader when you are using the keyboard. You can press **LShift+RShift+B** of the keyboard at the same time, then the keyboard will restart and at the same time immediately hold down Esc. This can also enter bootloader to reflash firmware.


## If it dose not exit the bootloader after dragging in the UF2 file

That's because the UF2 file dragged in may have some problem or it is not for the current keyboard. Check it and drag the correct UF2 file.


## If the keyboard is not recognized after reflash.

If the keyboard still enters bootloader after reflash, the wrong firmware may be flashed. Please check and reflash the correct firmware.

If it is displayed as unrecognized hardware, the wrong firmware may be flashed. At this time, re-enter the bootloader, and reflash the correct firmware.
