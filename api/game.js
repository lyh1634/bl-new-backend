module.exports = async (req, res) => {
  // 设置 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  // 返回测试数据
  res.status(200).json({
    storyText: "🎉 后端部署成功！这是一个测试剧情，证明连接正常。",
    protagonist: { health: 100, mood: 80, trust: 30, friendship: 20 },
    loveInterests: [{ name: "测试角色", favorability: 25, jealousy: 0, likes: "友好", dislikes: "冷漠" }],
    choices: ["选项A", "选项B", "选项C"],
    missionHint: "等待触发",
    world: "测试副本",
    specialProgress: 0,
    gameOver: false
  });
};
