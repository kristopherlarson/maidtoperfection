<?php
/* 
====================
    PAGE LOOP
====================
*/
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
			<?php get_template_part( 'templates/page', 'header' ); ?>
			<?php if ( has_post_thumbnail() ) { ?>
                <a href="<?php the_permalink(); ?>"
                   title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail(); ?></a>
			<?php } ?>
            <p class="date">Date: <?php the_time( get_option( 'date_format' ) ); ?></p>
            <p class="categories">Categories: <?php the_category( ', ' ); ?></p>
            <div>
				<?php the_content(); ?>
            </div>
            <footer>
                <p class="tags"><?php the_tags( '<span>', '</span><span>', '</span>' ); ?></p>
				<?php comments_template(); ?>
            </footer>
        </article>
		<?php
	} // end while have_posts()
} else { ?>

    <article id="post-not-found">
        <h2>Not Found</h2>
        <p>Sorry, but the requested resource was not found on this site.</p>
    </article>
	<?php
} // end if have_posts() ?>