# Louise 固件更新记录
「+」新增， 「-」删除， 「^」升级,  「#」修复,  『 』重要

此处仅为更新日志记录，方便参考。下载固件请至ydkb.io，选择对应的键盘。

##### 2022-03-28 (DM3S) 
-   『+』按键防抖升级为疾速防抖，最快可以在按下按键后0.1ms内触发。取消了 <kbd>LShift+RShift+N</kbd> 切换NKRO时输出数字。NKRO和6KRO上使用的都是一个模式的防抖了。
-   「^」改进Lock Mode按键，增加防抖优化。需要F和J按下稳定且其他按键也无任何抖动时，才能退出Lock Mode。

##### 2022-02-27 (DM2R)
- 『+』修饰键组合键的一点点增强，方便实现类似<kbd>Ctrl+H J K L</kbd>或<kbd>Ctrl+N B P F</kbd>为方向键的操作，具体见说明 [修饰键组合键](edit-keymap/mods-key.md)
- 「^」 节能模式下的watchdog逻辑稍微改进了一下。
- 「+」使用 <kbd>LShift+RShift+LCtrl+B</kbd>组合可以直接进入刷机模式。
- 「+」设置为 Tap二合一按键，如果其中是CapsLock，增加一个100ms的延时，让它在MacOS下可以正常切换大小写。
- 「^」 提高 [Esc 与 \`\~](/features/tricky-esc) 功能在单独按触发 Esc 时的响应速度。

