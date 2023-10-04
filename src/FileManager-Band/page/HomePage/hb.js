import { gettext } from 'i18n'
import { gotoPage, pageInit } from "../../utils/v1.0/newGotoPage";

Page({
    build() {
        pageInit({

            onStop() {
                hmUI.createWidget(hmUI.widget.TEXT, {
                    x: -20,
                    y: 72,
                    w: 150,
                    h: 100,
                    align_h: hmUI.align.CENTER_H,
                    text_size: 37,
                    color: 0xD9D9D9,
                    text: '警告',
                    show_level: hmUI.show_level.ONLY_NORMAL 
                  })
                  
                    //------------------------stare--------------------------
                    hmUI.createWidget(hmUI.widget.TEXT, {
                        x: -14,
                        y: 135,
                        w: 200,
                        h: 250,
                        align_h: hmUI.align.CENTER_H,
                        text_size: 26,
                        color: 0xD9D9D9,
                        text: '无缝换绑可\n能会导致手\n环无法绑定',
                        show_level: hmUI.show_level.ONLY_NORMAL 
                      })

                      hmUI.createWidget(hmUI.widget.FILL_RECT, {   
                        x: 20,
                        y: 280,
                        w: 152,
                        h: 84,
                        radius: 48,//圆角
                        color: 0xD9D9D9//颜色，十六进制  
                    })
                    .addEventListener(hmUI.event.CLICK_UP, function (c) {
                        hmApp.goBack()
                        });
                        hmUI.createWidget(hmUI.widget.IMG, {
                            x: 72,
                            y: 294,
                            src: "file 2.png"
                            })


                            hmUI.createWidget(hmUI.widget.FILL_RECT, {   
                                x: 20,
                                y: 380,
                                w: 152,
                                h: 84,
                                radius: 48,//圆角
                                color: 0xE0EAFF//颜色，十六进制
                                })
                                hmUI.createWidget(hmUI.widget.IMG, {
                                    x: 72,
                                    y: 400,
                                    src: "file 1.png"
                                    })




            }
        })

    }
})