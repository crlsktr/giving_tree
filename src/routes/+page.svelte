<script lang="ts">
	import { assets } from '$app/paths';
	import {
		coordinatorEmail,
		presentList,
		signupEmailSubject,
		signupMessage,
		welcomeMessage
	} from '$lib';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<figure>
	<div class="min-w-full text-center relative">
		<img
			class="max-h-96 min-w-full object-none opacity-50"
			src="{assets}/firleaves.avif"
			alt="evergreen branches"
		/>
		<h2 class="h2 centered-title bg-surface-900">{welcomeMessage}</h2>
	</div>
</figure>
<div class="container flex flex-col">
	<div class="p-6 text-center">
		<p>Pick a gift from the list below and when you're ready, click on the <span class="text-primary-500">"I want to give this"</span> button. This will compose an email to Jorri. </p>
		<p>Please fill it out with your personal details and send it. We're keeping track of the gifts by the code in the last line of the email, please don't change it 😁</p>
	</div>
	<hr />
	<Accordion class="p-10 flex flex-col items-center">
		{#each presentList as present, idx}
			<AccordionItem class="border rounded-md w-full max-w-4xl border-tertiary-800 bg-surface-600" open={idx===0}>
				<svelte:fragment slot="lead"
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
					</svg></svelte:fragment
				>
				<svelte:fragment slot="summary"
					><span class="text-center">{present.summary} { present.options ? '(please choose one)': ''}</span></svelte:fragment
				>
				<svelte:fragment slot="content">
					{#if !present.options}
					<div class="card text-center text-md flex flex-row place-content-between">
						<span class="p-4">{present.details}</span>
					</div>
					{:else}
						{#each present.options as option}
						<div class="card text-center text-md flex flex-row place-content-between">
							<span class="p-4">{option}</span>
						</div>
						{/each}
					{/if}

					<a
						class="btn btn-md variant-filled-primary"
						href="mailto:{coordinatorEmail}?body={signupMessage +
							present.giftNumber}&subject={signupEmailSubject}">I want to give this!</a
					>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
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
	div svg {
		@apply fill-surface-50;
	}
	figure {
		@apply flex relative flex-col;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-500/70;
		}
		33% {
			@apply bg-primary-700/70;
		}
		66% {
			@apply bg-primary-700/70;
		}
		100% {
			@apply bg-primary-500/70;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
