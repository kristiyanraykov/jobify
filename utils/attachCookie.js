const attachCookie = ({res, token}) => {
    res.cookies('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV === 'production',
      })};

export default attachCookie;