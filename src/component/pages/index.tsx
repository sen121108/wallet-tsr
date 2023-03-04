import { GetApiItem } from "../../api/getItem"

export const Index: React.FC = () => {
    const items:any = GetApiItem()
    console.log(items[0])
    return (
        <div>
              <ul>
                {Object.keys(items).map(key => (
                  <li key={key}>
                    {items[key].name}
                  </li>
                ))}
              </ul>
        </div>
    )
    
}