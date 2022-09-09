// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import json from "./api.json"

export default function handler(req, res) {
  return res.status(200).json( json )
}
