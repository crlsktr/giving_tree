<script lang="ts">
	import { AppBar, AppRail, AppRailAnchor, AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { apptitle } from '$lib';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">{apptitle}</strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor
				selected={$page.url.pathname === `${base}`}
				name="tile-home"
				value={0}
				href="{base}/"
			>
				<div class="flex justify-center pb-1">
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 16 16"
						id="home"
					>
						<path
							d="M2,13.7478c0,0.13807,0.11193,0.25,0.25,0.25h3.749v-3h3v3h3.749c0.13807,0,0.25-0.11193,0.25-0.25V7.9987H2&#xA;&#x9;C2,7.9987,2,13.7478,2,13.7478z M13.93,6.5778l-0.9319-0.8189V2c0-0.55228-0.44771-1-1-1s-1,0.44772-1,1v2L7.6808,1.09&#xA;&#x9;C7.5863,0.9897,7.42846,0.98478,7.3279,1.079L7.3169,1.09L1.0678,6.553C0.9734,6.65376,0.97856,6.81197,1.07932,6.90637&#xA;&#x9;C1.12478,6.94896,1.18451,6.97304,1.2468,6.9739L3,6.9989h10.7468c0.13807,0.00046,0.25037-0.1111,0.25083-0.24917&#xA;&#x9;C13.99784,6.68592,13.97365,6.62445,13.93,6.5779V6.5778z"
						/>
					</svg>
				</div>
				<span>Home </span>
			</AppRailAnchor>
			<AppRailAnchor
				selected={$page.url.pathname === `${base}/guidelines`}
				name="tile-guidelines"
				value={1}
				title="tile-guidelines"
				href="{base}/guidelines"
			>
				<div class="flex justify-center pb-1">
					<svg
						version="1.1"
						id="library"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 16 16"
					>
						<path
							d="M1.0819,9.9388C0.9871,9.867,1.0007,9.7479,1.0007,9.7479L1.5259,3.5c0,0,0.0082-0.0688,0.0388-0.104&#xA;&#x9;C1.584,3.374,1.6084,3.342,1.6544,3.3232C2.1826,3.1072,5.0537,1.5519,6.5,3c0.2397,0.2777,0.4999,0.6876,0.4999,1v5.2879&#xA;&#x9;c0,0,0.0062,0.1122-0.0953,0.1801c-0.0239,0.016-0.124,0.0616-0.242,0.0026c-2.2253-1.1134-4.711,0.1546-5.3381,0.4871&#xA;&#x9;C1.1987,10.0244,1.1006,9.9531,1.0819,9.9388z M13.6754,9.9577c-0.6271-0.3325-3.1128-1.6005-5.3381-0.4871&#xA;&#x9;c-0.118,0.059-0.2181,0.0134-0.242-0.0026C7.9939,9.4001,8.0001,9.2879,8.0001,9.2879V4c0-0.3124,0.2602-0.7223,0.4999-1&#xA;&#x9;c1.4463-1.4481,4.2991,0.1071,4.8273,0.3232c0.046,0.0188,0.0704,0.0508,0.0897,0.0728C13.4476,3.4312,13.4558,3.5,13.4558,3.5&#xA;&#x9;l0.5435,6.2479c0,0,0.0136,0.1191-0.0812,0.1909C13.8994,9.9531,13.8013,10.0244,13.6754,9.9577z M8.8647,12.6863&#xA;&#x9;c0.0352-0.0085,0.0964-0.0443,0.1179-0.0775c0.0236-0.0364,0.0378-0.0617,0.0423-0.1088c0.0495-0.9379,1.6245-1.8119,4.6477-0.0298&#xA;&#x9;c0.0775,0.0441,0.1666,0.0396,0.2425-0.0155C14.0014,12.392,14,12.2859,14,12.2859v-0.5542c0,0,0.0003-0.0764-0.0272-0.1184&#xA;&#x9;c-0.0205-0.0312-0.0476-0.0643-0.0926-0.0858c-2.0254-1.3145-4.5858-1.8972-5.8854-0.1592&#xA;&#x9;c-0.0181,0.0423-0.0353,0.0613-0.0728,0.0905C7.8654,11.5028,7.7964,11.5,7.7964,11.5H7.2109c0,0-0.069,0.0028-0.1256-0.0412&#xA;&#x9;c-0.0375-0.0292-0.0547-0.0482-0.0728-0.0905c-1.2996-1.738-3.86-1.1828-5.8854,0.1317c-0.045,0.0215-0.0721,0.0546-0.0926,0.0858&#xA;&#x9;c-0.0275,0.042-0.0272,0.1184-0.0272,0.1184v0.5542c0,0-0.0014,0.1061,0.0849,0.1688c0.0759,0.0551,0.165,0.0596,0.2425,0.0155&#xA;&#x9;c3.0232-1.7821,4.5982-0.8806,4.6477,0.0573c0.0045,0.0471,0.0187,0.0724,0.0423,0.1088c0.0215,0.0332,0.0827,0.069,0.1179,0.0775&#xA;&#x9;C6.8645,12.8656,7.9112,12.9363,8.8647,12.6863z"
						/>
					</svg>
				</div>
				<span>Guidelines</span>
			</AppRailAnchor>
			<!-- --- -->
			<svelte:fragment slot="trail">
				<AppRailAnchor
					href="https://github.com/crlsktr/giving_tree"
					target="_blank"
					title="Account"
				>
					<div class="flex justify-center pb-1">
						<svg
							role="img"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>GitHub</title>
							<path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
					</div>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<div class="text-right text-xs">
			Made with ❤️ using Svelte-kit and published under <a
				class="text-secondary-500 inline"
				href="https://creativecommons.org/publicdomain/zero/1.0/">CC0-1.0 license</a
			>
		</div>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>

<style lang="postcss">
	svg {
		@apply scale-150;
		display: block;
	}
</style>
