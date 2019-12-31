(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{215:function(t,e,_){t.exports=_.p+"assets/img/1.4fa9d829.png"},261:function(t,e,_){"use strict";_.r(e);var v=_(0),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_1-前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),v("p",[t._v("博主作为一名前端开发，日常开发的技术栈是"),v("code",[t._v("Vue")]),t._v("，并且用"),v("code",[t._v("Vue")]),t._v("开发也有一年多了，对其用法也较为熟练了，但是对各种用法和各种"),v("code",[t._v("api")]),t._v("使用都是只知其然而不知其所以然，因此，有时候在排查"),v("code",[t._v("bug")]),t._v("的时候就会有点捉襟见肘。鉴于此，索性就从"),v("code",[t._v("github")]),t._v("上"),v("code",[t._v("clone")]),t._v("下来一份"),v("code",[t._v("Vue")]),t._v("源码来学习学习，本系列博文将用来记录博主对"),v("code",[t._v("Vue")]),t._v("源码的整个学习过程，以及自己对源码的一些理解。一方面开阔自己的知识视野，另一方面也希望这些文字能够带给他人些许帮助。")]),t._v(" "),v("h2",{attrs:{id:"_2-学习规划"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-学习规划"}},[t._v("#")]),t._v(" 2. 学习规划")]),t._v(" "),v("h3",{attrs:{id:"_2-1-源码学习目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-源码学习目录"}},[t._v("#")]),t._v(" 2.1 源码学习目录")]),t._v(" "),v("p",[t._v("本项目所剖析的"),v("code",[t._v("Vue.js")]),t._v("源码版本是目前最新的版本，版本号为 v2.6.11 ，其代码目录如下：")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("├─dist                   "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目构建后的文件")]),t._v("\n├─scripts                "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与项目构建相关的脚本和配置文件 ")]),t._v("\n├─flow                   "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flow的类型声明文件")]),t._v("\n├─src                    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目源代码")]),t._v("\n│    ├─complier          "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与模板编译相关的代码")]),t._v("\n│    ├─core              "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通用的、与运行平台无关的运行时代码")]),t._v("\n│    │  ├─observe        "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实现变化侦测的代码")]),t._v("\n│    │  ├─vdom           "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实现virtual dom的代码")]),t._v("\n│    │  ├─instance       "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vue.js实例的构造函数和原型方法")]),t._v("\n│    │  ├─global-api     "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局api的代码")]),t._v("\n│    │  └─components     "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 内置组件的代码")]),t._v("\n│    ├─server            "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与服务端渲染相关的代码")]),t._v("\n│    ├─platforms         "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 特定运行平台的代码，如weex ")]),t._v("\n│    ├─sfc               "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单文件组件的解析代码")]),t._v("\n│    └─shared            "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目公用的工具代码")]),t._v("\n└─test                   "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目测试代码")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br"),v("span",{staticClass:"line-number"},[t._v("15")]),v("br"),v("span",{staticClass:"line-number"},[t._v("16")]),v("br")])]),v("p",[t._v("从上面的目录结构可以看出，"),v("code",[t._v("Vue")]),t._v("的整个项目包含了类型检测相关、单元测试相关、与平台无关的核心代码以及跨平台运行的相关代码。")]),t._v(" "),v("p",[t._v("由于我们只是学习"),v("code",[t._v("Vue.js")]),t._v("的设计思想以及代码实现的相关逻辑，所以我们暂不去关心类型检测、单元测试以及特定平台运行等相关逻辑实现，仅关注它的核心代码，即"),v("code",[t._v("src/core")]),t._v("和"),v("code",[t._v("src/complier")]),t._v("这两个目录下的代码，并且接下来后续的学习也都是只在这两个目录的范围之内。")]),t._v(" "),v("h3",{attrs:{id:"_2-2-学习路线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-学习路线"}},[t._v("#")]),t._v(" 2.2 学习路线")]),t._v(" "),v("p",[t._v("在学习之前，我们需要先制定一个学习路线，循序渐进的学习，这样不至于一头雾水，无处下手。后面的学习路线如下：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("变化侦测篇")]),t._v(" "),v("p",[t._v("学习"),v("code",[t._v("Vue")]),t._v("中如何实现数据的响应式系统，从而达到数据驱动视图。")])]),t._v(" "),v("li",[v("p",[t._v("虚拟DOM篇")]),t._v(" "),v("p",[t._v("学习什么是虚拟DOM，以及"),v("code",[t._v("Vue")]),t._v("中的"),v("code",[t._v("DOM-Diff")]),t._v("原理")])]),t._v(" "),v("li",[v("p",[t._v("模板编译篇")]),t._v(" "),v("p",[t._v("学习"),v("code",[t._v("Vue")]),t._v("内部是怎么把"),v("code",[t._v("template")]),t._v("模板编译成虚拟"),v("code",[t._v("DOM")]),t._v(",从而渲染出真实"),v("code",[t._v("DOM")])])]),t._v(" "),v("li",[v("p",[t._v("实例方法篇")]),t._v(" "),v("p",[t._v("学习"),v("code",[t._v("Vue")]),t._v("中所有实例方法(即所有以"),v("code",[t._v("$")]),t._v("开头的方法)的实现原理")])]),t._v(" "),v("li",[v("p",[t._v("全局API篇")]),t._v(" "),v("p",[t._v("学习"),v("code",[t._v("Vue")]),t._v("中所有全局"),v("code",[t._v("API")]),t._v("的实现原理")])]),t._v(" "),v("li",[v("p",[t._v("生命周期篇")]),t._v(" "),v("p",[t._v("学习"),v("code",[t._v("Vue")]),t._v("中组件的生命周期实现原理")])]),t._v(" "),v("li",[v("p",[t._v("指令篇")]),t._v(" "),v("p",[t._v("学习"),v("code",[t._v("Vue")]),t._v("中所有指令的实现原理")])]),t._v(" "),v("li",[v("p",[t._v("过滤器篇")]),t._v(" "),v("p",[t._v("学习"),v("code",[t._v("Vue")]),t._v("中所有过滤器的实现原理")])]),t._v(" "),v("li",[v("p",[t._v("内置组件篇")]),t._v(" "),v("p",[t._v("学习"),v("code",[t._v("Vue")]),t._v("中内置组件的实现原理")])])]),t._v(" "),v("h3",{attrs:{id:"_2-3-学习输出"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-学习输出"}},[t._v("#")]),t._v(" 2.3 学习输出")]),t._v(" "),v("p",[t._v("通过一步步的学习，博主打算在学习过程中输出以下三个东西：")]),t._v(" "),v("ul",[v("li",[t._v("以文字形式记录学习过程；")]),t._v(" "),v("li",[t._v("为"),v("code",[t._v("clone")]),t._v("下来的"),v("code",[t._v("Vue")]),t._v("源码添加尽可能详细的注释；")]),t._v(" "),v("li",[t._v("做一份思维导图，以宏观角度总览源码；")])]),t._v(" "),v("h2",{attrs:{id:"_3-鼓励写作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-鼓励写作"}},[t._v("#")]),t._v(" 3. 鼓励写作")]),t._v(" "),v("p",[t._v("江山父老能容我，不使人间造孽钱。您的赞赏，是对我写作最大的认可和鼓励。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(215),alt:""}})]),t._v(" "),v("details",{attrs:{open:"“open”"}},[v("summary",[t._v("点击收起/打开赞赏名单")]),t._v(" "),v("br"),t._v(" "),v("h3",{attrs:{id:"赞赏名单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#赞赏名单"}},[t._v("#")]),t._v(" 赞赏名单🎨")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("昵称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("赞赏时间")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("赞赏方式")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("赞赏金额")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("*心")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-11-29")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("支付宝")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥10.00")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("默默")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-13")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥88.88")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2*$")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-20")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥10.00")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("*俊")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-21")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥ 5.00")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("*延森")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-26")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("支付宝")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥66.66")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("A*y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-26")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥20.00")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("感谢博主")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("S*n")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-27")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥6.00")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("*理")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-27")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥6.60")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("感谢")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("N*N")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-27")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥10.00")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("D*o")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-27")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥6.66")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("阅读前")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4*7")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-28")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("微信")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥6.66")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("感谢！")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("*海涛")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2019-12-30")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("支付宝")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("￥5.00")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("文章的赞赏，看了您的源码解读很受启发，感谢")])])])])]),t._v(" "),v("p",[t._v("感谢以上朋友，十分感谢！！！ 🙏 🙏 🙏")]),t._v(" "),v("h2",{attrs:{id:"_4-那就开始吧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-那就开始吧"}},[t._v("#")]),t._v(" 4. 那就开始吧")]),t._v(" "),v("p",[t._v("写作是一件十分枯燥的事情，如果我写的这些文字对你有些许帮助的话，还请赏个star哈~~")])])}),[],!1,null,null,null);e.default=a.exports}}]);