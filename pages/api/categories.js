import { getAllCategories } from "lib/api";

export default async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.log(`ямар нэгэн алдаа гарлаа----`, error)
    }
};
