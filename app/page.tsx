import { Counter, CounterReducer, InputWithFocusButton } from "@/components";

export default function Home() {
  return (
    <>
      <Counter />
      <br />
      <CounterReducer />
      <br />
      <InputWithFocusButton />
    </>
  );
}
