# Linux的配对

BLE系列键盘的蓝牙部分，本身使用的是的蓝牙标准的HID Over GATT服务，因为只要系统硬件和软件都支持BLE HID，那么配对使用无问题。

Linux的发行版本太多所以无法一一举例说明。大部分用户测试正常，有自行编译的或者特别旧的，虽然硬件支持BLE，但是驱动有问题，可能会导致无法使用。

如果确实要在特殊的版本上使用，然后驱动又搞不定，也可以尝试使用[[ble-series:niz-dongle-paring|Niz蓝牙4.0键盘接收器]]，这个只需要电脑能支持USB键盘就可以使用。

Ubuntu使用时，配对后界面如下。

<div style="width: 600px">

![](/assets/ble_battery004.png)
</div>