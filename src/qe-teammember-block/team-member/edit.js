import { useEffect, useState, useRef } from "@wordpress/element";
import { useBlockProps, RichText, MediaPlaceholder, MediaReplaceFlow, BlockControls, InspectorControls, store as blockEditorStore } from "@wordpress/block-editor";
import { __ } from '@wordpress/i18n';
import { useSelect } from "@wordpress/data";
import { usePrevious } from "@wordpress/compose";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { Spinner, withNotices, ToolbarButton, PanelBody, TextareaControl, RangeControl, Icon, Tooltip, TextControl, Button } from "@wordpress/components";
import { DndContext, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import SortableItem from "./sortable-item";

function Edit({ attributes, setAttributes, noticeOperations, noticeUI, isSelected }) {
    const { name, bio, url, alt, id, socialLinks, imageHeight=200, imageWidth=200, heightUnit='px', widthUnit='px'} = attributes;
    const [blobURL, setBlobURL] = useState();
    const [selectedLink, setSelectedLink] = useState();

    const prevURL = usePrevious(url);
    const prevIsSelected = usePrevious(isSelected);

    const sensors = useSensors(
		useSensor( PointerSensor, {
			activationConstraint: { distance: 5 },
		} )
	);

    const titleRef = useRef();

    const handleDragEnd = ( event ) => {
		const { active, over } = event;
		if ( active && over && active.id !== over.id ) {
			const oldIndex = socialLinks.findIndex(
				( i ) => active.id === `${ i.icon }-${ i.link }`
			);
			const newIndex = socialLinks.findIndex(
				( i ) => over.id === `${ i.icon }-${ i.link }`
			);
			setAttributes( {
				socialLinks: arrayMove( socialLinks, oldIndex, newIndex ),
			} );
			setSelectedLink( newIndex );
		}
	};

    const imageSizes = useSelect((select) => {
        return select(blockEditorStore).getSettings().imageSizes;
    }, []);

    const onChangeName = (newName) => {
        setAttributes({ name: newName })
    }
    const onChangeBio = (newBio) => {
        setAttributes({ bio: newBio })
    }
    const onChangeAlt = (newAlt) => {
        setAttributes({ alt: newAlt })
    }
    const onSelectImage = (image) => {
        if (!image || !image.url) {
            setAttributes({ url: undefined, id: undefined, alt: '' });
            return;
        }
        setAttributes({ url: image.url, id: image.id, alt: image.alt });
    }
    const onSelectURL = (newURL) => {
        setAttributes({
            url: newURL,
            id: undefined,
            alt: '',
        })
    }
    const handleChangeHeightUnit = (newheightUnit) =>{
        setAttributes({heightUnit: newheightUnit});
    }
    const onChangeImageHeight = (newHeight) =>{
        setAttributes({imageHeight: newHeight});
    }
    const onChangeImageHeightPixel = () =>{
        handleChangeHeightUnit('px');
    }
    const onChangeImageHeightPercentage = () =>{
        handleChangeHeightUnit('%');
    }
    const onChangeImageHeightEm = () =>{
        handleChangeHeightUnit('em');
    }
    let heightmin = 1;
    let heightmax = 1000;
    let heightstep = 1;
    if( heightUnit == '%' ){
        heightmin = 10;
        heightmax = 100;
        heightstep = 1;
    }else if( heightUnit == 'em' ) {
        heightmin = 2;
        heightmax = 100;
        heightstep = 0.1;
    }
    const handleChangeWidthUnit = (newWidthUnit) =>{
        setAttributes({widthUnit: newWidthUnit});
    }
    const onChangeImageWidthPixel = () =>{
        handleChangeWidthUnit('px');
    }
    const onChangeImageWidthPercentage = () =>{
        handleChangeWidthUnit('%');     
    }
    const onChangeImageWidthEm = () =>{
        handleChangeWidthUnit('em');      
    }
    let widthmin = 1;
    let widthmax = 1000;
    let widthstep = 1;
    if( widthUnit == '%' ){
        widthmin = 10;
        widthmax = 100;
        widthstep = 1;
    } else if( widthUnit == 'em' ) {
        widthmin = 2;
        widthmax = 100;
        widthstep = 0.1;
    }

    const onChangeImageWidth = (newWidth) =>{
        setAttributes({imageWidth: newWidth});
    }
    const onUploadError = (message) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(message);
    }
    const removeImage = () => {
        setAttributes({
            url: undefined,
            alt: '',
            id: undefined
        })
    }
    const addNewSocialItem = () => {
        setAttributes({socialLinks: [...socialLinks, {icon: 'wordpress', link: ''}]});
        setSelectedLink(socialLinks.length);
    };
    const updateSocialItem = ( type, value ) => {
		const socialLinksCopy = [ ...socialLinks ];
		socialLinksCopy[ selectedLink ][ type ] = value;
		setAttributes( { socialLinks: socialLinksCopy } );
	};
    const removeSocialItem = () => {
		setAttributes( {
			socialLinks: [
				...socialLinks.slice( 0, selectedLink ),
				...socialLinks.slice( selectedLink + 1 ),
			],
		} );
		setSelectedLink();
	};

    const hasEmptyField = () => {
        const emptyFields = [];
        
        if (!name || name.trim().length === 0) {
            emptyFields.push('name');
        }
        if (!bio || bio.trim().length === 0) {
            emptyFields.push('bio');
        }
        if (!url || url.trim().length === 0) {
            emptyFields.push('url');
        }
        if (emptyFields.length > 0) {
            return true;
        }
    
        return false;
    };

    useEffect(() => {
        if (!id && isBlobURL(url)) {
            setAttributes({
                url: undefined,
                alt: '',
            });
        }
    }, []);

    useEffect(() => {
        if (isBlobURL(url)) {
            setBlobURL(url);
        } else {
            revokeBlobURL(blobURL);
            setBlobURL();
        }
    }, [url]);

    useEffect(() => {
        if (url && !prevURL && isSelected) {
            titleRef.current.focus();
        }
    }, [url, prevURL]);

    useEffect(() => {
        if(prevIsSelected && !isSelected) {
            setSelectedLink();
        }
    },[isSelected, prevIsSelected]);
    const dynamicHeight = `${imageHeight}${heightUnit}`;
    const dynamicWidth = `${imageWidth}${widthUnit}`;
    const stylesWidth = {
        '--width': dynamicWidth,
        '--height': dynamicHeight,
    };
    return (
        <>
                <InspectorControls>
                    <PanelBody title={__("Image Settings", "qe-ultimate-blocks")}>
                        {id && (
                            <>
                                <Button className = { heightUnit == 'px' ? 'active' : '' } onClick = { onChangeImageHeightPixel } >
                                    { __( 'px', 'qe-ultimate-blocks' ) }
                                </Button>
                                <Button className = { heightUnit == '%' ? 'active' : '' } onClick = { onChangeImageHeightPercentage } >
                                    { __( '%', 'qe-ultimate-blocks' ) }
                                </Button>
                                <Button className = { heightUnit == 'em' ? 'active' : '' } onClick = { onChangeImageHeightEm } >
                                    { __( 'em', 'qe-ultimate-blocks' ) }
                                </Button>
                                <RangeControl
                                    label = "Image Height"
                                    min = { heightmin }
                                    max = { heightmax }
                                    step = { heightstep }
                                    value = { imageHeight }
                                    onChange = { onChangeImageHeight }
                                />
                                <Button className = { widthUnit == 'px' ? 'active' : '' } onClick = { onChangeImageWidthPixel } >
                                    { __( 'px', 'qe-ultimate-blocks' ) }
                                </Button>
                                <Button className = { widthUnit == '%' ? 'active' : '' } onClick = { onChangeImageWidthPercentage } >
                                    { __( '%', 'qe-ultimate-blocks' ) }
                                </Button>
                                <Button className = { widthUnit == 'em' ? 'active' : '' } onClick = { onChangeImageWidthEm } >
                                    { __( 'em', 'qe-ultimate-blocks' ) }
                                </Button>
                                <RangeControl
                                    label = "Image Width"
                                    min = { widthmin }
                                    max = { widthmax }
                                    step = { widthstep }
                                    value = { imageWidth }
                                    onChange = { onChangeImageWidth }
                                />
                        </>
                        )}
                        {url && !isBlobURL(url) && (
                            <TextareaControl
                                label={__("Alt Text", "qe-ultimate-blocks")}
                                value={alt}
                                onChange={onChangeAlt}
                                help={__("Alternative text describes your image to people can't see it. Add a short description with its key details", "qe-ultimate-blocks")}
                            />
                        )}
                    </PanelBody>
                </InspectorControls>
            {url && (
                <BlockControls group="inline">
                    <MediaReplaceFlow
                        name={__("Replace Image", "qe-ultimate-blocks")}
                        onSelect={onSelectImage}
                        onSelectURL={onSelectURL}
                        onError={onUploadError}
                        accept="image/*"
                        allowedTypes={['image']}
                        mediaId={id}
                        mediaURL={url}
                    />
                    <ToolbarButton onClick={removeImage}>{__("Remove Image", "qe-ultimate-blocks")}</ToolbarButton>
                </BlockControls >
            )}
            <div {...useBlockProps(
                { className: `${hasEmptyField() ? ' empty-block' : ''}` } ) } 
                data-height={`${imageHeight+heightUnit}`}
                data-width={`${imageWidth+widthUnit}`} 
                style={stylesWidth}
            >
                {url && (
                    <div className={`qe-team-photo wp-block-qe-block-qe-team-member-img${isBlobURL(url) ? ' is-loading' : ''}`}>
                        
                            <img src={url} alt={alt} />
                            {!hasEmptyField() && 
                                <div className="qe-team-detail">
                                    <RichText
                                        ref={titleRef}
                                        placeholder={__("Member Name", "qe-ultimate-blocks")}
                                        tagName="h4"
                                        onChange={onChangeName}
                                        value={name}
                                        allowedFormats={[]}
                                    />
                                    <RichText
                                        placeholder={__("Member Bio", "qe-ultimate-blocks")}
                                        tagName="p"
                                        onChange={onChangeBio}
                                        value={bio}
                                        allowedFormats={[]}
                                    />
                                </div>
                            }
                            
                        
                        {isBlobURL(url) && <Spinner />}
                    </div>
                    )}
                
                    <MediaPlaceholder
                        icon="admin-users"
                        onSelect={onSelectImage}
                        onSelectURL={onSelectURL}
                        onError={onUploadError}
                        accept="image/*"
                        allowedTypes={['image']}
                        disableMediaButtons={url}
                        notices={noticeUI}
                    />
                    
                    {hasEmptyField() && (<><RichText
                    ref={titleRef}
                    placeholder={__("Member Name", "qe-ultimate-blocks")}
                    tagName="h4"
                    onChange={onChangeName}
                    value={name}
                    allowedFormats={[]} /><RichText
                        placeholder={__("Member Bio", "qe-ultimate-blocks")}
                        tagName="p"
                        onChange={onChangeBio}
                        value={bio}
                        allowedFormats={[]} /></>)}

                    <div className="qe-team-social">
                        <div className="wp-block-qe-block-qe-team-member-social-links">
                            <ul>
                                <DndContext
                                    sensors={ sensors }
                                    onDragEnd={ handleDragEnd }
                                    modifiers={[restrictToHorizontalAxis]}
                                >
                                    <SortableContext
                                        items={ socialLinks.map(
                                            ( item ) => `${ item.icon }-${ item.link }`
                                        ) }
                                        strategy={ horizontalListSortingStrategy }
                                    >
                                        { socialLinks.map( ( item, index ) => {
                                            return (
                                                <SortableItem
                                                    key={ `${ item.icon }-${ item.link }` }
                                                    id={ `${ item.icon }-${ item.link }` }
                                                    index={index}
                                                    selectedLink={selectedLink}
                                                    setSelectedLink={setSelectedLink}
                                                    icon={item.icon}
                                                />
                                            );
                                        } ) }
                                    </SortableContext>
                                </DndContext>
                                {isSelected && 
                                    <li className="wp-block-qe-block-qe-team-member-add-icon-li">
                                        <Tooltip text={__("Add Social Link", "qe-ultimate-blocks")}>
                                            <button aria-label={__("Add Social Link", "qe-ultimate-blocks")} onClick={addNewSocialItem}>
                                                <Icon icon="plus" />
                                            </button>
                                        </Tooltip>
                                    </li>
                                }
                            </ul>
                        </div>

                        { selectedLink !== undefined && (
                            <div className="wp-block-qe-block-qe-team-member-link-form">
                                <TextControl
                                    label={ __( 'Icon', 'qe-ultimate-blocks' ) }
                                    value={ socialLinks[ selectedLink ].icon }
                                    onChange={ ( icon ) => {
                                        updateSocialItem( 'icon', icon );
                                    } }
                                />
                                <TextControl
                                    label={ __( 'URL', 'qe-ultimate-blocks' ) }
                                    value={ socialLinks[ selectedLink ].link }
                                    onChange={ ( link ) => {
                                        updateSocialItem( 'link', link );
                                    } }
                                />
                                <br />
                                <Button isDestructive onClick={removeSocialItem}>
                                    { __( 'Remove Link', 'qe-ultimate-blocks' ) }
                                </Button>
                            </div>
                        ) }
                    </div>
            </div>
        </>
    );
}

export default withNotices(Edit);