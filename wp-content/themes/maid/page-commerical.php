<?php
/* 
====================
	TEMPLATE NAME: Commercial
====================
*/
get_header();
?>
<?php get_template_part( 'templates/page', 'header' ); ?>
    <div id="primary" class="content-area">
        <main>


            <section class="hero-banner">
				<?php get_template_part( 'images/svg-includes/call-to-action-bar-svg' ) ?>
            </section>


            <section class="welcome">

                <div class="row">
                    <div class="large-9 large-centered columns base-content">
                        <svg class="icon icon-heading">
                            <use xlink:href="#icon-hand-clean-sparkle"/>
                        </svg>
						<?php get_template_part( 'templates/loop', 'page' ); ?>
                    </div>
                </div>

            </section>


            <section id="price-table" class="step-one">

                <div class="row">
                    <div class="large-9 large-centered columns base-content">
                        <div class="heading-group amped-content">
                            <h1>Step 1</h1>
                            <p class="sub-heading">Calculate your pricing...</p>
                            <h2>Commercial Price Calculator</h2>
                        </div>

						<?php echo get_field( 'step_one_commercial' ) ?>

                        <div class="pricing-table">
                            <table class="hover">
                                <p><b>General clean</b> is defined as: <b>Bathrooms, break room (refrigerator and
                                        microwave), dusting, floors</b></p>
                                <p><b>$30</b> per hour per <b>Cleaning Professional</b></p>
                                <p><b>$23.50</b> per hour for <b>Senior and Veterans</b></p>

                                <br/>
                                <thead>
                                <tr>
                                    <th width="150">Square Footage</th>
                                    <th width="150">General Clean hrs</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>< 1000</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>1000-1500</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>1500-2000</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>2000-2500</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>2500-3000</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>3000-3500</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>3500 +</td>
                                    <td>8</td>
                                </tr>
                                </tbody>

                            </table>

                            <p><b>Add-ons:</b> Add the following percentages to your base hours</p>
                            <ul class="add-ons">
                                <li>Blinds <b>0.5 Per Window</b></li>
                                <li>Baseboards <b>0.5 per 500 sf</b></li>
                            </ul>
                            <br/>
                            <p>For custom cleans, please contact us to schedule.</p>

                        </div>
                    </div>
                </div>

            </section>


			<?php get_template_part( 'panels/step-two' ) ?>


            <section class="more-time-for-you lazyload background-cover"
                     data-bgset="<?php echo THEME_IMAGES; ?>sub-pages/commerical-river-raft.jpg">

                <div class="row">
                    <div class="large-10 large-centered columns">
                        <p>GIVING YOU MORE TIME FOR... YOU</p>
                    </div>
                </div>

            </section>


            <section class="welcome">

                <div class="row">
                    <div class="large-9 large-centered columns">
                        <svg class="icon icon-heading">
                            <use xlink:href="#icon-spray-bottle"/>
                        </svg>
                        <div class="bottom-sec amped-content base-content">
							<?php echo get_field( 'bottom_text_commercial' ) ?>
                        </div>
                    </div>
                </div>

            </section>


			<?php get_template_part( 'panels/footer-discount' ) ?>

        </main>
    </div>
<?php get_footer(); ?>