// place files you want to import through the `$lib` alias in this folder.
interface Gift {
	giftNumber: string;
	summary: string;
	details: string;
}

export const presentList: Gift[] = [
	{
		giftNumber: 'A1',
		summary: "Women's Coat",
		details: 'She wears size medium and her favorite color is purple'
	},
	{
		giftNumber: 'A2',
		summary: 'Warm Clothes for Toddler Girl',
		details: 'She wears size 18 mos and likes princesses and unicorns'
	},
	{ giftNumber: 'B1', summary: 'Learning Toy for Baby', details: 'He is 10 months old' }
];

export const coordinatorPhoneNumber: string = '+18887776666';
export const signupEmailSubject: string = 'Giving Tree 2023';
export const signupMessage: string =
	'Hi%21%20I%20want%20to%20help%20out%20with%20this%20gift%21%0AMy%20Name%3A%0AMy%20Phone%20Number%3A%0AGift%20Number%3A';
export const welcomeMessage: string =
	'Help us make Christmas brighter for families in our community';
export const coordinatorEmail: string = 'jorrigarcia@gmail.com';
export const giftDollarLimit: number = 50;
export const apptitle: string = '12th Ward Giving Tree 2023';
