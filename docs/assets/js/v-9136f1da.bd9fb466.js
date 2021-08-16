"use strict";(self.webpackChunkblogs_gjk=self.webpackChunkblogs_gjk||[]).push([[980],{9156:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="获取-url-中的参数" tabindex="-1"><a class="header-anchor" href="#获取-url-中的参数" aria-hidden="true">#</a> 获取 url 中的参数</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 方法1</span>\n<span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([^?=&amp;]+)(=([^&amp;]*))</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> tmp <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span>\n        obj<span class="token punctuation">[</span>tmp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n        <span class="token keyword">return</span> obj\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 方法2</span>\n<span class="token keyword">function</span> <span class="token function">params2json</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>searchParams\n<span class="token punctuation">}</span>\n<span class="token comment">// 方法3</span>\n<span class="token keyword">function</span> <span class="token function">params2json</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 方法2和方法3的使用</span>\n<span class="token keyword">const</span> uri <span class="token operator">=</span> <span class="token string">&#39;http://baidu.com?ie=10&amp;b=c&#39;</span>\n<span class="token function">params2json</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;ie&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="颜色-hex-转-rgb" tabindex="-1"><a class="header-anchor" href="#颜色-hex-转-rgb" aria-hidden="true">#</a> 颜色 HEX 转 RGB</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hex2rgb</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> hexArr <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-zA-Z\\d]{2})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> tmp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        target<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">0x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> target<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="获取-unix-时间戳" tabindex="-1"><a class="header-anchor" href="#获取-unix-时间戳" aria-hidden="true">#</a> 获取 unix 时间戳</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUnixTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="颜色叠加算法" tabindex="-1"><a class="header-anchor" href="#颜色叠加算法" aria-hidden="true">#</a> 颜色叠加算法</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * 颜色叠加\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">c1</span> 颜色1-HEX格式\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">c2</span> 颜色2-HEX格式\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">ratio</span> 小数-c1:所占比重；1-ratio:c2所占比重\n * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> HEX格式\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">colorBlend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">c1<span class="token punctuation">,</span> c2<span class="token punctuation">,</span> ratio</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    ratio <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>ratio<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> r1 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> g1 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> b1 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>c1<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> r2 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>c2<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> g2 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>c2<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> b2 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>c2<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>r1 <span class="token operator">*</span> ratio <span class="token operator">+</span> r2 <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> ratio<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> g <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>g1 <span class="token operator">*</span> ratio <span class="token operator">+</span> g2 <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> ratio<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> b <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>b1 <span class="token operator">*</span> ratio <span class="token operator">+</span> b2 <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> ratio<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    r <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>\n    g <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>\n    b <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>b <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>r<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',8),t={render:function(n,s){return p}}},7581:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-9136f1da",path:"/basic/bom.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"获取 url 中的参数",slug:"获取-url-中的参数",children:[]},{level:2,title:"颜色 HEX 转 RGB",slug:"颜色-hex-转-rgb",children:[]},{level:2,title:"获取 unix 时间戳",slug:"获取-unix-时间戳",children:[]},{level:2,title:"颜色叠加算法",slug:"颜色叠加算法",children:[]}],filePathRelative:"basic/bom.md",git:{updatedTime:1628762435e3,contributors:[{name:"GuoJikun",email:"guojikun@y-open.com",commits:1}]}}}}]);