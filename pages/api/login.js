export default (req, res) => {
  // res.statusCode = 200;
  // res.json({ name: null });
  if (req.method === 'POST') {
    // POST 로만 동작함
    /*
      setHeader : 요청 헤더 생성
        - args
          1."Set-Cookie" : 쿠키 생성
          2. "a_name=Mike;Max-Age=3600;HttpOnly,Secure" : 쿠키 내용 (쿠키명;쿠키 유지시간; ?? ; ??)
    */
    res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=3600;HttpOnly,Secure');
    res.statusCode = 200;
    res.json({ message: 'ok' });
  }
};
