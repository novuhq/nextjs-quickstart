import { Novu } from '@novu/node';

export default async function addSub(req, res) {
    try {
        const novu = new Novu(process.env.NOVU_API_KEY);
        if (req.method === 'POST') {
            // Get the subscriber ID from the request body
            const subscriberId = req.body.subscriberId;
            // Get the topic key from the request body
            const topicKey = req.body.topicKey;
            // Call Novu SDK to add the subscriber to the topic
            const result = await novu.topics.addSubscribers(topicKey, {
                subscribers: [subscriberId],
            });
            // Return the result as JSON response
            res.status(200).json(result.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
