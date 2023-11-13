// place files you want to import through the `$lib` alias in this folder.
interface Gift{
	giftNumber: number;
	summary: string;
	details: string;
}

export const presentList: Gift[] = [
	{giftNumber:1, summary:"Girl socks", details: "She likes floral patterns and wears shoe size 6"}
]