<?php
/*
====================
    SLIDER LOOP
====================
*/


?>
<section class="featured-slider">

	<?php
	$slider_images = get_field( 'featured_slider' );

	if ( ! empty( $slider_images ) ):

		foreach ( $slider_images as $slider_image ): ?>

            <figure class="slider-image">
                <img class="lazyload"
                     data-src="<?php echo $slider_image['sizes']['slider-image']; ?>"
                     data-srcset="<?php echo $slider_image['sizes']['slider-image-small']; ?> 960w,
                    <?php echo $slider_image['sizes']['slider-image']; ?> 1280w,
                    <?php echo $slider_image['sizes']['slider-image-retina']; ?> 1920w"
                     alt="<?php echo $slider_image['alt']; ?>"/>

                <div class="slider-caption base-content">
                    <div class="row">
                        <div class="large-8 large-centered columns">
                            <h1>Professional House Cleaning Services</h1>
                            <h2>that are affordable with a team you can trust.</h2>
                            <p>Living and working right here in the St. George area gives us a keen sense of commitment
                                and responsibility to our clients, who are also neighbors, and even friends.</p>
                        </div>
                    </div>

                </div>
            </figure>

		<?php endforeach; ?>

	<?php endif; ?>

</section>