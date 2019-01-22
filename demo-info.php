<?php

/**
 * Plugin Name: Info demo block
 * Description: Demonstration block for showing how to make a more complex block.
 * Author: you
 */

/**
 * Load translations.
*/
add_action( 'init', 'info_load_textdomain' );
function info_load_textdomain() {
	load_plugin_textdomain( 'info', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function info_register_block() {

	wp_register_script(
		'info',
		plugins_url( 'demo-info/info.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'demo-info/info.js' )
	);

	wp_register_style(
		'info',
		plugins_url( 'demo-info/info.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'demo-info/info.css' )
	);

	register_block_type( 'info/info', array(
		'style'         => 'info',
		'editor_script' => 'info',
	) );

	wp_set_script_translations( 'info', 'info' );

}
add_action( 'init', 'info_register_block' );
