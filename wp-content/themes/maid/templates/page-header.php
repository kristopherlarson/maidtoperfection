<?php
/*
====================
	PAGE HEADER
====================
*/

global $post;
$header_image_large = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'sub-page' );
$sub_title          = get_field( 'sub_title' );
?>

<header class="page-header" role="banner">

    <div class="hero-sub background-cover" style="background-image: url('<?php echo $header_image_large[0]; ?>');">

        <div class="row">
            <div class="large-12 columns base-content">

                <div class="title-wrap">
                    <svg class="icon icon-sparkle">
                        <use xlink:href="#icon-sparkle"/>
                    </svg>
                    <h1 class="page-title"><?php echo get_the_title() ?> </h1>
					<?php if ( $sub_title ) { ?>
                        <h2 class="sub-title"><?php echo $sub_title; ?></h2>
					<?php } ?>
                </div>

            </div>
        </div>

    </div>

</header>
