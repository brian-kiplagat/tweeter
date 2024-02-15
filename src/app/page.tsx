"use client"
import {unstable_noStore as noStore} from "next/cache";
import {NewTweetForm} from "~/app/components/NewTweetForm";
import {useSession} from "next-auth/react";
import {Card2} from "~/app/components/Card2";
import {useState} from "react";

export default function Home() {
    noStore();

    const array = [
        {
            "id": 1,
            "name": "Alice Smith",
            "age": 30,
            "city": "New York",
            "gender": "Female",
            "occupation": "Engineer",
            "tweet": "Passionate engineer dedicated to crafting innovative solutions. Enjoys hiking in the Adirondacks and experimenting with new recipes in the kitchen.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 2,
            "name": "Bob Johnson",
            "age": 25,
            "city": "Los Angeles",
            "gender": "Male",
            "occupation": "Teacher",
            "tweet": "Inspiring educator committed to empowering students. Enjoys playing guitar and exploring new coffee shops around the city.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 3,
            "name": "Charlie Brown",
            "age": 35,
            "city": "Chicago",
            "gender": "Male",
            "occupation": "Doctor",
            "tweet": "Compassionate physician dedicated to providing quality healthcare. Enjoys playing basketball and volunteering at local shelters.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 4,
            "name": "David Lee",
            "age": 40,
            "city": "Seattle",
            "gender": "Male",
            "occupation": "Software Developer",
            "tweet": "Innovative software developer passionate about creating user-friendly applications. Enjoys hiking in the Pacific Northwest and attending tech meetups.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 5,
            "name": "Eve Martinez",
            "age": 28,
            "city": "San Francisco",
            "gender": "Female",
            "occupation": "Designer",
            "tweet": "Creative designer with a flair for modern aesthetics. Enjoys sketching in the park and exploring art galleries in the Bay Area.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 6,
            "name": "Frank Taylor",
            "age": 45,
            "city": "Boston",
            "gender": "Male",
            "occupation": "Lawyer",
            "tweet": "Experienced lawyer dedicated to advocating for justice. Enjoys sailing on the Charles River and attending legal conferences.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 7,
            "name": "Grace Johnson",
            "age": 33,
            "city": "Houston",
            "gender": "Female",
            "occupation": "Entrepreneur",
            "tweet": "Visionary entrepreneur passionate about creating impactful businesses. Enjoys mentoring aspiring entrepreneurs and exploring new cuisines.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 8,
            "name": "Hannah Clark",
            "age": 27,
            "city": "Miami",
            "gender": "Female",
            "occupation": "Marketing Manager",
            "tweet": "Strategic marketing manager with a knack for building brands. Enjoys salsa dancing on South Beach and attending marketing conferences.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 9,
            "name": "Ian Patel",
            "age": 32,
            "city": "Denver",
            "gender": "Male",
            "occupation": "Accountant",
            "tweet": "Detail-oriented accountant with expertise in financial analysis. Enjoys skiing in the Rockies and volunteering for community tax assistance programs.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        },
        {
            "id": 10,
            "name": "Jane Kim",
            "age": 29,
            "city": "San Diego",
            "gender": "Female",
            "occupation": "Physician Assistant",
            "tweet": "Dedicated physician assistant committed to providing compassionate patient care. Enjoys surfing at the California beaches and exploring local cuisine.",
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        }
    ]
    //array.sort((a, b) => b.id - a.id);
    const [data, setData] = useState(array);

    // Function to add an object to the array
    const addTweet = (tweet: { id: number; name: string; age: number; city: string; gender: string; occupation: string; tweet: string; imageUrl: string; }) => {
        setData(prevData => [tweet,...prevData ]);
        console.log('Tweeted!', tweet)
    };
    const session = useSession();
    return (

        <>

            <header className="sticky top-0 z-10 border-b bg-white pt-2">
                <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
            </header>
            <NewTweetForm onTweetSubmit={addTweet}/>
            <div className="grid grid-cols-1 gap-0.2">

                {data.map((item) => (
                    <Card2 url={item.imageUrl} name={item.name} age={item.age} city={item.city} id={item.id}
                           key={item.id} tweet={item.tweet} gender={item.gender} occupation={item.occupation}/>
                ))}

            </div>


        </>);


}

