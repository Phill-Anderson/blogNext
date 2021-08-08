

export default async (req, res) => {

    if (process.env.SANITY_PREVIEW_SECRET !== req.query.secret)
        return res.status(401).json({ message: "invalid request" + req.query.secret })

    res.status(200).json({ message: "success" + req.query.slug })
}