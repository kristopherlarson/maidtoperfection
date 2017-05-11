<?php

add_action( 'after_setup_theme', 'amped_localization_setup' );

function amped_localization_setup() {
	load_theme_textdomain( 'amped-theme', get_template_directory() . '/languages' );
}