export default function HeaderOption({url,urlIcon}){
    return(
        <li className="bg-zinc-400 p-1.5 rounded-2xl  hover:bg-zinc-300  duration-300">
                    <a href={url}>
                        <img src={urlIcon}/>
                    </a>
        </li>
    )
}