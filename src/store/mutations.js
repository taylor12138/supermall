export default {
    // mutations里每个方法完成的事件尽量单一
    addCount(state, payload) {
        payload.count += 1;
    },
    addCart(state, payload) {
        state.cartList.push(payload);
    }
}