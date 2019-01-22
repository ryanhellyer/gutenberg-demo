( function( blocks, element ) {
	var el = element.createElement;

	var blockStyle = {
		backgroundColor: '#ff3333',
		color: '#fff',
		padding: '20px',
		borderRadius: '100px',
		textAlign: 'center',
	};

	blocks.registerBlockType( 'simple/block', {
		title: 'Simple block',
		icon: 'star-empty', // Dashicon
		category: 'layout', // Choose between common, formatting, layout, widgets, embeds:
		edit: function() {
			return el(
				'div',
				{ style: blockStyle },
				'This is a simple block'
			);
		},
		save: function() {
			return el(
				'div',
				{ style: blockStyle },
				'This is a simple block'
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.element
) );