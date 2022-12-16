const handler = (req, res) => {
  return res
    .status(200)
    .json({ method: req.method, message: "testing backend response " });
};

export default handler;
