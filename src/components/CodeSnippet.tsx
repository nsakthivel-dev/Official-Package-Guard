import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'bash', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <div className="code-block" style={{ margin: '1rem 0' }}>
      <div className="code-header">
        <span>{title || language.toUpperCase()}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="copy-btn"
          aria-label={copied ? 'Copied code' : 'Copy code to clipboard'}
        >
          {copied ? (
            <>
              <Check size={14} color="#10b981" />
              <span style={{ color: '#10b981' }}>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre style={{ margin: 0, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
        <code>{code}</code>
      </pre>
    </div>
  );
};
