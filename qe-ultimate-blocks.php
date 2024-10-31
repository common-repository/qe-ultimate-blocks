<?php
/**
 * Plugin Name:       QE Ultimate Blocks
 * Description:       Custom Blocks for Team Members and Testimonials
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.1
 * Author:            QeWebby
 * Author URI:        https://www.qewebby.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       qe-ultimate-blocks
 *
 * @package           qe-ultimate-blocks
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function qeub_create_block_init() {
	register_block_type( __DIR__ . '/build/qe-testimonial-block' );
	register_block_type( __DIR__ . '/build/qe-teammember-block' );
}
add_action( 'init', 'qeub_create_block_init' );



/**
 * Add a block category for "Qe Blocks" if it doesn't exist already.
 *
 * @param array $categories Array of block categories.
 *
 * @return array
 */
function qeub_categories( $categories ) {
    $category_slugs = wp_list_pluck( $categories, 'slug' );
    return in_array( 'qeblocks', $category_slugs, true ) ? $categories : array_merge(
        $categories,
        array(
            array(
                'slug'  => 'qeblocks',
                'title' => __( 'Qe Blocks', 'qe-ultimate-blocks' ),
                'icon'  => null,
            ),
        )
    );
}
add_filter( 'block_categories_all', 'qeub_categories' );
