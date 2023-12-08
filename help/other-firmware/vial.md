# VIA / Vial 固件更新
## 必要说明

本页提供为部分YDKB的键盘的Vial的固件，更新固件后，即可使用Vial的功能和修改按键。

同时这个固件也是支持VIA的，请参考下文的说明在VIA里导入JSON文件后，VIA就可识别并连接键盘。

为了方便区分固件版本，在插上USB的时候，USB设备名称，支持 VIA / Vial 的固件后面为(VIAL_Dxxx)，xxx是固件日期；而YDKB的是(USB_Dxxx)。

Vial的固件功能，所以本帮助文档里面的大部分内容将无效。Vial支持的功能众多，我本人也并不熟悉所有的，所有具体使用请查看Vial的相关帮助。

如果遇到bug可加 YDKB QQ ②群“767441859”联系我，我尽量解决。


## 当前支持键盘的固件下载


### 1 下载下表的支持 VIA / Vial 的固件并刷新到键盘

如果你键盘里已经是支持 VIA / Vial 的固件（从USB设备名称可判断），如果版本与下表的一致，则可以不用重复更新。

下表的固件更新方法与ydkb.io一致。大部分使用 [Mass Storage Device Bootloader（U 盘模式)](bootloader/msd-bootloader.md)。

> [!ydda] 注意
> - 更新固件可能导致之前的按键配置被重置为默认。建议在更新固件前先保存备份一下按键设置到本地。
> - 如果是`Vial`，用 <u>File -> Save current layout</u> 保存当前按键设置到本地。更新后可以用 <u>File -> Load saved layout</u> 来导入先前保存的设置。注: Web版vial.rocks暂不支持保存和导入。
> - 如果是`VIA`，用 <u>SAVE+LOAD</u> 里的 <u>Save Current Layout</u>，保存当前按键设置到本地。更新后可以用此处的<u>Load saved layout</u> 再导入。

<br>

为了控制固件尺寸，部分键盘的功能可能略有精简。有的禁用了 Tap Dance，有的还禁用了Combos。

下载JSON文件请右键点击对应的JSON链接，选择 另存为。

| Eevee系列??25% | VIA / Vial 固件下载 | VIA JSON | 补充说明 |
| ---- | ---- | ---- | ---- |
| Eevee \#EE60 | [2023-11-30_DNBU](other-firmware/vial/ydkb_eevee_ee60_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_ee60_via.json ':ignore') |  |
| Eevee \#HFKB | [2023-11-30_DNBU](other-firmware/vial/ydkb_eevee_hfkb_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_hfkb_via.json ':ignore') |  |
| Eevee \#40A | [2023-11-30_DNBU](other-firmware/vial/ydkb_eevee_40a_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_40a_via.json ':ignore') |  |
| Eevee \#40B | [2023-11-30_DNBU](other-firmware/vial/ydkb_eevee_40b_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_eevee_40b_via.json ':ignore') |  |

| 键盘??25% | VIA / Vial 固件下载 | VIA JSON | 补充说明 |
| ---- | ---- | ---- | ---- |
| BLE660C/BLE980C | [2023-05-03_DN53](other-firmware/vial/ydkb_ble660c_980c_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_ble660c_980c_via.json ':ignore') | LAYOUTS里选择660c或980c |
| HHKB BLE | [2023-12-08_DNC8](other-firmware/vial/ydkb_hhkb_ble_vial.zip ':ignore') |  [JSON](other-firmware/vial/ydkb_hhkb_ble_via.json ':ignore') | LAYOUTS里选择US/JP布局 |
| Chicory | [2023-04-16_DN4G](other-firmware/vial/ydkb_chicory_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_chicory_via.json ':ignore') | 测试版固件，轴灯背光只支持开或关|
| Duang60 v1 | [2023-01-23_DN1N](other-firmware/vial/ydkb_duang60v1_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_duang60v1_via.json ':ignore') | |
| Duang60 v2 | [2023-08-25_DN8P](other-firmware/vial/ydkb_duang60v2_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_duang60v2_via.json ':ignore') | |
| Just68 v2 | [2023-01-23_DN1N](other-firmware/vial/ydkb_just68v2_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_just68v2_via.json ':ignore') | |
| Louise | [2023-01-23_DN1N](other-firmware/vial/ydkb_louise_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_louise_via.json ':ignore') | |
| Minira v2 | [2023-01-23_DN1N](other-firmware/vial/ydkb_minira_v2_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_minira_v2_via.json ':ignore') | |
| Pearly v1 | [2022-12-23_DMCN](other-firmware/vial/ydkb_pearly_v1_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_pearly_v1_via.json ':ignore') | |
| Pearly v2 | [2022-12-23_DMCN](other-firmware/vial/ydkb_pearly_v2_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_pearly_v2_via.json ':ignore') | |
| Xikii i6x | [2023-09-01_DN91](other-firmware/vial/ydkb_xikii_i6x_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_i6x_via.json ':ignore') | |
| Xikii i8x | [2023-09-01_DN91](other-firmware/vial/ydkb_xikii_i8x_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_i8x_via.json ':ignore') | |
| Xikii i104 | [2023-09-01_DN91](other-firmware/vial/ydkb_xikii_i104_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_i104_via.json ':ignore') | |
| Xikii Sasuke No.01 | [2022-12-22_DMCM](other-firmware/vial/ydkb_xikii_sasuke01_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_xikii_sasuke01_via.json ':ignore') | |
| YDPM40BLE | [2022-12-24_DMCO](other-firmware/vial/ydkb_ydpm40ble_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_ydpm40ble_via.json ':ignore') | |

