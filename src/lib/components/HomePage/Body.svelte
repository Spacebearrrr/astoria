<script>
	let buttons = [
		{
			label: 'Queue',
			description: 'I want to queue',
			link: '/queue',
			icon: './queue-icon.png'
		},
		{
			label: 'Monitor',
			description: 'Now serving',
			link: '/monitor',
			icon: './monitor-icon.png'
		}
	];
</script>

<div class="bg-container">
	{#each buttons as button}
		<button
			class="primary-button"
			on:click={() => {
				window.location.href = `${button.link}`;
			}}
		>
			<img class="btn-icon" src={button.icon} alt="" />
			<div class="txt-container">
				<span class="label">{button.label}</span>
				<span class="desc">{button.description}</span>
			</div>
		</button>
	{/each}
</div>

<div class="blue-extension" />

<style lang="scss">
	.bg-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 70vh;

		.primary-button {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			// width: 30%;
			// height: 30%;
			// padding: 100px 120px;
            padding: 6.25rem 7.5rem;
			transition: 0.3s;

			.btn-icon {
				$size: 5rem;
				width: $size;
				height: $size;
				transition: transform 0.3s;
			}

			.txt-container {
				display: flex;
				flex-direction: column;

				.label {
					font-size: 3.7rem;
					font-weight: 500;
					line-height: 1.2;
				}

				.desc {
					font-size: 1rem;
					color: grey;
				}
			}

			&:hover {
				.btn-icon {
					transform: scale(1.25);
				}
			}
		}
	}

	

    .zampen-logo {
        position: absolute;
        // position: fixed;
        top: 25vh;
        right: 25rem;

        scale: .2;
    }
</style>
