# 默认命令按键
这个就是TMK的Magic Commands功能(部分键盘并未启动此功能)，此处说明列出YDKB所有支持的默认命令按键。

下文中所有提到按 <kbd>LShift+RShift+某个按键</kbd> 或 <kbd>左右Shift+某个按键</kbd> 的地方，都是指先按住 左Shift和右Shift 不放，再按一下 这个按键，之后就可以松开 左Shift和右Shift 了。这些命令按键不能连续按，每次只能按一个命令，要按另外一个，就需要放开左右Shift，再重新按下左右Shift加其他按键。

!!> 特别注意：
  - <key>LShift+RShift+按键</key>，属于预置功能，在不了解其作用时，切记不要乱按，切记。乱按可能导致配置出错。


## BLE系列默认命令按键

以下列出的是BLE系列才支持的。

| 按键??30% | 功能说明 |
| ---- | ---- |
| <kbd>LShift+RShift+W</kbd> | 打开蓝牙功能 |
| <kbd>LShift+RShift+LCtrl+W</kbd> | 关闭蓝牙功能 |
| <kbd>LShift+RShift+R</kbd> | 清除键盘端蓝牙配对信息，不适用于KAD后的固件<sup>1</sup> |
| <kbd>LShift+RShift+LCtrl+R</kbd> | 清除键盘端蓝牙配对信息，适用于KAD后的固件<sup>1</sup> |
| <kbd>LShift+RShift+U</kbd> | 蓝牙或USB模式切换 |
| <kbd>LShift+RShift+I</kbd> | 设置蓝牙为可发现 |
| <kbd>LShift+RShift+O</kbd> | 设置蓝牙为不可发现 |
| <kbd>LShift+RShift+P</kbd> | 切换蓝牙节能模式开关 |
| <kbd>LShift+RShift+S</kbd> | 显示蓝牙连接状态指示 |
| <kbd>LShift+RShift+V</kbd> | 文字输出电量<sup>2</sup> |
| <kbd>LShift+RShift+B</kbd> | 重启键盘 |

<sup>1</sup> 有少部分人在使用时，偶尔有误按 <kbd>LShift+RShift+R</kbd> 的情况，导致键盘的配对被清除，这时电脑（特别是Mac）可能显示的是已连接，但是按键并不能使用。所以在KAD（即2020-10-13）之后的更新的固件，需要同时按住 <kbd>LShift+RShift+LCtrl+R</kbd> 才会清除配对了，并且成功按键后，蓝牙连接状态指示灯会开始指示，也算是对成功触发此功能的反馈。（这一个更新在其他章节有提到的，会稍后补充。）<br>
<sup>2</sup> 与从 **灯光及增强功能** 里选择的文字输出电量有所不同，大部分键盘在较新的固件里，<kbd>LShift+RShift+V</kbd> 这组快捷键输出的是XX-Y，这样的格式。比如50-1，前面的XX代表的是电量，后面的Y是0或1，代表键盘自身蓝牙连接状态(0未连接，1已连接)。


## 全系列默认命令按键

以下列出的是YDKB全系列都支持的。

| 按键??30% | 功能说明 |
| ---- | ---- |
| <kbd>LShift+RShift+F10,F1...F7</kbd> | 设置默认层 0...7（2020.7之后的固件已取消此按键） |
| <kbd>LShift+RShift+0...7</kbd> | 设置默认层 0...7（2020.7之后的固件已取消此按键） |
| <kbd>LShift+RShift+N</kbd> | USB模式下切换全键无冲/6键无冲<sup>1</sup> |
| <kbd>LShift+RShift+Pause</kbd> | 重启键盘或进入刷机模式<sup>2</sup> |

<sup>1</sup> 这里的6键无冲，指除去 左右Ctrl、Shift、Alt、Win 这8个修饰键外，同时按下任意6个都不会有冲突。<br>
<sup>2</sup> 进入刷机模式仅针对Bootloader是默认Atmel DFU的键盘

其他还有一些不重要的以及debug用的，暂时就不列出了。