type TitleProps = {
  title?: string;
};

export default function Title({ title }: TitleProps) {
  return title ? <h1>{title}</h1> : <h1>My First Component</h1>;
}
