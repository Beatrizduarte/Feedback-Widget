import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../Mail-Adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData): Promise<void>{
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Beatriz Duarte <beatriznduarte1@gmail.com>',
    subject,
    html: body,
  })
  }
}