
import { assert } from 'chai';
import * as sinon from 'sinon';
import renderer from 'react-test-renderer';

import Article from '../Article'
import axios from 'axios';

describe('Articles', () => {
    it('should call componentDidMount when call API succesfully', async () => {
        const response = {
            data: [{
                title: "test",
                description: "testest",
            }]
        };
        const aStub = sinon.stub(axios, "get").resolves(Promise.resolve(response));
        const component = renderer.create(
            <Article />
        )
        const instance = component.getInstance();
        await instance.componentDidMount();
        assert.equal(instance.state.articles[0].title, 'test')
    });

});