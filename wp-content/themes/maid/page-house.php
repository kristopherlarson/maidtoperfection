<?php
/* 
====================
	TEMPLATE NAME: House
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
                        <svg class="icon icon-heading mop">
                            <use xlink:href="#icon-mop-stick"/>
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
                            <h2>Residential Price Calculator</h2>
                        </div>

						<?php echo get_field( 'step_one_commercial' ) ?>

                        <div class="pricing-table">
                            <table class="hover">
                                <p><b>Light Clean</b> is defined as: <b>bathrooms, dusting and floors</b></p>
                                <p><b>General Clean</b> is defined as: <b>Light Clean + All kitchen surfaces, microwave,
                                        stovetop</b></p>
                                <p><b>$30</b> per hour per <b>Cleaning Professional</b></p>
                                <p><b>$23.50</b> per hour for <b>Senior and Veterans</b></p>

                                <br/>
                                <thead>
                                <tr>
                                    <th width="150">Square Footage</th>
                                    <th width="150">Light Clean hrs</th>
                                    <th width="150">General Clean hrs</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>< 1000</td>
                                    <td>2</td>
                                    <td>2.5</td>
                                </tr>
                                <tr>
                                    <td>1000-1500</td>
                                    <td>3</td>
                                    <td>3.5</td>
                                </tr>
                                <tr>
                                    <td>1500-2000</td>
                                    <td>4</td>
                                    <td>4.5</td>
                                </tr>
                                <tr>
                                    <td>2000-2500</td>
                                    <td>5</td>
                                    <td>5.5</td>
                                </tr>
                                <tr>
                                    <td>2500-3000</td>
                                    <td>6</td>
                                    <td>6.5</td>
                                </tr>
                                <tr>
                                    <td>3000-3500</td>
                                    <td>7</td>
                                    <td>7.5</td>
                                </tr>
                                <tr>
                                    <td>3500 +</td>
                                    <td>8</td>
                                    <td>8.5</td>
                                </tr>
                                </tbody>

                            </table>

                            <p><b>Add-ons:</b> Add the following percentages to your base hours</p>

                            <ul class="add-ons">
                                <li>Window/Window Seal <b>10 min per window</b></li>
                                <li>Blinds <b>30 min per window</b></li>
                                <li>Baseboards <b>45 min per 500 SF</b></li>
                                <li>Kitchen Cabinets(outside) <b>5 min per cabinet</b></li>
                                <li>Ceiling Fans <b>10 min per fan</b></li>
                                <li>Light Fixtures <b>10 min per fixture</b></li>
                                <li>Refrigerator <b>1 hr per refrigerator</b></li>
                                <li>Doors & Door Jams <b>10 min per door</b></li>
                                <li>Walls <b>1 hr per 500 SF</b></li>
                                <li>Inside Oven <b>1 hr per oven</b></li>
                                <li>Organization <b>hourly</b></li>
                            </ul>
                            <br/>
                            <p>For custom cleans, please contact us to schedule.</p>

                        </div>
                    </div>
                </div>

            </section>


			<?php get_template_part( 'panels/step-two' ) ?>


            <section class="more-time-for-you lazyload background-cover"
                     data-bgset="<?php echo THEME_IMAGES; ?>sub-pages/grandchild-and-grandma-eating-in-clean-home.jpg">

                <div class="row">
                    <div class="large-10 large-centered columns">
                        <p>GIVING YOU MORE TIME FOR... YOU</p>
                    </div>
                </div>

            </section>


            <section class="welcome">

                <div class="row">
                    <div class="large-9 large-centered columns base-content">
                        <svg class="icon icon-heading">
                            <use xlink:href="#icon-spray-bottle"/>
                        </svg>
                        <div class="bottom-sec">
							<?php echo get_field( 'bottom_text_commercial' ) ?>
                        </div>
                    </div>
                </div>

            </section>


			<?php get_template_part( 'panels/footer-discount' ) ?>

        </main>
    </div>
<?php get_footer(); ?>