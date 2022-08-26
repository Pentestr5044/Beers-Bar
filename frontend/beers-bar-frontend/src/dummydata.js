import Priestess from "./assets/characters/priestess-of-payloads.jpg";
import Beserker from "./assets/characters/brute-forcing-beserker.jpg";


export const Users = [
  {
    username: "jon1",
    fName: "jon",
    lName: "bar",
    id: 1,
    profileP: < Beserker />
  },
  {
    username: "jim",
    fName: "jim",
    lName: "tavern",
    id: 2,
    profileP: <Priestess />
  },
];

export const Beer = [{
    beerImg: "bubbles-Beer.jpg",
    price: "$3.99",
    beerId: 1,
    beerDesc: "This beer can quench your thirst and make you quite the attractive person to another person. "
},
{ 
    beerImg: "fancy-beer.jpg",
    price: "$4.00",
    beerId: 2,
    beerDesc: "This is a fancy beer it likes to sing to you while you drink but only as long as you lift your pinkey while drinking."
},
{
    beerImg: "light-beer.jpg",
    price: "$5.99",
    beerId: 3,
    beerDesc: "This is a light beer, no shit though this beer is lighter than air."
},
{
    beerImg: "orange-Beer.jpg",
    price: "$10.99",
    beerId: 4,
    beerDesc: "The most orange beer you will ever drink. I garauntee it!"
},
{
    beerImg: "stout.jpg",
    price: "$8.99",
    beerId: 5,
    beerDesc: "the stoutest stout I've ever seen. "

}
];

export const Messages = [{
    senderId: 1,
    receiverId: 2,
    text: "this is a message to you"
},
{
    senderId: 2,
    receiverId: 1,
    text: "this is a message sent from a receiver"
}];
