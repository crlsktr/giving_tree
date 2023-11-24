// place files you want to import through the `$lib` alias in this folder.
interface Gift {
	giftNumber: string;
	summary: string;
	details: string;
	options?: string[];
}

export const presentList: Gift[] = [
	{
		giftNumber: 'B1',
		summary: 'Book for 10 year old boy',
		details: 'He would like a nonfiction book and is interested in astronomy and animals'
	},
	{
		giftNumber: 'B2',
		summary: 'Clothes for 10 year old boy',
		details: 'He needs shirts and Levis. He wears size 10 shirts and size 10 slim pants.'
	},
	/*{
		giftNumber: 'B3',
		summary: 'Outfits for infant boy',
		details: 'He wears size 2T and needs winter outfits and PJ'
	},*/
	{
		giftNumber: 'B4',
		summary: 'Baby toy',
		details: 'Sensory or learning toy for baby 6-12 months'
	},
	{ giftNumber: 'C1', summary: 'Boys snow pants size 12/14', details: 'No preferences' },
	{ giftNumber: 'C2', summary: 'Toy for 8-year-old boy', details: 'He likes Pokemon and Legos' },
	{ giftNumber: 'C3', summary: 'Girls snow pants size 6/6x', details: 'No preferences' },
	{
		giftNumber: 'C4',
		summary: 'Toy for 5-year-old girl',
		details: 'She likes Pokemon, puzzles, and Nerf'
	},
	{ giftNumber: 'C5', summary: 'Girls snow pants size 6/6x', details: 'No preferences' },
	{
		giftNumber: 'C6',
		summary: 'Toy for 5-year-old girl',
		details: 'She likes anything girly. She likes stuffed animals, baby dolls, and dress up.'
	},
	{
		giftNumber: 'D1',
		summary: 'Toy for 8-year-old boy',
		details: 'He likes Fortnite, Minecraft and Harry Potter'
	},
	{
		giftNumber: 'D2',
		summary: 'Clothes for 8-year-old boy',
		details:
			'He wears size 5/6 boys and needs shirts and pants. His favorite color is green and he likes Harry Potter, Fortnite, and Minecraft'
	},
	{
		giftNumber: 'D3',
		summary: 'Toy for toddler girl',
		details: 'She likes Minnie Mouse and Baby Shark.'
	},
	/*{
		giftNumber: 'D4',
		summary: 'Warm winter clothes for toddler girl',
		details: 'She wears size 18 months and needs long-sleeved winter outfits.'
	},*/
	{ giftNumber: 'D5', summary: 'Newborn hats or sleep sacks', details: 'Any color for baby boy.' },
	{ giftNumber: 'D6', summary: 'Bottles and binkies for newborn', details: 'No preferences' },
	{ giftNumber: 'D7', summary: 'Kansas City Chiefs baseball hat', details: 'No preferences' },
	{ giftNumber: 'D9', summary: 'Queen size comforter', details: 'Her favorite color is yellow.' },
	{
		giftNumber: 'E1',
		summary: 'Travel mug OR Beanie and Gloves',
		details: 'Please choose just one of the options for this gift',
		options: [
			'Insulated travel mug (for taking hot chocolate to work)',
			'warm beanie and insulated work gloves'
		]
	},
	{
		giftNumber: 'E2',
		summary: 'Work jeans OR Work shirt',
		details: 'Please choose just one of the options for this gift',
		options: ['Blue jean work pants size 34/34', 'any color long sleeve Carhartt shirt size XL']
	},
	{
		giftNumber: 'E3',
		summary: 'Snow globe OR Book',
		details: 'Please choose just one of the options for this gift',
		options: ['Nativity snow globe', 'Book - "Heart to Heart" by Russell M Nelson']
	},
	{
		giftNumber: 'E4',
		summary: 'Food processor OR Heating pad',
		details: 'Please choose just one of the options for this gift',
		options: ['8-cup food processor ', 'Heating pad']
	},
	{
		giftNumber: 'E6',
		summary: 'Bike helmet OR twin sheet set',
		details: 'Please choose just one of the options for this gift',
		options: ["Women's bike helmet", 'Twin size sheet set']
	},
	{
		giftNumber: 'E7',
		summary: 'Temple shoes OR Book ',
		details: 'Please choose just one of the options for this gift',
		options: ['Temple shoes size 8', 'Book - "The Holy Covenants" by Anthony Sweat']
	},
	{ giftNumber: 'E8', summary: 'Womens Coat size M', details: 'No preferences' },
	{
		giftNumber: 'E9',
		summary: 'Gift card OR Shoes',
		details: 'Please choose just one of the options for this gift',
		options: ['Swig gift card', "Crocs size 8 women's"]
	},
	{
		giftNumber: 'E10',
		summary: 'Bed sheets OR Shacket',
		details: 'Please choose just one of the options for this gift',
		options: ['Full size sheet set', 'Shacket size M']
	},
	{
		giftNumber: 'E11',
		summary: 'Book OR Scarf',
		details: 'Please choose just one of the options for this gift',
		options: ['Book - "Under the Cover Mercy" by Rebecca Connolly', 'Ravenclaw scarf and beanie']
	},
	{
		giftNumber: 'E12',
		summary: 'Book OR Bed Sheets',
		details: 'Please choose just one of the options for this gift',
		options: ['Book - "CNA Study Guide" by Dr. Andrew Stapleton', 'Full size sheet set']
	},
	{
		giftNumber: 'E13',
		summary: 'Gift card OR men\'s shirt',
		details: 'Please choose just one of the options for this gift',
		options: ['Gift card to the movies', 'Utah Jazz shirt size men\'s large']
	},
	{
		giftNumber: 'E14',
		summary: 'Jeans OR Pillows',
		details: 'Please choose just one of the options for this gift',
		options: ['Blue jeans size men\'s 32/34 slim', 'New pillows for bed']
	},
	{
		giftNumber: 'E15',
		summary:
			'Beanie or Hoodie OR Gift Card',
		details: 'Please choose just one of the options for this gift',
		options: ['Golden State Warriors beanie or hoodie size men\'s L', 'Temple Recommend Holder and Swig gift card']
	},
	{
		giftNumber: 'E16',
		summary: 'Tennis Shoes OR Pillows',
		details: 'Please choose just one of the options for this gift',
		options: ['Tennis shoes size men\'s 12 wide', 'New pillows for bed']
	},
	{
		giftNumber: 'F1',
		summary: 'Size 6 Diapers',
		details: 'Huggies brand is preferred due to sensitive skin'
	},
	{
		giftNumber: 'F2',
		summary: 'Puramino Hypoallergenic Formula',
		details: 'PLEASE NOTE this gift exceeds the $50 limit'
	},
	{ giftNumber: 'F3', summary: 'Baby toy', details: 'He is about 10 months old.' }
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
