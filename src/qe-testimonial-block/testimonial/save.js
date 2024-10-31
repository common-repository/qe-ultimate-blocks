import { useBlockProps,RichText } from '@wordpress/block-editor';

export default function save({attributes}){
    const {content,author_name,designation, url, alt, id, imageHeight=150, imageWidth=150, heightUnit='px', widthUnit='px'} = attributes;
    const dynamicHeight = `${imageHeight}${heightUnit}`;
    const dynamicWidth = `${imageWidth}${widthUnit}`;
    const stylesWidth = {
        '--width': dynamicWidth,
        '--height': dynamicHeight,
    };
    return (
        <>
            {
                url && author_name && <div {...useBlockProps.save()}>
                    {
                        url && <div className='qe-testimonial-img'>
                            <img 
                                src={url} 
                                alt={alt} 
                                className={ id ? `wp-image-${id}` : null}  
                                data-height={`${imageHeight+heightUnit}`} data-width={`${imageWidth+widthUnit}`}
                                style={stylesWidth}
                            />
                        </div> 
                    }
                    <div className='qe-testimonial-content'>
                        { 
                            content && <RichText.Content 
                                tagName='p' 
                                value={content}
                                className='qe-testimonial-content__des'
                            /> 
                        }
                        { 
                            author_name && <RichText.Content 
                                tagName='h4' 
                                value={author_name}
                                className='qe-testimonial-content__author-name'
                            /> 
                        }
                        { 
                            designation && <RichText.Content 
                                tagName='span' 
                                value={designation}
                                className='qe-testimonial-content__designation'
                            />
                        }
                    </div>
                </div>
            }
        </>
    );
}