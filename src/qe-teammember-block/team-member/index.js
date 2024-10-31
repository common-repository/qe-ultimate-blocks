import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from "./edit";
import Save from "./save";

registerBlockType('qe-block/qe-team-member', {
    title: __( "Team Member", "qe-ultimate-blocks" ),
    description: __( "A team members grid.", "qe-ultimate-blocks" ),
    category: "qeblocks",
    icon: 'admin-users',
    parent: ["qe-block/qe-team-members"],
    supports: {
        reusable: false,
        html: false,
    },
    attributes: {
        name: {
            type: "string",
            source: "html",
            selector: "h4",
        },
        bio: {
            type: "string",
            source: "html",
            selector: "p",
        },
        id: {
            type: "number"
        },
        alt: {
            type: "string",
            source: "attribute",
            selector: "img",
            attribute: "alt",
            default: ''
        },
        url: {
            type: "string",
            source: "attribute",
            selector: "img",
            attribute: "src",
        },
        socialLinks: {
            type: "array",
            default: [],
            source: 'query',
            selector: '.wp-block-qe-block-qe-team-member-social-links ul li',
            query: {
                icon: {
                    source: 'attribute',
                    attribute: 'data-icon'
                },
                link: {
                    source: 'attribute',
                    selector: 'a',
                    attribute: 'href',
                },
            },
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