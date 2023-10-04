import { gettext } from 'i18n'
import { gotoPage, pageInit } from "../../utils/v1.0/newGotoPage";

Page({
    build() {
        pageInit({

            onStop() {
                hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 2,
                    y: 72,
                    w: 150,
                    h: 100,
                    align_h: hmUI.align.CENTER_H,
                    text_size: 37,
                    color: 0xffffff,
                    text: '文件',
                    show_level: hmUI.show_level.ONLY_NORMAL 
                  })
                  
                    //------------------------stare--------------------------
                    
                            hmUI.createWidget(hmUI.widget.BUTTON, {
                              x: 5,
                              y: 130,
                              w: 182,
                              h: 80,
                              radius: 20,//圆角
                              color: 0x00000,//颜色，十六进制
                              text_size: 27,
                              normal_color: 0xE0EAFF,//一般按钮色
                              press_color: 0x87CEFA,//按压按钮色
                              text: '小程序管理',//文字
                              click_func: () => {//回调，触发事件
                              hmApp.gotoPage({url: "page/HomePage/applist",param: "..."});//跳转页面
                              } 
                              }); 
                    //--------------------------------------------------------
                    hmUI.createWidget(hmUI.widget.STROKE_RECT, {   
                      x: 5,
                      y: 220,
                      w: 182,
                      h: 80,
                      radius: 25,//圆角
                      line_width: 5,
                      color: 0xE0EAFF//颜色，十六进制
                      })            
                          hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 8,
                            y: 245,
                            w: 182,
                            h: 80,
                            color: 0xE0EAFF,
                            text_size: 24,
                            align_h: hmUI.align.CENTER_H,                  
                            text_style: hmUI.text_style.NONE,
                            text: '文件列表'
                          })
                         .addEventListener(hmUI.event.CLICK_UP, function (c) {
                            hmApp.gotoPage({
                            url: "page/HomePage/BandManger",
                            param: "..."
                            }) 
                            });
                    //---------------------------------------
                    hmUI.createWidget(hmUI.widget.FILL_RECT, {   
                      x: 4,
                      y: 313,
                      w: 183,
                      h: 130,
                      radius: 20,//圆角
                      color: 0x202124//颜色，十六进制
                      })
                      hmUI.createWidget(hmUI.widget.IMG, {
                        x: 20,
                        y: 330,
                        src: "assets/cloud.png"
                        })
                        
                          hmUI.createWidget(hmUI.widget.TEXT, {
                            x: -49,
                            y: 379,
                            w: 288,
                            h: 46,
                            color: 0xE0EAFF,
                            text_size: 26,
                            align_h: hmUI.align.CENTER_H,
                            align_v: hmUI.align.CENTER_V,
                            text_style: hmUI.text_style.NONE,
                            text: '修复"天气"'
                          })
                          .addEventListener(hmUI.event.CLICK_UP, function (c) {
                            hmApp.startApp({
                              url: "WeatherScreen",
                              native: true,
                            });
                          }); 
                      //------------------------------------------------------
              
              
                      hmUI.createWidget(hmUI.widget.FILL_RECT, {   
                        x: 4,
                        y: 450,
                        w: 183,
                        h: 130,
                        radius: 20,//圆角
                        color: 0x202124//颜色，十六进制
                        })
                        hmUI.createWidget(hmUI.widget.IMG, {
                          x: 20,
                          y: 468,
                          src: "cc.png"
                          })
                            hmUI.createWidget(hmUI.widget.TEXT, {
                              x: -65,
                              y: 520,
                              w: 288,
                              h: 46,
                              color: 0xE0EAFF,
                              text_size: 26,
                              align_h: hmUI.align.CENTER_H,
                              align_v: hmUI.align.CENTER_V,
                              text_style: hmUI.text_style.NONE,
                              text: '储存用量'
                            })
                            /* .addEventListener(hmUI.event.CLICK_UP, function (c) {
                              hmApp.startApp({
                                url: "Settings_dndModelScreen",
                                native: true,
                              });
                            }); */
              
                        //-------------------------------------
              
              
                        hmUI.createWidget(hmUI.widget.FILL_RECT, {   
                          x: 4,
                          y: 589,
                          w: 183,
                          h: 130,
                          radius: 20,//圆角
                          color: 0x202124//颜色，十六进制
                          })
                          hmUI.createWidget(hmUI.widget.IMG, {
                            x: 20,
                            y: 605,
                            src: "link.png"
                            })
                           
                              hmUI.createWidget(hmUI.widget.TEXT, {
                                x: -65,
                                y: 650,
                                w: 288,
                                h: 46,
                                color: 0xE0EAFF,
                                text_size: 26,
                                align_h: hmUI.align.CENTER_H,
                                align_v: hmUI.align.CENTER_V,
                                text_style: hmUI.text_style.NONE,
                                text: '无缝换绑'
                              })
                              .addEventListener(hmUI.event.CLICK_UP, function (c) {
                                hmApp.startApp({
                                  url: "page/HomePage/41",
                                  native: true,
                                });
                              }); 
                            //---------------------------------------
                            
                          //-------------------------------------------
                          hmUI.createWidget(hmUI.widget.TEXT, {
                            x: 8,
                            y: 740,
                            w: 182,
                            h: 80,
                            color: 0xffffff,
                            text_size: 30,
                            align_h: hmUI.align.CENTER_H,                  
                            text_style: hmUI.text_style.NONE,
                            text: '关于'
                          })
                          .addEventListener(hmUI.event.CLICK_UP, function (c) {                          
                            hmApp.gotoPage({
                            url: "page/192x490_s_l66/index.page1",
                            param: "..."
                            })
                        })
            





            }
        })

    }
})