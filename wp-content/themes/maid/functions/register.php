<?php
register_nav_menus(
	array(
		'main_nav'      => 'Main Navigation',
		'mega_nav'      => 'Mega Navigation',
		'footer_nav'    => 'Footer Navigation',
		'secondary_nav' => 'Secondary Navigation',
	)
);

/* If sidebar needed use an example from below and uncomment code
if ( ! function_exists( 'amped_sidebar_widgets' ) ) {
	function amped_sidebar_widgets() {

		register_sidebar(array(
			'id' 			=> 'sidebar-right',
			'name' 			=> 'Sidebar Right',
			'description' 	=> 'Drag widgets to this sidebar container.',
			'before_widget' => '<article id="%1$s" class="row widget %2$s"><div class="small-12 columns">',
			'after_widget' 	=> '</div></article>',
			'before_title' 	=> '<h6>',
			'after_title'	=> '</h6>',
		));
		register_sidebar(array(
			'id' 			=> 'sidebar-left',
			'name' 			=> 'Sidebar Left',
			'description' 	=> 'Drag widgets to this sidebar container.',
			'before_widget' => '<article id="%1$s" class="row widget %2$s"><div class="small-12 columns">',
			'after_widget' 	=> '</div></article>',
			'before_title' 	=> '<h6>',
			'after_title'	=> '</h6>',
		));
		register_sidebar(array(
			'id' 			=> 'sidebar-blog',
			'name' 			=> 'Sidebar Blog',
			'description' 	=> 'Drag widgets to this sidebar container.',
			'before_widget' => '<article id="%1$s" class="row widget %2$s"><div class="small-12 columns">',
			'after_widget' 	=> '</div></article>',
			'before_title' 	=> '<h6>',
			'after_title'	=> '</h6>',
		));
		register_sidebar(array(
			'id' 			=> 'footer-widgets',
			'name' 			=> 'Footer Widgets',
			'description' 	=> 'Drag widgets to this footer container',
			'before_widget'	=> '<article id="%1$s" class="large-4 columns widget %2$s">',
			'after_widget' 	=> '</article>',
			'before_title' 	=> '<h6>',
			'after_title' 	=> '</h6>',
		));
	}

	add_action( 'widgets_init', 'amped_sidebar_widgets' );
} */

?>