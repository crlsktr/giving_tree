// place files you want to import through the `$lib` alias in this folder.
interface Gift {
	giftNumber: string;
	summary: string;
	details: string;
}

export const presentList: Gift[] = [
	{ giftNumber: 'B1', summary: "Book for 10 year old boy", details: 'He would like a nonfiction book and is interested in astronomy and animals'}
	,{ giftNumber: 'B2', summary: 'Clothes for 10 year old boy', details: 'He needs shirts and Levis. He wears size 10 shirts and size 10 slim pants.'}
	,{ giftNumber: 'B3', summary: 'Outfits for infant boy', details: 'He wears size 2T and needs winter outfits and PJs' }
	,{ giftNumber: 'B4', summary: 'Baby toy', details: 'Sensory or learning toy for baby 6-12 months' }
	,{ giftNumber: 'C1', summary: 'Boys snow pants size 12/14', details: '' }
	,{ giftNumber: 'C2', summary: 'Toy for 8-year-old boy', details: 'He likes Pokemon and Legos' }
	,{ giftNumber: 'C3', summary: 'Girls snow pants size 6/6x', details: 'This is listed twice for two different children. It\'s not a duplicate 😁' }
	,{ giftNumber: 'C4', summary: 'Toy for 5-year-old girl', details: 'She likes Pokemon, puzzles, and Nerf' }
	,{ giftNumber: 'C5', summary: 'Girls snow pants size 6/6x', details: 'This is listed twice for two different children. It\'s not a duplicate 😁' }
	,{ giftNumber: 'C6', summary: 'Toy for 5-year-old girl', details: 'She likes anything girly. She likes stuffed animals, baby dolls, and dress up.' }
	,{ giftNumber: 'D1', summary: 'Toy for 8-year-old boy', details: 'He likes Fortnite, Minecraft and Harry Potter' }
	,{ giftNumber: 'D2', summary: 'Clothes for 8-year-old boy', details: 'He wears size 5/6 boys and needs shirts and pants. His favorite color is green and he likes Harry Potter, Fortnite, and Minecraft' }
	,{ giftNumber: 'D3', summary: 'Toy for toddler girl', details: 'She likes Minnie Mouse and Baby Shark.' }
	,{ giftNumber: 'D4', summary: 'Warm winter clothes for toddler girl', details: 'She wears size 18 months and needs long-sleeved winter outfits.' }
	,{ giftNumber: 'D5', summary: 'Newborn hats or sleep sacks', details: 'Any color for baby boy.' }
	,{ giftNumber: 'D6', summary: 'Bottles and binkies for newborn', details: '' }
	,{ giftNumber: 'D7', summary: 'Kansas City Chiefs baseball hat', details: '' }
	,{ giftNumber: 'D9', summary: 'Queen size comforter', details: 'Her favorite color is yellow.' }
	,{ giftNumber: 'E1', summary: 'Insulated travel mug (for taking hot chocolate to work) OR warm beanie and insulated work gloves', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E2', summary: 'Blue jean work pants size 34/34 OR any color long sleeve Carhartt shirt size XL ', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E3', summary: 'Nativity snow globe OR Russell M Nelson book Heart to Heart', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E4', summary: '8-cup food processor OR heating pad', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E6', summary: 'Womens bike helmet OR twin sheet set', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E7', summary: 'Temple shoes size 8 OR The Holy Covenants by Anthony Sweat ', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E8', summary: 'Womens Coat size M', details: '' }
	,{ giftNumber: 'E9', summary: 'Swig gift card OR Crocs size 8 womens', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E10', summary: 'Full size sheet set OR Shacket size M', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E11', summary: 'Book "Under the Cover Mercy" by Rebecca Connolly OR Ravenclaw scarf and beanie', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E12', summary: 'Book "CNA Study Guide" by Dr. Andrew Stapleton OR full size sheet set', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E13', summary: 'Gift card to the movies OR Utah Jazz shirt size large', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E14', summary: 'Blue jeans mens size 32/34 slim OR new pillows for bed', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E15', summary: 'Golden State Warriors beanie or hoodie size L OR temple recommend holder and gift card to Swig', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'E16', summary: 'Tennis shoes size mens 12 wide OR pillows for bed ', details: 'Please choose just one of the options for this gift' }
	,{ giftNumber: 'F1', summary: 'Size 6 Diapers', details: 'Huggies brand is preferred due to sensitive skin' }
	,{ giftNumber: 'F2', summary: 'Puramino Hypoallergenic Formula', details: 'PLEASE NOTE this gift exceeds the $50 limit' }
	,{ giftNumber: 'F3', summary: 'Baby toy', details: 'He is about 10 months old.' },]

export const coordinatorPhoneNumber: string = '+18887776666';
export const signupEmailSubject: string = 'Giving Tree 2023';
export const signupMessage: string =
	'Hi%21%20I%20want%20to%20help%20out%20with%20this%20gift%21%0AMy%20Name%3A%0AMy%20Phone%20Number%3A%0AGift%20Number%3A';
export const welcomeMessage: string =
	'Help us make Christmas brighter for families in our community';
export const coordinatorEmail: string = 'jorrigarcia@gmail.com';
export const giftDollarLimit: number = 50;
export const apptitle: string = '12th Ward Giving Tree 2023';
