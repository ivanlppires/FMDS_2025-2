import admin from "firebase-admin";

import serviceAccount from "./key.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const checkToken = async (req, res, next) => {
  if (!!!req.headers.authorization)
    return res.status(403).json({ message: "Não autorizado" });

  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    if (!!!decodeValue) return res.status(403).json({ message: "Não autorizado" });
    req.user = decodeValue;
    console.log(req.user)
    next();
  } catch (e) {
    return res.json({ message: "Não autorizado" });
  }
};
export default checkToken;
