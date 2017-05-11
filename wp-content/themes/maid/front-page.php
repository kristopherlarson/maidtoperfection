<?php
/*
====================
	Home Page
====================
*/
get_header();
?>
<main>
	<?php get_template_part( 'templates/loop', 'slider' ); ?>

    <section class="hero-banner">
		<?php get_template_part( 'images/svg-includes/call-to-action-bar-svg' ) ?>
		<?php //get_template_part('images/svg-includes/hero-banner-svg') ?>
		<?php //get_template_part('images/svg-includes/hero-banner-mobile-svg') ?>
    </section>


    <section class="welcome">

        <div class="row">
            <div class="large-9 large-centered columns base-content">
                <svg class="icon icon-heading">
                    <use xlink:href="#icon-mop-bucket"/>
                </svg>
				<?php get_template_part( 'templates/loop', 'page' ); ?>
            </div>
        </div>

    </section>


    <section class="services-icons base-content">

        <div class="row">
            <div class="medium-6 large-3 columns">
                <svg class="icon icon-service top">
                    <use xlink:href="#icon-spray-bottle-round"/>
                </svg>
                <h2>GREEN <br/> CLEANING</h2>
            </div>
            <div class="medium-6 large-3 columns">
                <svg class="icon icon-service">
                    <use xlink:href="#icon-vacuum-side-view-round"/>
                </svg>
                <h2>FREE <br/> ESTIMATES</h2>
            </div>
            <div class="medium-6 large-3 columns">
                <svg class="icon icon-service bot">
                    <use xlink:href="#icon-hand-clean-sparkle-round"/>
                </svg>
                <h2>LICENSED <br/> & INSURED</h2>
            </div>
            <div class="medium-6 large-3 columns">
                <svg class="icon icon-service bot">
                    <use xlink:href="#icon-mop-bucket-round"/>
                </svg>
                <h2>24 HOUR <br/> GUARANTEE</h2>
            </div>
        </div>

    </section>


    <section class="what-sets-us-apart">

        <div class="row">
            <div class="large-9 large-centered columns base-content amped-content">
                <svg class="icon icon-heading">
                    <use xlink:href="#icon-sparkle"/>
                </svg>
				<?php echo get_field( 'second_content_box_home' ) ?>
                <div class="sparkle-me-silly amped-content">
                    <svg class="icon icon-sparkle-side">
                        <use xlink:href="#icon-sparkle"/>
                    </svg>
					<?php echo get_field( 'third_content_box_home' ) ?>
                </div>
            </div>
        </div>

    </section>


    <section class="maid-team lazyload background-cover"
             data-bgset="<?php echo THEME_IMAGES; ?>home/house-cleaning-services-maids.jpg">

        <div class="row">
            <div class="large-9 large-centered columns base-content amped-content">
				<?php echo get_field( 'fourth_content_box_home' ) ?>
            </div>
        </div>

    </section>


    <section>

        <div class="row">
            <div class="large-9 large-centered columns base-content amped-content">
                <hr>
				<?php echo get_field( 'fifth_content_box_home' ) ?>
            </div>
        </div>

    </section>


    <section class="more-time-for-you lazyload background-cover"
             data-bgset="<?php echo THEME_IMAGES; ?>home/mother-and-child-cleaning.jpg">

        <div class="row">
            <div class="large-10 large-centered columns">
                <p>GIVING YOU MORE TIME FOR... YOU</p>
            </div>
        </div>

    </section>

	<?php get_template_part( 'panels/footer-discount' ) ?>

</main>
<?php get_footer(); ?>
