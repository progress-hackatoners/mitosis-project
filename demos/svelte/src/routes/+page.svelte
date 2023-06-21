<script>
	import Grid from '../components/Grid.svelte';

	const columns = [
		{ field: 'first', title: 'First', width: 100 },
		{field: 'second'}
	];

	const items = [
		{
			first: "Andrew",
			second: "Evangelatov"
		},
		{
			first: "Peter",
			second: "Djemerenov"
		}
	]
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
