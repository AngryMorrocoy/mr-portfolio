# Manuel Portfolio

In case you don't know I'm **Manuel Rivas** and this is a (*my*) portfolio made with [Next.js](https://nextjs.org/).

### Why nextjs?

Well, I could've been used *react* or even the web development *orion
belt* (HTML, CSS, JS). But I decided to practice the nextjs framework although
it's an obvious overkill due to the nature of this project.

### Contact

To be able to send me a mail using a contact form in the ui, I created an api route (/api/send_mail/)
that only accepts *post* requests and the body should be like:

```typescript
export type requestBody = {
  name: string;
  email: string;
  message: string;
};
```

This rout makes a request to [IFTTT](https://ifttt.com/), using an applet and from there it sends me a
message.

### Run locally

Due to the nature of the "*api*" to run locally you'll need to set two environment variables:

- **IFTTT_EVENT_NAME**: The name of the event you set in your IFTTT applet.
- **IFTTT_API_KEY**: The api key to use webhooks from IFTTT.

Feel free to clone this repo and run it locally with:

```bash
IFTTT_EVENT_NAME="some_event" \
IFTTT_API_KEY="my_api_key" \
npm run dev
```
