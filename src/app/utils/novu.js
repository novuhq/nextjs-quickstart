import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_API_KEY);

export async function sendEmail(email, description) {
    await novu.subscribers.identify('123', {
        email: email,
        firstName: "Subscriber",
    });
    await novu.trigger('email-quickstart', {
        to: {
            subscriberId: '123',
            email: email
        },
        payload: {
            email: email,
            description: description
        }
    });
}
