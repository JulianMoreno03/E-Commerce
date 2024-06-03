export default function HeaderOption({url,urlIcon}){
    return(
        <li className="bg-zinc-400 p-1.5 rounded-2xl  hover:bg-indigo-800  duration-300">
                    <a href={url}>
                        <img src={urlIcon}/>
                    </a>
        </li>
    )
}