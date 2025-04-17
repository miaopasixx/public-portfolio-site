---
title: 打工人模拟器
description: '疯狂打工人'
publishDate: 2025-04-17 13:27:00
draft: true
tags:
  - game
  - 打工人
---

<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
  <details style="flex-grow: 1;">
    <summary>游戏玩法</summary>
    你的目标是在一年内获得尽可能多的粉丝！通过不断创建作品，提升你的 HTML、CSS、JavaScript 和设计技能，看看你能获得多少粉丝。

    1. 输入你的名字开始游戏
    2. 通过按键盘任意键来编写代码
    3. 完成作品后可以选择发布或放弃
    4. 使用获得的粉丝进行研究，提升你的技能
    5. 如果你的作品足够优秀，可能会被推荐，获得更多浏览量
  </details>
  <button id="openGameBtn" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-left: 20px;">点击全屏体验游戏</button>
</div>

<div style="text-align: center;">
  <img src="/workers/preview.jpg" alt="打工人模拟器预览" style="max-width: 100%; height: auto; cursor: pointer;" id="gamePreview" onclick="openGameModal()">
</div>

<div id="gameModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.95); backdrop-filter: blur(5px);">
  <span style="position: absolute; top: 55px; right: 35px; color: #0af; font-size: 40px; font-weight: bold; cursor: pointer; text-shadow: 0 0 10px #0af; transition: all 0.3s ease;" onclick="closeGameModal()" onmouseover="this.style.textShadow='0 0 20px #0af'" onmouseout="this.style.textShadow='0 0 10px #0af'">&times;</span>
  <div style="width: 80%; height: 80%; margin: 5% auto; border: 2px solid #0af; border-radius: 10px; box-shadow: 0 0 20px #0af, inset 0 0 20px rgba(0, 170, 255, 0.5); position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: linear-gradient(90deg, transparent, #0af, transparent); animation: scan-line 2s linear infinite;"></div>
    <iframe src="/workers/index.html" style="width: 100%; height: 100%; border: none; background-color: rgba(0,0,0,0.8);" allowfullscreen></iframe>
  </div>
</div>

<style>
@keyframes scan-line {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes pulse {
  0% { box-shadow: 0 0 10px #0af, inset 0 0 10px rgba(0, 170, 255, 0.5); }
  50% { box-shadow: 0 0 20px #0af, inset 0 0 20px rgba(0, 170, 255, 0.5); }
  100% { box-shadow: 0 0 10px #0af, inset 0 0 10px rgba(0, 170, 255, 0.5); }
}
</style>

<script>
function openGameModal() {
  document.getElementById('gameModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeGameModal() {
  document.getElementById('gameModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// 为按钮添加点击事件
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('openGameBtn').addEventListener('click', openGameModal);
  document.getElementById('gamePreview').addEventListener('click', openGameModal);
});

// 点击ESC键关闭弹窗
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && document.getElementById('gameModal').style.display === 'block') {
    closeGameModal();
  }
});
</script>

## 游戏提示

- 研究新技能可以提高你创建作品的质量
- 被推荐的作品会获得更多的浏览量和粉丝
- 尝试平衡提升各项技能，创建全面的作品
- 可以开启自动模式，让游戏自动按键，提高效率

祝你在打工人模拟器中玩得开心！看看你能在一年内获得多少粉丝吧！