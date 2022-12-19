# Vial 固件更新
## 必要说明

本页提供为部分YDKB的键盘的Vial的固件，更新固件后，即可使用Vial的功能和修改按键。

为了方便区分固件版本，在插上USB的时候，USB设备名称，支持Vial的固件后面为(VIAL_Dxxx)，xxx是固件日期；而YDKB的是(USB_Dxxx)。

Vial的固件功能，所以本帮助文档里面的大部分内容将无效。Vial支持的功能众多，我本人也并不熟悉所有的，所有具体使用请查看Vial的相关帮助。我仅负责提供固件。


## 当前支持键盘的固件下载


### 1 下载下表的支持Vial的固件并刷新到键盘

更新下表固件后，更新方法与ydkb.io一致。大部分使用 [Mass Storage Device Bootloader（U 盘模式)](bootloader/msd-bootloader.md)。

> [!ydda: 注意]
> - 更新固件可能导致之前的按键配置被重置为默认。
> - 建议固件更新前，先用 <u>File -> Save current layout</u> 保存当前按键设置到本地。更新完之后还可以再用 <u>File -> Load saved layout</u> 来导入先前保存的设置。

<br>

为了控制固件尺寸，部分键盘的功能可能略有精简。比如YD67BLE禁用了 Tap Dance。

| 键盘 | 下载地址 | 补充说明 |
| ---- | ---- | --- |
| Duang60 v2 | [Vial固件(2022-12-19_DMCJ)](other-firmware/vial/ydkb_duang60v2_vial.zip ':ignore') | |
| Kunlun | [Vial固件(2022-12-15_DMCF)](other-firmware/vial/ydkb_kunlun_vial.zip ':ignore') | |
| Mountain | [Vial固件(2022-11-15_DMBF)](other-firmware/vial/ydkb_mountain_vial.zip ':ignore') | |
| YD67BLE | [Vial固件 (2022-12-15_DMCF)](other-firmware/vial/ydkb_yd67ble_vial.zip ':ignore') | |

### 2 连接Vial

Vial不需要单独的json文件，连上它的软件即可使用。

Vial的本地软件下载见: https://get.vial.today/download/

也可以使用在线版 https://vial.rocks/ ，可能需要科学上网。


## 额外说明

### 1 蓝牙功能按键
蓝牙的几个功能设置按键，也在CUSTOM里。除了自己设定按键，下面四个蓝牙要用到的主要功能，都有对应的<kbd>LShift+RShift+xx</kbd>快捷键 。
![|700](assets/vial-ydkb-ble51.jpg)

目前，Vial蓝牙功能有以下区别（未来可能还有变动）。

1. 因为无LEDMAP功能，所以蓝牙模式下，大小写指示灯不工作。但它仍然可以指示蓝牙连接状态及低电量等。
2. 不支持使用YDKB Tool修改蓝牙名称。但是可以使用YDKB的固件先修改好，再刷新Vial的固件。
3. 不支持蓝牙设备之间的切换，支持蓝牙与USB之间的切换。可以设置切换按键，或者使用<kbd>LShift+RShift+U</kbd>
4. 不支持<kbd>LShift+RShift+W</kbd>和<kbd>LCtrl+LShift+RShift+W</kbd>来进行开启或关闭蓝牙功能。
5. 支持Lock Mode，并且增加了Lock Mode的快捷键 <kbd>LShift+RShift+L</kbd>。

如果在使用蓝牙过程中遇到连接等问题，依然可以根据 [BLE系列排错指南](ble-series/troubleshooting.md) 来解决。

### 2 RGB控制按键
RGB的控制与qmk有所区别，本页的固件，RGB的控制说明参考 [rgblight](features/rgblight.md)。  

在Vial中设置时，使用的是CUSTOM中的几个按键来控制

![|700](assets/vial-ydkb-rgb.jpg)

