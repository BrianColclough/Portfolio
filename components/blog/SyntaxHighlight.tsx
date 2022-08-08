import SyntaxHighlighter from 'react-syntax-highlighter'


export default function SyntaxHighlight(props) {
  return (
    <span className="font-mono bg-red-500">
      <SyntaxHighlighter language={props.language} stylesheet='coffeescript' >
        {props.children}
      </SyntaxHighlighter>
    </span>
  );
}
