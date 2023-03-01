import { UserStore } from '../models/user';

const store = new UserStore();

describe('User Model', () => {
    it('create_method_should_add_a_record', async () => {
        const result = await store.create({
            id: 1,
            firstname: 'first',
            lastname: 'last',
            password: 'password',
        });
        expect(result.password).not.toEqual('password');
    });

    it('index_method_should_return_a_list', async () => {
        const result = await store.index();
        // one from endpoint test
        expect(result.length).toEqual(2);
    });

    it('show_method_should_return_the_correct_model', async () => {
        const result = await store.show('1');
        expect(result.id).toEqual(1);
    });
});
