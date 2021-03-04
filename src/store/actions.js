export default {
    addToCart(context, payload) {
        // 使用Promise进行封装，以确定商品数据加入购物车成功，接而返回 添加成功的 Toast提示
        return new Promise((resolve, reject) => {
            // 1.查找之前cartList是否有该商品
            let product = context.state.cartList.find(item => item.id === payload.id);
            // 2.有的话数量+1，没有的话直接添加
            if (product) {
                context.commit("addCount", product);
                resolve("当前商品数量 + 1")
            } else {
                payload.count = 1;
                payload.checked = true;
                context.commit("addCart", payload);
                resolve("添加新商品成功 ！")
            }
        })
    }
}