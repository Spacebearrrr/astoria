<script>
	export let value = 'error';
	export let text = 'hello world! hello world! hello world!';
</script>

<div class={`tag-container ${value} fade-in`}>
	{#if value === 'success'}
		<img src="/icons/circled-check-toaster.svg" alt="Icon" />
	{/if}

	{#if value === 'error'}
		<img src="/icons/close-encircled-toaster.svg" alt="Icon" />
	{/if}

	{text}
</div>

<style lang="scss">
	.tag-container {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		align-self: center;
		gap: 8px;

		width: fit-content;
		padding: 0.25rem 1rem;
		border-radius: 100px;
		background-color: gray;

		font-size: 1rem;
		font-weight: 500;

		img {
			$size: 1rem;
			width: $size;
			height: $size;
		}

		&.success {
			background: #ecfdf3;
			color: #027a48;
		}

		&.error {
			background: #f8e2e2;
			color: #7a0202;
		}
	}
</style>
