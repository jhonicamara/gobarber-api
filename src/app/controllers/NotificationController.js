import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(require, response) {
    const checkUserProvider = await User.findOne({
      where: { id: require.userId, provider: true },
    });

    if (!checkUserProvider) {
      return response
        .status(401)
        .json({ error: 'Only providers can load notifications' });
    }

    const notifications = await Notification.find({
      user: require.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return response.json(notifications);
  }

  async update(require, response) {
    // const notification = await Notification.findById(require.params.id);

    const notification = await Notification.findByIdAndUpdate(
      require.params.id,
      { read: true },
      { new: true }
    );

    return response.json(notification);
  }
}

export default new NotificationController();
