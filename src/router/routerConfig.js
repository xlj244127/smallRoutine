import Icomfont from "page/show2/icomfont/icomfont";
import Echarts from "page/ant/echarts/echarts";
import Table from "page/ant/table/table";
import List from "page/ant/list/list";
import BaseJs from "page/js/baseJs/baseJs";

const menuList = [
  {
    path: "/ant", 
    name: "ant Desigin组件库", 
    icon: [],
    subMenu: [
      { subPath: "/ant/echarts", subName: "图表展示", component: Echarts },
      { subPath: "/ant/table", subName: "表单数据", component: Table },
      { subPath: "/ant/list", subName: "列表数据", component: List },
    ]
  },
  {
    path: "/js", 
    name: "基础js功能", 
    icon: [],
    subMenu: [
      { subPath: "/js/baseJs", subName: "基础js", component: BaseJs },
    ]
  },
  {
    path: "/show2",
    name: "其他功能展示",
    icon: [],
    subMenu: [
      { subPath: "/show2/icomfont", subName: "字体展示", component: Icomfont },
    ]
  }
]

export default menuList;