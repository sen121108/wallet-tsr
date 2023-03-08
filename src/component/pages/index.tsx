import { GetApiItem } from "../../api/getItem"
import { Link } from "react-router-dom"

export const Index: React.FC = () => {
    const items:any = GetApiItem()
    console.log(items[0])
    return (
        <div>
          <div>
            <Link to='/create' className="text-center m-5 hover:scale-150 ">
              <p className="hover:scale-150 hover:opacity-75 transition"  >post画面に移行する</p>
            </Link>
          </div>
          <table className="m-auto mt-10">
            <tbody>
            <tr>
              <th>名前</th>
              <th>金額</th>
              <th>補足</th>
            </tr>
            {Object.keys(items).map(key => (
                  <tr key={key}>
                  <td>
                    {items[key].name}
                  </td>
                  <td>
                    {items[key].money}
                  </td>
                  <td>
                    {items[key].appendix}
                  </td>
                </tr>
                ))}
              </tbody>
          </table>
          
        </div>
    )
    
}