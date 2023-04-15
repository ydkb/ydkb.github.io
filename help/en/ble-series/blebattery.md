# Charge & Battery Information

Indeed, you don’t generally need to pay attention to the remaining battery. Just find time to charge when the keyboard starts to remind you of low battery.

> [!yddh] The YDKB BLE series supports battery display. HINT:
> - <u>The percentage is estimated based on the voltage, not precise data.</u>Count to 10%, not 1%.
> - The power value is usually updated when the keyboard is idle for a period of time, not real time.
> - When some keyboards display x1% (such as 41%, 91%), it means charging.


## Battery Charging

> [!ydda]  It is recommended to use the PC's USB port or 5v charger to charge.
> - Using a high-power charger will not increase the charging speed as the default charging current is limited to about 450mA. 
> - Improper charging(like more than 6v) may broke the charging IC.
> - Please use a charger not higher than 5V for charging. Some U ports on HUBs with power supplies or other chargers may be higher than 5V.

During the charging process, especially in the full-speed charging state (that is, the charging IC is not fully charged or trickle charging state), the charging IC will generate more heat. This is a normal phenomenon.

> [!yddh] Charging knowledge:
> - The charging IC has simple intelligent management, when fully charged, it will automatically stop charging.
> - After stopping charging, if you continue to plug in the cable, the battery will not be used.
> - If you use it plugged in for a long time, it is recommended to unplug the battery or at least turn the battery switch to off.

Some keyboards have an independent charging indicator, which is not controlled by the keyboard software. Its indication function is as follows:

| Charging LED status | Meaning |
| ---- | ---- |
| Low brightness or flicker | abnormal(no battery or battery problem) |
| High brightness | charging |
| Off or extremely low brightness | the battery is fully charged |

Generally it is no need to pay too much attention to this indicator light. You can know how long it takes to charge after one charge. Or when you think of charging, plug in the USB cable to charge it. When the keyboard reminds you of low battery, it can still be used for more than one day.

Some newer keyboards are starting to remove the charge light because the x1% charge indicator is indicated.

## Low Battery Alert

Windows 10 or 11, when the battery power is less than 5%, there will be a system notification prompting low battery.

The keyboard itself will also prompt when the battery is low. 
1. The backlight and RGB of the keyboard will be disabled in low power mode. 
2. <u>When the keyboard is in the wake-up and typing state</u>, some indicator lights will flash faster. If the RGB indicator light will flash red. 
3. When the battery is extremely low (1%), the blinking speed will become faster. 

Connecting to USB charging will cancel the low battery reminder.

> [!yddh] Some points
> - After the low battery warning starts, it can usually be used for a few more days. But it is still recommended to charge as soon as possible. 
> - Sometimes the low battery prompt may jump back to no prompt (voltage fluctuation). This is normal.


## Output battery level in text
This function is suitable for all systems.

Where you can type, use <kbd>LShift+RShift+V</kbd> or the keys you set up yourself to output the power and connection status in text.

![|450](assets/ble_battery04.png)

The format of the typed text is xx-y, where xx represents the battery level, and y represents the Bluetooth connection status of the keyboard (0: not connected, 1: connected). 

The function of text output power can also be used for debugging. 
- When the output is normal like x0 or x1, it can be considered that the keyboard is working normally
- When the output is 12, it means that the Bluetooth function is turned off
- Output 44 or 45 means communication error, you may need to reset the bluetooth


## macOS battery display

In the latest <u>macOS Monterey</u>, the battery display of third-party Bluetooth devices has been supported. Versions below macOS 12 Monterey can use outputting battery level in text. 

![|450](assets/ble_battery_mac02.png)


## Win10 battery display

Windows 10 or 11, the latest version supports the power display of BLE devices.

You can also use third-party software such as Bluetooth Battery Monitor, which supports win8 and above, and then the software itself can also display the power of some other wireless devices that win10 does not support.

```ad-yddcol0
##### Windows built-in Bluetooth battery display.

![](assets/ble_battery01.png)
```

```ad-yddcol1
##### The third-party software

![](assets/ble_battery02.png)
```


## iOS battery display
iOS in the widget, after adding the power, this group button will display the battery of the BLE series, as shown below.  

![|600](assets/ble_battery03.png)

## Ubuntu 19.04 battery display
After pairing the keyboard, in the setting --Power, you can see the battery information of the Bluetooth keyboard, as shown below.  

![|600](assets/ble_battery004.png)

