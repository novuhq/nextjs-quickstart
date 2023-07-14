import { sendEmail } from "@/app/utils/novu"

export default async function subscribe(req, res) {
    try {
        if (req.method === 'POST') {
            const { email, description } = req.body
            await sendEmail(email,description)
            await res.status(200).json({ message: 'email working' })
        }

    } catch (error) {
        console.log(error);
        res.status(405).json({ message: 'not working' })
    }

}
