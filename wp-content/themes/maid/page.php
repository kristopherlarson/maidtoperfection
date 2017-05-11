<?php
/* 
====================
	PAGE
====================
*/
get_header();
?>
<?php get_template_part( 'templates/page', 'header' ); ?>
    <div id="primary" class="content-area">
        <main>
            <div class="row">
                <div class="large-8 large-centered columns base-content">
					<?php get_template_part( 'templates/loop', 'page' ); ?>
                </div>
            </div>
        </main>
    </div>
<?php get_footer(); ?>