// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// export const environment = {
//   production: false
// };

let env = 'dev';
let apiUrl = '';
let apiCommonUrl = ''
let apiDocsUrl = '';
let privateURL = '';

apiUrl = 'http://eServicesdev.desarrollo.cl/api/website';
apiCommonUrl = 'http://apicommonFix'
apiDocsUrl = 'http://eServicesdev.desarrollo.cl/doc/website';

export const environment = {
  production: true,
  apiUrl,
  apiCommonUrl,
  apiDocsUrl,
  tokenToRead: 'Invsec-Token',
  tokenToWrite: 'Invsec-Token',
  tokenToWriteCaptcha: 'Invsec-Token',
  tokenToReadCaptcha: 'Invsec-Token',
  privateURL: 'https://privado.inversionessecurity.cl/',
};
