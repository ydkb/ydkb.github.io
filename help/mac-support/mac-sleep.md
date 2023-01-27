# macOS 下睡眠后立即被唤醒

这个问题我先随便写一写，遇到的可以尝试用下面方法先解决一下。

从 macOS 12 之后，macOS 不再支持用户设置是否使用蓝牙唤醒了，要设备只有特殊的命令行方法: https://apple.stackexchange.com/questions/431812/how-can-i-stop-a-bluetooth-keyboard-from-waking-my-macbook-pro/437396#437396

YDKB BLE 系列的有线与无线是可以同时连接无缝切换使用的，这在一种情况下会导致一个问题。
- 有线与蓝牙连接在同一台mac，使用mac的睡眠功能，睡眠后因为USB状态的切换，系统会被唤醒。
- 如果有线与无线不是连接在同一台上，没有此问题。

如果是上面这种有线与蓝牙同时连一台mac，又需要正常使用睡眠功能，建议先使用 [蓝牙功能开关](ble-series/connection-status.md)将蓝牙功能关闭，然后再在这个电脑上使用。需要再用蓝牙时，再打开蓝牙功能。

注意有的键盘是使用物理开关控制蓝牙功能，而有的使用 <kbd>LShift+RShift+W</kbd> 或  <kbd>LCtrl+LShift+RShift+W</kbd> 开关蓝牙功能。
