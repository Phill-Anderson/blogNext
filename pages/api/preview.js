

export default async (req, res) => {

    if (process.env.SANITY_PREVIEW_SECRET !== req.query.secret)
        return res.status(401).json({ message: "invalid request" + req.query.secret })

    res.setPreviewData({ data: req.query.secret })
    res.writeHead(307, { Location: encodeURI(`/${req.query.slug}`) })
    res.end()
}