<script>
	import Grid from '../components/Grid.svelte';
	import { customers } from '../data/customers.js';

	const columns = [
		{ field: 'Id', title: 'Id', width: 100 },
		{ field: 'CompanyName', title: 'Company Name' },
		{ field: 'ContactName', title: 'Contact Name' },
		{ field: 'ContactTitle', title: 'Contact Title'},
	];

	let items = customers;

	function clickBtn(params) {
		items = [
			{
				first: "Peter",
				second: "Djemerenov"
			},
			{
				first: "Andrew",
				second: "Evangelatov"
			}
		];
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="stylesheet" href="https://kendo.cdn.telerik.com/themes/6.4.0/default/default-ocean-blue.css">
</svelte:head>

<Grid columns={columns}
		items={items}></Grid>

<style>

</style>
