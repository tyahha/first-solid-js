import {createSignal} from "solid-js";

export const FirstComponent = (props: { name: string }) => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <div>Hello {props.name}</div>
      <button onclick={() => setCount((prev) => prev + 1)}>{count()}</button>
    </div>
  )
}