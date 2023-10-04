
import { gotoPage, pageInit } from "../../utils/v1.0/newGotoPage";
Page({
  build() {

    hmUI.setLayerScrolling(!1);
    hmUI.createWidget(hmUI.widget.FILL_RECT, {   //背景
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      radius: 20,//圆角
      color: 0x2E7DF6//颜色，十六进制
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 2,
      y: 72,
      w: 150,
      h: 100,
      align_h: hmUI.align.CENTER_H,
      text_size: 37,
      color: 0xffffff,
      text: '教程',
      show_level: hmUI.show_level.ONLY_NORMAL
    })
    hmUI.createWidget(hmUI.widget.STROKE_RECT, {
      x: 5,
      y: 130,
      w: 182,
      h: 80,
      radius: 25,//圆角
      line_width: 5,
      color: 0xFFFFFF//颜色，十六进制
    })

    //------------------
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 5,
      y: 120,
      w: 182,
      h: 110,
      h: 110,
      color: 0xffffff,
      text_size: 24,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text: '不再提示'
    })
      .addEventListener(hmUI.event.CLICK_UP, function (c) {
        hmApp.gotoPage({
          url: "page/gtr3-pro/home/index.page",
          param: "..."
        })
      })
    //------------------------stare--------------------------







    hmUI.createWidget(hmUI.widget.TEXT, {
      x: -20,
      y: 50,
      w: 192,
      h: 490,
      color: 0xffffff,
      text_size: 26,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.WRAP,
      text: "前往\nReX Wear\n查看教程."
    })


















  }
})