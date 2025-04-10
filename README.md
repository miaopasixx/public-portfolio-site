# 🌟 极客资源工具组 - 个人网站
[![Netlify Status](https://api.netlify.com/api/v1/badges/a7e460c3-d4bb-4a7b-a794-6285b6c9c227/deploy-status)](https://app.netlify.com/sites/mpsxx/deploys)

### 📱 网站预览
小太阳🔆的工具集:  <a href="https://tool.mpsxx.top/" target="_blank">tool.mpsxx.top</a>

仓库地址:   <a href="https://github.com/miaopasixx/public-portfolio-site" target="_blank">github.com/miaopasixx/public-portfolio-site</a>

<img src="public/preview-01.jpg" alt="Blog Preview" width="640" height="auto" style="display:inline-block;margin:12px;">


---

### 技术栈

- Astro.js 4.15.9
- Sass 1.79.4
- typescript: 5.6.2

---

### 字体选择

中文标题字体： 汇文明朝体 <a href="https://tieba.baidu.com/p/7193815211" target="_blank">官方链接</a>

正文字体：思源黑体 <a href="https://fonts.google.com/noto/specimen/Noto+Sans+SC?query=Noto+sans+sc" target="_blank">Google Font</a>

英文字体：Special Elite   <a href="https://fonts.google.com/specimen/Special+Elite" target="_blank">Google Font</a>

中文字题由于体量过大，所以其中的标题，我选择了转化为 SVG 的格式嵌入。可以自行下载字体，再转化格式替换。

---

### 基础用法说明
#### Data 网站主要信息
 主要的网站信息，主要集中在 `src/data/` 下面，可以通过修改这几个文件中的数据来修改为自己的网站，
 - `content.ts` 网站的基本信息，包括联系方式、导航、TDK 等
 - `project.ts` 项目信息，主要展示在项目列表中，但是具体的项目详细页面，需要手动创建
 - `home.json` 首页展示的作品列表，可选择展示的内容信息比较多
 About 页面需要手动添加自己的个人介绍，博客内容，只需要在 `content/blog/*`文件夹下面添加 markdown 文件即可, 按照固定格式，博客列表会自动添加标题和路径



 网站主要信息存放在  `src/data/content.ts`
 修改里面对应的数据即可
 部分需要在页面中手动修改


#### Index页面项目展示
项目数据存放地址在
`src/data/home.json`

```Typescript
[
	{
		"id": "1",
		"cover": "/assets/cover/cover-todo.jpg",
		"title": "待办清单网页版",
		"desc": "一款优秀的设计简洁的 Todolist 网页版本",
		"url": "https://todo.uiineed.com/",
		"detail": "/detail/todo",
		"category": "web",
		"tag": "Web",
		"date": "2023-07-05",
		"mark": true,
	},
]
```

```Typescript
		"id" // 项目id  可选填
		"title"  //项目名称  必填
		"cover"  // 项目封面图片  可选填
		"desc" // 项目描述  可选填
		"url" /// 项目地址  可选填
		"detail" // 项目详细介绍页面路径  可选填
		"category" // 项目分类 可选填, 为空则默认分类到 other
		"tag" // 项目标签 可选填, 建议一定要填写
		"date" // 项目创建时间 可选填
		"mark" // 是否显示推荐标签  可选填 默认 false
```

#### 项目列表

项目 `/project`

```Typescript
export interface ProjectItem {
	id?: number; // 唯一标识符
	title: string // 项目名称
	title_en?: string //英文项目名称
	description?: string  // 项目描述
	date?: string		//发布日期
	detail?: string //详细页路径
  url?: string  //上线链接
	tags?: string[] //标签
	cover?: string[] //封面
}
```

#### 项目详细介绍
具体项目内容需要新建页面*.astro，手动存档，url 在project.json 的 `detail` 属性对应填写, 不填写的话，首页项目没有链接
`src/pages/detail/`

---

### 🚀 项目结构

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/                # 静态资源
│   ├── images/
│   ├── logo.svg
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/            # 资源文件
│   │   └── *Layout.astro*
│   ├── components/        # 组件
│   │   ├── *
│   ├── layouts/           # 布局
│   │   └── Layout.astro
│   ├── content/           # 内容
│   │   └── *
│   ├── data/              # 数据
│   │   ├── content.ts
│   │   ├── project.ts
│   │   └── home.json
│   ├── effets/            # 特效
│   │   └── *.astro
│   ├── layouts/           # 布局
│   │   └── Layout.astro
│   └── pages/             # 页面
│       ├── index.astro
│       ├── about.astro
│       ├── project.astro
│       ├── blog.astro
│       └── 404.astro
├── package.json           # 项目配置
```

---

### 🧞 启动


Yarn Command:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help`    | Get help using the Astro CLI                     |

---

#### 快速开始：
# 全局安装yarn包管理工具
- npm install -g yarn	

# 安装项目依赖
- yarn install

# 启动开发服务器
- yarn dev

### 👨‍💻 关于作者
我是小太阳🔆，极客资源工具组室长，致力于分享实用工具和技术见解。欢迎关注我的Github @miaopasixx 或加入我的 极客资源工具组 。

#### 🛠️ 我的项目
- 💡 极客资源工具组 加入我们
- 🎉 个人工具集 tool.mpsxx.top
- 🎨 Github @miaopasixx

### 💜支持作者


如果觉得有所帮助的话，一点点支持就可以大大激励创作者的热情，感谢！

<img src="public/ricocc/zanshangma.jpg" alt="ricocc-wechat" width="280" height="auto" style="display:inline-block;margin:12px;">

### 特别感谢

本项目基于 Rico 的开源项目二次开发，感谢 Rico 的无私分享。Rico 是一位网页/UI设计师，主要专注于网页视觉和独立开发。你可以在他的博客 <a href="https://blog.ricocc.com/" target="_blank">Rico's Blog</a> 了解更多。同时也欢迎关注他的小红书 [@Rico的设计漫想](https://www.xiaohongshu.com/user/profile/5f2b6903000000000101f51f) 和 推特 [@ricouii](https://x.com/ricouii)。


#### Rico的项目
- 💡 网页灵感库 <a href="https://inspoweb.com/" target="_blank">InspoWeb.com</a>
- 🎉 UIUX 工具&资源 <a href="https://uiuxdeck.com/" target="_blank"> UIUXDECK.com</a>
- 🎨 原创免费渐变 <a href="http://gradientshub.com/" target="_blank">GradientsHub</a>
- ✔️ Todo List <a href="https://github.com/ricocc/uiineed-todo-list/" target="_blank">Github</a>