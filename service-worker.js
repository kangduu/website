if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let r={};const c=e=>s(e,i),t={module:{uri:i},exports:r,require:c};a[i]=Promise.all(f.map((e=>t[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2f6e241a.css",revision:"6952d30fddce1cbd6b3e73928117f7fe"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/33.d02764ed.js",revision:"18bd8404aa32ea88ea766a13374c57f3"},{url:"assets/js/34.967b3536.js",revision:"54afcaca918aba69bff3e0606f71c92b"},{url:"assets/js/35.b4d04722.js",revision:"7fe7e61dfeb53ee201b8a1390be40163"},{url:"assets/js/36.270c71d8.js",revision:"195588ec1dfd0c576730cdb4fce702dc"},{url:"assets/js/37.4c3c8f4e.js",revision:"60be465c6cd3b9c3add88cb32c096589"},{url:"assets/js/38.32069fe7.js",revision:"c60894c17545d9a720e90a3a27e2c80a"},{url:"assets/js/39.37a6bdc7.js",revision:"23ba8b9a66c5f0ed1ffccc45959baa6f"},{url:"assets/js/app.11403189.js",revision:"507ed05999a79b0e5da7ae5da445b8d6"},{url:"assets/js/layout-Blog.3d52fc8c.js",revision:"e7423a95b2109b210b5e13e4b865fb57"},{url:"assets/js/layout-Layout.311ebf8c.js",revision:"876a07ce330802d4b4cf32bd57adb961"},{url:"assets/js/layout-NotFound.e2fea7ac.js",revision:"05dec314a8b0b33b4c66a73645f2d0d0"},{url:"assets/js/layout-Slide.820c55a9.js",revision:"0f2504b2aed26863a2b3335272027491"},{url:"assets/js/page-BlogHome.7490ee31.js",revision:"49878746b94d7210bf786e6ce25b7f9d"},{url:"assets/js/page-Componentdisabled.b9656807.js",revision:"d185703065233bf76302dc1dae2aae0a"},{url:"assets/js/page-CustomLayout.7cc0741a.js",revision:"229de775e861c10d5881f5504281c86e"},{url:"assets/js/page-Encryptionarticle.82104b4a.js",revision:"f6b39c54eaf209d2d5c36b1f6b68fc9b"},{url:"assets/js/page-Guides.01723cb2.js",revision:"7fdfa049736a760ff618a22972ce9263"},{url:"assets/js/page-IntroPage.50498b74.js",revision:"04940f60cdeef2ac1f550bbee3f58445"},{url:"assets/js/page-MarkdownEnhance.93ac9aca.js",revision:"f50ca0f4b1fde283aa0058751ca470a1"},{url:"assets/js/page-Markdown增强.05d2ad0c.js",revision:"26cc1cfd5e0dd0a1fab7e6dd163f9e6f"},{url:"assets/js/page-pageconfig.0e0e6df3.js",revision:"dbf66f12abc03a43505d3288a0e95f5d"},{url:"assets/js/page-Projecthome.dc265895.js",revision:"de6ca85da63f77388db3782d0e8557ff"},{url:"assets/js/page-Slidepage.4bd0e4f1.js",revision:"27faa9822a3d4aa079be3b2563eacf89"},{url:"assets/js/page-主要功能与配置演示.a121909e.js",revision:"0c559a5a1aea2f2e0136e80ca885dffd"},{url:"assets/js/page-博客主页.6ca60fec.js",revision:"62bc1e5bb9e787f37ca6b1bb557f1a93"},{url:"assets/js/page-密码加密的文章.e0289f5a.js",revision:"4413bf6589de5ab6bf0129a0d992ce15"},{url:"assets/js/page-幻灯片页.b4da638d.js",revision:"c8a03b01a1da1c8f382213f32c4a4382"},{url:"assets/js/page-组件禁用.ca485086.js",revision:"271b431a6eefce8be2d048309b0ff2f5"},{url:"assets/js/page-自定义布局.7fa70f5e.js",revision:"ab4b9ca61c574838ca5e674c5c622b99"},{url:"assets/js/page-页面配置.1a966c73.js",revision:"89da3af007c7df41204d97c91f8453b0"},{url:"assets/js/page-项目主页.b5021df7.js",revision:"a1b0acbe0a913836e974e3aa51d0b0f2"},{url:"assets/js/vendors~flowchart.793ea7cf.js",revision:"97928d3f69be01f227937a1b1a09505c"},{url:"assets/js/vendors~layout-Blog~layout-Layout.d1ab77ce.js",revision:"1e547d9a0797cb6f3ca3f77035f2dd8a"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.d64dd136.js",revision:"984fe6ad328b5a990dcf1a0df8d01c6e"},{url:"assets/js/vendors~layout-Layout.8ce0fe55.js",revision:"84c2d049d4d35eaa466141b0c91bebfa"},{url:"assets/js/vendors~mermaid.ac343e6e.js",revision:"2ab4c203a253a4d8b77e775875701f4f"},{url:"assets/js/vendors~photo-swipe.37fbfc47.js",revision:"d9cd81293dd224d91d5fe5d1af96e5e8"},{url:"assets/js/vendors~reveal.0547b822.js",revision:"a88abc6c5f53b37e574719cfcd793d17"},{url:"assets/js/vendors~waline.d1a4c724.js",revision:"134e6b81c2df3d2df697bd59838bc099"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"748ac7e08d435c242e7333a82feb2c2b"},{url:"article/index.html",revision:"a7addb332c792d1fa1ed66093e2c1549"},{url:"category/Guide/index.html",revision:"07f1c43696e95333a585b25d42edc306"},{url:"category/index.html",revision:"e4dc13abcea3a3634a050a2a61edf55d"},{url:"category/使用指南/index.html",revision:"20a896048d69d373fc0929eb45626eb2"},{url:"encrypt/index.html",revision:"1f35becb675a507eb2a9721f1e0a423c"},{url:"guide/disable.html",revision:"8f1635ac738d534b9d3c6be003b753fb"},{url:"guide/encrypt.html",revision:"11a5a0f15d591f0d402d48dc85c313e5"},{url:"guide/index.html",revision:"8cf4707aac651d30894a674de59aa6e4"},{url:"guide/markdown.html",revision:"758fc0c8a3cbbcb9f1dfde6de2748e2a"},{url:"guide/page.html",revision:"bc18bc0798a82ea263506379f1125858"},{url:"home.html",revision:"372b60d07b8ba2542e55aa6c27f0c3da"},{url:"index.html",revision:"b2ff9602def51e2e1a344717f619c30e"},{url:"intro.html",revision:"4b8fba57738385330cf269bb43a4c8a4"},{url:"layout.html",revision:"0f02c54a07256989086f33692d059e7d"},{url:"slide/index.html",revision:"7c9d9dce4ad8d64a8b0f89951dd4e674"},{url:"slides.html",revision:"f85e2584d63c717456d06383dc8fb717"},{url:"star/index.html",revision:"c388025a506016923170c3b8c3e0dabb"},{url:"tag/encryption/index.html",revision:"818986cf1d077d65a1c3721128a2c841"},{url:"tag/Guide/index.html",revision:"e7a7084c99e8d5283b3e2bcf50dc790f"},{url:"tag/index.html",revision:"f90612d62d1e1c41a10d42f6d6a3f76c"},{url:"tag/markdown/index.html",revision:"f97a80b6dc9f6150211a6755785da08d"},{url:"tag/Page config/index.html",revision:"bd2109dac9b568fe43866f2d96d0c054"},{url:"tag/使用指南/index.html",revision:"f938b4ff36ee094b61c251c6c881ba57"},{url:"tag/文章加密/index.html",revision:"feb94593027016c02565fb982a0f88e9"},{url:"tag/页面配置/index.html",revision:"391c5f98d0fcb4c4bc233fa130ab935c"},{url:"timeline/index.html",revision:"da18c83269c06795b71f0693c3fbafa3"},{url:"zh/guide/disable.html",revision:"0df77a48f759ef56772d959af5fe8039"},{url:"zh/guide/encrypt.html",revision:"e98d5fb4c15d32ee10f0870c0cb2a24f"},{url:"zh/guide/index.html",revision:"00474dd6c5c1b5a5480424903879ac4a"},{url:"zh/guide/markdown.html",revision:"2a0f4dcf8134d5176473ebd8b34fa9f8"},{url:"zh/guide/page.html",revision:"965cd4ef61cc77a5b2f1190cea5355ac"},{url:"zh/home.html",revision:"899cf2ccbd8a4c1f768f98b7b8cd9590"},{url:"zh/index.html",revision:"93989d79a774c8cd995866c7db7dc21d"},{url:"zh/layout.html",revision:"c48e611e46360d815ab05dddad97db92"},{url:"zh/slides.html",revision:"0d9abfb53f707826d73c7eb437aa4734"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"43ec9a63ccd8c6b2c5939551af4f8ce6"},{url:"logo192.png",revision:"da1eea6575a3b6543e9049a225541270"},{url:"logo512.png",revision:"3594e3f9f75526b5b43ec626dcedac5f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
