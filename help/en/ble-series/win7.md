# Bluetooth 4.0 driver installation (for win7)

<html><div class="attention">
<subtitle>ATTENTION</subtitle>
<ul><li>win7 is released earlier than Bluetooth 4.0, and Microsoft has not updated win7 to support Bluetooth 4.0</li>
<li>So to use Bluetooth 4.0 keyboard, you must use a third-party driver. </li>
<li>It is recommended to update to Win10; if you must use it under Win7, continue reading.</li><ul>
</div></html>


## Intel's Bluetooth hardware

If you check that your wireless network card is Intel, then Intel's official website may also provide Win7 Bluetooth drivers. According to the user's reply, Intel's official driver can use BLE devices after installing it under Win7.


## CSR8510 chip Bluetooth receiver

The bluetooth 4.0 adapter most people use should be the chip CSR8510. This chip can work with bluesoleil's driver.
 
<html><div class="hint">
<subtitle>HINT</subtitle>
<ul><li>Bluesoleil is a paid software. You can also directly buy an authorized Bluetooth adapter</li>
<li>If not paid, the BLE device management can not be used.</li><ul>
</div></html>

### 1 Install bluesoleil

Plug in the Bluetooth adapter during installation or after installation is complete.

<html>
<two_col>
<div style="float:left;width:48%;">
<col_list>1 Please download it from the official website and run the installation.</col_list>

![](/assets/qy01.jpg)
</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_list>2 The mobile assistant does not need to be installed</col_list>

![](/assets/qy02.jpg)
</div>
</two_col>
<div style="clear:both;"></div>
</html>

### 2 Connect the keyboard

After the installation is complete, a restart is required.

<html>
<two_col>
<div style="float:left;width:48%;">
<col_list>1 See the Bluetooth icon from the tray menu. The Bluetooth 4.0 low energy management is to be activated (Bluesoleil  must be the paid version to have this option).
</col_list>

![](/assets/qy07.jpg)
<div class="attention">
<subtitle>注意</subtitle>
<ul><li>It must be started from here to manage low-power devices.</li>
<li>Bluesoleil must be the activated version to have this option</li><ul>
</div><br>

</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">

<col_list>2 In Other -> HID, add the keyboard and connect.</col_list>

![](/assets/qy08.jpg)

<col_list>3 After connecting, it should work normally. If it still doesn't, look down.</col_list>
</div>
</two_col>
<div style="clear:both;"></div>
</html>

### 3 Can be connected but not used

It may not be available after being connected. Then please specify the driver for installing Bluetooth HID according to the following instructions.

<html>
<two_col>
<div style="float:left;width:48%;">
<col_list>1 Looking at the device manager, there may be a question mark.</col_list>

![](/assets/qy09.jpg)

<col_list>2 Even if it is not a question mark, if the bluetooth keyboard dose not work, right-click it and select Update Driver.</col_list>

![](/assets/qy10.jpg)

<col_list>3 Select "Browser computer for driver software" and then "Select from a list of device drivers for your computer."</col_list>

![](/assets/qy11.jpg)

</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">

<col_list>4 Then uncheck the box below and select the red box item in the list</col_list>

![](/assets/qy12.jpg)

<col_list>5 You may be prompted as follows, just ignore it.</col_list>

![](/assets/qy13.jpg)

<col_list>6 Click Yes, and then a new driver will be installed. After installation, it will remind you that you need to restart. In fact, it is ready to use. Of course, it is better to restart it.
</col_list>

![](/assets/qy14.jpg)
</div>
</two_col>
<div style="clear:both;"></div>
</html>

Note: My win7 computer was very old and slow. After restart, the keyboard was unavailable in the login interface, but other users said that the login interface was available.

After entering the system and the bluesoleil driver boots, the keyboard will be automatically connected, and it can be used directly without any problems.


## Other Solution
Alternatively, Win7 can also use Niz's dongle (see [Niz dongle](/ble-series/niz-dongle-paring) ).

