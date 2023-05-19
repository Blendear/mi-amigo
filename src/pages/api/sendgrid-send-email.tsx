import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

//import node'js'owo our zainstalowany sendgrid api
const sgMail = require("@sendgrid/mail");

// podaj nasz dedykowane do sendgrida API key

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //zaciągnij dane z requesta (to co wpisal user po czym klikna submit button)
  const body = JSON.parse(req.body);

  //stwórz zawartość maila
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const msg = {
    to: "decepticon.cibis8@gmail.com", // Change to your recipient
    from: "decepticon.cibis8@gmail.com", // Change to your verified sender
    subject: "Tobi i jego eksperymenty",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  //spróbuj wysłać maila, łapiąc informacje zwrotną
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email wysłany");
    })
    .catch((error) => {
      console.error(error);
    });
  //niezbędny handling of the response
  res.status(200).json({ name: "OK ziomuś" });
}
