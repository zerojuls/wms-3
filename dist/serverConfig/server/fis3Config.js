/**
 * Created by imsunhao on 2017/3/1.
 */

/*
 ------------------------------------------------------
 注意事项：
 每一个功能都要新开一个 shift+右键的cmd窗口
 如果在一个功能中出现再开启一个cmd，按照提示进行操作
 --------------------------------------------------------
 // 功能0 ： 开启前端 服务器
 --------------------------------

 fis3 server stop

 fis3 server clean

 fis3 server start -p 10086

 --------------------------------
 // 关闭前端 服务器

 fis3 server stop

 fis3 server clean

 --------------------------------
 --------------------------------
 // 功能1 ：开启 前端调试
 --------------------------------

 cd E:\work\02\wms\

 fis3 release debug -wl


--------------------------------
 // 功能2 ：开启 后台调试(另外开启一个cmd)
 //        运行前，先删除 dist 文件夹下 public 与 views
--------------------------------
 cd E:\work\02\wms

 fis3 release test -d ./dist/public -wl

----------------------
最小化 cmd 窗口
打开一个新的 cmd 窗口
----

 cd E:\work\02\wms\dist

 fis3 release -d ../server -wl

-------------------------------
点击绿色箭头 开启 后台服务器

点击 4:Run 里面的红色方块停止

重启服务器 4:Run 里面的 绿色半圆
--------------------------------

如何停止 cmd ctrl+c 两次
-------------
    */