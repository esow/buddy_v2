import { configure } from '@storybook/react';
import "semantic-ui-less/semantic.less";

const req = require.context('../stories', true, /\.tsx?$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);