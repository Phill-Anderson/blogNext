const nodemailer = require("nodemailer")

const sendEmail = async () => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: "2525",
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.Email,
                pass: process.env.Password
            }
        });
        const message = {
            from: 'eaglesquad86@gmail.com',
            to: 'eaglesquad86@gmail.com',
            cc: 'eaglesquad86@gmail.com',
            bcc: 'eaglesquad86@gmail.com',
            subject: 'Тест хийж байна',
            text: 'имэйл очсон уу',
            /*   attachments: [
                  {
                      filename: ''
                  }
              ] */
        }
        const info = await transporter.sendMail(message);
        console.log('message successfully send!!!', info.messageId)
    } catch (err) {
        console.log(`алдаа гарлаа`, err.message)
    }
}