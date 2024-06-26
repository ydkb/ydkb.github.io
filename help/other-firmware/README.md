# 其他固件更新

除ydkb.io的固件外，部分键盘还提供了其他的固件供选择。

其他l的固件，其所支持的功能会与ydkb.io的固件有所区别，本文档里面的有些针对ydkb.io的功能说明将无效。

我也并不熟悉所有的固件，我仅负责提供固件。所以具体的一些使用还请自行研究或到对应固件网站上查看相关帮助。

为了方便区分固件版本，在插上USB的时候，USB设备名称有所区别。

- YDKB的固件是 KBD_NAME (USB_Dxxx)
- 支持VIA /Vial的固件是 KBD_NAME (VIAL_Dxxx)

其中Dxxx代表了固件日期。

> [!ydda] 注意
> - 在更新不同的VIA或Vial的固件时，可能导致之前的按键配置被重置为默认。
> - 建议固件更新前，先保存当前按键设置到本地。更新完之后还可以再导入。

## 查看当前固件版本

设备 <u>作为USB键盘连接时的名称</u> 大都包含了当前固件的日期，日期的计法说明见本篇最后。

### 1 将键盘用有线方式连接到电脑

> [!ydda] 重要
> - 必须是有线连接下，才能查看其对应的USB设备名


### 2 查看有线键盘的USB设备名称
不同系统下查看这个名称的方法可能有所区别。

```ad-yddcol0
##### win10

在 <u>开始菜单 - 设置 - 设备</u> 里(不是设备管理器)，查看它的USB键盘名称(不是蓝牙连接名称)。

![win10](../assets/firmware_01.jpg)
```

```ad-yddcol1
##### Mac

在 <u>关于本机 - 系统报告 - USB</u>，如下图所示

![mac](../assets/firmware_mac_02.jpg)
```


## 附：三位日期计法
| 年??10% | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | ... |
| --- |-|-|-|-|-|-|-|-|-|-|-|-|-|
| 计法 | J | K | L | M | N | O | P | Q | R | S | T | U | ... |

| 月??10% | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- |-|-|-|-|-|-|-|-|-|-|-|-|
| 计法 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C |

| 日??10% | 1...9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
| ---- |-|-|-|-|-|-|-|-|-|-|-|-|
| 计 | 1...9 | A  | B  | C  | D  | E  |  F | G  | H  | I  | J  | K |
| 日 |  21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 ||
| 计 |  L | M | N | O | P | Q | R | S | T | U | V ||