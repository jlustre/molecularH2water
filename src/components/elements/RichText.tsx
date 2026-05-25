type RichTextProps = {
  className?: string;
  html: string;
};

const htmlTagPattern = /<\/?[a-z][\s\S]*>/i;

export function RichText({ className = "", html }: RichTextProps) {
  if (!htmlTagPattern.test(html)) {
    return <p className={className}>{html}</p>;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
