const { OpenAI } = require('openai');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const openai = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: 'https://api.deepseek.com/v1',   // 关键：指向 DeepSeek，不是 OpenAI
  });

  const { messages } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: messages,
      temperature: 1.0,
    });
    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error('DeepSeek API error:', error);
    res.status(500).json({ error: error.message });
  }
};
