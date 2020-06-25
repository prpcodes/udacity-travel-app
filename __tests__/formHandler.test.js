import { handleSubmit } from '../src/client/js/formHandler'

describe('Test: "handleSubmit" should ebe a function' , () => {
    it('should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});

