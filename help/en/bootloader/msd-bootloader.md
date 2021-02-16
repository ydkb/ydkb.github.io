# Mass Storage Device Bootloader (like disk drive)

It is based on lufa msd bottloader. 

Note: The USB disk drive mode here refers to the keyboard itself becoming a disk drive, not means that you need an additional USB disk to reflash the keyboard's firmware.

The following keyboards supported by ydkb.io use this flash mode.

| the keyboards with lufa msd bootloader ||||||
| --- |||||| 
|1800mini|Mater98|Sairo64|X-8086K|
|Duang60|Just60|Just66|Just660|Just68|Pearly|
|ESWN|AKB48|Cod67|Filco104c|
|HHKB BLE|BLE660C|
|U2U Pro|UDock|

<html><div class="hint"> 
<subtitle>HINT:</subtitle>
<ul><li>There are two files, "keyboard_name.BIN" and "EEPROM.BIN", in the disk drive of flash mode. They are "virtual" files that are mapped to the contents of the FLASH and EEPROM of the keyboard controller. </li>
<li>Each time when re-entering the flash mode, their date is the same. Do not use the file date to determine whether the reflash is successful.</li></ul>
</div></html>


## Handling of reflash errors

Put this one first. 

If you reflash the wrong firmware or did not reflash successfully, you can no longer enter the flash mode, especially the wireless keyboard with battery. You need to turn off the keyboard's power switch, and re-enter the flash mode, reflash the correct firmware.


## Reflash firmware in Windows

The methods for different keyboards are basically the same. Generally, three step:

  1. press and hold the top left key or some other designated key (see the guide and info displayed on the corresponding keyboard of ydkb.io for details). Insert the USB cable to enter the flash mode.When the OS shows the drive disk, you can release the key. 
  2. Drag the firmware bin file(not case sensitive and the name need to be the same) to the disk drive to overwrite the original file.
  3. Eject the disk from OS or press ESC key to exit flash mode.(Some keyboards will automatically exit flash mode.)


## Reflash firmware in Mac

<html><div class="attention"> 
<subtitle>VERY IMPORTANT</subtitle>
<br>Be sure to strictly follow the steps below under Mac, otherwise the reflash may not succeed.
</div></html>

<col_h5>The method of entering the flash mode is the same as above, but the method of copying file to disk is different.</col_h5>

<html>
<two_col>
<div style="float:left;width:48%;">
<col_list>1 First delete the "keyboard_name.bin" file in the USB disk drive.</col_list>

![](/assets/msd-bootloader-mac01.png?)

<col_list>2 Delete it in the trash again (this step is very important for Mac).</col_list>

![](/assets/msd-bootloader-mac02.png?)
</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_list>3 Keep the newly downloaded bin with the same file name as the previously deleted bin file, and then copy it to the disk drive.</col_list>

![](/assets/msd-bootloader-mac03.png?)

<col_list>4 After the file copying is completed, right-click to eject the USB disk drive or press Esc to exit.</col_list>

<col_list>5 Some of the newer bootloaders will automatically exit after the file is copied. At this time, it is normal for the Mac to prompt that it has not exited correctly.</col_list>

<html><div class="hint"> 
<subtitle>HINT</subtitle>
<br>If after the deletion in the Trash there is still insufficient space, exit the flash mode and re-enter the flash mode, and then operate from step 1 again.
</div></html>

</div>
</two_col>
<div style="clear:both;"></div>
</html>



## Reflash firmware in Linux

The following method only tested in Ubuntu 19.04. Other Linux versions may be different. Therefore, when you need to reflash, it is recommended to go to windows. That is the easiest way to reflash firmware.

This is quite strange. I tested it with Ubuntu 19.04. First of all, you can not directly operate the USB disk like mac. Use the command line as shown in the following figure. Pay attention to the case of the file name. And this command must be run twice. 

I've tried that if I only ran the command once in Ubuntu 19.04, no success. If there are other changes I will add more information about this.

<div style="width: 600px">

![](/assets/msd-bootloader-linux01.png?600)
</div>


## If the keyboard repeatedly enters the flash mode

If this problem occurs, it is probably because the downloaded bin file is incorrect. You can open a bin file with a txt file editor and see if the content is empty. Or use a hexadecimal viewer to see if the front of the file is all FFFF.

The solution is to refresh the page (use Shift+F5) several times and re-download the firmware. And then reflash with the new correct firmware file.


## If the bin file cannot be overwritten

For windows, if you directly overwrite the bin and it says there is not enough space, open the explorer to display hidden files to see if this USB disk contains other files besides keyboard_name.bin and eeprom.bin. If the computer itself has virus and write some files to the disk, it will takes up space and make it impossible to write the new bin file.


