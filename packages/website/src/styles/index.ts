import './global.css';
import './start-loading.css';

import 'antd/es/style/index.css';
import 'antd/es/input/style/index.css';
import 'antd/es/input-number/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/tooltip/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/form/style/index.css';
import 'antd/es/grid/style/index.css';
import 'antd/es/modal/style/index.css';

import jss from 'jss';
import nested from 'jss-plugin-nested';
import extend from 'jss-plugin-extend';
import expand from 'jss-plugin-expand';
import camelCase from 'jss-plugin-camel-case';
import defaultUnit from 'jss-plugin-default-unit';
import ruleValueFunction from 'jss-plugin-rule-value-function';

import { Styles, Classes } from 'jss';
import { isEqual } from '@xiao-ai/utils';

jss
  .use(nested())
  .use(extend())
  .use(expand())
  .use(camelCase())
  .use(defaultUnit())
  .use(ruleValueFunction());

function getCursorStyle(url: string, offset = 16) {
  return `url("${url}") ${offset} ${offset}, crosshair !important`;
}

