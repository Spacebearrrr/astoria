<script>
	import CounterOptions from '$lib/components/AdminPage/CounterOptions.svelte';
	import Header from '$lib/components/HomePage/Header.svelte';
	import TagNotif from '$lib/components/TagNotif/TagNotif.svelte';
	import { sampleData } from '$lib/sampleData';

	let notification;

	let actions = [
		{
			label: 'Get Next Number',
			color: '#14844c',
			icon: '',
			function: 'next'
		},
		{
			label: 'Cancel',
			color: '#e4546c',
			icon: '',
			function: 'cancel'
		},
		{
			label: 'Call Again',
			color: '#14c3db',
			icon: '',
			function: 'call'
		},
		{
			label: 'Stand By',
			color: '#fbbc5c',
			icon: '',
			function: 'stand'
		},
		{
			label: 'No Show',
			color: '#727372',
			icon: '',
			function: 'noShow'
		},
		{
			label: 'Finished',
			color: '#7cdb55',
			icon: '',
			function: 'finish'
		}
	];

	let counterData = sampleData;
	let counter = counterData[0];

	$: if (notification) {
		setTimeout(() => {
			notification = null;
		}, 3000);
	}

	function handleBtn(actionFunction) {
		if (actionFunction === 'next' && counter.numbers.length > 0) {
			let finishedNumber = counter.numbers[0];
			counter.numbers = counter.numbers.slice(1);

			counterData = counterData.map((c) =>
				c.id === counter.id ? { ...c, numbers: counter.numbers } : c
			);

			notification = { status: 'success', message: `Queue number ${finishedNumber} completed!` };
		}
	}
</script>

<Header />

<div class="main-container">
	<div class="view-container">
		<div class="label-container">
			<CounterOptions bind:options={counterData} bind:selectedOption={counter} />
		</div>
		<div class="notif-container">
			{#if notification}
				<TagNotif bind:value={notification.status} bind:text={notification.message} />
			{/if}
		</div>
		<div class="queue-container">
			<div class="queue-content next">
				<div class="hdr-container">UPCOMING</div>
				<div class="upcoming-number">
					<br />
					{#each counter.numbers as number, i}
						{#if i !== 0}
							<span>
								{counter.numbers[i]}
							</span>
						{/if}
					{/each}
				</div>
			</div>
			<div class="queue-content current">
				<div class="hdr-container">CURRENT</div>
				<div class="current-number">
					{#if counter?.numbers.length > 0}
						{counter.numbers[0]}
					{/if}
					{#if counter?.numbers.length == 0}
						---
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div class="action-container">
		{#each actions as action}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="action-btn"
				style={`background-color: ${action.color};`}
				on:click={() => {
					handleBtn(action.function);
				}}
			>
				{action.label}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.main-container {
		display: flex;
		justify-content: center;
		padding: 5vh 0;
		gap: 30px;

		.view-container {
			width: 65%;
			height: 75vh;
			display: flex;
			flex-direction: column;

			.label-container {
				width: 100%;
			}

			.notif-container {
				width: 100%;
				height: 7vh;
				display: flex;
				justify-content: center;
			}
			.queue-container {
				display: flex;
				justify-content: space-between;
				width: 100%;
				height: 68vh;
				gap: 20px;
				.queue-content {
					width: calc(50% - 10.25px);
					background-color: #ffffff;
					border: 0.5px solid gray;
					box-shadow: rgba(110, 109, 109, 0.158) 5px 5px;

					.hdr-container {
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 1.25rem 0;
						border-bottom: 1px solid grey;

						font-size: 1.75rem;
						font-weight: 600;
					}

					.upcoming-number {
						display: flex;
						flex-direction: column;
						overflow: scroll;
						overflow-x: hidden;
						width: 100%;
						height: 81%;

						span {
							padding: 0.25rem 2rem;
						}
					}
					.current-number {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 80%;

						font-size: 11rem;
						font-weight: 600;
					}
				}
			}
		}

		.action-container {
			width: 25%;
			height: 75vh;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

			.action-btn {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				color: #ffffff;
				font-size: 1.1rem;
				font-weight: 600;

				cursor: pointer;

				&:hover {
					box-shadow:
						rgba(52, 52, 53, 0.25) 0px 30px 60px -12px inset,
						rgba(42, 41, 41, 0.3) 0px 18px 36px -18px inset;
					transition: all 0.3s;
				}
			}
		}
	}
</style>
