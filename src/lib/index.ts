// place files you want to import through the `$lib` alias in this folder.
interface Gift{
	giftNumber: number;
	summary: string;
	details: string;
}

export const presentList: Gift[] = [
	{giftNumber:1, summary:"Girl socks", details: "She likes floral patterns and wears shoe size 6"}
]

export const coordinatorPhoneNumber:string = "+18887776666";
export const signupEmailSubject:string = "Giving Tree 2023"
export const signupMessage:string = "Hi%21%20I%20want%20to%20help%20out%20with%20this%20gift%21%0AMy%20Name%3A%0AMy%20Phone%20Number%3A%0AGift%20Number%3A";
export const welcomeMessage:string = "Help us get gifts for some families in the neighborhood";
export const coordinatorEmail:string = "name@mail.com"
export const giftDollarLimit:number = 50;