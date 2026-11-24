type Props = { onCompose?: () => void };
export function Header({ onCompose }: Props) {
  return (
    <header className="header">
      <a className="wordmark" href="#">
        Alexandria
      </a>
      <button className="headerAction" onClick={onCompose}>
        new post
      </button>
    </header>
  );
}
