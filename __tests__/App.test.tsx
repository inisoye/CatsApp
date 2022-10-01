/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('Renders correctly', () => {
    renderer.create(<App />);
  });
});
