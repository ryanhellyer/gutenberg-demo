( function( blocks, editor, i18n, element, components, _ ) {
	var el = element.createElement;
	var RichText = editor.RichText;
	var MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'info/info', {
		title: i18n.__( 'User Info', 'info' ),
		icon: 'admin-users', // Dashicon
		category: 'layout', // Choose between common, formatting, layout, widgets, embeds:
		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			someinfo: {
				type: 'array',
				source: 'children',
				selector: '.someinfo',
			},
		},
		edit: function( props ) {
			var attributes = props.attributes;

			var onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};

			return (
				el( 'div', { className: 'info-block' },
					el( RichText, {
						tagName: 'h2',
						inline: true,
						placeholder: i18n.__( 'User Name…', 'info' ),
						value: attributes.title,
						onChange: function( value ) {
							props.setAttributes( { title: value } );
						},
					} ),
					el( 'div', { className: 'info-image' },
						el( MediaUpload, {
							onSelect: onSelectImage,
							allowedTypes: 'image',
							value: attributes.mediaID,
							render: function( obj ) {
								return el( components.Button, {
										className: attributes.mediaID ? 'image-button' : 'button button-large',
										onClick: obj.open
									},
									! attributes.mediaID ? i18n.__( 'Upload Image', 'info' ) : el( 'img', { src: attributes.mediaURL } )
								);
							}
						} )
					),
					el( RichText, {
						tagName: 'ul',
						multiline: 'li',
						placeholder: i18n.__( 'User facts…', 'info' ),
						value: attributes.someinfo,
						onChange: function( value ) {
							props.setAttributes( { someinfo: value } );
						},
						className: 'someinfo',
					} )
				)
			);
		},
		save: function( props ) {
			var attributes = props.attributes;

			return (
				el( 'div', { className: 'info-block' },
					el( RichText.Content, {
						tagName: 'h2', value: attributes.title
					} ),
					attributes.mediaURL &&
						el( 'div', { className: 'info-image' },
							el( 'img', { src: attributes.mediaURL } ),
						),
					el( RichText.Content, {
						tagName: 'ul', className: 'someinfo', value: attributes.someinfo
					} ),
				)
			);
		},
	} );

} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._,
);
