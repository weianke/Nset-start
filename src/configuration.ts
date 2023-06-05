import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'lodash';

const YAML_CONFIG_FILENAME = 'config.yml';
const filePath = join(__dirname, '../config', YAML_CONFIG_FILENAME);

const envpath = join(
  __dirname,
  '../config',
  `config.${process.env.NODE_ENV || 'development'}.yml`,
);

const commonConfig = yaml.load(readFileSync(filePath, 'utf-8'));

const envConfig = yaml.load(readFileSync(envpath, 'utf-8'));

// 因为 configModule 有一个 load方法 -> 函数
export default () => {
  return _.merge(commonConfig, envConfig);
};
