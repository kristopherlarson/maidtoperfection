<?php
/* 
====================
	404
====================
*/
get_header(); 
?>

<div id="primary" class="content-area">
	<div class="row">
		<div class="large-12 columns">
			<article id="page-<?php the_ID(); ?>" <?php post_class(); ?> role="article">                  
	            <h1>This page doesn't exists. Please click our logo to return to the home page. Thanks!</h1>
	        </article>
		</div>
	</div>
</div>
<?php get_footer(); ?>