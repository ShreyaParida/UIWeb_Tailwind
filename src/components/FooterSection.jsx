import { resourcesLinks, platformLinks, communityLinks} from "../../virtualr-main/src/constants"
const FooterSection = () => {
  return (
    <footer className="container mx-auto mt-20 border-t justify-center py-10 border-neutral-600">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            <div>
                <h3 className="text-md font-semibold mb-4 underline underline-offset-4">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((Link, index) =>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-blue-400  " href={Link.href}>{Link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4 underline underline-offset-4">Platforms</h3>
                <ul className="space-y-2">
                    {platformLinks.map((Link, index) =>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-blue-400  " href={Link.href}>{Link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4 underline underline-offset-4">Communities</h3>
                <ul className="space-y-2">
                    {communityLinks.map((Link, index) =>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-blue-400  " href={Link.href}>{Link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    </footer>
  )
}

export default FooterSection
