import './Tailwind.css'

export default function MenuBox({color, titletext, bodytext}: {color: string, titletext: string, bodytext: string}) {

    return (
        <div className={`flex p-4 max-w-7xl w-full justify-stretch mx-auto ${color} border rounded-md`}>
            <div>
                <h3>{titletext}</h3>
                <p>{bodytext}</p>
            </div>
        </div>
    )
}