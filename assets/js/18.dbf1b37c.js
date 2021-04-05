(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{524:function(s,t,a){"use strict";a.r(t);var n=a(22),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"事件event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件event"}},[s._v("#")]),s._v(" 事件Event")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Event")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    bubbles"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("              \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示事件是否冒泡")]),s._v("\n    cancelable：         \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示是否可以取消事件的默认行为")]),s._v("\n    currentTarget"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("        \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前事件处理程序所在元素")]),s._v("\n\ttarget"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("               \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 事件目标元素")]),s._v("\n\tdetail"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number        \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 事件相关的其他信息")]),s._v("\n    eventParse"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number     \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示调用事件处理程序的阶段：1捕获，2到达目标，3冒泡")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用于取消事件的默认行为，只有在cancelable：true时有效")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stopImmediatePropagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用于取消所有后续事件的捕获或冒泡")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stopPropagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用于取消所有后续事件的捕获或冒泡，只有在bubbles：true有效")]),s._v("\n\n\tsrcElement"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("            \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 和target一样")]),s._v("\n\treturnValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("            \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认true，设置false阻止事件的默认行为")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h1",{attrs:{id:"用户界面事件-uievent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户界面事件-uievent"}},[s._v("#")]),s._v(" 用户界面事件 UIEvent")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UIEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Event")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    cancelBubble"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Boolean "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示该事件的冒泡是否被取消")]),s._v("\n    pageX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pageY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" nunmber  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回相对于整个文档的水平/垂直坐标")]),s._v("\n    which"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回对应键盘按下的keyCode或者字母数字键按下时的字符码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h1",{attrs:{id:"鼠标事件mouseevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标事件mouseevent"}},[s._v("#")]),s._v(" 鼠标事件MouseEvent")]),s._v(" "),a("blockquote",[a("p",[s._v("事件发生顺序：mousedown、mouseup、click、mousedown、mouseup、click、dbclick")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MouseEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UIEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    clientX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("clientY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 只读          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回鼠标在点击元素中的X/y坐标")]),s._v("\n    offsetX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("offsetY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 只读          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回鼠标相对于目标节点内边位置的X/Y坐标")]),s._v("\n    pageX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pageY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回鼠标相对于整个文档的X/Y坐标")]),s._v("\n    screenX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("screenY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 鼠标相对于屏幕的X/Y坐标")]),s._v("\n    altKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 事件触发时，alt键按下的话返回true，否则false")]),s._v("\n    shiftKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 事件触发时，shift键按下的话返回true，否则false")]),s._v("\n\tctrlKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ctrl键")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("code",[s._v("click")]),s._v(" "),a("code",[s._v("mousedown")]),s._v(" "),a("code",[s._v("mouseup")]),s._v(" "),a("code",[s._v("dbclick")]),s._v(" "),a("code",[s._v("mouseenter")]),s._v(" "),a("code",[s._v("mouseleave")]),s._v(" "),a("code",[s._v("mousemove")]),s._v(" "),a("code",[s._v("mouseover")])]),s._v(" "),a("h1",{attrs:{id:"滚轮事件mousewheel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚轮事件mousewheel"}},[s._v("#")]),s._v(" 滚轮事件Mousewheel")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WheelEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MouseEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    deltaX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Y")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表示滚轮的横向/纵向滚动量，double值")]),s._v("\n    deltaZ：                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// z轴上的滚动量")]),s._v("\n    deltaMode：                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上面的值的单位 0像素，1行，2页")]),s._v("\n    wheelDelta"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滚轮向前 +120，向后-120")]),s._v("\n\twheelDeltaX"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Y")]),s._v("：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h1",{attrs:{id:"焦点事件focusevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#焦点事件focusevent"}},[s._v("#")]),s._v(" 焦点事件FocusEvent")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FocusEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UIEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("blur")]),s._v("：失去焦点时触发，不冒泡")]),s._v(" "),a("p",[a("code",[s._v("focus")]),s._v("：获取焦点时触发，不冒泡")]),s._v(" "),a("p",[a("code",[s._v("focusin")]),s._v("：focus的冒泡版")]),s._v(" "),a("p",[a("code",[s._v("focusout")]),s._v("：blur的冒泡版")]),s._v(" "),a("h1",{attrs:{id:"键盘和输入事件inputevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键盘和输入事件inputevent"}},[s._v("#")]),s._v(" 键盘和输入事件InputEvent")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InputEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UIEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前输入的字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("KeyboardEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UIEvent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    altKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回字符串")]),s._v("\n\tkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h1",{attrs:{id:"h5事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5事件"}},[s._v("#")]),s._v(" H5事件")]),s._v(" "),a("p",[a("code",[s._v("contextmenu")]),s._v(" 上下文菜单，冒泡，算是一种鼠标事件")]),s._v(" "),a("h1",{attrs:{id:"html元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html元素"}},[s._v("#")]),s._v(" HTML元素")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EventTarget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispatchEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用来派发自动定义事件 ？？？")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EventTarget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    baseURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一个文档的基本URL，默认为 document.location.href")]),s._v("\n    childNodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" NodeList           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回包含该节点所有子级的实时对象")]),s._v("\n    firstChild"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一个子节点")]),s._v("\n\tlastChild"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ")]),s._v("\n\tisConnected"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该节点是否已经连接到一个上下文对象（Document对象或ShadowRoot对象）")]),s._v("\n\tnextSibling"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 和该节点同级的下一个节点")]),s._v("\n\tpreviousSibling"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n\n\tnodeName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该节点名字")]),s._v("\n\tnodeType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v("\n    nodeValue\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回或设置当前节点的值，如果为null则设置无效")]),s._v("\n    parentNode                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前节点的父节点Node")]),s._v("\n    parentElement                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回当前节点的父节点Elment")]),s._v("\n    textContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回或设置一个元素内所有子节点及其后代的文本内容")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloneNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 克隆当前节点，是否选择深度克隆")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 传入的节点是否为该节点的后代")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRootNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回上下文对象的根节点")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasChildNodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 参考节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("normalize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("repalceChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2020.12.27")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该类是一个通用性能强的基类，所有的Document对象下的对象都继承自它")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 描述了所有相同种类的元素所普遍具有的方法和属性")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Element")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    attributes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该元素相关的所有属性集合")]),s._v("\n    classList"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" DOMTokenList            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该元素包含的class属性")]),s._v("\n    \t\tlength、value\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 超过length，返回null或undefined")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否包含")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加到classList，参数可单可数组")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("entries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 遍历所有键值对")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tclassName                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个元素的class")]),s._v("\n    clientHeight                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 内部相对于外层元素的高度")]),s._v("\n    clientLeft                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该元素距离它左边界的宽度")]),s._v("\n    clientTop                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该元素距离它上边界的高度")]),s._v("\n    clientWidth                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该元素内部的宽度")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);