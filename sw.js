if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let n={};const u=e=>a(e,l),t={module:{uri:l},exports:n,require:u};s[l]=Promise.all(i.map((e=>t[e]||u(e)))).then((e=>(r(...e),n)))}}define(["./workbox-25d99430"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B.ef4a1c89.avif",revision:null},{url:"_app/immutable/assets/%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B.610edfca.avif",revision:null},{url:"_app/immutable/assets/%EB%A9%B4%EB%8F%84%EC%8B%A4%ED%8C%A8.0d16115d.avif",revision:null},{url:"_app/immutable/assets/%EC%A2%8B%EC%9D%80%EB%B6%84%EC%9C%84%EA%B8%B0%EC%99%80%EA%B7%B8%EB%A0%87%EC%A7%80%EB%AA%BB%ED%95%9C%EC%96%BC%EA%B5%B4.a1ff413f.avif",revision:null},{url:"_app/immutable/assets/0.81e87efa.css",revision:null},{url:"_app/immutable/assets/accuracy-benchmark.83fc0f75.avif",revision:null},{url:"_app/immutable/assets/alessandro-and-alessandro.a92f443d.avif",revision:null},{url:"_app/immutable/assets/arc-de-thumbsup.a4f95194.avif",revision:null},{url:"_app/immutable/assets/bench-party.991bee0c.avif",revision:null},{url:"_app/immutable/assets/big-thumbs-up-ben.4d5d6807.avif",revision:null},{url:"_app/immutable/assets/burn-test-pig.887d575e.avif",revision:null},{url:"_app/immutable/assets/bye-macbong.68222949.avif",revision:null},{url:"_app/immutable/assets/cool-lighting-eh.f0644c5c.avif",revision:null},{url:"_app/immutable/assets/crazy-german-train-station.07354d11.avif",revision:null},{url:"_app/immutable/assets/electrical-schematic.d90c8b9d.avif",revision:null},{url:"_app/immutable/assets/electrode-details.aa258e9a.avif",revision:null},{url:"_app/immutable/assets/favicon.e0bbce22.avif",revision:null},{url:"_app/immutable/assets/finished_down.8c224a1f.avif",revision:null},{url:"_app/immutable/assets/finished.f70f6f53.avif",revision:null},{url:"_app/immutable/assets/good-book.af3da429.avif",revision:null},{url:"_app/immutable/assets/losing-my-hair-(sibal).3141daf5.avif",revision:null},{url:"_app/immutable/assets/lotion-test-human.af6d1259.avif",revision:null},{url:"_app/immutable/assets/lotion-test-pig.b8d80aca.avif",revision:null},{url:"_app/immutable/assets/luxembourg.76cb05ce.avif",revision:null},{url:"_app/immutable/assets/namgoongminsan.45681e72.avif",revision:null},{url:"_app/immutable/assets/namsan.db197e03.avif",revision:null},{url:"_app/immutable/assets/nice-bus-you-got-there.43bcb0e5.avif",revision:null},{url:"_app/immutable/assets/notre-dame.01e1adac.avif",revision:null},{url:"_app/immutable/assets/PCB-Render.f4dc55d2.avif",revision:null},{url:"_app/immutable/assets/people-in-bulgaria.1eaeeaa1.avif",revision:null},{url:"_app/immutable/assets/posts.50579275.css",revision:null},{url:"_app/immutable/assets/spiral-starecase.07cf1473.avif",revision:null},{url:"_app/immutable/assets/stroopwaffeled.052f2cc7.avif",revision:null},{url:"_app/immutable/assets/stroopwaffeling.e347f74f.avif",revision:null},{url:"_app/immutable/assets/sunset-strong.e4a5052a.avif",revision:null},{url:"_app/immutable/assets/sunset-vivid.d843d1e7.avif",revision:null},{url:"_app/immutable/assets/surprise-eiffel-tower.3605fbff.avif",revision:null},{url:"_app/immutable/assets/system-diagram.e3fe2852.avif",revision:null},{url:"_app/immutable/assets/testing-procedure.48bdffe7.avif",revision:null},{url:"_app/immutable/assets/urara.313e3d84.avif",revision:null},{url:"_app/immutable/assets/wabi-sabi.ceec2075.avif",revision:null},{url:"_app/immutable/assets/walking-back-in-dawn.e072847d.avif",revision:null},{url:"_app/immutable/assets/why.9691fe7a.avif",revision:null},{url:"_app/immutable/assets/woken-up.cdaf83bd.avif",revision:null},{url:"_app/immutable/chunks/footer.148fe7cb.js",revision:null},{url:"_app/immutable/chunks/icon.f6b49e1f.js",revision:null},{url:"_app/immutable/chunks/index.63820490.js",revision:null},{url:"_app/immutable/chunks/index.94d92f86.js",revision:null},{url:"_app/immutable/chunks/post_layout.e9612ed1.js",revision:null},{url:"_app/immutable/chunks/posts.6fc8ce02.js",revision:null},{url:"_app/immutable/chunks/preload-helper.41c905a7.js",revision:null},{url:"_app/immutable/chunks/singletons.7c8ca2a4.js",revision:null},{url:"_app/immutable/chunks/stores.46317d5f.js",revision:null},{url:"_app/immutable/entry/app.0e75670f.js",revision:null},{url:"_app/immutable/entry/start.c56ab404.js",revision:null},{url:"_app/immutable/nodes/0.94070df3.js",revision:null},{url:"_app/immutable/nodes/1.85dd053b.js",revision:null},{url:"_app/immutable/nodes/10.44ee3e9d.js",revision:null},{url:"_app/immutable/nodes/11.e0cf44b7.js",revision:null},{url:"_app/immutable/nodes/12.244ccf40.js",revision:null},{url:"_app/immutable/nodes/13.73e15597.js",revision:null},{url:"_app/immutable/nodes/14.009f10d5.js",revision:null},{url:"_app/immutable/nodes/2.93c308e1.js",revision:null},{url:"_app/immutable/nodes/3.fb492b1f.js",revision:null},{url:"_app/immutable/nodes/4.67b60e04.js",revision:null},{url:"_app/immutable/nodes/5.2b0f797b.js",revision:null},{url:"_app/immutable/nodes/6.86680e6d.js",revision:null},{url:"_app/immutable/nodes/7.992d8402.js",revision:null},{url:"_app/immutable/nodes/8.e7b84c52.js",revision:null},{url:"_app/immutable/nodes/9.6ee55e7e.js",revision:null},{url:"assets/any@180.png",revision:"766c8789189b52ed118e5aa6ffd7e575"},{url:"assets/any@192.png",revision:"119ec84167f3b74971fe8119690cb72c"},{url:"assets/any@512.png",revision:"7fe77746fb6c89b28263b5139296ab3d"},{url:"assets/like@180.png",revision:"766c8789189b52ed118e5aa6ffd7e575"},{url:"assets/like@192.png",revision:"119ec84167f3b74971fe8119690cb72c"},{url:"assets/like@512.png",revision:"7fe77746fb6c89b28263b5139296ab3d"},{url:"assets/maskable@192.png",revision:"7aea69abe42df1f37a6820c90eba9e18"},{url:"assets/maskable@512.png",revision:"e61279e2f03da111520f45d658fc5c01"},{url:"bioimpedance/finished_down.png",revision:"5b2b46cf0a0d9c5687aca8f3f598aeae"},{url:"favicon.png",revision:"530d459d3a59d442355b04002533b874"},{url:"hello-world/urara.webp",revision:"0984329d9559d011846b8360455d1410"},{url:"multiplexed-piezoresistivity/PCB-Render.png",revision:"f1e1329ed7681fe0f806784911bdf96c"},{url:"server/_app/immutable/assets/_layout.bbb77184.css",revision:null},{url:"server/_app/immutable/assets/_layout.dd686552.css",revision:null},{url:"server/_app/immutable/assets/%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B.ef4a1c89.avif",revision:null},{url:"server/_app/immutable/assets/%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B%E3%85%8B.610edfca.avif",revision:null},{url:"server/_app/immutable/assets/%EB%A9%B4%EB%8F%84%EC%8B%A4%ED%8C%A8.0d16115d.avif",revision:null},{url:"server/_app/immutable/assets/%EC%A2%8B%EC%9D%80%EB%B6%84%EC%9C%84%EA%B8%B0%EC%99%80%EA%B7%B8%EB%A0%87%EC%A7%80%EB%AA%BB%ED%95%9C%EC%96%BC%EA%B5%B4.a1ff413f.avif",revision:null},{url:"server/_app/immutable/assets/accuracy-benchmark.83fc0f75.avif",revision:null},{url:"server/_app/immutable/assets/alessandro-and-alessandro.a92f443d.avif",revision:null},{url:"server/_app/immutable/assets/arc-de-thumbsup.a4f95194.avif",revision:null},{url:"server/_app/immutable/assets/bench-party.991bee0c.avif",revision:null},{url:"server/_app/immutable/assets/big-thumbs-up-ben.4d5d6807.avif",revision:null},{url:"server/_app/immutable/assets/burn-test-pig.887d575e.avif",revision:null},{url:"server/_app/immutable/assets/bye-macbong.68222949.avif",revision:null},{url:"server/_app/immutable/assets/cool-lighting-eh.f0644c5c.avif",revision:null},{url:"server/_app/immutable/assets/crazy-german-train-station.07354d11.avif",revision:null},{url:"server/_app/immutable/assets/electrical-schematic.d90c8b9d.avif",revision:null},{url:"server/_app/immutable/assets/electrode-details.aa258e9a.avif",revision:null},{url:"server/_app/immutable/assets/favicon.e0bbce22.avif",revision:null},{url:"server/_app/immutable/assets/finished_down.8c224a1f.avif",revision:null},{url:"server/_app/immutable/assets/finished.f70f6f53.avif",revision:null},{url:"server/_app/immutable/assets/good-book.af3da429.avif",revision:null},{url:"server/_app/immutable/assets/losing-my-hair-(sibal).3141daf5.avif",revision:null},{url:"server/_app/immutable/assets/lotion-test-human.af6d1259.avif",revision:null},{url:"server/_app/immutable/assets/lotion-test-pig.b8d80aca.avif",revision:null},{url:"server/_app/immutable/assets/luxembourg.76cb05ce.avif",revision:null},{url:"server/_app/immutable/assets/namgoongminsan.45681e72.avif",revision:null},{url:"server/_app/immutable/assets/namsan.db197e03.avif",revision:null},{url:"server/_app/immutable/assets/nice-bus-you-got-there.43bcb0e5.avif",revision:null},{url:"server/_app/immutable/assets/notre-dame.01e1adac.avif",revision:null},{url:"server/_app/immutable/assets/PCB-Render.f4dc55d2.avif",revision:null},{url:"server/_app/immutable/assets/people-in-bulgaria.1eaeeaa1.avif",revision:null},{url:"server/_app/immutable/assets/posts.50579275.css",revision:null},{url:"server/_app/immutable/assets/spiral-starecase.07cf1473.avif",revision:null},{url:"server/_app/immutable/assets/stroopwaffeled.052f2cc7.avif",revision:null},{url:"server/_app/immutable/assets/stroopwaffeling.e347f74f.avif",revision:null},{url:"server/_app/immutable/assets/sunset-strong.e4a5052a.avif",revision:null},{url:"server/_app/immutable/assets/sunset-vivid.d843d1e7.avif",revision:null},{url:"server/_app/immutable/assets/surprise-eiffel-tower.3605fbff.avif",revision:null},{url:"server/_app/immutable/assets/system-diagram.e3fe2852.avif",revision:null},{url:"server/_app/immutable/assets/testing-procedure.48bdffe7.avif",revision:null},{url:"server/_app/immutable/assets/urara.313e3d84.avif",revision:null},{url:"server/_app/immutable/assets/wabi-sabi.ceec2075.avif",revision:null},{url:"server/_app/immutable/assets/walking-back-in-dawn.e072847d.avif",revision:null},{url:"server/_app/immutable/assets/why.9691fe7a.avif",revision:null},{url:"server/_app/immutable/assets/woken-up.cdaf83bd.avif",revision:null},{url:"server/chunks/footer.js",revision:"84b6df65dfa4487e3afdd659bf5f5350"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"ba7d0f1757934a85d525973196ce06ed"},{url:"server/chunks/index.js",revision:"930bb2c80faf699b75a8062338d713e9"},{url:"server/chunks/index2.js",revision:"b0d90945da8c610b3f29a012499a4c52"},{url:"server/chunks/index3.js",revision:"5bb692f53b8c02d6b00b9761fc7b04c8"},{url:"server/chunks/internal.js",revision:"bb53f2bc30ef359db52948759eb1484c"},{url:"server/chunks/posts.js",revision:"82e28968e967a2bac74ec5567e421a8b"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"49f788a924be9638934673ff62f97c15"},{url:"server/chunks/stores.js",revision:"53c35a5be2a67045999f25e862b2371d"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"9d652fd81c5d5e41cef548531c9a713d"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"213c6c6bcf86f503a4f3939acfc0e38d"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"cac5ff7dd4676b4033b07a59525b551e"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"3680e786c090c488e5c4d8330cc5ea51"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"3f706ebd4a24dd69c56d0f0efa797aab"},{url:"server/entries/fallbacks/error.svelte.js",revision:"d80723098a8897cd2200668629a2930c"},{url:"server/entries/pages/_layout.svelte.js",revision:"4224e5d6d53c1cd1aa46e44aa64ecc0c"},{url:"server/entries/pages/_layout.ts.js",revision:"65792ad60151c4140c22ed41e100c4e7"},{url:"server/entries/pages/_page.svelte.js",revision:"625dde9763c73d7fbdf03a544b45da15"},{url:"server/entries/pages/about/_page.svelte.md.js",revision:"39d189b73f7d85c081d1274e36a73756"},{url:"server/entries/pages/announcement/_page.svelte.md.js",revision:"1a5939332eb43e0ee8973796850481ac"},{url:"server/entries/pages/bioimpedance/_page.svelte.md.js",revision:"69494efa4c65c4d6c8e8907207ce1e8c"},{url:"server/entries/pages/blog/_page.svelte.md.js",revision:"db10784d44c4cf7f8844c1f81cd4bb9e"},{url:"server/entries/pages/elements/_page.svelte.md.js",revision:"b81e4e2978c0d6493606d7d56acfeeff"},{url:"server/entries/pages/hello-world/_page.svelte.md.js",revision:"4d1eaa5f035209b45be54e7f354082e9"},{url:"server/entries/pages/multiplexed-piezoresistivity/_page.svelte.md.js",revision:"0f79eda78b9ad8c2216b5a1e05282c1d"},{url:"server/entries/pages/pcb-emg/_page.svelte.md.js",revision:"d642cc98a9cafcd1f0e801a4c2e5bbb5"},{url:"server/entries/pages/projects/_page.svelte.md.js",revision:"6b8e428664209e3d9da85ec477ab7338"},{url:"server/entries/pages/resume/_page.svelte.md.js",revision:"ae04f65bc597d1516193e8b172f2a091"},{url:"server/entries/pages/tiplets-and-wristlets/_page.svelte.md.js",revision:"94c06d5b8b53ea3bf15dacbe42ed96c8"},{url:"server/entries/pages/toc-disabled/_page.md.js",revision:"db334faee941024cdf514ed7f57a7327"},{url:"server/index.js",revision:"e5be9024832a00561a6b54bd1ccad5f5"},{url:"server/internal.js",revision:"e0a9404c28f3dfa4c5b401181bed13f7"},{url:"server/manifest-full.js",revision:"60929e2a1c3f618e07cb29107b0fbdfc"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/10.js",revision:"958ebdb8a9cf58cd744e37833c933590"},{url:"server/nodes/11.js",revision:"a397ea3b61313d754be6eb1ca83591b2"},{url:"server/nodes/12.js",revision:"6c0b66134617d6a4f6d65fe5122276eb"},{url:"server/nodes/13.js",revision:"601a6f0323cabc7a2e8346331bc2ec6f"},{url:"server/nodes/14.js",revision:"745c0b7a02f19c6e1e74fad27b236c15"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"},{url:"server/nodes/7.js",revision:"e22e3d1ce8bb198a6783d7a2d6f24681"},{url:"server/nodes/8.js",revision:"bdc52451b2c36e8b730bd7a48718204d"},{url:"server/nodes/9.js",revision:"8e755d984cb8a89877bc64ff812e3169"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
