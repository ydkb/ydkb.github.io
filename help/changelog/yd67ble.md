# YD67BLE 固件更新记录
「+」新增， 「-」删除， 「^」升级,  「#」修复,  『 』重要

此处仅为更新日志记录，方便参考。下载固件请至ydkb.io，选择对应的键盘。

关于YD67BLE的更多说明，可参看：[yd67ble](keyboards/yd67ble.md)

##### 2022-02-27 (DM2R)
- 『+』修饰键组合键的一点点增强，方便实现类似<kbd>Ctrl+H J K L</kbd>或<kbd>Ctrl+N B P F</kbd>为方向键的操作，具体见说明 [修饰键组合键](edit-keymap/mods-key.md)
- 「^」 节能模式下的watchdog逻辑稍微改进了一下。
- 「+」使用 <kbd>LShift+RShift+LCtrl+B</kbd>组合可以直接进入刷机模式。


##### 2021-09-24 (DL9O)
- 「+」 键盘启动时增加一个版本指示，对于1.0或1.01版（按键矩阵使用74HC595的版本），caps指示灯会快闪三下。
- 「+」设置为 Tap二合一按键，如果其中是CapsLock，增加一个100ms的延时，让它在MacOS下可以正常切换大小写。
- 「^」 提高 [Esc 与 \`\~](/features/tricky-esc) 功能在单独按触发 Esc 时的响应速度。

