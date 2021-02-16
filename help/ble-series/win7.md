# Win7 配对 BLE 设备

<html><div class="attention">
<subtitle>注意</subtitle>
<ul><li>Win7发布早于蓝牙4.0，且微软一直未更新win7支持蓝牙4.0</li>
<li>要在Win7下使用蓝牙4.0的键盘，必须使用第三方驱动。</li>
<li>如果非必要，建议更新到Win10；如果一定要Win7下使用，往下继续看。</li><ul>
</div></html>

## Intel 的蓝牙硬件

虽然现在有的Intel硬件已经不支持安装Win7了，但依然还是有一些支持的。查询你的无线网卡是Intel的话，那么一般Intel官网可能也有提供Win7的蓝牙驱动。据用户回复说，Intel的官方驱动在Win7下安装上就可以使用BLE的设备了。


## CSR8510 芯片蓝牙接收器

大部分人使用的蓝牙4.0适配器应该是CSR8510这个芯片的，淘宝上从10几块到4、50块的价格都有，没太大的区别。

第三方驱动使用千月。

<html><div class="hint">
<subtitle>提醒</subtitle>
<ul><li>千月是收费的，淘宝上单机的注册码17.9元。也可以直接买本身有授权的蓝牙适配器。</li>
<li>如果未注册，无法使用千月的蓝牙4.0低功耗设备管理功能。</li><ul>
</div></html>

### 1 安装千月

安装的时候插着蓝牙适配器或者安装完成后都成。
<html>
<two_col>
<div style="float:left;width:48%;">
<col_list>1 请从官网下载运行安装软件。</col_list>

![](/assets/qy01.jpg)
</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_list>2 这个手机助手可以不装</col_list>

![](/assets/qy02.jpg)
</div>
</two_col>
<div style="clear:both;"></div>
</html>

### 2 连接键盘

安装完成后按要求重启，然后开始连接键盘。

<html>
<two_col>
<div style="float:left;width:48%;">
<col_list>1 从托盘菜单里看到蓝牙图标，要启动的是那个蓝牙4.0低功耗管理。</col_list>

![](/assets/qy07.jpg)
<div class="attention">
<subtitle>注意</subtitle>
<ul><li>一定要从这里启动才是低功耗设备管理。</li>
<li>千月必须是激活的版本才有这个选项</li><ul>
</div><br>

</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">

<col_list>2 然后在其他—HID里，添加设备，并且连接。</col_list>

![](/assets/qy08.jpg)

<col_list>3 成功搜索到蓝牙，正常应该就能用了，如果还是不能，再往下看。</col_list>
</div>
</two_col>
<div style="clear:both;"></div>
</html>

### 3 能连上但不能用

连上后可能不能用。那么请根据下面的说明，指定安装蓝牙HID的驱动。

<html>
<two_col>
<div style="float:left;width:48%;">
<col_list>1 查看设备管理器，这里可能是个问号。</col_list>

![](/assets/qy09.jpg)

<col_list>2 即使不是问号，如果不能使用，一样右键点击它，选择更新驱动。</col_list>

![](/assets/qy10.jpg)

<col_list>3 选择“浏览器计算机以查找驱动程序软件”，再选择“从计算机的设备驱动程序列表中选择”。</col_list>

![](/assets/qy11.jpg)

</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">

<col_list>4 然后取消掉下图中的勾，选择列表里红框项。</col_list>

![](/assets/qy12.jpg)

<col_list>5 会有如下提示，无视就行了。</col_list>

![](/assets/qy13.jpg)

<col_list>6 直接点击是，然后会安装新的驱动，安装后会提醒需要重启，但其实这时已经可以使用了。当然最好还是再重启一下。</col_list>

![](/assets/qy14.jpg)
</div>
</two_col>
<div style="clear:both;"></div>
</html>

我测试时因为电脑非常慢，重启后在登录界面，键盘是不可用的，但有其他用户表示登录界面是可以使用的。

进入系统待千月启动好了后，键盘会自动连接上，直接可用无问题。


## 其他方法
Win7也可以使用Niz的接收器（移步 [Niz蓝牙4.0键盘接收器](/ble-series/niz-dongle-paring) 查看）。

