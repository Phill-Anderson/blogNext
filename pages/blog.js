import { useEffect } from "react"
import { Row, Col, Container } from "react-bootstrap";
import GridItem from "components/grid-item";
import { getAllPosts, getPaginatePosts } from "lib/api";
import Layout from "components/layout";
import { usePosts } from "hooks/usePosts";
import { useSWRInfinite, useSWR } from "swr";
import PreviewAlert from "components/preview-alert";
import { useRouter } from 'next/router'
const PAGE_LIMIT = 2

const Blog = ({ posts, preview }) => {
    // const { data, isLoading, error } = usePosts(posts);
    const router = useRouter()
    // app.js дээр глобал байдлаар useSWR - ийн fetcher функцийг тохируулж өгсөн учраас энэ тохиолдолд fetcher - ийг дамжуулах шаардлагагүй

    // let apiUrl = router.query.category ?
    const { data, size, setSize, isValidating } = useSWRInfinite((index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`,
        { initialData: [posts] }
    );

    useEffect(() => {
        console.log(`changed url`, router.query.category)

    }, [router.query.category])
    return (
        <Layout classes="index" title='нийтлэл' description='Технологитой холбоотой сонирхолтой нийтлэлүүд'>
            <Row>
                {preview && <PreviewAlert />}
            </Row>
            {/*  <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <Row className="mb-5 mt-5">
                {
                    data && data.map(page => (
                        page.map(post => (
                            <Col lg={12} key={Math.random()}>
                                <GridItem post={post} />
                            </Col>
                        ))
                    ))
                }
            </Row>

            <div style={{ textAlign: 'center' }}>
                {
                    data && data[data.length - 1].length !== 0 &&

                    (isValidating ? <div>Түр хүлээнэ үү ...</div> :
                        <button className="moreBtn" onClick={() => setSize(size + 1)}>Цааш нь ...</button>
                    )
                }
            </div>
        </Layout>
    );
}

export default Blog

export const getStaticProps = async ({ preview = false, params }) => {
    // sanity preview горимын мэдээллийг browser - ийн cookie -д хадгалж бга
    const posts = await getPaginatePosts(0, PAGE_LIMIT);

    console.log(`index.html хуудас дахин build хийгдлээ`, params)
    return {
        props: {
            posts,
            preview
        },
        revalidate: 10000 // тухайн хугацааны дараа энэ хуудсыг дахин build хийнэ
    };
};