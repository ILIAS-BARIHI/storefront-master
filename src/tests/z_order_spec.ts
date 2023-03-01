import { OrderStore } from '../models/order';

const o_store = new OrderStore();

describe('Product_and_Order', () => {
    it('create_an_order', async () => {
        const order = await o_store.create(1);
        expect(order).toEqual({
            id: 1,
            status: 'active',
            user_id: 1,
        });
    });

    it('show_method_should_return_the_correct_model', async () => {
        const result = await o_store.show('1');
        expect(result).toEqual({
            id: 1,
            status: 'active',
            user_id: 1,
        });
    });
    it('ordersByUser', async () => {
        await o_store.create(1);
        const result = await o_store.ordersByUser(1);
        expect(result).toEqual([{ id: 1 }, { id: 2 }]);
    });
    it('addProduct', async () => {
        const result = await o_store.addProduct(10, 1, 1);
        expect(result).toEqual({
            id: 1,
            quantity: 10,
            order_id: 1,
            product_id: 1,
        });
    });

 
});
