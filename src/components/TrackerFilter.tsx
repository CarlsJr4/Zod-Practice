import { ChangeEvent } from 'react';

export default function TrackerFilter({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <p>Filter by:</p>
      <form action="">
        <select name="filter" id="filter" onChange={e => onChange(e)}>
          <option value=""></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </form>
    </div>
  );
}
