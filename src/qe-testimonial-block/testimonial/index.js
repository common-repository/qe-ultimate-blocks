import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType("qe-block/qe-testimonial-blocks", {
    title: __( "Testimonials", "qe-ultimate-blocks" ),
    description: __( "Qe Testimonial blocks.", "qe-ultimate-blocks" ),
    category: "qeblocks",
    icon: "testimonial",
    parent: ["qe-block/qe-testimonial-block"],
    supports: {
        reusable: false,
        html: false
    },
    attributes:{
        content:{
            type: "string",
            source: "html",
            selector: "p",
        },
        author_name: {
            type: "string",
            source: "html",
            selector: "h4",
        },
        designation: {
            type: "string",
            source: "html",
            selector: "span",
        },
        id: {
            type: "number"
        },
        alt: {
            type: "string",
            source: "attribute",
            selector: "img",
            attribute: "alt",
            default: ""
        },
        url: {
            type: "string",
            source: "attribute",
            selector: "img",
            attribute: "src"
        },
        imageHeight:{
            type: "number",
        },
        imageWidth:{
            type: "number",
        },
        heightUnit:{
            type: "string",
        },
        widthUnit:{
            type: "string",
        }
    },
    edit: Edit,
    save: Save,
});