# Alvaura 市场调研与网站优化报告站

静态 HTML/CSS/JavaScript 报告站，共 **首页 + 8 份报告（9 个 HTML 文件）**。报告图片、图表和广告视频保存在 `assets/`，不需要构建或安装 npm 依赖。

- 在线报告：[Alvaura 报告中心](https://yogayeung.github.io/alvaura-report/)
- 项目规范：[AGENTS.md](AGENTS.md)（Codex 和其他 AI 辅助开发开始前必读）
- 原有本机位置：`E:/咨询类/alvaura/deploy/` 为本站 Git 仓库；`E:/咨询类/alvaura/raw/` 为抓取原始数据，不随仓库提供。其他电脑以实际克隆路径为准。

## 页面与资源

| 文件 | 内容 |
| --- | --- |
| [index.html](index.html) | 报告中心 |
| [summary.html](summary.html) | 执行摘要 |
| [market.html](market.html) | 市场与消费者洞察 |
| [competitors.html](competitors.html) | 竞品拆解 |
| [site-audit.html](site-audit.html) | 网站诊断 |
| [pricing.html](pricing.html) | 定价与搭配销售 |
| [usp.html](usp.html) | USP 与品牌定位 |
| [action-plan.html](action-plan.html) | 实操落地指南 |
| [ads.html](ads.html) | 竞品广告素材拆解 |

共享样式按 `assets/site.css` → `assets/alvaura.css` 加载，各页另有局部样式。`assets/site.js` 负责 Before/After 对比交互。媒体按 `assets/ads/`、`charts/`、`competitors/`、`evidence/`、`products/`、`shots/` 分类；广告素材进一步按品牌分目录。

## 在 VS Code 或 Codex 中开始

已有本地仓库时，直接打开包含本 README 和 `index.html` 的目录，不要另建副本。原有电脑在 VS Code 中选择“文件 → 打开文件夹”，打开 `E:/咨询类/alvaura/deploy/`；Codex 桌面端也选择该目录作为本地项目。

只有在另一台电脑尚无仓库时，才在选定的父目录执行：

```powershell
git clone https://github.com/YogaYeung/alvaura-report.git
cd alvaura-report
```

开始修改前在仓库根目录核对：

```powershell
git status --short
git branch --show-current
git remote -v
```

新开的 Codex 会话先读 `AGENTS.md` 和本 README，再说明本次目标、涉及页面和验收结果。项目规范随仓库保留；不要假定新会话记得上一段聊天中的进度，可让它先检查当前差异。VS Code 的 Markdown 预览快捷键为 `Ctrl+Shift+V`，可用于阅读这两份说明。

多个窗口或会话打开同一目录时，文件、分支、暂存区都是共享的。可分别阅读不同报告；写入时按文件分工，同一文件仅一个会话修改，切换分支前协调正在进行的工作。另开聊天不会自动隔离代码。

## 本地预览（Windows / PowerShell）

在仓库根目录的终端执行以下命令，需要已有 Python 3：

```powershell
python --version
python -m http.server 8000 --bind 127.0.0.1
```

若系统只有 `py` 启动器，可改用 `py -3 -m http.server 8000 --bind 127.0.0.1`。没有 Python 时，可使用已安装的 VS Code Live Server 扩展：右键 `index.html` → “Open with Live Server”，使用它实际显示的本地地址；不要求为此引入项目依赖。

服务启动后保持终端运行，在浏览器打开：

- 首页：[http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- 广告报告：[http://127.0.0.1:8000/ads.html](http://127.0.0.1:8000/ads.html)
- 网站诊断：[http://127.0.0.1:8000/site-audit.html](http://127.0.0.1:8000/site-audit.html)

若 8000 端口已占用，使用 8001 并相应修改浏览器地址，不停止不明进程。`Ctrl+C` 停止自己启动的预览服务。这里只监听本机，不对局域网公开；手机尺寸验证可用桌面浏览器开发者工具的设备模式。

保存 HTML/CSS/JS 后刷新浏览器即可，无需构建或重启静态服务；样式缓存未更新时用 `Ctrl+Shift+R`。直接双击 HTML 可作快速阅读，但正式验证用 HTTP 预览，避免文件协议与实际托管行为差异。

## 修改后的检查

- 仅文档修改：读回文件、核对路径/命令，运行 `git diff --check`，确认差异只包含预期文档。
- 页面局部修改：至少在 390px 手机宽度和 1366px 桌面宽度真实打开受影响页面，检查导航、锚点、图表文字、表格滚动、图片与相关交互；缺陷发生尺寸也要复查。
- 新页面、整体改版或共享样式/脚本修改：检查 390 / 1366 / 1920px。共享资源改动检查全部 9 页，并回归广告 `.hbar` 图表和 Before/After 滑动/并排切换。
- 视频相关修改：核对封面和广告 ID，并实际播放、暂停和拖动；检查控制台及本地资源请求，不以 HTTP 200 代替视觉验证。

完整约束、数据口径与素材保护要求见 [AGENTS.md](AGENTS.md)。仓库当前没有构建命令或自动化测试套件；只报告实际执行的检查。

## 分支、审核与发布

需要提交时使用 `codex/` 前缀的任务分支，逐个文件暂存，检查差异后提交 PR。不要把原始数据、客户内部文件或预览临时产物加入仓库。创建 PR 用于审核，不自动合并，也不代表已经发布。

在线站点由 GitHub Pages 提供；实际发布来源以仓库 Settings → Pages 配置为准，不能仅凭默认分支名称推断。修改报告事实或素材、合并及外部发布均应在对应授权范围内完成。
