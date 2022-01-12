# BLE模块固件升级
YDKB的BLE系列蓝牙模块使用的是Adafruit Bluefruit LE的固件。

更新可参看： https://learn.adafruit.com/introducing-the-adafruit-bluefruit-le-uart-friend/history

上面的更新日志只写到了0.7.7。

目前最新的是0.8.1，从多位用户实际反馈来看，0.8.1能改善偶尔出现连击的问题，特别是Mac系统。

> ??> 建议
> - 如果当前蓝牙固件是0.7.7的，建议按下文方法更至0.8.1。
> - 2021年之后新出的，固件默认都是0.8.1，不用自己再升级。

## 查看和更新蓝牙固件

更新蓝牙固件需要使用的软件是Bluefruit LE Connect，Mac/iOS/iPadOS可以直接在苹果商店里搜索下载到。

> ??> 建议
> - 安卓版的软件必须列表有刷新出来时，才能选择文件手动更新。而这个更新服务器像是土豆做的。
> - 建议使用Mac或iOS进行更新，临时借用一下他人的也行，只是用于连接键盘更新一次固件。


### 1 下载安装 Bluefruit LE Connect

Mac / iOS / iPadOS 都是直接在应用商店里搜索“Bluefruit LE Connect”，然后下载安装即可。目前商店下载安装的版本，三者的界面已经是一样的，所以下面仅以 iOS 来说明。

### 2 用 Bluefruit LE Connect 连接键盘

  1. 在已配对的设备上，删除掉要升级蓝牙固件的键盘，保证此键盘蓝牙处于未连接状态。
  2. 将键盘连接上电脑USB，并保证整个升级过程中一直连着。这是为了升级过程中不让键盘进入节能模式。
  3. 打开Bluefruit LE Connect的软件，在这里搜索到键盘，点击然后连接上。那些没有名称的蓝牙不用管，反正不是目标设备的。
  4. 选择 Updates，最上方会显示当前的蓝牙固件版本，如果本身就是0.8.1，就可以不用升级了。如果上面是0.7.7，那么下面两种更新方法选一种，建议手动。

+|+> 1

##### 自动更新

  5. 当Adafruit的升级服务器正常时，列表里可以刷新出可用固件。一定要选对下面名称这个：<br><ru>Version 0.8.1 BLEFRIEND32</ru><br>
  升级一开始的进度条是从服务器下载固件，如果一直下载不成功就还是选择手动更新。


![](/assets/ble_firmware_02.jpg)

+|+> 2

##### 手动更新

  6. Adafruit的服务器可能有问题。如果列表里一直刷新不出来内容，就手动更新固件，下载地址是：<br>
[github](https://github.com/adafruit/Adafruit_BluefruitLE_Firmware/tree/master/0.8.1/blefriend32) 或 [本地下载](https://ydkb.io/help/ble-series/blefriend32_0.8.1.zip)
<br>
需要的文件是如下两个：
<div class="code" style="font-size:10px;border:1px solid #ccc;padding-left:10px;background:#fbfaf9">
blefriend32_s110_xxac_0_8_1_190410_blefriend32.hex
blefriend32_s110_xxac_0_8_1_190410_blefriend32_init.dat
</div>

升级的时候手动选择文件，注意对应的Hex File就选比较大的那个hex文件，Init File选体积小的那个dat文件。

![](/assets/ada_51_fw.png)

+|+> 3


## 更新后的说明

这个固件只要更新一次就行了，在更新完成后，可能键盘无法立即使用，需要把键盘重启一下。有的可能还需要重新配对一次。


## Android下查看和更新蓝牙固件

强烈建议是使用 iOS / iPadOS / Mac 来更新固件，实在是找不到或借不到相关设备，参考以下说明使用Android也能完成更新蓝牙模块固件。

虽然Android下也有 Bluefruit LE Connect，但有bug，在没连上服务器的时候，它也不显示手动更新的选项，造成无法进一步操作。

所以，在Android下更新蓝牙固件时，使用到的工具是 nRF Connect，可以自行搜索下载，或者到github下载apk文件：https://github.com/NordicSemiconductor/Android-nRF-Connect/releases

固件文件包：https://ydkb.io/help/ble-series/blefriend32_0.8.1_nrftool.zip

下面是使用说明，对应最后的图。
  1. 安装后 nRF Connect 后，保持键盘是未配对状态，然后在这里找到键盘，点击 **Connect**。
  2. 在如图的菜单里，点击 **Read characteristics**。然后根据提示，完成配对。
  3. 在配对之后，就可以在 **Device Information** 里的 **Software Revision String** 里，看到当前的固件版本了。如果是0.7.7就需要升级。
  4. 点击右上角的 **DFU** 图标，然后选择zip文件，zip文件就是下载的 **blefriend32_0.8.1_nrftool.zip**。
  5. 等待自动更新完成，这时会正常显示速度和进度。
  6. 再次检查一下固件版本，是否成功更新到了 0.8.1 。

![](/assets/ble_firmware_android.jpg)
