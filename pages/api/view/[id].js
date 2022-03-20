// 다이나믹 API 라우터
export default (req, res) => {
  // req: 요청 url
  // query: 요청 url 에 대한 쿼리 파라미터
  res.status(200).json({ id: req.query.id });
};
