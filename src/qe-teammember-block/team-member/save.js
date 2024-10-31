import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Icon } from "@wordpress/components";

export default function save({ attributes }) {
    const { name, bio, url, alt, id, socialLinks, imageHeight=200, imageWidth=200, heightUnit='px', widthUnit='px'} = attributes;
    const dynamicHeight = `${imageHeight}${heightUnit}`;
    const dynamicWidth = `${imageWidth}${widthUnit}`;
    const stylesWidth = {
        '--width': dynamicWidth,
        '--height': dynamicHeight,
    };
    return (
        <>
            { 
                url && socialLinks && <div {...useBlockProps.save()} style={stylesWidth}>
                    {
                        url && <div className="qe-team-photo" data-height={`${imageHeight+heightUnit}`} data-width={`${imageWidth+widthUnit}`} style={stylesWidth}>
                            <img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
                            <div className="qe-team-detail">
                                { 
                                name && <RichText.Content
                                tagName="h4"
                                value={name}
                                /> }
                                { bio && <RichText.Content
                                    tagName="p"
                                    value={bio}
                                /> }
                            </div>
                        </div>
                    }
                    { 
                        socialLinks.length > 0 && (
                            <div className="qe-team-social">
                                <div className="wp-block-qe-block-qe-team-member-social-links">
                                    <ul>
                                        {socialLinks.map((item, index) => {
                                            return (
                                                <li key={index} data-icon={item.icon}>
                                                    <a href={item.link}>
                                                        <Icon icon={item.icon} />
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            }
        </>
    );
}