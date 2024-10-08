<script>
	export let options = [
		{ id: '1', name: 'Program Scholarship and Training', numbers: [100, 2, 3, 4], alert: false },
		// Add more options here if needed
	];
	export let selectedOption = options[0];

	let currentIndex = 0;
	let optionListWidth = `${100 * options.length}%`;

	function moveLeft() {
		if (currentIndex > 0) {
			currentIndex--;
		} else {
			currentIndex = options.length - 1;
		}
		updateSelectedOption();
	}

	function moveRight() {
		if (currentIndex < options.length - 1) {
			currentIndex++;
		} else {
			currentIndex = 0;
		}
		updateSelectedOption();
	}

	function updateSelectedOption() {
		selectedOption = options[currentIndex];
        console.log(selectedOption);
	}
</script>

<div class="main-container">
	<div class="hdr-container">COUNTER</div>
	<div class="option-container">
		<div class="option-content">
			<div class="option-list" style="width: {optionListWidth}; transform: translateX(-{currentIndex * 25}%);">
				{#each options as option}
					<div class="option">
						{option.name}
					</div>
				{/each}
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="action-container">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img class="btn left" src="/icons/left-triangle.svg" alt="Move Left" on:click={moveLeft}/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img class="btn right" src="/icons/left-triangle.svg" alt="Move Right" on:click={moveRight}/>
		</div>
	</div>
</div>

<style lang="scss">
	.main-container {
		width: 100%;
		height: fit-content;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 8px;
		border: 0.4px solid grey;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

		.hdr-container {
			display: flex;
			padding: 0.5rem 1rem;
			border-bottom: 0.4px solid #497ee2;
			background: linear-gradient(#043ba4, #3070d0e7),
				url('https://images.pexels.com/photos/3705645/pexels-photo-3705645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
			background-size: cover;

			color: #ffffff;
			font-size: 1.4rem;
			font-weight: 600;
		}

		.option-container {
			width: 100%;
			display: flex;
			padding: 1rem 2%;

			.option-content {
				width: 90%;
				overflow: hidden;

				.option-list {
					display: flex;
					transition: transform 0.3s ease-in-out;

					.option {
						width: 100%;
						margin-right: auto;
						font-size: 1.2rem;
						font-weight: 500;
					}
				}
			}

			.action-container {
				width: 5%;

				.btn {
					width: 1.2rem;
					cursor: pointer;

					&.right {
						transform: rotate(180deg);
					}
				}
			}
		}
	}
</style>
