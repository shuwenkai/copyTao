(function(window){var svgSprite='<svg><symbol id="icon-ai-home" viewBox="0 0 1024 1024"><path d="M592.795141 942.076152 592.795141 686.385702 432.057273 686.385702l0 256.372995c-5.02341 0.258896-9.030677 0.647753-13.038968 0.647753-75.894528 0-151.827941 0.040932-227.727585 0-26.079982 0-43.617403-16.727986-43.733037-44.430932-0.527003-105.19997-0.366344-210.486922 0.116657-315.686892 0-5.547343 4.213975-12.641925 8.465812-16.428158 68.686359-60.686151 137.733944-120.984469 206.664873-181.329858 45.884027-40.168862 91.729168-80.340793 137.612171-120.467699 3.565199-3.097548 7.213285-6.106068 11.703553-9.939373 27.377534 23.916712 54.633295 47.699372 81.849146 71.526033 89.782839 78.580706 179.449022 157.332305 269.476431 235.612159 9.679453 8.383948 13.809517 16.898879 13.727653 30.446429-0.565888 99.871615-0.406253 199.778023-0.200568 299.602565 0.037862 18.152429-4.213975 33.936927-19.321044 43.959188-5.467525 3.64911-12.392238 6.79373-18.668175 6.835685-80.551594 0.429789-161.103188 0.210801-241.609757 0.169869C596.199681 943.277514 594.978876 942.717765 592.795141 942.076152L592.795141 942.076152zM713.76426 234.18567c0-42.192961-0.039909-81.158415 0-120.084982 0.037862-24.858154 5.627161-30.79333 28.995381-30.835286 36.287461 0 72.573899-0.040932 108.86136 0.041956 18.711154 0.047072 25.186635 7.052626 25.230638 28.085662 0.083911 83.307358 0.282433 166.663834-0.24457 249.971192-0.081864 12.859889 3.321652 21.1149 12.834306 29.287023 39.774889 33.978882 78.772065 68.901253 117.974925 103.609753 19.23304 17.033955 19.721157 25.329898 3.521197 45.591361-9.797134 12.300141-19.393699 24.816199-29.278837 37.075407-12.147668 15.178701-22.193465 16.126282-36.730553 3.221368-139.192156-123.352399-278.385335-246.787686-417.621493-370.181017-4.818749-4.256954-9.758248-8.432043-15.391549-13.33675-31.302937 27.702945-62.36642 55.099922-93.348038 82.579787C305.578674 379.341654 192.588273 479.506958 79.596849 579.63133c-15.307637 13.589506-24.821315 12.777001-37.699624-3.225461-10.656711-13.289678-21.262256-26.66736-31.751145-40.079834-12.231579-15.656585-11.743462-25.765827 3.037173-38.9675 63.054081-56.042387 126.274962-111.870904 189.450816-167.782308 84.193541-74.5366 168.470993-148.983149 252.626671-223.647663 38.187741-33.849946 75.366502-33.849946 113.639177 0.257873 45.235251 40.297798 90.597391 80.429821 135.910413 120.597659C706.96132 228.681306 709.227943 230.441393 713.76426 234.18567L713.76426 234.18567zM713.76426 234.18567"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)