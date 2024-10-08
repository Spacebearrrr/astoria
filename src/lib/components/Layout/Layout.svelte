<script>
	import '$lib/styles/globals.scss';
	import '$lib/styles/buttons.scss';
	import '$lib/styles/animations.scss';

	export let title = "Tesda queueing system";
	export let description = "Queue Now!";
	// export let ogImage = '/pixie-thumbnail.png';
	export let ogURL = '';
	export let canonicalURL = '';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<link rel="canonical" href={`${ogURL}${canonicalURL}`} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
	/>
	<link
		href="
https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css
"
		rel="stylesheet"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Open Graph / Facebook -->
	<!-- <meta property="og:type" content="website" />
	<meta property="og:url" content={ogURL} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} /> -->

	<!-- Twitter -->
	<!-- <meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={ogURL} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} /> -->
</svelte:head>

<div>
	<slot />
</div>
