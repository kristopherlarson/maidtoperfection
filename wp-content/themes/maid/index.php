<?php
/*
====================
	INDEX
====================
*/

get_header();
?>

<?php get_template_part( 'templates/page', 'header' ); ?>

    <div id="primary" class="content-area">
        <div class="row">
            <div class="medium-9 columns">
				<?php get_template_part( 'templates/loop', 'blog' ); ?>
            </div>
			<?php get_sidebar( 'blog' ); ?>
        </div>
    </div>

<?php get_footer(); ?>