
import { gotoPage, pageInit } from "../../utils/v1.0/newGotoPage";

Page({
    build() {
        
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 70,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 35,
                text: '万文管理'
              });
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 25,
                y: 130,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 26,
                text: 'V4.6.2（内测一）\nfor zepp os'
              });
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 245,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 30,
                text: 'QQ群'
              });
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 290,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 26,
                text: '733271117\n623766175'
              });
          
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 390,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 30,
                text: '论坛'
              });
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 432,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 18,
                text: 'wear.rexwe.net/\n WonderFIle-\n ZeppOS'
              });
              hmUI.createWidget(hmUI.widget.IMG, {
                x: 0,
                y: 530,
                src: 'ewm.png'
                });
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 750,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 30,
                text: 'BilBil账户'
              });
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 788,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 16,
                text: 'space.bilibili.com/\n3493279255497074'
              });
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 880,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 30,
                text: 'GitHub开源'
              });
              hmUI.createWidget(hmUI.widget.TEXT, {
                x: 26,
                y: 919,
                w: 200,
                h: 111,
                color: 0xFFFFFF,
                text_size: 18,
                text: 'wear.rexwe.net/\nthreads/135'
              });
          
              hmUI.createWidget(hmUI.widget.FILL_RECT, {   
                x: 4,
                y: 1020,
                w: 183,
                h: 130,
                radius: 20,//圆角
                color: 0x202124//颜色，十六进制
                })
                .addEventListener(hmUI.event.CLICK_UP, function (c) {
                  gotoPage({
                    url: "page/HomePage/index4",
                    native: true,
                  });
                  }); 
                hmUI.createWidget(hmUI.widget.IMG, {
                  x: 20,
                  y: 1035,
                  src: "lock.png"
                  })
                  .addEventListener(hmUI.event.CLICK_UP, function (c) {                          
                    gotoPage({
                      url: "page/HomePage/index4",
                      native: true,
                    });
                }); 
                 
                  hmUI.createWidget(hmUI.widget.TEXT, {
                    x: -55,
                    y: 1092,
                    w: 288,
                    h: 46,
                    color: 0xFFFFFF,
                    text_size: 24,
                    align_h: hmUI.align.CENTER_H,
                    align_v: hmUI.align.CENTER_V,
                    text_style: hmUI.text_style.NONE,
                    text: '开发致谢'
                  })
                  .addEventListener(hmUI.event.CLICK_UP, function (c) {
                    gotoPage({ url: "page/HomePage/index4", param: "" });
                  }); 
                  
                      
                  hmUI.createWidget(hmUI.widget.STROKE_RECT, {
                    x: 200,
                    y: 1200,
                    w: 2,
                    h: 1,
                    radius: 20,
                    line_width: 4,
                    color: 0xfc6950
                    })
          












          
    }
})