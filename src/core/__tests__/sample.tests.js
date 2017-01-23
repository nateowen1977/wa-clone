import {assert} from 'chai';

describe('Some Sample tests', () => {
    xit('should fail', () =>{
        assert.equal(1,2);
    })

    it('pass', () => {
        assert.equal(3, 3);
    })
})