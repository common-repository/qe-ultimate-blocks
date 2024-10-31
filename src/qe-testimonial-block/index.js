import { registerBlockType, createBlock } from '@wordpress/blocks';
import './testimonial';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType(
	'qe-block/qe-testimonial-block',
	{
		edit: Edit,
		save,
		transforms: {
			from: [
				{
					type: 'block',
					blocks: [ 'core/gallery' ],
					transform: ( { images, columns } ) => {
						const innerBlocks = images.map( ( { url, id, alt } ) => {
							return createBlock( 'qe-block/qe-testimonial-blocks',
								{
									alt,
									id,
									url,
								}
							);
						} );
						return createBlock(
							'qe-block/qe-testimonial-block',
							{
								columns: columns || 2,
							},
							innerBlocks
						);
					},
				},
				{
					type: 'block',
					blocks: [ 'core/image' ],
					isMultiBlock: true,
					transform: ( attributes ) => {
						const innerBlocks = attributes.map(
							( { url, id, alt } ) => {
								return createBlock( 
									'qe-block/qe-testimonial-blocks',
									{
										alt,
										id,
										url,
									}
								);
							}
						);
						return createBlock(
							'qe-block/qe-testimonial-block',
							{
								columns:
									attributes.length > 3 ? 3 : attributes.length,
							},
							innerBlocks
						);
					},
				},
			],
		},
	}
);