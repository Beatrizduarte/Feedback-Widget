import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/Nodemailer-Mail-Adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/Prisma-Feedbacks-Repository';
import { SubmitFeedbackUseCase } from './use-cases/Submit-Feedback-Use-Cases';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot} = req.body;

  const prismaFeedback = new PrismaFeedbacksRepository()
  const nodemailerMailer = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedback,
    nodemailerMailer
  )

  await submitFeedbackUseCase.execute({
    type, 
    comment,
    screenshot,
  })

  return res.status(201).send();
})