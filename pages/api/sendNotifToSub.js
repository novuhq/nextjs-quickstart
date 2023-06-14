import { Novu } from '@novu/node';
import CircularJSON from 'circular-json';

export default async function sendNotifToSub(req, res) {
    try {
        const novu = new Novu(process.env.NOVU_API_KEY);
        if (req.method === 'POST') {
            // Get the topic key from the request body
            const topicKey = req.body.topicKey;
            const email = req.body.email;
            const description = req.body.description;

            // Call Novu SDK to trigger a notification to the topic subscribers
            const result = await novu.trigger("email-quickstart", {
                to: [{ type: "Topic", topicKey: topicKey }],
                payload: {
                    email: email,
                    description: description,
                },
            });
            // Return the result as JSON response
            res.json(CircularJSON.stringify(result));
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(CircularJSON.stringify({ message: error.message }));
    }
}
