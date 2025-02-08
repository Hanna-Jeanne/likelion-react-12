import Counter from './counter';
import CounterClass from '../lifecycle/components/counter';

function Wrapper() {
  return (
    <div className="Wrapper p-5 border-3 border-black/20">
      <h3 className="text-lg font-semibold">래퍼 컴포넌트</h3>
      <Counter min={4} max={12} count={6} />
      <hr />
      <CounterClass />
    </div>
  );
}

export default Wrapper;
