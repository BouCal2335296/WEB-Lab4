import Blog from "../../component/blog/Blog"

export default function BlogInfo({params}) {
    return <>
    <Blog id={params.id}/>
    </>

}