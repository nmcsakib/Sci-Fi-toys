import { useEffect } from "react"

const useTitleChange = (title) => {
    useEffect(() => {
        document.title = `Sci-Fi toy | ${title}`
    },[title])
}
export default useTitleChange