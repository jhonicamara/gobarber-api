import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import User from '../models/User';
import Appointment from '../models/Appointment';

class ScheculeController {
  async index(require, response) {
    const checkUserProvider = await User.findOne({
      where: { id: require.userId, provider: true },
    });

    if (!checkUserProvider) {
      return response.status(401).json({ error: 'User is not a provider' });
    }

    const { date } = require.query;
    const parsedDate = parseISO(date);

    // Verificação dos agendamentos previstos para o dia
    // Eles vao estar entre os seguintes valores:

    // 2020-01-20 00:00:00

    // 2020-01-20 23:59:59

    const appointments = await Appointment.findAll({
      where: {
        provider_id: require.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
      order: ['date'],
    });

    return response.json(appointments);
  }
}

export default new ScheculeController();
