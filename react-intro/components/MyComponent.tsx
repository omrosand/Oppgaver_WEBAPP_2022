import Title from "./Title";

export default function MyComponent({ title }: any) {
  return title ? <Title title={title} /> : <Title />;
}
