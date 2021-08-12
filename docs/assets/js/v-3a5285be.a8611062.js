"use strict";(self.webpackChunkblogs_gjk=self.webpackChunkblogs_gjk||[]).push([[37],{2997:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});var n=s(6252);const c=(0,n.uE)('<h1 id="如何在-windows-11-中安装-wslg-wsl2" tabindex="-1"><a class="header-anchor" href="#如何在-windows-11-中安装-wslg-wsl2" aria-hidden="true">#</a> 如何在 windows 11 中安装 WSLG(WSL2)</h1><h2 id="什么是-wsl" tabindex="-1"><a class="header-anchor" href="#什么是-wsl" aria-hidden="true">#</a> 什么是 WSL</h2><p>WSL(Windows Subsystem for Linux)：<code>Windows</code>  系统中的一个子系统，在这个子系统上可以运行  <code>Linux</code>  操作系统。</p><p>可以让开发人员直接在  <code>Windows</code>  上按原样运行  <code>GNU/Linux</code>  环境（包括大多数命令行工具、实用工具和应用程序），且不会产生传统虚拟机或双启动设置开销。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45d50080824c40da96b269053664222a~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h2 id="什么是-wsl2" tabindex="-1"><a class="header-anchor" href="#什么是-wsl2" aria-hidden="true">#</a> 什么是 WSL2？</h2><p><code>WSL2</code>  是适用于  <code>Linux</code>  的  <code>Windows</code>  子系统体系结构的一个新版本，它是对基础体系结构的一次重大改造。</p><p>它使用虚拟化技术和  <code>Linux</code>  内核来实现其新功能，主要目标是提高文件系统性能和添加完全的系统调用兼容性。</p><p>个人理解：</p><p><code>WSL</code>：  并不是一个真正的  <code>Linux</code>  操作系统，仅仅是  <code>Linux</code>  应用程序与  <code>Windows</code>  操作系统之间的一个适配层。</p><p>在这个适配层之上，可以运行  <code>Linux</code>  应用程序，有点类似于以前的  <code>cygwin</code>  的方式。</p><p><code>WSL2</code>：它就是一个虚拟机，类似于  <code>Vitual Box</code>，在这个虚拟机之上，运行一个完整的  <code>Linux</code>  操作系统。</p><p>相对于  <code>Virtual Box</code>、<code>VMWare</code>  来说，WSL2 提供更全面的兼容性、与  <code>Windows</code>  系统的互操作性更好、运行速度更快、占用系统资源更少。</p><h2 id="激活-wsl-服务" tabindex="-1"><a class="header-anchor" href="#激活-wsl-服务" aria-hidden="true">#</a> 激活 WSL 服务</h2><blockquote><p>开启<code>linux子系统</code>和<code>虚拟机平台</code>后，必须要重启系统才能生效。</p></blockquote><h3 id="开启方式-1-命令方式" tabindex="-1"><a class="header-anchor" href="#开启方式-1-命令方式" aria-hidden="true">#</a> 开启方式 1-命令方式</h3><p>按  <code>Win+X</code>, 启动  windows terminal (管理员)，注意：是带有管理员的这个啊。</p><p>或者直接在搜索窗口中输入  <code>windows terminal</code>, 然后选择以管理员方式运行：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1221a22ba054d9480a96713567ee734~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p><code>windows terminal</code>  的窗口是：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c78ca52f5b0451d8250a84ea82229c7~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>可以把  <code>windows terminal</code>  理解成升级版的、功能更强劲的  <code>PowerShell/cmd</code>。</p><p>在  <code>windows terminal</code>  窗口中，输入如下指令来激活  <code>WSL</code>  服务：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 开启linux子系统</span>\ndism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\n<span class="token comment">#开启虚拟机平台</span>\ndism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n</code></pre></div><h3 id="开启方式-2-图形化" tabindex="-1"><a class="header-anchor" href="#开启方式-2-图形化" aria-hidden="true">#</a> 开启方式 2-图形化</h3><p>按下  <code>Win + R</code>，调出命令输入窗口。输入指令  <code>appwiz.cpl</code>。</p><p>点击左侧的  【启动或关闭 Windows 功能】：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3c481c6878e45beb65f27b326d97da1~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>弹出下面这个窗口：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/162fdc9d9ab0400c942f4fbb38b387c5~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>需要勾选【适用于 Linux 的 Windows 子系统】和【虚拟机平台】这两项。</p><p>接下来要做的事情，就是安装  <code>Ubuntu</code>  操作系统。</p><h2 id="设置-wsl-的版本为-wsl2" tabindex="-1"><a class="header-anchor" href="#设置-wsl-的版本为-wsl2" aria-hidden="true">#</a> 设置 WSL 的版本为 WSL2</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>wsl --set-default-version <span class="token number">2</span>\n</code></pre></div><h2 id="执行更新-wsl-命令已确认-wsl-为最新版" tabindex="-1"><a class="header-anchor" href="#执行更新-wsl-命令已确认-wsl-为最新版" aria-hidden="true">#</a> 执行更新 wsl 命令已确认 wsl 为最新版</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>wsl --update\nwsl --install // 安装wslg\n</code></pre></div><blockquote><p>如果更新失败可以在更新设置中打开<code>接收其它Microsoft产品的更新</code>选项</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d28342e25a445e686cdaeb2885d6c15~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p></blockquote><h2 id="安装-ubuntu-20-04-操作系统" tabindex="-1"><a class="header-anchor" href="#安装-ubuntu-20-04-操作系统" aria-hidden="true">#</a> 安装 Ubuntu-20.04 操作系统</h2><h3 id="安装方式-1-命令安装" tabindex="-1"><a class="header-anchor" href="#安装方式-1-命令安装" aria-hidden="true">#</a> 安装方式 1-命令安装</h3><p><strong>查看可安装版本</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>wsl --list --online // 列出所有可安装的linux版本\n</code></pre></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a295c7db89d141e7a27ccfdb6d6262c4~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p><strong>开始安装</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>wsl --install -d Ubuntu-20.04 // 安装Ubuntu-20.04\n</code></pre></div><h3 id="安装方式-2-图形化-windows-store" tabindex="-1"><a class="header-anchor" href="#安装方式-2-图形化-windows-store" aria-hidden="true">#</a> 安装方式 2-图形化（windows store）</h3><p>启动 【Windows Store】并搜索  <code>Ubuntu</code>，然后选择要安装的系统</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/934fde56c8fc482b94ef3da24602b0c0~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>安装完成之后，点击【启动】按钮(图片-侵删)：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3fc2cd342b6f4f54a92fb8d986958099~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>第一次打开速度稍微慢一些，大约 1 分钟左右吧，提示设置用户名、密码，然后就进入我们熟悉的窗口了(图片-侵删)：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e8b7a77d1f34fab8bd9ec0f7ee6bacb~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>这样，<code>Ubuntu-20.04</code>  系统就安装好了！</p><h2 id="安装-gui-程序并测试" tabindex="-1"><a class="header-anchor" href="#安装-gui-程序并测试" aria-hidden="true">#</a> 安装 GUI 程序并测试</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update\n<span class="token function">sudo</span> <span class="token function">apt</span> upgrade\n<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gedit // gnome桌面下的编辑器\n</code></pre></div><p>命令执行完成功后会在开始菜单下生成<code>Ubuntu-20.04</code>文件下（如下图）</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98a18d0226de44c68b337ca86deaa675~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>打开程序后如下图</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f1f8fb44158460e86cf42091f8d1b8d~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>至此在 win11 下安装 wslg 教程完成。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',60),i={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"},t=(0,n.Uk)("在 Windows 10 上安装 WSL | Microsoft Docs"),d={href:"https://devblogs.microsoft.com/commandline/the-initial-preview-of-gui-app-support-is-now-available-for-the-windows-subsystem-for-linux-2/#getting-started-with-this-feature",target:"_blank",rel:"noopener noreferrer"},o=(0,n.Uk)("GUI 应用支持的初始预览现在可用于 Linux |的 Windows 子系统窗口命令行 (microsoft.com)"),l={render:function(e,a){const s=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[c,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Wm)("a",i,[t,(0,n.Wm)(s)])])]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Wm)("a",d,[o,(0,n.Wm)(s)])])])])],64)}}},2246:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n={key:"v-3a5285be",path:"/other/wsl.html",title:"如何在 windows 11 中安装 WSLG(WSL2)",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"什么是 WSL",slug:"什么是-wsl",children:[]},{level:2,title:"什么是 WSL2？",slug:"什么是-wsl2",children:[]},{level:2,title:"激活 WSL 服务",slug:"激活-wsl-服务",children:[{level:3,title:"开启方式 1-命令方式",slug:"开启方式-1-命令方式",children:[]},{level:3,title:"开启方式 2-图形化",slug:"开启方式-2-图形化",children:[]}]},{level:2,title:"设置 WSL 的版本为 WSL2",slug:"设置-wsl-的版本为-wsl2",children:[]},{level:2,title:"执行更新 wsl 命令已确认 wsl 为最新版",slug:"执行更新-wsl-命令已确认-wsl-为最新版",children:[]},{level:2,title:"安装 Ubuntu-20.04 操作系统",slug:"安装-ubuntu-20-04-操作系统",children:[{level:3,title:"安装方式 1-命令安装",slug:"安装方式-1-命令安装",children:[]},{level:3,title:"安装方式 2-图形化（windows store）",slug:"安装方式-2-图形化-windows-store",children:[]}]},{level:2,title:"安装 GUI 程序并测试",slug:"安装-gui-程序并测试",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"other/wsl.md",git:{}}}}]);