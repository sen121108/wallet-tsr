import { GetApiItem } from "../../api/getItem"

export const Index: React.FC = () => {
    const items:Object = GetApiItem()

    return (
        <div>
            <p>index</p>
        </div>
    )
    
}