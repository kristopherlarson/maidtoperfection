<?php
/* 
====================
	SINGLE
====================
*/

get_header(); 
?>
<div id="primary" class="content-area">
	<div class="row">
		<div class="medium-9 columns">
			<?php get_template_part( 'templates/loop', 'single' ); ?>
		</div>
		<aside class="medium-3 columns" role="complementary">
			<?php get_sidebar('blog'); ?>
		</aside>
	</div>
</div>
<?php get_footer(); ?>