# Atmel DFU Bootloader

This is the default bootloader for some AVR microcontrollers. It is used directly by many keyboards not produced by ydkb.


## Install DFU driver using Zadig

The driver of this DFU is in the same computer and system, it only needs to be installed once, the next time you flash the firmware, you can start directly from step 2. If the keyboard of this Bootloader has been used to refresh the keyboard on this computer, then there is already a driver, no need to reinstall it.

### 1 Download Zadig

To use this bootloader to reflash the firmware, you must install the driver. Use zadig from http://zadig.akeo.ie. 

To prevent the installation of this driver to wrong device, you can also try this modified version of Zadig for Atmel DFU.  
Download url: https://pan.baidu.com/s/1sltOsrV Password: ek5h

### 2 Get the keyboard into DFU mode

First plug the keyboard into the USB, and then press the flash button. For the specific location of the keyboard, refer to the instructions of the corresponding keyboard. Generally, it is a small button on the keyboard PCB.

<html><div class="attention"> 
<subtitle>ATTENTION</subtitle>
<ul><li>Be sure to press the flash button to let the keyboard enter the DFU mode.</li>
<li>If you install a driver for a device other than DFU, the keyboard may become unusable.</ul>
</div></html>


From the list below, find **ATm32U4DFU** or **LUFA DFU**. 

<html>
<two_col>
<div style="float:left;width:48%;">
<col_h5>ATm32U4DFU</col_h5>

![](/assets/atmel_dfu_01.png?)
</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_h5>LUFA DFU</col_h5>

![](/assets/atmel_dfu_lufa_01.png?)
</div>
</two_col>
<div style="clear:both;"></div>
</html>

<html><div class="attention"> 
<subtitle>Remind again. Especially using the official Zadig: </subtitle>
<br>Don’t choose GH60 or other keyboard name</font></html>, If you choose and install this driver, the keyboard will not work. Then you need to uninstall the driver manually.
</div></html>

![](/assets/atmel_dfu_02.png?)


### 3 Intall driver

After choosing **ATm32U4DFU** or **LUFA DFU**, click "Install Driver" to make its driver be WinUSB.

![](/assets/atmel_dfu_03.png?)

As shown above, the Driver is already displayed as WinUSB, indicating that the installation was successful. 

<html><div class="hint"> 
<subtitle>HINT</subtitle>
<br>If the installation is not successful, try again or try running zadig.exe as an administrator.
</div></html>

### 4 Additional instructions

If still unsuccessful, it may because that windows system is a lited one and misses the support for WinUSB. In that case, you can choose to install the LibUSB driver. The reflash tool provided by YDKB supports both LibUSB and WinUSB drivers.

<html><div class="hint"> 
<subtitle>If you have other keyboards with ATMEL DFU Bootloader</subtitle>
<ul><li>If you have other keyboards using tkg.io, it is recommended to install the WinUSB driver, because tkg uses that. </li>
<li>If you have other keyboards using qmk, it is recommended to install the LibUSB driver. The qmk firmware reflash tool uses LibUSB.</ul>
</div></html>

## Refresh HEX firmware

Use the keyboard of Atmel DFU Bootloader, the general firmware format is HEX, drag the HEX file directly to YDKB Tool.exe in the flashing tool (there is the downloading flashing tool at the location where the hex firmware is downloaded), and the flashing will start. It should be noted that when YDKB Tool is decompressing, all contents need to be decompressed and kept in the same folder. Do not move files or modify the file names of the files.

<div style="width: 600px">

![](/assets/dfu_reflash_01.png?600)
</div>

Then it will prompt "the device will automatically recognize and execute the update after entering the flashing mode". At this time, press the flashing button of the keyboard, or press the flashing button in advance to put the keyboard in the flashing mode, and it will automatically start to refresh. As shown in the figure below, DFU is recognized and the firmware is updated.

<div style="width: 600px">

![](/assets/dfu_reflash_02.png?600)
</div>

