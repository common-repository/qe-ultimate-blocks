import { useEffect, useState, useRef } from "@wordpress/element";
import { useBlockProps, RichText, MediaPlaceholder, BlockControls, MediaReplaceFlow, InspectorControls, store as blockEditiorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect } from "@wordpress/data";
import { usePrevious } from "@wordpress/compose";
import {isBlobURL, revokeBlobURL} from '@wordpress/blob';
import { Spinner, withNotices, ToolbarButton, PanelBody, TextareaControl, Button, RangeControl } from "@wordpress/components";

function Edit({attributes, setAttributes, noticeOperations, noticeUI, isSelected}) {
    const { content, author_name,designation, url, alt, id, imageHeight=150, imageWidth=150, heightUnit='px', widthUnit='px' } = attributes;
    const [blobURL, setBlobURL] = useState();
    const prevURL        = usePrevious( url );
    const prevIsSelected = usePrevious( isSelected );
    const titleRef       = useRef();
    const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};
    const onChangeAuthorName  = ( newAuthorName ) => {
        setAttributes({ author_name: newAuthorName });
    };
    const onChangeDesignation = ( newDesignation ) => {
        setAttributes({ designation: newDesignation });
    };
    const onChangeImage       = ( image ) => {
        if( ! image || ! image.url ){
            setAttributes( { url: undefined, id: undefined, alt: '' } );
            return;
        }
        setAttributes( { url: image.url, id: image.id, alt: image.alt } );
    };
    const onChangeUrl         = ( newURL ) => {
        setAttributes(
            {
                url: newURL,
                id: undefined,
                alt: '',
            }
        )
    };
    const onChangeAlt       = ( newAlt ) => {
        setAttributes( { alt: newAlt } );
    };
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
   
    if(heightUnit == '%'){
        heightmin = 10;
        heightmax = 100;
        heightstep = 1;
    }else if(heightUnit == 'em'){
        heightmin = 2;
        heightmax = 100;
        heightstep = 0.1;
     }

    const handleChangeWidthUnit = (newWidthUnit) =>{
        setAttributes({widthUnit: newWidthUnit});
    }
    const onChangeImageWidth = (newWidth) =>{
        setAttributes({imageWidth: newWidth});
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
   
    if(widthUnit == '%'){
        widthmin = 10;
        widthmax = 100;
        widthstep = 1;
    }else if(widthUnit == 'em'){
        widthmin = 2;
        widthmax = 100;
        widthstep = 0.1;
    }
    const onChangeImageSize = ( newURL ) => {
        setAttributes( { url: newURL } );
    };
    const onUploadError     = ( message ) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice( message );
    };
    const removeImage       = () => {
        setAttributes(
            {
                url: undefined,
                alt: '',
                id: undefined
            }
        );
    };
    useEffect(
        () => {
            if ( ! id && isBlobURL( url ) ) {
                setAttributes(
                    {
                        url: undefined,
                        alt: ''
                    }
                );
            }
        },
    []);
    useEffect(
        () => {
            if( isBlobURL( url ) ) {
                setBlobURL( url );
            }
            else {
                revokeBlobURL( blobURL );
                setBlobURL();
            }
        },
    [url]);
    useEffect(
        () => {
            if( url && !prevURL && isSelected ) {
                titleRef.current.focus();
            }
        },
    [url,prevURL]);
    const dynamicHeight = `${imageHeight}${heightUnit}`;
    const dynamicWidth = `${imageWidth}${widthUnit}`;
    const stylesWidth = {
        '--width': dynamicWidth,
        '--height': dynamicHeight,
    };
    return (
        <>
            < InspectorControls >
                < PanelBody title = { __( 'Image Settings', 'qe-ultimate-blocks' ) } >
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
                    {url && !isBlobURL( url ) && (
                        < TextareaControl
                            label    = { __( 'Alt Text', 'qe-ultimate-blocks' ) }
                            value    = { alt }
                            onChange = { onChangeAlt }
                            help     = { __ ( "Alternative text describes you image to people can't see it. Add a Short Description with its key details.", 'qe-ultimate-blocks' ) }
                        />
                    )}
                </ PanelBody >
            </ InspectorControls >
            {url && (
                < BlockControls group       = "inline" >
                    < MediaReplaceFlow
                        name                = { __( 'Replace Image', 'qe-ultimate-blocks' ) }
                        onSelect            = { onChangeImage } 
                        onSelectURL         = { onChangeUrl }
                        onError             = { onUploadError }
                        accept              = 'image/*'
                        allowedTypes        = { [ 'image' ] }
                        mediaId             = { id }
                        mediaURL            = { url }
                    />
                    < ToolbarButton onClick = { removeImage } >{ __( 'Remove Image', 'qe-ultimate-blocks' ) }</ ToolbarButton >
                </ BlockControls >
            )}
            < div {
                ...useBlockProps()    
            }>
                {url && (
                    < div className = { `wp-block-qe-block-qe-testimonial-block-img${ isBlobURL( url ) ? ' is-loading' : '' }` } >
                        <div className = 'qe-testimonial-img'>
                            < img src   = { url } alt = { alt } style={stylesWidth} data-height={`${imageHeight+heightUnit}`} data-width={`${imageWidth+widthUnit}`}  />
                        </div>
                        { isBlobURL( url ) && < Spinner /> }
                    </ div >
                )}
                < MediaPlaceholder
                    icon                = "admin-users"
                    onSelect            = { onChangeImage }
                    onSelectURL         = { onChangeUrl }
                    onError             = { onUploadError }
                    accept              = 'image/*'
                    allowedTypes        = { [ 'image' ] }
                    disableMediaButtons = { url }
                    notices             = { noticeUI }
                />
                <div className ="qe-testimonial-content">
                    <RichText
                        ref                 = { titleRef }
                        placeholder         = { __( 'Content', 'qe-ultimate-blocks' ) }
                        tagName             = 'p'
                        onChange            = { onChangeContent }
                        value               = { content }
                        allowedFormats      = { [] }
                        className           = 'qe-testimonial-content__des'
                    />
                    <RichText
                        placeholder         = { __( 'Author Name', 'qe-ultimate-blocks' ) }
                        tagName             = 'h4'
                        onChange            = { onChangeAuthorName }
                        value               = { author_name }
                        allowedFormats      = { [] }
                        className           = 'qe-testimonial-content__author-name'
                    />
                    <RichText
                        placeholder         = { __( 'Designation', 'qe-ultimate-blocks' ) }
                        tagName             = 'span'
                        onChange            = { onChangeDesignation }
                        value               = { designation }
                        allowedFormats      = { [] }
                        className           = 'qe-testimonial-content__designation'
                    />
                </div>
            </ div >
        </>
    );
}

export default withNotices( Edit );