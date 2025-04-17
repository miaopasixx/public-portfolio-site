---
title: 僵尸射击游戏
description: '射击游戏'
publishDate: 2025-04-17 13:27:00
draft: true
tags:
  - game
  - 僵尸
  - 射击
---

<details>
<summary>游戏说明</summary>

- 点击屏幕射击僵尸
- 每次射击消耗一发子弹，弹夹中有 6 发子弹
- 按 R 键或点击屏幕右下角的重新装弹图标来重新装填子弹
- 不同的僵尸有不同的生命值，需要多次射击才能消灭
- 如果僵尸到达屏幕左侧，你将失去一条生命
- 游戏共有 4 波僵尸，击败所有僵尸即可获胜

</details>

<details>
<summary>操作方法</summary>

- 鼠标点击：射击
- R 键：重新装填子弹
- 右上角按钮：暂停游戏
- 左上角按钮：静音音乐/音效

</details>

<div class="game-container">
  <iframe src="/zombie-game/index.html" width="1024" height="550" frameborder="0"></iframe>
</div>

<style>
.game-container {
  width: 100%;
  max-width: 1024px;
  margin: 2rem auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.game-container iframe {
  width: 100%;
  height: 550px;
  border: none;
}

@media (max-width: 1024px) {
  .game-container iframe {
    height: calc(100vw * 0.54);
    min-height: 300px;
  }
}
</style>
这是一个基于 HTML5、JavaScript 和 CSS 的僵尸射击游戏。在游戏中，你需要射击不断出现的僵尸，保护自己不被僵尸攻击。