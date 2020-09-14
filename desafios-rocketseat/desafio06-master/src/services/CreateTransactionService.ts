// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transcationsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transcationsRepository.create({
      title,
      value,
      type,
    });

    await transcationsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
