<script>
	import axios from 'axios';
	import Table from '$lib/components/Table/Table.svelte';
	import Textbox from '$lib/components/Texbox/Textbox.svelte';
	import { sampleData } from '$lib/sampleData';

	let inputName = '';
	let boothList = [];
	let isDisabled = true;

	$: {
		// Disable the button if the inputName is empty or there are 4 or more booths
		isDisabled = inputName.trim() === '' || boothList.length >= 4;
	}

	async function addBooth() {
		try {
			const response = await axios.post('/api/create-booth', {
				name: inputName.trim()
			});

			// Add the new booth to the list
			boothList = [...boothList, response.data.booth];

			// Clear the input field after adding the booth
			inputName = '';

			console.log('Booth created:', response.data);
		} catch (error) {
			console.error('Error creating booth:', error.response?.data || error.message);
		}
	}
</script>

<div class="container">
	<div class="table-container">
		<span style="margin-left: 8px;">Booths</span>
		<Table bind:data={boothList} />
	</div>
	<div class="input-container">
		<Textbox label="Input Booth" bind:value={inputName} placeholder="Enter a name" />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<button class="enter-btn" disabled={isDisabled} on:click={addBooth}><i class="la la-long-arrow-alt-right" /></button>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		gap: 32px;
		padding: 80px 32px;

		.table-container {
			display: flex;
			flex-direction: column;
			width: 30%;
			gap: 8px;
		}

		.input-container {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 8px;

			.enter-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 8px;
				padding: 10px;
				cursor: pointer;
				margin-top: 28px;
        border: none;

				background: #6941c6;
				color: #fff;

				i {
					font-size: 20px;
				}

				&:hover {
					box-shadow: rgba(78, 74, 158, 0.578) 0px 3px 8px;
					background: #8d6adf;
					transition: 0.3s;
				}

				&:disabled {
					background: #b2b2b2;
					cursor: not-allowed;
				}
			}
		}
	}
</style>
