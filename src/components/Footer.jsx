import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function Footer() {
    return (
        <div className="flex flex-row gap-6 justify-center">
            <hr/>
            <div className="flex flex-col gap-2 w-1/5">
                <h3>ResourcesLinks</h3>
                <ul>
                    {resourcesLinks.map((item) => (
                    <li key={item.href} className="text-neutral-400 mt-2">
                        <a href={item.href} className="text-neutral-400">{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-2 w-1/5">
                <h3>PlatformLinks</h3>
            <ul>
                {platformLinks.map((item) => (
                    <li key={item.href} className="text-neutral-400 mt-2">
                        <a href={item.href} className="text-neutral-400">{item.text}</a>
                    </li>
                ))}
            </ul>
            </div>

            <div className="flex flex-col gap-2 w-1/5">
            <h3>CommunityLinks</h3>
            <ul>
                {communityLinks.map((item) => (
                    <li key={item.href} className="text-neutral-400 mt-2">
                        <a href={item.href} className="text-neutral-400">{item.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    )
}
export default Footer       