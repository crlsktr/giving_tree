<script lang="ts">
	import { coordinatorPhoneNumber, presentList, signupMessage, welcomeMessage } from "$lib";
	import { Accordion, AccordionItem, TreeView, TreeViewItem } from "@skeletonlabs/skeleton";

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 flex flex-col items-center">
		
		<figure>
			<section class="img-bg" />
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
		</figure>
		<h2 class="h2 text-center">{welcomeMessage}</h2>
		<Accordion>
			{#each presentList as present}
			<AccordionItem open>
				<svelte:fragment slot="lead"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"/></svg></svelte:fragment>
				<svelte:fragment slot="summary"><span class="text-center">{present.summary}</span></svelte:fragment>
				<svelte:fragment slot="content">
					<div class="card text-center text-md flex flex-row place-content-between">
						<span class="p-4">{present.details}</span>
						<a class="btn btn-md variant-filled-primary" href="sms://{coordinatorPhoneNumber}?body={signupMessage + present.giftNumber}">I want to give this!</a>
					</div>
				</svelte:fragment>
			</AccordionItem>
			{/each}
			<!-- ... -->
		</Accordion>
		
	</div>
</div>

<style lang="postcss">
	* {
		max-width: 100%;
		white-space: unset;
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
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
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
