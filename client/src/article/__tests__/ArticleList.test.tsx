
import { assert } from 'chai';
import * as sinon from 'sinon';
import renderer from 'react-test-renderer';

import ArticleList from '../ArticleList'
import axios from 'axios';

describe('ArticleList', () => {
    it('should call handleChange function', async () => {
        const response = {
            data: [{
                id: 1,
                title: "test",
                description: "testest",
                created: ''
            }]
        };
        const component = renderer.create(
            <ArticleList articles={response.data} />
        )
        const instance = component.getInstance();
        const event = { target: { value: 'test' } };
        instance.handleChange(event);
        assert.equal(instance.state.title, 'test')
    });

});