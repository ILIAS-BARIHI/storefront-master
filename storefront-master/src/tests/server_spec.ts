import supertest from 'supertest';
import app from '../server';
const request = supertest(app);
describe('Test_endpoint_responses', () => {
    let token: string;
    it('index_products_index_200', async (done) => {
        const response = await request.get(
            '/products'
        );
        expect(response.status).toBe(200);
        done();
    });
    it('show_products_index_200', async (done) => {
        const response = await request.get(
            '/products/1'
        );
        expect(response.status).toBe(200);
        done();
    });


    it('POST_users_will_return_a_token', async (done) => {
        const user = {
            firstname: 'first',
            lastname: 'last',
            password: 'simplepw'
        }
        const response = await request.post(
            '/users'
        )
        .send(user);
        token = response.body;
        expect(token.split('.').length).toEqual(3);
        done();
    });
    it('POST_products_without_token_401', async (done) => {
        const response = await request.post(
            '/products'
        );
        expect(response.status).toBe(401);
        done();
    });
    it('show users with token 200', async (done) => {
        const response = await request.get(
            '/users/1'
        )
        .set('Authorization', `Bearer ${token}`)
        expect(response.status).toEqual(200);
        done();
    });
    it('index users with token 200', async (done) => {
        const response = await request.get(
            '/users'
        )
        .set('Authorization', `Bearer ${token}`)
        expect(response.status).toEqual(200);
        done();
    });



    it('orders by user with token 200', async (done) => {
        const response = await request.get(
            '/orders/1'
        )
        .set('Authorization', `Bearer ${token}`)
        expect(response.status).toEqual(200);
        done();
    });
    
});
