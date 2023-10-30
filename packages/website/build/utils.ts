import path from 'path';

export { version } from '../package.json';

/**
 * Generate tag of build
 * @returns {string}
 */
function tagBuild() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const time = now.toTimeString().slice(0, 8);

  return `${year}.${month}.${date} - ${time}`;
}

export const build = tagBuild();

export const resolve = (...dir: string[]) => {
  return path.join(__dirname, '..', ...dir).replace(/[\\/]/g, '/');
};

export function runScript<T = any>(script: string): T {
  const code = script.replace('require("pinyin")', '{}');
  
  interface FakeModule {
    exports: {
      default: any;
    }
  }

  const fake: FakeModule = {
    exports: {}
  } as any;

  try {
    (new Function(`
      return function box(module, exports, require) {
        ${code}
      }
    `))()(fake, fake.exports, require);
  }
  catch (e: any) {
    throw new Error(e);
  }

  return (fake.exports.default ? fake.exports.default : fake.exports);
}
