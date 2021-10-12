"use strict";(self.webpackChunkblogs_express=self.webpackChunkblogs_express||[]).push([[8312],{5973:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(273);const p=(0,t._)("h1",null,"ContextMenu 右键菜单",-1),e=(0,t._)("h2",{id:"基础用法",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#"),(0,t.Uk)(" 基础用法")],-1),o=(0,t._)("p",null,[(0,t.Uk)("最常用的方式，通过 "),(0,t._)("code",null,"menus"),(0,t.Uk)(" 定义菜单的数据")],-1),c=(0,t._)("p",null,"在此区域内显示自定义右键菜单",-1),l=(0,t._)("p",null,"在此区域内显示自定义右键菜单",-1),u=(0,t._)("p",null,"在此区域内显示自定义右键菜单",-1),i=(0,t._)("p",null,"在此区域内显示自定义右键菜单",-1),r=(0,t._)("p",null,"在此区域内显示自定义右键菜单",-1),k=(0,t._)("p",null,"在此区域内显示自定义右键菜单",-1),m=(0,t._)("p",null,"在此区域内显示自定义右键菜单",-1),g=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContextMenu</span> <span class="token attr-name">:menus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@menu-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>在此区域内显示自定义右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>在此区域内显示自定义右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>在此区域内显示自定义右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>在此区域内显示自定义右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>在此区域内显示自定义右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>在此区域内显示自定义右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>在此区域内显示自定义右键菜单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContextMenu</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> menus <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    command<span class="token operator">:</span> <span class="token string">&quot;copy&quot;</span><span class="token punctuation">,</span>\n    text<span class="token operator">:</span> <span class="token string">&quot;复制&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    command<span class="token operator">:</span> <span class="token string">&quot;paste&quot;</span><span class="token punctuation">,</span>\n    text<span class="token operator">:</span> <span class="token string">&quot;粘贴&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    command<span class="token operator">:</span> <span class="token string">&quot;move&quot;</span><span class="token punctuation">,</span>\n    text<span class="token operator">:</span> <span class="token string">&quot;移动&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">menuClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">command：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>command<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">；text：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="组件属性和事件" tabindex="-1"><a class="header-anchor" href="#组件属性和事件" aria-hidden="true">#</a> 组件属性和事件</h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>menus</td><td>配置菜单的数组。例子:[{command: &#39;copy&#39;, text: &#39;复制&#39;}]</td><td>Array</td><td>[]</td></tr><tr><td>menuWrapClass</td><td>菜单容器的类名。</td><td>String</td><td>-</td></tr><tr><td>menuItemClass</td><td>菜单子项的类名。</td><td>String</td><td>-</td></tr><tr><td>menu-click</td><td>点击菜单时触发的事件，默认参数是一个 Object。</td><td>-</td><td>-</td></tr></tbody></table>',3),d={setup(n){const s=[{command:"copy",text:"复制"},{command:"paste",text:"粘贴"},{command:"move",text:"移动"}],a=n=>{alert(`command：${n.command}；text：${n.text}`)};return(n,d)=>{const b=(0,t.up)("ContextMenu");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,o,(0,t.Wm)(b,{menus:s,onMenuClick:a},{default:(0,t.w5)((()=>[c,l,u,i,r,k,m])),_:1}),g],64)}}}},3702:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-5988aa5c",path:"/vue/component/content-menu.html",title:"ContextMenu 右键菜单",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础用法",slug:"基础用法",children:[]},{level:2,title:"组件属性和事件",slug:"组件属性和事件",children:[]}],filePathRelative:"vue/component/content-menu.md",git:{updatedTime:1634016875e3}}}}]);