(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[768],{65109:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(52983),o=a(62050),s=a.n(o);function i(e){let{debounce:t,scroll:a,polyfill:o,offsetSize:i}=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e;const l=o||("undefined"==typeof window?class{}:window.ResizeObserver);if(!l)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[u,d]=(0,r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),m=(0,r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:u}),h=t?"number"==typeof t?t:t.scroll:null,p=t?"number"==typeof t?t:t.resize:null,g=(0,r.useRef)(!1);(0,r.useEffect)((()=>(g.current=!0,()=>{g.current=!1})));const[A,f,b]=(0,r.useMemo)((()=>{const e=()=>{if(!m.current.element)return;const{left:e,top:t,width:a,height:r,bottom:o,right:s,x:n,y:l}=m.current.element.getBoundingClientRect(),u={left:e,top:t,width:a,height:r,bottom:o,right:s,x:n,y:l};m.current.element instanceof HTMLElement&&i&&(u.height=m.current.element.offsetHeight,u.width=m.current.element.offsetWidth),Object.freeze(u),g.current&&!c(m.current.lastBounds,u)&&d(m.current.lastBounds=u)};return[e,p?s()(e,p):e,h?s()(e,h):e]}),[d,i,h,p]);function w(){m.current.scrollContainers&&(m.current.scrollContainers.forEach((e=>e.removeEventListener("scroll",b,!0))),m.current.scrollContainers=null),m.current.resizeObserver&&(m.current.resizeObserver.disconnect(),m.current.resizeObserver=null)}function v(){m.current.element&&(m.current.resizeObserver=new l(b),m.current.resizeObserver.observe(m.current.element),a&&m.current.scrollContainers&&m.current.scrollContainers.forEach((e=>e.addEventListener("scroll",b,{capture:!0,passive:!0}))))}var y,C,x;return y=b,C=Boolean(a),(0,r.useEffect)((()=>{if(C){const e=y;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}}),[y,C]),x=f,(0,r.useEffect)((()=>{const e=x;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[x]),(0,r.useEffect)((()=>{w(),v()}),[a,b,f]),(0,r.useEffect)((()=>w),[]),[e=>{e&&e!==m.current.element&&(w(),m.current.element=e,m.current.scrollContainers=n(e),v())},u,A]}function n(e){const t=[];if(!e||e===document.body)return t;const{overflow:a,overflowX:r,overflowY:o}=window.getComputedStyle(e);return[a,r,o].some((e=>"auto"===e||"scroll"===e))&&t.push(e),[...t,...n(e.parentElement)]}const l=["x","y","top","bottom","left","right","width","height"],c=(e,t)=>l.every((a=>e[a]===t[a]));var u=a(80541),d=a.p+"static/image/rt1_teaser.019f41ff.png",m="data:image/png;base64,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",h=a(56593),p={wrapper:"wrapper-IaQ7iE",header:"header-WWbz6K",subtitle:"subtitle-j95RCE",abstract:"abstract-CX4spt",text:"text-VpKXVg",title:"title-exvvTv",layout:"layout-W8rEGd","mobile-layout":"mobile-layout-HoPqbR",mobileLayout:"mobile-layout-HoPqbR"},g=a(97458);const A=[{title:"Paper",preview:m,url:"https://www.youtube.com"},{title:"Paper",preview:m,url:"https://www.youtube.com"},{title:"Paper",preview:m,url:"https://www.youtube.com"},{title:"Paper",preview:m,url:"https://www.youtube.com"},{title:"Paper",preview:m,url:"https://www.youtube.com"}];var f=()=>{const[e,{width:t}]=i(),a=(0,h.d)();return(0,g.jsxs)("div",{className:(0,u.m)("flex w-full flex-col bg-white font-[lato] items-center py-5",p.wrapper,a?"px-8":""),children:[(0,g.jsx)("div",{className:(0,u.m)(p.header,"mt-5"),children:"RT-1: Robotics Transformer"}),(0,g.jsx)("div",{className:p.subtitle,children:"for Real-World Control at Scale "}),(0,g.jsx)("div",{className:(0,u.m)(p.abstract,"mt-5 w-[55%]",a?"w-full":""),children:"Anthony Brohan Noah Brown Justice Carbajal Yevgen Chebotar Joseph Dabis Chelsea Finn Keerthana Gopalakrishnan Karol Hausman Alex Herzog Jasmine Hsu Julian Ibarz Brian Ichter Alex Irpan Tomas Jackson Sally Jesmonth Nikhil Joshi Ryan Julian Dmitry Kalashnikov Yuheng Kuang Isabel Leal Kuang-Huei Lee Sergey Levine Yao Lu Utsav Malla Deeksha Manjunath Igor Mordatch Ofir Nachum Carolina Parada Jodilyn Peralta Emily Perez Karl Pertsch Jornell Quiambao Kanishka Rao Michael Ryoo Grecia Salazar Pannag Sanketi Kevin Sayed Jaspiar Singh Sumedh Sontakke Austin Stone Clayton Tan Huong Tran Vincent Vanhoucke Steve Vega Quan Vuong Fei Xia Ted Xiao Peng Xu Sichun Xu Tianhe Yu Brianna Zitkovich"}),(0,g.jsx)("div",{className:"flex gap-4 py-[20px]",children:A.map((({title:e,url:t,preview:a},r)=>(0,g.jsxs)("div",{className:"flex cursor-pointer flex-col items-center gap-1 rounded-md px-2 hover:translate-y-[-1px] hover:bg-[#ccc]",onClick:()=>{window.open(t,"_blank")},children:[(0,g.jsx)("img",{className:"w-[50px] object-contain",src:a}),(0,g.jsx)("span",{className:"text-[rgb(39,128,227)]",children:e})]},r)))}),(0,g.jsx)("video",{autoPlay:!0,className:(0,u.m)(p[a?"mobile-layout":"layout"],"object-contain my-4"),controls:!0,loop:!0,muted:!0,playsInline:!0,src:"https://media.w3.org/2010/05/sintel/trailer.mp4"}),(0,g.jsxs)("div",{className:(0,u.m)(p[a?"mobile-layout":"layout"],"mt-[25px]"),children:[(0,g.jsx)("div",{className:(0,u.m)(p.title,"w-full self-start mb-[15px]"),children:"Abstract"}),(0,g.jsx)("div",{className:(0,u.m)(p.text,"w-full"),children:"By transferring knowledge from large, diverse, task-agnostic datasets, modern machine learning models can enable solving specific downstream tasks either zero-shot or with small task-specific datasets to a high level of performance. While this capability has been demonstrated in other fields such as computer vision, natural language processing or speech recognition, it remains to be shown in robotics, where the generalization and fine-tuning capabilities of the models are particularly critical due to the difficulty of collecting real-world robotic data. We argue that one of the keys to the success of such general robotic models lies with open-ended task-agnostic training, combined with high-capacity architectures that can absorb all of the diverse, robotic data. In this paper, we present a model class, dubbed Robotics Transformer, that exhibits promising scalable, pre-trained model properties. We verify our conclusions in a comprehensive study of different model classes and their ability to generalize as a function of the data size, model size, and data diversity based on a large-scale data collection on real robots performing real-world tasks."})]}),(0,g.jsxs)("div",{ref:e,className:(0,u.m)(p[a?"mobile-layout":"layout"],"mt-[25px]"),children:[(0,g.jsx)("div",{className:(0,u.m)(p.title,"w-full self-start mb-[15px]"),children:"Video"}),(0,g.jsx)("iframe",{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",className:"w-full",frameBorder:"0",height:Math.floor(t/16*9),referrerPolicy:"strict-origin-when-cross-origin",src:"https://www.youtube.com/embed/7zC8-06198g?si=mdCdPb0yOFIyH9ff",title:"YouTube video player"})]}),(0,g.jsxs)("div",{className:(0,u.m)(p[a?"mobile-layout":"layout"],"mt-[25px]"),children:[(0,g.jsx)("div",{className:(0,u.m)(p.title,"w-full self-start mb-[15px]"),children:"Approach"}),(0,g.jsxs)("div",{className:(0,u.m)(p.text,"w-full"),children:["In the past few years, we have seen powerful machine learning models that achieve significant generalization capabilities by absorbing large amounts of data. For example, large language models such as PaLM or GPT-3 can generalize to many tasks such as language understanding, code completion or arithmetic, especially as their number of parameters increase. Importantly, these large models have the ability to effectively absorb large amounts of diverse data. In the case of large language models that data being text, which allows them to discover patterns and generalize between the observed datapoints. Can we find similar data-absorbent models for robotics? Does such a model enjoy the benefits of scale seen in other domains? And does it exhibit effective zero-shot generalization to new tasks, environments, and objects?",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"To investigate these questions, we present Robotics Transformer, RT-1, a Transformer-based model that we train a large dataset of multi-task demonstrations and showcase how it generalizes to new tasks, how it is robust to changes in the environment and how it allows to execute long-horizon instructions. We also demonstrate its capabilities to effectively absorb data from very different domains such as simulation or different robots.",(0,g.jsx)("img",{className:"my-6 w-full object-contain",src:d}),"How does Robotics Transformer model work? RT-1 takes a short sequence of images and a task description in natural language as input and outputs an action for the robot to execute at each time step. To achieve this, our architecture leverages several elements: first, the images and text are processed via an ImageNet-pretrained convolutional neural network (EfficientNet) conditioned on a pretrained embedding of the instruction via FiLM layers to extract visual features that are relevant to the task at hand. This is then followed by a Token Learner module to compute a compact set of tokens, and finally a Transformer to attend over these tokens and produce discretized action tokens. The actions consist of seven dimensions for the arm movement (x, y, z, roll, pitch, yaw, opening of the gripper), three dimensions for base movement (x, y, yaw) and an extra discrete dimension to switch between three modes: controlling the arm, the base, or terminating the episode. RT-1 performs closed-loop control and commands actions at 3Hz until it either yields a terminate action or runs out of pre-set number of time steps."]})]}),(0,g.jsxs)("div",{className:(0,u.m)(p[a?"mobile-layout":"layout"],"mt-[25px]"),children:[(0,g.jsx)("div",{className:(0,u.m)(p.title,"w-full self-start mb-[15px]"),children:"Data"}),(0,g.jsxs)("div",{className:(0,u.m)(p.text,"w-full"),children:["To test RT-1 in the real world, we collected a large dataset of real-world robotic experiences that consists of over 130k episodes, which contain over 700 tasks, and was collected with a fleet of 13 robots over 17 months.",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),"The current set of skills includes picking, placing, opening and closing drawers, getting items in and out drawers, placing elongated items up-right, knocking them over, pulling napkins and opening jars. The list of instructions was designed to show multiple skills with many objects to test aspects of RT-1 such as generalization to new instructions and ability to perform many skills. The entire process of adding tasks and data is described in detail in the paper. Since we do not make any assumptions about particular skills when adding new instructions, the system is easily extendable, and we can continuously provide more diverse data to improve its capabilities."]})]})]})}},62050:e=>{function t(e,t,a){var r,o,s,i,n;function l(){var c=Date.now()-i;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,a||(n=e.apply(s,o),s=o=null))}null==t&&(t=100);var c=function(){s=this,o=arguments,i=Date.now();var c=a&&!r;return r||(r=setTimeout(l,t)),c&&(n=e.apply(s,o),s=o=null),n};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(n=e.apply(s,o),s=o=null,clearTimeout(r),r=null)},c}t.debounce=t,e.exports=t}}]);