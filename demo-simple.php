<?php

/**
 * Plugin Name: Simple demo block
 * Description: Demonstration block for showing how to make a very simple block.
 * Author: you
 */

function simple_block() {

	wp_register_script(
		'simple-script',
		plugins_url( 'simple.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' ),
		plugin_dir_path( __FILE__ ) . 'demo-simple/simple.js'
	);

	register_block_type(
		'simple/block',
		array(
			'editor_script' => 'simple-script',
		)
	);

}
add_action( 'init', 'simple_block' );
