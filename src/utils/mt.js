import Vue from 'vue'
import {
    Field,
    Button,
    Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Cell,
    Navbar,
    Loadmore,
    Spinner,
    Swipe,
    SwipeItem,
    Badge,
    Checklist,
    Radio,
    Switch,
    CellSwipe,
    Indicator,
    Toast,
    DatetimePicker,
    MessageBox,
    Popup,
    Lazyload
} from 'mint-ui'
Vue.component('MtButton', Button);
Vue.component('MtField', Field);
Vue.component('MtTabbar', Tabbar);
Vue.component('MtTabItem', TabItem);
Vue.component('MtTabContainer', TabContainer);
Vue.component('MtTabContainerItem', TabContainerItem);
Vue.component('MtCell', Cell);
Vue.component('MtNavbar', Navbar);
Vue.component('MtLoadmore', Loadmore);
Vue.component('MtSpinner', Spinner);
Vue.component('MtSwipe', Swipe);
Vue.component('MtSwipeItem', SwipeItem);
Vue.component('MtBadge', Badge);
Vue.component('MtChecklist', Checklist);
Vue.component('MtRadio', Radio);
Vue.component('MtSwitch', Switch);
Vue.component('MtCellSwipe', CellSwipe);
Vue.component('MtDatetimePicker', DatetimePicker);
Vue.component('MtPopup', Popup);
Vue.use(Lazyload)
Object.assign(Vue.prototype, {
    $indicator:Indicator,
    $toast:Toast,
    $messagebox:MessageBox
})
