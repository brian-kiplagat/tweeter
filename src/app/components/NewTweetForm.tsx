import { useSession } from "next-auth/react";
import { Button } from "~/app/components/Button";
import { ProfileImage } from "~/app/components/ProfileImage";
import { FormEvent, useCallback, useLayoutEffect, useRef, useState } from "react";

function updateHeight(textArea: HTMLTextAreaElement) {
    if (textArea == null) return
    textArea.style.height = "0"
    textArea.style.height = `${textArea.scrollHeight}px`
}

function Form({ onTweetSubmit }) {
    const session = useSession();
    const url = session.data?.user?.image;
    const [inputValue, setInput] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>();
    const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
        updateHeight(textArea);
        textAreaRef.current = textArea;
    }, []);

    useLayoutEffect(() => {
        if (textAreaRef.current) {
            updateHeight(textAreaRef.current);
        }
    }, [inputValue]);

    if (session.status !== "authenticated") return null;

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault();

        const tweet =  {
            "id": Math.floor(Math.random() * (100 - 10 + 1)) + 10,
            "name": "Ian Patel",
            "age": 32,
            "city": "Denver",
            "gender": "Male",
            "occupation": "Accountant",
            "tweet": inputValue,
            "imageUrl": "https://cdn.discordapp.com/avatars/838404009956999179/40f5e829053cd74c478269826a46b40d.png"
        };
        onTweetSubmit(tweet);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 border-b px-4 py-2">
            <div className="flex gap-4">
                <ProfileImage src={url}/>
                <textarea
                    style={{ height: 0 }}
                    value={inputValue}
                    ref={inputRef}
                    onChange={e => setInput(e.target.value)}
                    placeholder="What's Happening"
                    className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
                />
            </div>
            <Button className="self-end">Tweet!</Button>
        </form>
    );
}

export function NewTweetForm({ onTweetSubmit }) {
    const session = useSession();
    if (session.status !== "authenticated") return null;
    return <Form onTweetSubmit={onTweetSubmit} />;
}
