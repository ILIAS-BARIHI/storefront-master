import { ProductStore } from '../models/product';

const store = new ProductStore();
describe('Product Model', () => {
    it('create_method_should_add_a_record', async () => {
        const result = await store.create({
            id: 1,
            name: 'item1',
            price: 1000,
        });
        expect(result).toEqual({
            id: 1,
            name: 'item1',
            price: 1000,
        });
    });
    it('show_method_should_return_the_correct_model', async () => {
        const result = await store.show('1');
        expect(result).toEqual({
            id: 1,
            name: 'item1',
            price: 1000,
        });
    });
    it('index_method_should_return_a_list', async () => {
        const result = await store.index();
        expect(result).toEqual([
            {
                id: 1,
                name: 'item1',
                price: 1000,
            },
        ]);
    });
});
