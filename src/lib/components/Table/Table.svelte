<script>
	export let data;
</script>

<div class="table-container">
	<div class="table-row hdr">name</div>
	{#each data as item, i}
		<div class={`table-row item ${i + 1 == data.length ? 'last' : ''}`}>
			{item?.name}
			<i class="la la-trash"></i>
		</div>
	{/each}
</div>

<style lang="scss">
	.table-container {
		display: flex;
		flex-direction: column;
		width: 100%;

		border-radius: 8px;
		border: 1px solid #ddd;
		box-shadow: 0px 4px 8px -2px #1018281a;
		overflow: auto;

		.table-row {
			display: flex;
			justify-content: space-between;
			padding: 10px 18px;
			border-bottom: 1px solid #ddd;
			transition: 0.3s;
			align-items: center;
			font-size: 16px;

			&.hdr {
				background: #f9fafb !important;

				font-size: 12px;
				font-weight: 500;
				line-height: 18px;
				text-transform: capitalize;
				color: #667085;
			}

			&.item {
				&:hover {
					background: #eef0f3;
					transition: 0.3s;
				}
				i {
					font-size: 20px;
					cursor: pointer;

					&:hover {
						color: red;
						transition: 0.3s;
					}
				}
			}

			&.last {
				border-bottom: none;
			}
		}
	}
</style>
