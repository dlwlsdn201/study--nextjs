export default (req, res) => {
  res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=0;HttpOnly,Secure'); // Max-Age = 0 이면, 쿠키 즉시 소멸
  res.statusCode = 200;
  res.json({ message: 'ok' });
};
