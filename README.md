# 文件说明

包含 DBoS 快速上手运行所需要的资源文件及配置文件，压缩包内文件列表如下：
- driver                                      [驱动文件]                

- music                                      [音乐资源文件]              

- video                                      [视频资源文件]            

- 100ask_imx6ull-14x14.dtb     [设备树]

- DBoS                                      [交叉编译后的可执行文件]

- profile                                    

- README.md                   

- README_en.md                

- S09modload                          [驱动文件管理脚本]                 

- S99myirhmi2                          [GUI配置管理脚本]

- libQt5Mqtt.so                        [MQTT动态库文件]

- dict和platforminputcontexts [google输入法依赖文件]

- tslib-1.21                                [触摸屏文件，用法见移植说明]

-   ### 触屏修改开发板环境变量

    打开 `sudo vi /etc/profile` 文件，在末尾添加如下：

    ```c++
    export XDG_RUNTIME_DIR=/usr/lib/
    export RUNLEVEL=3
    
    export QT_QPA_FB_DISABLE_INPUT=1
    export QT_QPA_GENERIC_PLUGINS=tslib
    export QT_QPA_FONTDIR=/usr/lib/fonts
    export TSLIB_TSDEVICE=/dev/input/event1
    export TSLIB_CONFFILE=/etc/ts.conf
    export TSLIB_CALIBFILE=/etc/pointercal
    export TSLIB_PLUGINDIR=/usr/lib/ts
    export TSLIB_CONSOLEDEVICE=none
    export QT_QPA_FB_TSLIB=1
    export QT_QPA_GENERIC_PLUGINS=tslib:/dev/input/event1
    ```

    

# 如何使用
> DBoS 基于 100ASK_IMX6ULL_PRO， 要成功运行，那么需要一块带有屏幕的开发板，同时假定已经完成 [《Linux 系列教程（第一篇） - 开发板基础操作》](https://www.100ask.net/detail/p_60ff69a7e4b0a27d0e363587/8) 中所提到的内容

使用提供的文件依次进行如下操作，完成后重启开发板 （DBoS 随系统自启动）

* 替换文件 `/boot/100ask_imx6ull-14x14.dtb`
* 替换文件 `/etc/profile`
* 替换文件 `/etc/init.d/S99myirhmi2`
* 替换文件 `/etc/init.d/S09modload`
* 复制以下文件夹到开发板 `/` 目录
* 复制libQt5Mqtt.so到/lib文件夹
* dict和platforminputcontexts到/目录，与DBoS同级目录
```
DBoS : 可执行文件
video : mp4 视频文件
music : mp3 音乐文件
driver: 驱动文件
```
> ps : app 退出请按开发板左下角物理按键root
