export default function Wrapper({ children, styleClass }: any) {
  return <section className={styleClass}>{children}</section>;
}
