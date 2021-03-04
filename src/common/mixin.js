//导入公共js方法
import { debounce } from "./utils.js";
export const itemListenerMixin = {
    mounted() {
        // 监听goodListItem中图片加载完成事件监听
        // 修复better-scroll 因异步的网络请求图片到达，却未计算可滚动高度而无法滑动产生的bug，使用refresh进行刷新
        // 然后用防抖函数优化,减少函数调用频率
        const refresh = debounce(this.$refs.scroll.refresh, 50);
        this.$bus.$on("itemImageLoad", () => {
            refresh();
        });
    },
}