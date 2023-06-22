import { createSignal } from 'solid-js';
import { A } from 'solid-start';
import Counter from '~/components/Counter';
import { Grid } from '~/components/Grid';

import { customers } from '../../public/customers';

export default function Home() {
  const [columns, setColumns] = createSignal([
    { field: 'Id', title: 'Id', width: 100 },
    { field: 'CompanyName', title: 'Company Name' },
    { field: 'ContactName', title: 'Contact Name' },
    { field: 'ContactTitle', title: 'Contact Title' },
  ]);

  const [sortDir, setSortDir] = createSignal('desc');

  const [items, setItems] = createSignal(customers);

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
      <Grid columns={columns()} items={items()} sort={sortFn}></Grid>

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
