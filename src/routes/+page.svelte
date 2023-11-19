<script lang="ts">
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
		<img class="max-h-96 min-w-full object-none opacity-50"
		src="https://images.unsplash.com/photo-1513297887119-d46091b24bfa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="evergreen branches" />
		<h2 class="h2 centered-title bg-surface-900">{welcomeMessage}</h2>
		
	</div>
</figure>
<div class="container min-h-full flex">
		<Accordion class="p-10 flex flex-col items-center">
				{#each presentList as present}
					<AccordionItem class="border rounded-md w-full max-w-4xl border-tertiary-800 bg-surface-600">
						<svelte:fragment slot="lead"
							><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
								><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
									d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"
								/></svg
							></svelte:fragment
						>
						<svelte:fragment slot="summary"
							><span class="text-center">{present.summary}</span></svelte:fragment
						>
						<svelte:fragment slot="content">
							<div class="card text-center text-md flex flex-row place-content-between">
								<span class="p-4">{present.details}</span>
							</div>
							<a
								class="btn btn-md variant-filled-primary"
								href="mailto://{coordinatorEmail}?body={signupMessage +
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
		@apply bg-primary-700/80 rounded-md
	}
	div svg {
		@apply fill-surface-50;
	}
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80 fill-tertiary-200;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
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
