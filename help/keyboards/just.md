# Just68 / Just66 / Just660

<table_w30x70>

|Author |YANG |
|:--- |:--- |
|MCU|Atmel32u4|

</table_w30x70>

Just68 / Just66 / Just660 这三个键盘使用的固件一样，只是基于同套硬件配置下，做的不同的布局，所以使用上也相差不大。

Just68和Just66的开关，是电池供电开关，具体的使用参考 [蓝牙开关和连接状态](ble-series/connection-status)

Just660是适配Leopold FC660M外壳的，所以开关也保持了与原来一致的DIP开关。其中1是电池供电开关，使用方法同上；2没有作用；3和4同时开启的时候，是 [重置蓝牙](ble-series/reset-ble) 里面的，相当于硬件重置时短接。

