import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../Mail-Adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "851683cd2ad9f0",
    pass: "14fe1743275cf6"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Beatriz Duarte <beatriznduarte1@gmail.com>',
    subject,
    html: body,
  })
  }
}