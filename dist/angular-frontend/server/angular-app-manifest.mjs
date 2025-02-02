
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/employees"
  },
  {
    "renderMode": 2,
    "route": "/create-employees"
  },
  {
    "renderMode": 2,
    "route": "/update-employee/123"
  },
  {
    "renderMode": 0,
    "route": "/update-employee/*"
  },
  {
    "renderMode": 2,
    "route": "/details-employee/123"
  },
  {
    "renderMode": 0,
    "route": "/details-employee/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/employees",
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/employees",
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 4913, hash: '29011bbf67f9c7e4ffbc2965dd8e61f4ea8514639e162bcbbfe335b510ceea16', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1012, hash: 'ff96f2d64781ca3228e9ada72025ac73274c79dbb78fcd5b5e1f17d4038e14fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['employees/index.html', {size: 11479, hash: 'b6d63222644bda6c029a74064456267dd506bd1224dccdc96955010f834d143c', text: () => import('./assets-chunks/employees_index_html.mjs').then(m => m.default)}], 
['create-employees/index.html', {size: 16977, hash: 'add252f14c3297cfde448b2127a6df72523fa08673bff8d2a0ed910fbf6cb944', text: () => import('./assets-chunks/create-employees_index_html.mjs').then(m => m.default)}], 
['update-employee/123/index.html', {size: 17001, hash: '06ad66d645069120905fab5e805d0e8ec90bd91b763300a86d59b19cbce7d535', text: () => import('./assets-chunks/update-employee_123_index_html.mjs').then(m => m.default)}], 
['details-employee/123/index.html', {size: 14157, hash: 'df91ae034b1af91d9480676fea108535b1af2012d94486bde514039c69909eaa', text: () => import('./assets-chunks/details-employee_123_index_html.mjs').then(m => m.default)}], 
['styles-HWWAQ5UR.css', {size: 231710, hash: 'lm/mL54yJMc', text: () => import('./assets-chunks/styles-HWWAQ5UR_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
