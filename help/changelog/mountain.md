# Mountain / Kunlun 固件更新记录

「+」新增, 「-」删除, 「^」升级, 「#」修复, 『 』重要

此处仅为更新日志记录，方便参考。下载固件请至ydkb.io，选择对应的键盘。

Mountain 和 Kunlun 大体相似，区别主要是布局和指示灯有所不同。所以两个的固件更新记录放在一起了。

##### 2023-02-22 (DN2M)
- 「^」提升一点点按键触发的速度，同时优化新的算法减少某些状态差的轴按键双击出现的可能。
- 「#」完善: 防止轴脚与地短路时，同时触发大量按键。

##### 2023-01-24 (DN1O) 
- 「-」精简固件，移除固件中双模支持的部分。
- 「+」防止轴脚与地短路时，同时触发大量按键。
- 「^」因为没有双模版，在非开机状态下，Kunlun RGB灯不能亮起。

##### 2023-01-21 (DN1L) 
-   「^」适用于本键盘按键方案的 更快的首按键响应速度。
-   「+」引入可调的防抖时间。目前只是预设了两种，NKRO按下防抖时间1ms，6KRO暂时预设是5ms。后续再加入可自定义设置。注意每次键盘重启后默认是NKRO模式，就又会回到1ms。万一部分轴体连击的可尝试临时切换到6KRO看是否有改善。
-   「+」 在可打字的地方按 <kbd>LShift+RShift+N</kbd>时，会打出数字0或6，0代表当前切换到了NKRO全键无冲模式，6代表切换到了6KRO任意6键无冲模式。
-   「+」增加 优先层 功能。使用瞬时开启的层，临时也被设为优先层，如果此层上有设置按键，则优先响应它，其次才根据所有的层状态从高往低查找。
-   「^」层的逻辑有些变化，把瞬间切换层和其他切换层分开来。现在逻辑上操作更直觉。

它不会破坏以往逻辑，但配合新逻辑，符合更多人对于层切换的期望。具体参看文档里关于层逻辑的新说明。

##### 2023-01-01 (DN11) 
- 「^」从这个固件开始，USB模式下默认开启NKRO全键无冲。现在应该很少人使用极老的系统不支持NKRO的了。
-  「^」离上次比较久，所以还有很多其他更新不再一一列举。
