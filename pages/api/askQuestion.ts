import type {NextApiRequest, NextApiResponse} from 'next'
import query from '../../lib/queryApi';
import admin from "firebase-admin"
import { adminDb } from '../../firebaseAdmin';

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){

    const{prompt, chatId, model,session} = req.body;

    if (!prompt){
        res.status(400).json({answer: "Please provide a prompt"});
    return;
    }
    if (!chatId) {
        res.status(400).json({answer:"Please provide a valid chat ID"});
        return;
    }



    const response = await query(prompt, model)

    const message: Message = {
        text: response || "MODEL was unable to find an answer for that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: "https://images-prod.dazeddigital.com/1097/155-0-1097-938/azure/dazed-prod/1200/8/1208405.jpg",
        },
    };

    await adminDb.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message);

    res.status(200).json({answer:message.text})
}
