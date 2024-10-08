<script>
	import { onMount } from 'svelte';

	let date;
	let time;

	const updateDateTime = () => {
		const now = new Date();
		date = now.toLocaleDateString();
		time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	};

	onMount(() => {
		updateDateTime();
		const interval = setInterval(updateDateTime, 60000);
		return () => clearInterval(interval);
	});
</script>

<div class="container">
	<a href="/">
		<div class="hdr-container">
			<img src="./tesda-logo.png" alt="" />
			<div class="txt-container">
				<h1>TESS</h1>
				<span>TESDA EASE SERVICE SYSTEM</span>
			</div>
		</div>
	</a>

	<div class="details-container">
		<div class="date-container">
			<span class="date">{date}</span>
			<span class="time">{time}</span>
		</div>

		<div class="bar" />

		<div class="address-container">
			<span>TESDA ZCIC District Office</span>
			<span>TESDA Complex, Talungon St., San Roque</span>
			<span>Zamboanga City, 7000</span>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		// position: absolute;
		// position: sticky;
		display: flex;
		justify-content: space-between;
		align-items: center;
		// width: 1440px;
        width: 90%;
		// max-width: 1440px;
		padding: 0px 80px;
		height: 15vh;
		max-height: 15vh;
        background-color: transparent;

		.hdr-container {
			display: flex;
			align-items: center;
			gap: 10px;

			img {
				$size: 3.75rem;
				width: $size;
				height: $size;
			}
			.txt-container {
				display: flex;
				flex-direction: column;
				h1 {
					color: #043ba4;
					font-size: 2.4rem;
					letter-spacing: 0.3rem;
				}

				span {
					color: #043ba4;
					font-size: 1rem;
				}
			}
		}

		.details-container {
			display: flex;
			gap: 10px;
			.date-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: end;

				.date {
					font-size: 1.3rem;
					line-height: 1.6;
				}
				.time {
					font-size: 0.8rem;
					color: grey;
				}
			}

			.bar {
				width: 2px;
				height: 3.5rem;
				background-color: gray;
			}

			.address-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				font-size: 0.7rem;
			}
		}
	}
</style>
