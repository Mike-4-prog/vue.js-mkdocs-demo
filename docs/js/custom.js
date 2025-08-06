document.addEventListener('DOMContentLoaded', function() {
  // Auto-open external links in new tab
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.host)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  // Add copy buttons to code blocks (optional)
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.textContent);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy', 2000);
    });
    codeBlock.parentNode.insertBefore(copyBtn, codeBlock);
  });
});