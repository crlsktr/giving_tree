<script lang="ts">
	import { writable } from "svelte/store";

	import { assets } from '$app/paths';
	import {
		coordinatorEmail,
		presentList,
		signupEmailSubject,
		signupMessage,
		welcomeMessage
	} from '$lib';
	import { Accordion, AccordionItem, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	let cardlist:string[] = []
</script>

<figure>
	<div class="min-w-full text-center relative">
		<img
			class="max-h-72 min-w-full object-cover object-left-top opacity-50"
			src="{assets}/present.avif"
			alt="evergreen branches"
		/>
		<h2 class="h1 centered-title bg-surface-900">{welcomeMessage}</h2>
	</div>
</figure>
<div class="flex flex-col">
	<div class="flex flex-row justify-center">
		<div class="py-6 px-8 text-base">
			<!-- <p class="h4 text-center p-4"></p> -->
			<p class="text-justify p-4 max-w-prose">We're trying something new, so please click the "About" button on the left to read more about how we're doing Giving Tree this year!</p>
			<p class="text-justify p-4 max-w-prose">When you're ready, you can sign up to donate by clicking "Give".</p>
			<p class="text-justify p-4 max-w-prose">Thanks for your help!</p>
		</div>
	</div>
	<hr />
	<div class="p-10 flex flex-col items-center">
		{#each presentList as present, idx}
		<div
			class="border rounded-md w-full max-w-4xl border-tertiary-800 bg-surface-600"
		>
			<header class="card-header"
				><svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					xmlns="http://www.w3.org/2000/svg"
					id="gift"
				>
					<path
						d="M10.5 1.00152C9.0967.957116 7.8503 1.89192 7.5 3.25152 7.1497 1.89192 5.9033.957116 4.5 1.00152 2.7678.947006 2.23515 2.79746 2.81831 4H1.5C1.22386 4 1 4.22386 1 4.5V5.5C1 5.77614 1.22386 6 1.5 6H13.5C13.7761 6 14 5.77614 14 5.5V4.5C14 4.22386 13.7761 4 13.5 4H12.1938C12.8 2.81516 12.2922 1.00143 10.5404 1.00112 10.5269 1.00112 10.5135 1.00122 10.5 1.00152ZM10.6831 4H8.5C8.50082 2.8961 9.3959 2.00152 10.5 2.00152 11.675 2.00152 11.8827 3.87414 10.6831 4ZM6.5 4H4.29187C3.25675 3.88256 3.19576 2.10553 4.3323 2.00152 4.3881 1.99642 4.4442 1.99642 4.5 2.00152 5.60409 2.00152 6.49918 2.8961 6.5 4ZM2 7.00146V11.5015C2 12.3299 2.6716 13.0015 3.5 13.0015H6.5V7.00146H2ZM8.5 7.00146V13.0015H11.5C12.3284 13.0015 13 12.3299 13 11.5015V7.00146H8.5Z"
					/>
				</svg></header>
				<span class="text-center"
					>{present.summary}</span
				>
			<section >
				<ListBox multiple>
					{#each present.options as option}	
					<div class="block card">
							<header class="card-header">${option.dollarAmount}</header>
							<section class="p-4"></section>
					</div>
					
				{/each}
				</ListBox>

				
			</section>
		</div>
	{/each}
	</div>
	<a
		class="btn btn-md variant-filled-primary"
		target="_blank"
		href="mailto:{coordinatorEmail}?body={signupMessage}&subject={signupEmailSubject}"><span>Give</span> 
		
		<svg
		width="15"
		height="15"
		viewBox="0 0 15 15"
		xmlns="http://www.w3.org/2000/svg"
		id="gift"
	>
		<path
			d="M10.5 1.00152C9.0967.957116 7.8503 1.89192 7.5 3.25152 7.1497 1.89192 5.9033.957116 4.5 1.00152 2.7678.947006 2.23515 2.79746 2.81831 4H1.5C1.22386 4 1 4.22386 1 4.5V5.5C1 5.77614 1.22386 6 1.5 6H13.5C13.7761 6 14 5.77614 14 5.5V4.5C14 4.22386 13.7761 4 13.5 4H12.1938C12.8 2.81516 12.2922 1.00143 10.5404 1.00112 10.5269 1.00112 10.5135 1.00122 10.5 1.00152ZM10.6831 4H8.5C8.50082 2.8961 9.3959 2.00152 10.5 2.00152 11.675 2.00152 11.8827 3.87414 10.6831 4ZM6.5 4H4.29187C3.25675 3.88256 3.19576 2.10553 4.3323 2.00152 4.3881 1.99642 4.4442 1.99642 4.5 2.00152 5.60409 2.00152 6.49918 2.8961 6.5 4ZM2 7.00146V11.5015C2 12.3299 2.6716 13.0015 3.5 13.0015H6.5V7.00146H2ZM8.5 7.00146V13.0015H11.5C12.3284 13.0015 13 12.3299 13 11.5015V7.00146H8.5Z"
		/>
	</svg></a
	>
</div>

<style lang="postcss">
	* {
		max-width: 100%;
		white-space: unset;
	}
	.centered-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		@apply bg-primary-700/80 rounded-md;
	}
</style>
