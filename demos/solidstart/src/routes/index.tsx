import { createSignal } from 'solid-js';
import { A } from 'solid-start';
import Counter from '~/components/Counter';
import { Grid } from '~/components/Grid';

export default function Home() {
  const [columns, setColumns] = createSignal([
    { field: 'first', title: 'First', width: 100 },
    { field: 'second' },
  ]);

  const [sortDir, setSortDir] = createSignal('desc');

  const [items, setItems] = createSignal([
    {
      first: 'Andrew',
      second: 'Evangelatov',
    },
    {
      first: 'Peter',
      second: 'Djemerenov',
    },
  ]);

  const sortFn = (col: any) => () => {
    setSortDir((dir) => (dir === 'asc' ? 'desc' : 'asc'));
    setItems((arr) => {
      return [].concat(arr).sort((a, b) => {
        if (a[col().field] > b[col().field])
          return 1 * (sortDir() === 'asc' ? -1 : 1);
        if (a[col().field] < b[col().field])
          return 1 * (sortDir() === 'asc' ? 1 : -1);
        return 0;
      });
    });
  };

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Grid columns={columns()} items={items()} sort={sortFn}></Grid>
      <Counter />
      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {' - '}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{' '}
      </p>
    </main>
  );
}
