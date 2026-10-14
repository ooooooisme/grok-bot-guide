import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState('');
  const copy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <div style={{ display: 'flex', maxWidth: 1200, margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <nav style={{ width: 240, position: 'sticky', top: 0, height: '100vh', padding: '2rem 1.5rem', borderRight: '1px solid #e5e5e5', background: '#fff' }}>
        <h2 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: '#666', margin: '0 0 1rem' }}>目录</h2>
        <a href="#intro" style={{ display: 'block', padding: '0.4rem 0', color: '#1a1a1a', textDecoration: 'none' }}>前言</a>
        <a href="#principle" style={{ display: 'block', padding: '0.4rem 0', color: '#1a1a1a', textDecoration: 'none' }}>核心原则</a>
        <a href="#capabilities" style={{ display: 'block', padding: '0.4rem 0', color: '#1a1a1a', textDecoration: 'none' }}>连接器与 Skills</a>
        <a href="#cases" style={{ display: 'block', padding: '0.4rem 0', color: '#1a1a1a', textDecoration: 'none' }}>实操测试</a>
      </nav>
      <main style={{ flex: 1, padding: '2rem 3rem', background: '#fafafa' }}>
        <h1 style={{ fontSize: '2.25rem', margin: '0 0 0.5rem' }}>Grok Bot 中文指南</h1>
        <p style={{ color: '#666', margin: '0 0 2rem' }}>现代卡片文档风 · Next.js 版</p>

        <section id="intro">
          <h2>前言</h2>
          <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <p>把 learngrok.dev 与 grokbot.dev 的核心内容整理成中文。强调「把工作交给 Bot，而不是反复提问」。</p>
          </div>
        </section>

        <section id="principle">
          <h2>核心原则</h2>
          <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <h3 style={{ marginTop: 0 }}>Give a Bot the job, not the question</h3>
            <p>清晰的岗位描述比临时提示更重要。把长期规则写进 Bot 描述。</p>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <h3 style={{ marginTop: 0 }}>一个 Bot 一个岗位 + 先验证再自动化</h3>
            <p>先搜索现有 Bot。流程做对后再保存为 Skill，稳定后再挂例程。</p>
          </div>
        </section>

        <section id="capabilities">
          <h2>连接器与 Skills</h2>
          <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <p>优先使用连接器。Skill 应写明：何时使用、输入、步骤、如何验证、输出格式、哪些动作必须审批。</p>
          </div>
        </section>

        <section id="cases">
          <h2>实操测试</h2>
          <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1.5rem', margin: '1.5rem 0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <h3 style={{ marginTop: 0 }}>测试：先搜索再设置例程</h3>
            <pre style={{ background: '#f4f4f5', padding: '1rem', borderRadius: 8, position: 'relative' }}>
              先搜索是否已有适合做每日邮件摘要的 Bot。如果有就用它；没有再建议。然后让它保存例程：每个工作日 8:30 生成最多 5 条未读邮件摘要。无新邮件时回复「今日无新邮件」。不要发送任何邮件。
              <button onClick={() => copy('先搜索是否已有适合做每日邮件摘要的 Bot。如果有就用它；没有再建议。然后让它保存例程：每个工作日 8:30 生成最多 5 条未读邮件摘要。无新邮件时回复「今日无新邮件」。不要发送任何邮件。', 't1')} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 6, padding: '0.25rem 0.6rem', fontSize: '0.75rem', cursor: 'pointer' }}>{copied === 't1' ? '已复制' : '复制'}</button>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
