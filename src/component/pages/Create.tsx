import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface FormData {
    name: string;
    money: number;
    appendix: string;
}
//インデント整形　macOS ： Shift + Option + F 

export const Create: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        money: 0,
        appendix: 'N/A',
    })
    const [isOk,setIsOk] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formData.name === '' || isNaN(formData.money) ) {
            setIsOk(true);
        }else {
            const url = 'http://localhost:8888/';
                try {
                    const response = await axios.post(url, formData);
                    console.log(response.data);
                    navigate('/')
                } catch (error) {
                    console.error(error);
                }
            };  
        }

    return (

        <div className=" text-center mt-10 ">
            <h1>Post Form</h1>
            <div>
            {isOk && <p className="text-red-500">データの送信に失敗しました。名前を記入し、金額を半角数字で記入してください。</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">名前 : </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className=" border mt-5"
                    />
                </div>
                <div>
                    <label htmlFor="money">金額 : </label>
                    <input
                        name="money"
                        value={formData.money}
                        className=" border mt-10"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="append">補足事項 : </label>
                    <input
                        name="appendix"
                        value={formData.appendix}
                        onChange={handleInputChange}
                        className=" border mt-10"
                    />
                </div>
                <button type="submit" className="mt-10 mb-10 border hover:text-red-300 hover:opacity-75 transition ">Submit</button>
                <Link to="/">
                <p>ホームに戻る</p>
                </Link>
            </form>
            </div>
        </div>
    )

}