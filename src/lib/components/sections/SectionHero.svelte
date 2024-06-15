<script lang="ts">
	import Alert from '../Alert.svelte';
	import { Description } from '@r2digisolutions/svelte-ui';

	let {
		title,
		description
	}: {
		title: string;
		description: string;
	} = $props();
</script>
