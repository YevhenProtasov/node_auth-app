import { ResetToken } from '../models/resetToken.model.js';

const create = async (userId, resetToken) => {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 30 * 60 * 1000);

  await ResetToken.create({ userId, resetToken, expiresAt });
};

const getByResetToken = (resetToken) => {
  return ResetToken.findOne({ where: { resetToken } });
};

const remove = async (userId) => {
  return await ResetToken.destroy({ where: { userId } });
};

export const resetTokenService = {
  create,
  getByResetToken,
  remove,
};
