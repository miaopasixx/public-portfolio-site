// 密码配置对象
const PASSWORD_CONFIG = {
  '3newtorichres': '20250407',
  'BabyTrafficKey': '20250408', 
  'tbao-sop': '20250410'
};

// 密码验证函数
function verifyPassword(pageId, inputPassword) {
  const correctPassword = PASSWORD_CONFIG[pageId];
  return inputPassword === correctPassword;
}

// 统一的密码检查处理函数
function handlePasswordCheck(pageId) {
  const password = document.getElementById('content-password').value;
  if (verifyPassword(pageId, password)) {
    document.getElementById('password-section').style.display = 'none';
    document.getElementById('hidden-content').style.display = 'block';
  } else {
    alert('密码错误，请重试！');
  }
}