import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('Rendering tests: ', () => {
  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<App />);
  })

  it('Generic Rendering: ', () => {
    expect(true).toBe(true);
  });

  it('Button existence: ', () => {
    expect(
      wrapper.find('button').length
    ).toBe(1);
  });

  it('setState sync assignment test: ', () => {
    wrapper.setState({ response: 'pong'});
    wrapper.update();
    expect(
      wrapper.contains(<span>Results: pong</span>)
    ).toBe(true)
  })

  it('setState async assignment test: ', () => {
    wrapper.setState({ response: 'pong'}, () => {
      wrapper.update();
      expect(
        wrapper.contains(<span>Results: pong</span>)
      ).toBe(true)
    });
  })

  it('API connection working: ', (done) => {
    fetch.once(JSON.stringify({"response":"pong"}));
    wrapper.find('button').simulate('click')
    setImmediate( () => {
      wrapper.update();
      if (!wrapper.contains(<span>Results: pong</span>))
        done(fail("pong not exists"))
      done();
    })
  });
});
