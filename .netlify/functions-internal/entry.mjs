import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.5f7ac225.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.09956feb.mjs');
const _page1  = () => import('./chunks/testProps@_@astro.62098d22.mjs');
const _page2  = () => import('./chunks/articles@_@astro.2dc4af2e.mjs');
const _page3  = () => import('./chunks/_slug_@_@astro.b1a63a26.mjs');
const _page4  = () => import('./chunks/404@_@astro.8d038b2e.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/testProps.astro", _page1],["src/pages/articles.astro", _page2],["src/pages/blog/[slug].astro", _page3],["src/pages/404.astro", _page4]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"testProps/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/testprops","type":"page","pattern":"^\\/testProps\\/?$","segments":[[{"content":"testProps","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testProps.astro","pathname":"/testProps","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles.astro","pathname":"/articles","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-starter-pack.netlify.app","base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/r.hamouche/Documents/Mazarine/vite-astro-starter-pack/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/r.hamouche/Documents/Mazarine/vite-astro-starter-pack/src/pages/articles.astro",{"propagation":"none","containsHead":true}],["/Users/r.hamouche/Documents/Mazarine/vite-astro-starter-pack/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.09956feb.mjs","\u0000@astro-page:src/pages/testProps@_@astro":"chunks/testProps@_@astro.62098d22.mjs","\u0000@astro-page:src/pages/articles@_@astro":"chunks/articles@_@astro.2dc4af2e.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug_@_@astro.b1a63a26.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.8d038b2e.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.a5e4eeb8.js","@astrojs/react/client.js":"_astro/client.c67de31f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/404.34393d7b.css","/_astro/index.9ead976d.css","/favicon.svg","/_astro/client.c67de31f.js","/index.html","/testProps/index.html","/articles/index.html","/404.html"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
