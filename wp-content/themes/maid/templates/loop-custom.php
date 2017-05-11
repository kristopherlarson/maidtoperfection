<?php
/* 
====================
    CUSTOM LOOP
====================
*/

$paged        = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$args         = array(
	'post_type'      => 'post',
	'post_status'    => 'publish',
	'posts_per_page' => 10,
	'orderby'        => 'date',
	'paged'          => $paged,
);
$custom_query = new WP_Query( $args );
if ( $custom_query->have_posts() ) {
	while ( $custom_query->have_posts() ) {
		$custom_query->the_post();

		?>
        <div class="post-container">
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header>
                    <h2>
                        <a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>">
							<?php the_title(); ?>
                        </a>
                    </h2>
					<?php if ( has_post_thumbnail() ) { ?>
                        <a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>">
							<?php the_post_thumbnail(); ?>
                        </a>
					<?php } ?>
                    <p class="date">
                        Date: <?php the_time( get_option( 'date_format' ) ); ?>
                    </p>
                    <p class="categories">
                        In: <?php the_category( ', ' ); ?>
                    </p>
                </header>
                <div>
					<?php the_excerpt(); ?>
                </div>
                <footer>
                    <p class="tags">
						<?php the_tags( '<span>', '</span><span>', '</span>' ); ?>
                    </p>
                </footer>
            </article>
        </div>
		<?php
	}
	if ( function_exists( 'amped_pagination' ) ) {
		amped_pagination();
	}
} else { ?>
    <article>
        <header>
            <h1>Article Not Found!</h1>
            <p>Sorry, no posts.</p>
        </header>
    </article>
	<?php
}
wp_reset_postdata();
?>