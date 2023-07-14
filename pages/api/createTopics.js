import { Novu } from '@novu/node';

export default async function createTopic(req, res) {
    try {
        const novu = new Novu(process.env.NOVU_API_KEY);
        if (req.method === 'POST') {
            const { key, name } = req.body
            const result = await novu.topics.create({ key, name });
            res.status(201).json(result.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
