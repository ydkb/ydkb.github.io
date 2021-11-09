# Bluetooth keyboard signal optimization

Although the title is called "Bluetooth keyboard signal optimization", in fact, a lot of work is not done for the keyboard itself. Because most of the keyboard settings cannot be changed.

Many people may use Bluetooth keyboards for the first time, and Bluetooth keyboards have even been labeled as unusable in many people's minds. Not all Bluetooth keyboards are bad, and the poor experience is not just the keyboard itself.

Therefore, I have written this article with a little explanation, I hope it will be helpful to everyone who wants to use the Bluetooth keyboard better. (The record is a bit messy for the time being, it will be sorted out gradually)


## Hardware optimization

receiver.

For most notebooks with built-in Bluetooth, this part is not easily changeable.

Some desktop computers have or can install wifi Bluetooth combo modules. Even if you don’t use wifi, but only use Bluetooth, you must install its external antenna. If it is not installed, the Bluetooth signal is also very poor, which is about equal to unusable.

The Bluetooth receiver or antenna, for a keyboard with a metal shell, should be located on the side where the signal is not blocked as much as possible. For example, there are many keyboards with all-metal shells that rely on the positioning board to output Bluetooth signals, so the Bluetooth receiver or antenna is above the keyboard plane, the effect will be slightly better.

??> If with USB Bluetooth receiver, several problems should be avoided.
  - Try not to plug it into the USB3.0 interface, especially the rear one. If possible, extend it with a 2.0 extension cord.
  - Next to the Bluetooth receiver, there should not be other USB wireless network cards or USB3.0 devices to reduce signal interference.

Finally, there is a common suggestion that between the Bluetooth antenna (or receiver) and the Bluetooth keyboard, try not to have strong interference devices, such as other wireless devices or large data transmission lines or high current lines.

In addition to the receiver, there is also the use environment. In the area closest to you, if your computer wants to use wifi, you can use 5GHz wifi as much as possible.


## Software optimization

Bluetooth is not a wireless device like a dedicated 2.4G receiver. In addition to hardware pairing, it also needs software drivers to manage.

During using, sometimes Bluetooth has problems, which may not necessarily be the cause of the keyboard. It may be that the drive of the system is exhausted. You can try to turn off the Bluetooth in the system OS and then turn it on again. After the keyboard is reconnected, try again.

For some Bluetooth modules, the official drivers may not work well. You can try to use the driver that comes with Microsoft Windows. For example, the Marvell network card of my Surface Pro3 is an example. You can manually specify the Bluetooth driver as the universal Bluetooth driver that comes with win10 (the first item in the figure below).

![](/assets/marvellbluetooth.png?70%)


## Signal optimization

Bluetooth is also a 2.4G wireless. So if you want to make better use of it, pay attention to the following points.
  1. Reduce other 2.4G continuous interference. Use 5GHz wifi for your own network as much as possible.
  2. Reduce blocking and interference between your keyboard and Bluetooth receiver. USB 3.0 devices with high-speed communication between the keyboard and the Bluetooth receiver or next to the Bluetooth receiver will also have a great impact.
  3. If it works well and the signal starts to turn bad, switch the computer's Bluetooth off and on again. which make it reconnect. Sometimes it will improve. (Because the bluetooth may switch to a channel with less interference)
  4. Some Bluetooth wifi integrated modules may require the following items to be set to disabled or similar settings.

![](/assets/ble_series_01.png?50%)

