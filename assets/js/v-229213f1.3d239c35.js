"use strict";(self.webpackChunkblogs_express=self.webpackChunkblogs_express||[]).push([[7463],{8722:(s,n,a)=>{a.r(n),a.d(n,{default:()=>r});var e=a(273);const p=(0,e._)("h1",null,"Scoop 的安装",-1),t={href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("scoop"),c=(0,e.Uk)("是一个类似于 linux 下 apt、rpm、pacman 之类包管理器"),l=(0,e.uE)('<h2 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h2><p>确保 PowerShell 5 (or later, include PowerShell Core) and .NET Framework 4.5 (or later) 已经安装。</p><h2 id="默认安装" tabindex="-1"><a class="header-anchor" href="#默认安装" aria-hidden="true">#</a> 默认安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#默认安装目录：C:\\Users\\&lt;user&gt;\\scoop</span>\nInvoke-Expression <span class="token punctuation">(</span>New-Object System.Net.WebClient<span class="token punctuation">)</span>.DownloadString<span class="token punctuation">(</span><span class="token string">&#39;https://get.scoop.sh&#39;</span><span class="token punctuation">)</span>\n<span class="token comment"># or shorter</span>\niwr -useb get.scoop.sh <span class="token operator">|</span> iex\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="自定义安装-scoop-目录" tabindex="-1"><a class="header-anchor" href="#自定义安装-scoop-目录" aria-hidden="true">#</a> 自定义安装 scoop 目录</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>environment<span class="token punctuation">]</span>::setEnvironmentVariable<span class="token punctuation">(</span><span class="token string">&#39;SCOOP&#39;</span>,<span class="token string">&#39;D:\\Applications\\Scoop&#39;</span>,<span class="token string">&#39;User&#39;</span><span class="token punctuation">)</span> <span class="token comment">#第二个参数是自定义目录</span>\n<span class="token variable">$env</span>:SCOOP<span class="token operator">=</span><span class="token string">&#39;D:\\Applications\\Scoop&#39;</span> <span class="token comment">#和上一条命令的自定义目录相同</span>\nInvoke-Expression <span class="token punctuation">(</span>New-Object System.Net.WebClient<span class="token punctuation">)</span>.DownloadString<span class="token punctuation">(</span><span class="token string">&#39;https://get.scoop.sh&#39;</span><span class="token punctuation">)</span> <span class="token comment">#如果执行此命令报错--&gt;set-executionpolicy remotesigned -scope currentuser</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="使用-常用的" tabindex="-1"><a class="header-anchor" href="#使用-常用的" aria-hidden="true">#</a> 使用（常用的）</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>scoop search <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> <span class="token comment">#搜索包</span>\n\nscoop <span class="token function">install</span> <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> <span class="token comment">#安装包</span>\n\nscoop checkup <span class="token comment">#检测scoop</span>\n\nscoop cleanup <span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> <span class="token comment">#移除旧版本的包</span>\n\nscoop bucket known <span class="token comment">#查看有哪几个bucket(仓库)</span>\n\nscoop bucket list <span class="token comment">#查看已添加的 bucket (仓库)</span>\n\nscoop bucket <span class="token function">add</span> bucketName <span class="token comment">#添加bucket(仓库)</span>\n\nscoop bucket <span class="token function">rm</span> bucketName  <span class="token comment">#移除bucket(仓库)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>全部的命令可以输入 <code>scoop</code> 查看</p>',9),r={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[(0,e._)("a",t,[o,(0,e.Wm)(a)]),c]),l],64)}}},7807:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-229213f1",path:"/other/scoop.html",title:"Scoop 的安装",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"前置条件",slug:"前置条件",children:[]},{level:2,title:"默认安装",slug:"默认安装",children:[]},{level:2,title:"自定义安装 scoop 目录",slug:"自定义安装-scoop-目录",children:[]},{level:2,title:"使用（常用的）",slug:"使用-常用的",children:[]}],filePathRelative:"other/scoop.md",git:{updatedTime:1634016875e3}}}}]);