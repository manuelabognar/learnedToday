import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';
// import transactionsRouter from '../routes/transactions.routes';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transations = await this.find();

    const { income, outcome } = transations.reduce(
      (accumulator, transation) => {
        switch (transation.type) {
          case 'income':
            accumulator.income += Number(transation.value);
            break;
          case 'outcome':
            accumulator.outcome += Number(transation.value);
            break;
          default:
            break;
        }
        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    const total = income - outcome;

    return { income, outcome, total };
  }
}

export default TransactionsRepository;
