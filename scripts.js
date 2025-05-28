async function loadMarkdown() {
  try {
    const response = await fetch('content.md');
    const md = await response.text();
    document.getElementById('content').innerHTML = renderMarkdown(md);
  } catch (e) {
    console.error("Failed to load markdown:", e);
  }
}

function renderMarkdown(md) {
  return md
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/^(?!<h\d>|<li>|<ul>|<ol>|<p>|<blockquote>|<pre>|<code>)(.+)$/gm, '<p>$1</p>')
    .replace(/<\/p><p><\/p>/g, '<br><br>');
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function loadToolbar() {
  fetch('toolbar.html')
    .then(response => response.text())
    .then(html => document.getElementById('toolbar-container').innerHTML = html)
    .catch(error => console.error('Error loading toolbar:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  loadMarkdown();
  loadToolbar();

  if (localStorage.getItem('theme')) {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    );
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
