// place files you want to import through the `$lib` alias in this folder.
interface GiftCard {
	dollarAmount: number;
	quantity: number;
	toString(): string;
}

interface Gift {
	giftNumber: string;
	summary: string;
	details: string;
	options: GiftCard[];
}

export const presentList: Gift[] = [
	{
		giftNumber: '1',
		summary: 'Walmart Gift Card',
		details: 'Walmart',
		options: [{dollarAmount:15, quantity:0}]
	},
	{
		giftNumber: '2',
		summary: 'Amazon gift card',
		details: 'Amazon',
		options: [{dollarAmount:15, quantity:5}]
	},
	{
		giftNumber: '3',
		summary: 'Visa gift card',
		details: 'Visa',
		options: [{dollarAmount:15, quantity:5}]
	},
];

export const coordinatorPhoneNumber: string = '+18887776666';
export const signupEmailSubject: string = 'Giving Tree 2024';
export const signupMessage: string =
	'Hi%21%20I%20want%20to%20help%20out%20with%20this%20gift%21%0AMy%20Name%3A%0AMy%20Phone%20Number%3A%0AGift%20Cards%20%28Please%20specify%20how%20many%20individual%20%2415%20cards%29%0A-%20Walmart%3A%0A-%20Amazon%3A%0A-%20Visa%3A%20';
export const welcomeMessage: string =
	'something';
export const coordinatorEmail: string = 'ifergej0b@mozmail.com';
export const giftDollarLimit: number = 50;
export const apptitle: string = '12th Ward Giving Tree 2024';
