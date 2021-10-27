# Charge & Battery Information

Win10 supports battery level display from 1809.<br>
iOS supports battery display at least after 12.3.<br>
Mac needs macOS 12 Monterey or output battery level in text.<br>
Linux tested Ubuntu 19.04 supports battery level display.

As long as the keyboard can be used normally in the OS, outputting battery level in text works. 

Indeed, you don’t generally need to pay attention to the remaining battery. Just find time to charge when the keyboard starts to remind you of low battery.

<html><div class="hint">
<subtitle>The YDKB BLE series supports battery display. HINT:</subtitle>

  - <ru>The percentage of battery is estimated based on the voltage, not precise data.</ru>
  - Most keyboards only display the battery level when in use, and will not update in real time when charging.
  - The value is updated after entering the power-saving mode with lights off. Not in real time.
  - The value is approximate, not precise, and for reference only. Every 10% is a level, not 1%.
  - When some keyboards display x1% (such as 41%, 91%), it means charging.
</div></html>


## Battery Charging

<html><div class="attention">
<subtitle>It is recommended to use the PC's USB port or 5v charger to charge.</subtitle>
<br>Improper charging(like more than 6v) may broke the charging IC. Using a high-power charger will not increase the charging speed as the default charging current is limited to about 450mA. 
</div></html>

During the charging process, especially in the full-speed charging state (that is, the charging IC is not fully charged or trickle charging state), the charging IC will generate more heat. This is a normal phenomenon, so don't worry.
 

<html><div class="hint">
<subtitle>Charging knowledge:</subtitle>

  - The charging IC has simple intelligent management, when fully charged, it will automatically stop charging.
  - After stopping charging, if you continue to plug in the cable, the battery will not be used.
  - With cable in, only when the battery's voltage falls to a low level (such as 4.02v), it will be recharged.
  - Therefore, keeping the cable plugged in will not have a significant impact on the battery.
</div></html>

Most keyboards have an independent charging indicator, which is not controlled by the keyboard software. Its indication function is as follows:

The charging indicator has three states:
  - Low brightness or flicker means abnormal(no battery or battery problem).
  - High brightness means charging
  - Off or extremely low brightness means that the battery is fully charged.
<table_w30x70>

| Charging LED status | Meaning |
| ---- | ---- |
| Low brightness or flicker | abnormal(no battery or battery problem) |
| High brightness | charging |
| Off or extremely low brightness | the battery is fully charged |

</table_w30x70>

Generally it is no need to pay too much attention to this indicator light. You can know how long it takes to charge after one charge. Or when you think of charging, plug in the USB cable to charge it. When the keyboard reminds you of low battery, it can still be used for more than one day.


## Output battery level in text
This function is suitable for all systems.

At present, the Mac does not support the battery percentage display of third-party Bluetooth keyboards. IOS has been updated to support it. Hope that Mac will also update someday.

![](/assets/ble_battery04.png?600)

First add the above key on the keyboard. Then, wherever you can type text, press this key, and it will output the current battery level like typing.

The text output battery level function can also be used for debugging. In addition to the normal battery value, for example, when it outputs 12, it means that the Bluetooth function is turned off, and if it outputs 44 or 45, it means that the battery value has not been obtained correctly.


## macOS battery display

In the latest <ru>macOS Monterey</ru>, the battery display of third-party Bluetooth devices has been supported. Versions below macOS 12 Monterey can use outputting battery level in text. 

<div style="width: 400px">

![](/assets/ble_battery_mac02.png)
</div>


## Win10 battery display

After Win10 1809, it supports the battery display of Bluetooth devices (a few). You can also use third-party software such as Bluetooth Battery Monitor, which supports win8 and above, and then the software itself can also display the power of some other wireless devices that win10 does not support.
<html>
<two_col>
<div style="float:left;width:48%;">
<col_h5>Windows 10 built-in Bluetooth battery display.</col_h5>

![](/assets/ble_battery01.png)

</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_h5>The third-party software </col_h5>

![](/assets/ble_battery02.png)
</div>
</two_col>
<div style="clear:both;"></div>
</html>



## iOS battery display
iOS in the widget, after adding the power, this group button will display the battery of the BLE series, as shown below.  

<div style="width: 600px">

![](/assets/ble_battery03.png?600)
</div>


## Ubuntu 19.04 battery display
After pairing the keyboard, in the setting --Power, you can see the battery information of the Bluetooth keyboard, as shown below.  

<div style="width: 700px">

![](/assets/ble_battery004.png?600)
</div>
