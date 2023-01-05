# Mass Storage Device Bootloader (like disk drive)

It is based on lufa msd bottloader. 

Note: The USB disk drive mode here refers to the keyboard itself becoming a disk drive, not means that you need an additional USB disk to reflash the keyboard's firmware.

Many keyboards supported by ydkb.io use this method. The advantage of this method is that firmware refresh and reading can be completed without additional software.

> [!yddh] HINT:
> - There are two files, "keyboard_name.BIN" and "EEPROM.BIN", in the disk drive of flash mode. They are "virtual" files that are mapped to the contents of the FLASH and EEPROM of the keyboard controller.
> - Each time when re-entering the flash mode, their date is the same. Do not use the file date to determine whether the reflash is successful.


## Handling of reflash errors

Put this one first. 

If you reflash the wrong firmware or did not reflash successfully, you can no longer enter the flash mode, especially the wireless keyboard with battery. You need to turn off the keyboard's power switch, and re-enter the flash mode, reflash the correct firmware.


## Reflash firmware in Windows

The methods for different keyboards are basically the same. Generally, three step:

  1. press and hold the top left key or some other designated key (see the guide and info displayed on the corresponding keyboard of ydkb.io for details). Insert the USB cable to enter the flash mode.When the OS shows the drive disk, you can release the key. 
  2. Drag the firmware bin file(not case sensitive and the name need to be the same) to the disk drive to overwrite the original file.
  3. Eject the disk from OS or press ESC key to exit flash mode.(Some keyboards will automatically exit flash mode.)


## Reflash firmware in Mac

> [!ydda] IMPORTANT:
> - The method of operating directly from the Finder may not be suitable for macOS 13 Ventura(error code 100093), temporarily switch to the following command line method.
> - The reason may be that macOS 13 currently has some compatibility issues with various MassStorage Bootloaders. https://github.com/ARMmbed/DAPLink/issues/982
> - 2022.12.16 After updating macOS 13.1, although the operation in Finder no longer reports an error, but the file is not completely written, please still use the command line to refresh the firmware.

##### macOS 13 Ventura can use the following methods(Also works on macOS 12)

> [!yddh] Reminder:
> - As of 2022.12.16, macOS 13.1 supports command-line way to correctly reflash the firmware.
> - If there is a new system update, this part of description will be updated.

For example, the downloaded file is HHKB_BLE.BIN, which is placed in the Downloads directory.

After connecting to the display flash disk, first execute the following command in the terminal, where HHKB_BLE is the name of the flash disk.

```macOS
diskutil umount /Volumes/HHKB_BLE
```

The result obtained after execution is `Volume HHKB_BLE on disk4 unmounted`, remember that this is `disk4`, and then execute the following command, note that the disk4 in this article corresponds to the result obtained by the previous command.

```macOS
sudo dd if=./HHKB_BLE.BIN of=/dev/disk4 seek=4
```
The `./HHKB_BLE.BIN` above is the relative path used because I run the command in the Download directory. You can also use the absolute path as follows, instead of typing it manually, after the command reaches `if=`, directly drag the BIN file to the terminal command window, and it will automatically obtain the absolute path of the BIN file.

```macOS
sudo dd if=/Users/yang/Dowloads/HHKB_BLE.BIN of=/dev/disk4 seek=4
```

After waiting for the command to complete, the reflash is successful. The newer Bootloader will automatically exit the flashing mode, and some need to exit manually. The whole operation process is shown in the figure below.

![|600](assets/msd-bootloader-mac13-01.jpg)

##### macOS 12 Flash firmware using Finder actions

> [!ydda] Important:
> - The following method via Finder is only available for macOS 12. For macOS 13, use the command line 

The method of entering the flash mode is the same as above, but the method of copying file to disk is different.

```ad-yddcol0
1. First delete the "keyboard_name.bin" file in the USB disk drive.

![](assets/msd-bootloader-mac01.png)

2. Delete it in the trash again (this step is very important for Mac).

![](assets/msd-bootloader-mac02.png)
```

```ad-yddcol1
3. Keep the newly downloaded bin with the same file name as the previously deleted bin file, and then copy it to the disk drive.

![](assets/msd-bootloader-mac03.png)

4. After the file copying is completed, right-click to eject the USB disk drive or press Esc to exit.

5. Some of the newer bootloaders will automatically exit after the file is copied. At this time, it is normal for the Mac to prompt that it has not exited correctly.

> [!yddh] HINT：
> - If after the deletion in the Trash there is still insufficient space, exit the flash mode and re-enter the flash mode, and then operate from step 1 again.
```


## Reflash firmware in Linux

> [!yddh] HINT:
> - The following aspects are provided by netizen tb600211 686294 and I've tested it under Ubuntu 20.04.
> - Not guaranteed to be available on all Linux distributions. If not, when you need to flash the firmware, use windows to flash it.

1. The keyboard enters the flash mode, and the firmware is downloaded.
2. Use the following command to write the firmware, pay attention to the of=/dev/sdb, your system may be different, in my example it is the second disk of my computer, so it is sdb. `./HHKB_BLE.BIN` is a relative path, you can also use the absolute path of the BIN file.<br>
```linux
sudo dd if=./HHKB_BLE.BIN of=/dev/sdb seek=4
```
3. One more command is to be added.
```linux
sync
````


The content displayed during execution is as shown in the figure below.

![|600](assets/msd-bootloader-linux01.png)

The `/dev/sdb` above can be viewed with the `lsblk` command.

![|600](assets/msd-bootloader-linux02.jpg)


## If the keyboard repeatedly enters the flash mode

If this problem occurs, it is probably because the downloaded bin file is incorrect. You can open a bin file with a txt file editor and see if the content is empty. Or use a hexadecimal viewer to see if the front of the file is all FFFF.

The solution is to refresh the page (use Shift+F5) several times and re-download the firmware. And then reflash with the new correct firmware file.


## If the bin file cannot be overwritten

For windows, if you directly overwrite the bin and it says there is not enough space, open the explorer to display hidden files to see if this USB disk contains other files besides keyboard_name.bin and eeprom.bin. If the computer itself has virus and write some files to the disk, it will takes up space and make it impossible to write the new bin file.