| KBDFans 键盘??25% | VIA / Vial 固件下载 | VIA JSON | 补充说明 |
| ---- | ---- | ---- | ---- |
| Boop65 | [2023-11-08_DNB8](other-firmware/vial/ydkb_kbdfans_boop65_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_boop65_via.json ':ignore') | |
| KBD8x Mk3 | [2023-11-08_DNB8](other-firmware/vial/ydkb_kbdfans_kbd8xmk3_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_kbd8xmk3_via.json ':ignore') | |
| Kunlun | [2023-07-15_DN7F](other-firmware/vial/ydkb_kunlun_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kunlun_via.json ':ignore') | |
| Mountain | [2023-07-15_DN7F](other-firmware/vial/ydkb_mountain_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_mountain_via.json ':ignore') | |
| Taco(75%) | [2023-11-08_DNB8](other-firmware/vial/ydkb_kbdfans_taco75_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_taco75_via.json ':ignore') | |
| Taco Pad | [2023-11-08_DNB8](other-firmware/vial/ydkb_kbdfans_tacopad_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_kbdfans_tacopad_via.json ':ignore') | |
| YD67BLE (KBD67 lite) | [2023-07-15_DN7F](other-firmware/vial/ydkb_yd67ble_vial.zip ':ignore') | [JSON](other-firmware/vial/ydkb_yd67ble_via.json ':ignore') | |


40%类的键盘，更推荐尝试ydkb.io的固件。我用40较多，ydkb的固件针对40的使用有更多的小优化。

更新的内容可以参看ydkb固件的更新记录。除了核心功能(基于tmk与qmk的不同)等有所区别，像蓝牙与键盘本身矩阵按键的更新，版本日期一样的，更新内容基本相同。

### 2 连接Vial

Vial不需要单独的json文件，连上它的软件即可使用。

Vial的本地软件下载见: https://get.vial.today/download/ ，它的使用可以参看此文档的其他内容。

也可以使用在线版 https://vial.rocks/ ，如果没有科学上网载入速度可能较慢。

### 3 连接VIA

VIA的本地软件下载见: https://github.com/the-via/releases/releases

它的使用可以参看官方网站： https://www.caniusevia.com/

使用高于VIA 2.0.4版本，或者是在线版[https://usevia.app/](https://usevia.app/)，请先在 `SETTINGS` 里打开 `Show Design Tab`，后面还有可能需要将 `Render Mode` 设为 `3D`。

![|700](assets/via-ydkb-21.jpg)

然后在 `DESIGN` 里，根据页面上的显示，选择`Use V2 definitios(deprecated)`，以确保它支持V2的json文件。这时再用 `Load` 载入json文件才能正常识别并载入。

![|700](assets/via-ydkb-22.jpg)

最后是连接键盘，如果 `Render Mode` 为 `2D` 时显示有问题，就切换到 `3D`。点击下图这个图标再选择键盘连接。

![|700](assets/via-ydkb-23.jpg)


## 额外说明

### 1 蓝牙功能按键
蓝牙的几个功能设置按键，在 Vial / VIA 中设置时，使用的是 User / CUSTOM 中的几个按键来控制。

除了自己设定按键，下面四个蓝牙要用到的主要功能，都有对应的<kbd>LShift+RShift+xx</kbd>快捷键 。

![|700](assets/vial-ydkb-ble51.jpg)
![|700](assets/via-ydkb-ble51.jpg)

目前，本页固件的蓝牙功能与ydkb.io的固件有以下区别（未来可能还有变动）。

1. 因为无LEDMAP功能，所以蓝牙模式下，大小写指示灯不工作。但它仍然可以指示蓝牙连接状态及低电量等。
2. 不支持使用YDKB Tool修改蓝牙名称。但是可以使用YDKB的固件先修改好，再刷新Vial的固件。
3. 不支持蓝牙设备之间的切换，支持蓝牙与USB之间的切换。可以设置切换按键，或者使用<kbd>LShift+RShift+U</kbd>
4. 支持Lock Mode，并且增加了Lock Mode的快捷键 <kbd>LShift+RShift+L</kbd>。

如果在使用蓝牙过程中遇到连接等问题，依然可以根据 [BLE系列排错指南](ble-series/troubleshooting.md) 来解决。

### 2 RGB控制按键
RGB的控制与qmk有所区别，本页的部分固件，RGB的控制说明参考 [rgblight](features/rgblight.md)。  

在 Vial / VIA 中设置时，使用的是 User / CUSTOM 中的几个按键来控制。

其中控制 Mode(模式) / HUE(色相) / SAT(饱和度) / LUM(亮度) 的按键，不用加和减都设置。可以按住<kbd>Shift</kbd> + 相应的RGB控制键，进行反向操作。比如 <kbd>Shift</kbd>+<kbd>HUE++</kbd>作用就是 <kbd>HUE-</kbd>。

![|700](assets/vial-ydkb-rgb.jpg)
![|700](assets/via-ydkb-rgb.jpg)

如果支持 RGB 但是在 User / CUSTOM 中没有以上按键的。那么可使用 VIA / Vial 的对应按键控制。

### 3 单色轴灯背光
使用 VIA / Vial 的背光控制按键即可。但是，不少键盘因为编译的固件尺寸偏大，未支持背光的呼吸模式，仅支持亮度调整。

### 4 Macro 宏
目前不支持直接在VIA里设置如{KC_XXX}这样的宏。如果要使用复杂的连续按键宏，请使用Vial设置。设置好后，在VIA里也可以选择使用，只是VIA里显示出来有些乱码。