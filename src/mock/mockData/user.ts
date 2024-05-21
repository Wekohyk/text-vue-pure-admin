export default {
  getUserData: () => {
    return {
      code: 200,
      data: {
        user: {
          avatar: '/avatar.webp',
          username: 'Weko',
          nickname: 'Weko',
        },
      },
    };
  },
};
