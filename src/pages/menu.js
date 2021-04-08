import * as React from "react"

import { Layout } from "../components"
import InnerHero from "../blocks/innerhero"
import Cta from "../blocks/cta"
import { Container } from "reflexjs"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function Menupage() {
    return (
        <Layout>
            <InnerHero
                image="url('/images/menu-bg.jpg')"
                subheading="Menu"
                heading="The Emili's menu is a selection of hand-crafted bites made with only the highest quality ingredients."
                id="top"
            />
            {/** Table of Contents */}
            <section py="8" mt="200px|300px" mb="12|8">
                <div variant="container">
                    <div display="grid" col="1" gap="4|8" justifyItems="center">
                        <div textAlign="center">
                            <a variant="text.link" onClick={() => scrollTo('#breakfast')}>Breakfast</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#quiche')}>Quiche</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#sandwiches')}>Sandiwches & Paninis</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#coffee')}>Coffee & Tea</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#juice')}>Fresh Juice & Italian Soda</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#desserts')}>Desserts</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#bread')}>Fresh Baked Bread</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#pies')}>Pies</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#cakes')}>Cakes</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#swisstarts')}>Swiss Tarts</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#fruittarts')}>Fruit Tarts</a>
                            <br />
                            <a variant="text.link" onClick={() => scrollTo('#croquembouche')}>Croquembouche</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breakfast */}
            <section py="8|12" my="6|0" id="breakfast">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="12">
                        Breakfast Danishes
                    </h2>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Almond Crescent</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Apple Round</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Apple Turnover</p>
                                    <p>$3.75</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Butter Croissant</p>
                                    <p>$3.75</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Almond Croissant</p>
                                    <p>$4.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Chocolate Croissant</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Custard Raisin</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Nutella Cigar</p>
                                    <p>$4.25</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Banana Nut Muffin</p>
                                    <p>$3.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Blueberry Muffin</p>
                                    <p>$3.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Honey Bran Muffin w/ prune</p>
                                    <p>$3.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Chocolate Muffin</p>
                                    <p>$3.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Carrot Muffin</p>
                                    <p>$3.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Vegan Banana Nut Bread (slice)</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Palmiers</p>
                                    <p>$3.75</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Strudel</p>
                                    <p>$4.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Apricot Almond</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Apricot Cheese</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Bear Claw</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Bread Pudding</p>
                                    <p>$4.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Cheese Pocket</p>
                                    <p>$4.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Cheese Square</p>
                                    <p>$4.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Cinammon Raisin Crisp</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Cinammon Raspberry Twist</p>
                                    <p>$4.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Copenhagen (4 pc)</p>
                                    <p>$4.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Rum Danish</p>
                                    <p>$3.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Chocolate Scone</p>
                                    <p>$4.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Cranberry Scone</p>
                                    <p>$4.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Blueberry Scone</p>
                                    <p>$4.50</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>Sugar Raisin</p>
                                    <p>$3.50</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quiche */}
            <section py="8|12" my="6|0" id="quiche">
                <grid col="2">
                    <div variant="container">
                        <div display="grid" col="1" gap="4|8">
                            <div>
                                <h2 variant="text.menuheading">
                                    Quiche
                                </h2>
                                <p textAlign="center" pb="12">
                                    w/ salad $1
                                </p>
                                <div width="90vw|500px" mx="auto">
                                    <img src="/images/quiche.png" alt="Quiche" />
                                </div>
                                <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                    <div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="space-between">
                                                <p>
                                                    The Denver <br /> <span variant="text.menusubtext">Diced Ham, Green Onions, Cheddar</span>
                                                </p>
                                                <p>$7.95</p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="space-between">
                                                <p>
                                                    The Lorraine <br /> <span variant="text.menusubtext">Bacon, Eggs, Gruyere</span>
                                                </p>
                                                <p>$7.95</p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="space-between">
                                                <p>
                                                    The Normandy <br /> <span variant="text.menusubtext">Spinach & Mushrooms</span>
                                                </p>
                                                <p>$7.95</p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="space-between">
                                                <p>
                                                    The Riviera <br /> <span variant="text.menusubtext">Mozzarella, Tomatoes, Fresh Basil</span>
                                                </p>
                                                <p>$7.95</p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="space-between">
                                                <p>
                                                    The Alpen <br /> <span variant="text.menusubtext">Gorgonzola, Asagio Cheese, Mushrooms, Tomatoes</span>
                                                </p>
                                                <p>$7.95</p>
                                            </div>
                                        </div>
                                        <div display="flex">
                                            <div display="flex" width="90vw|500px" justifyContent="space-between">
                                                <p>
                                                    Smoked Salmon <br /> <span variant="text.menusubtext">Dill, Asparagus, Mozzarella</span>
                                                </p>
                                                <p>$7.95</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="quiche.png" alt="" />
                </grid>
            </section>

            {/* Sandwiches */}
            <section py="8|12" my="6|0" id="sandwiches">
                <div variant="container">
                    <h2 variant="text.menuheading">
                        Sandwiches & Paninis
                    </h2>
                    <p textAlign="center" pb="12">
                        incl. Salad
                    </p>
                    <div display="grid" col="1|1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        The French <br /> <span variant="text.menusubtext">French Baguette, Ham, Butter, Cornichons</span>
                                    </p>
                                    <p>$9.25</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        Ham & Swiss Croissant <br /> <span variant="text.menusubtext">Ham, Swiss Cheese, Butter Croissant</span>
                                    </p>
                                    <p>$7.95</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        The German <br /> <span variant="text.menusubtext">Bavarian pretzel, Salami, Butter, Black Forest Ham, German pickles</span>
                                    </p>
                                    <p>$9.70</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        The Swiss <br /> <span variant="text.menusubtext">French Loaf, Turkey, Brie, pears, Walnuts</span>
                                    </p>
                                    <p>$9.25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coffee & Tea */}
            <section py="8|12" my="6|0" id="coffee">
                <div variant="container">
                    <div display="grid" col="1" gap="4|8">
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Coffee
                            </h2>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div width="90vw|500px" mx="auto">
                                    <p textAlign="center">
                                        House Drip  •  Café Americano • Café Au Lait • Latte • Mocha
                                        • Macchiato • Espresso • Cappuccino • Milky Way • Shot In The Dark •
                                        Weisse Kuh • Austrian Hot Chocolate • Vanilla Ice
                                        Blended • Cookies n Cream Ice Blended • Mocha Ice
                                        Blended • Cotton Candy Ice Blended
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Teas
                            </h2>
                            <div width="90vw|500px" mx="auto">
                                <p textAlign="center" variant="text.menuitem">
                                    Green Earl Grey • Tropical Green • Bombay Chai • Early Gray Lavender •
                                    English Breakfast • Sweet Ginger Peach • Dragon Eye Oolong • Honeybush
                                    Caramel • Golden Chamomile • Southern Mint
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fresh Juice & Italian Soda */}
            <section py="8|12" my="6|0" id="juice">
                <div variant="container">
                    <div display="grid" col="1" gap="4|8">
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Fresh Made Juice
                            </h2>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" justifyContent="center">
                                            <p textAlign="center">#1 - Apple, Carrot, Celery, Beet</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" justifyContent="center">
                                            <p textAlign="center">#2 - Apple, Carrot</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" justifyContent="center">
                                            <p textAlign="center">#3 - Apple, Pear</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" justifyContent="center">
                                            <p textAlign="center">$4 - Orange Juice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p textAlign="center" variant="text.menuitem" pt="6">
                                $6.75
                            </p>
                        </div>
                        <div py="6">
                            <h2 variant="text.menuheading" pb="8">
                                Italian Sodas
                            </h2>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div width="80%">
                                    <p textAlign="center">
                                        Mango • Peach • Strawberry • Vanilla • Coconut • Raspberry • Blueberry
                                        • Cherry • Pomegranate
                                    </p>
                                </div>
                            </div>
                            <p textAlign="center" variant="text.menuitem" pt="6">
                                $3.75
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desserts */}
            <section py="8|12" my="6|0" id="desserts">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Desserts
                    </h2>
                    <div width="90vw|500px" mx="auto" pb="6">
                        <img src="/images/desserts.jpg" alt="Desserts" rounded="lg|md" />
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div width="90vw|500px">
                            <p textAlign="center">
                                Opera • Cannoli • Maple Pecan • Mocha Tres Leches • Raspberry Lemon •
                                Carrot Cake • Raspberry Fudge • Berry Cheesecake • Parisian • Napoleon
                                • Fruit Tart • Chocolate Mousse Tower • Lemon Merengue • Eclair •
                                Tiramisu • Red Velvet • Black Forest
                            </p>
                            <p textAlign="center" variant="text.menuitem" py="6">
                                $5.75
                            </p>
                            <div display="grid" col="1|2" textAlign="center" variant="text.menuitem">
                                <div py="6">
                                    <p>Linzer Tart</p>
                                    <p variant="text.menuitem">$5.95</p>
                                </div>
                                <div py="6">
                                    <p>Walnut Cranberry</p>
                                    <p variant="text.menuitem">$6.75</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bread */}
            <section py="8|12" my="6|0" id="bread">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Fresh Baked Breads
                    </h2>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div width="80%">
                            <p textAlign="center">
                                Challah • German Pretzels • Sourdough • French Baguette • French Loaf • German Rye • Multigrain • Whole Wheat
                        </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pies */}
            <section py="8|12" my="6|0" id="pies">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Pies
                    </h2>
                    <div display="grid" col="1" gap="4|8">
                        <div>
                            <div display="grid" col="1|1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>Pecan</p>
                                            <p>$29.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>Walnut Cranberry</p>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>Apple</p>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>Cherry</p>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>Boston Cream</p>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>Pumpkin</p>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>Key Lime</p>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cakes */}
            <section py="8|12" my="6|0" id="cakes">
                <div variant="container">
                    <h2 variant="text.menuheading">
                        Cakes
                    </h2>
                    <div display="grid" justifyItems="center" variant="text.menuitem" my="5rem">
                        <div>
                            <p textAlign="center" pb="8">
                                Princess
                            </p>
                            <div width="90vw|500px" mx="auto">
                                <img src="/images/princesscake.png" alt="Princess Cake" rounded="lg|md" />
                            </div>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                6"
                                            </p>
                                            <p>$31.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8"
                                            </p>
                                            <p>$43.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                10"
                                            </p>
                                            <p>$64.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                12"
                                            </p>
                                            <p>$77.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/4 Sheet
                                            </p>
                                            <p>$64.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/2 Sheet
                                            </p>
                                            <p>$110.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Full Sheet
                                            </p>
                                            <p>$220.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem" my="5rem">
                        <div width="80%" mx="auto">
                            <p textAlign="center" pb="8">
                                Tres Leches • Parisienne • Lemon Merengue
                            </p>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                6"
                                            </p>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8"
                                            </p>
                                            <p>$38.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                10"
                                            </p>
                                            <p>$53.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                12"
                                            </p>
                                            <p>$64.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/4 Sheet 2 Layer
                                            </p>
                                            <p>$54.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/4 Sheet 3 Layer
                                            </p>
                                            <p>$68.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/2 Sheet 2 Layer
                                            </p>
                                            <p>$87.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/2 Sheet 3 Layer
                                            </p>
                                            <p>$110.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Full Sheet 2 Layer
                                            </p>
                                            <p>$150.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Full Sheet 3 Layer
                                            </p>
                                            <p>$210.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" my="5rem" variant="text.menuitem">
                        <div width="80%">
                            <p textAlign="center" pb="8">
                                Carrot Cake • Chocolate Fudge • Raspberry Fudge <br /> German
                                Chocolate • Tutti Frutti • Red Velvet
                            </p>
                            <div display="grid" col="2" gap="4|8" justifyItems="center" mx="auto" pb="6">
                                <img width="40vw|300px" src="/images/tuttifrutti.png" alt="Tutti Frutti" />
                                <img width="40vw|300px" src="/images/germanchocolate.png" alt="German Chocolate" />
                            </div>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                6"
                                            </p>
                                            <p>$30.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8"
                                            </p>
                                            <p>$40.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                10"
                                            </p>
                                            <p>$59.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                12"
                                            </p>
                                            <p>$69.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/4 Sheet
                                            </p>
                                            <p>$66.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/2 Sheet
                                            </p>
                                            <p>$99.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Full Sheet
                                            </p>
                                            <p>$205.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" my="5rem" variant="text.menuitem">
                        <div width="80%">
                            <p display="none|block" textAlign="center" pb="8">
                                Strawberry Shortcake • Black Forest <br /> Grand Marnier • Banana Shortcake <br />Strawberry Banana Shortcake
                            </p>
                            <p display="block|none" textAlign="center" pb="8">
                                Strawberry Shortcake <br /> Black Forest • Grand Marnier • Banana Shortcake <br /> Strawberry Banana Shortcake
                            </p>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                6"
                                            </p>
                                            <p>$31.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8"
                                            </p>
                                            <p>$41.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                10"
                                            </p>
                                            <p>$60.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                12"
                                            </p>
                                            <p>$79.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/4 Sheet
                                            </p>
                                            <p>$65.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/2 Sheet
                                            </p>
                                            <p>$103.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Full Sheet
                                            </p>
                                            <p>$205.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" my="5rem" variant="text.menuitem">
                        <div width="80%">
                            <p textAlign="center" pb="8">
                                Napoleon
                            </p>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8x8
                                            </p>
                                            <p>$46.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/4 Sheet
                                            </p>
                                            <p>$62.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/2 Sheet
                                            </p>
                                            <p>$95.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Full Sheet
                                            </p>
                                            <p>$172.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" my="5rem" variant="text.menuitem">
                        <div width="80%" mx="auto">
                            <p textAlign="center" pb="8">
                                Tiramisu • Opera
                            </p>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8"
                                            </p>
                                            <p>$38.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                10"
                                            </p>
                                            <p>$47.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                12"
                                            </p>
                                            <p>$61.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/4 Sheet
                                            </p>
                                            <p>$59.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                1/2 Sheet
                                            </p>
                                            <p>$92.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Full Sheet
                                            </p>
                                            <p>$168.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem" my="5rem">
                        <div width="80%" mx="auto">
                            <p textAlign="center" pb="8">
                                Flourless Chocolate Cake
                            </p>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                6"
                                            </p>
                                            <p>$18.95</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8"
                                            </p>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                10"
                                            </p>
                                            <p>$32.95</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                12"
                                            </p>
                                            <p>$60.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Swiss Tarts */}
            <section py="8|12" my="6|0" id="swisstarts">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Swiss Tarts
                    </h2>
                    <div width="90vw|500px" mx="auto">
                        <img src="/images/swisstart.png" alt="Pie" />
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div width="80%" mx="auto">
                            <p textAlign="center" pb="8">
                                Apple - Apricot - Blueberry <br /> Linzer - Pear - Plum - Raspberry
                            </p>
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Individual
                                            </p>
                                            <p>$5.75</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8"
                                            </p>
                                            <p>$32.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                10"
                                            </p>
                                            <p>$38.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fruit Tarts */}
            <section py="8|12" id="fruittarts">
                <div variant="container">
                    <h2 variant="text.menuheading" pb="8">
                        Fruit Tarts
                    </h2>
                    <div width="90vw|500px" mx="auto">
                        <img src="/images/fruittart.png" alt="Pie" />
                    </div>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div width="90vw|500px" mx="auto">
                            <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                                <div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                Individual
                                            </p>
                                            <p>$5.75</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                8"
                                            </p>
                                            <p>$26.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                10"
                                            </p>
                                            <p>$36.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                12"
                                            </p>
                                            <p>$45.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                15" x 8"
                                            </p>
                                            <p>$55.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                16" x 12"
                                            </p>
                                            <p>$84.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                20" x 16"
                                            </p>
                                            <p>$114.00</p>
                                        </div>
                                    </div>
                                    <div display="flex">
                                        <div display="flex" width="90vw|500px" justifyContent="space-between">
                                            <p>
                                                24" x 16"
                                            </p>
                                            <p>$145.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Croquembouche */}
            <section py="8|12" my="6|0" id="croquembouche">
                <div variant="container">
                    <h2 variant="text.menuheading">
                        Croquembouche
                    </h2>
                    <div width="90vw|500px" mx="auto" py="2">
                        <img src="/images/croquembouche.jpg" alt="Croquembouche" />
                    </div>
                    <p textAlign="center" variant="text.menuitem" my="6">
                        Italian w/ Chocolate <br /> <span variant="text.menusubtext">Your choice of Vanilla – Chocolate or Mocha Custard Fillings</span>
                    </p>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        50
                                            </p>
                                    <p>$88.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        90
                                            </p>
                                    <p>$140.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        135
                                            </p>
                                    <p>$210.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        170
                                            </p>
                                    <p>$260.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        200
                                            </p>
                                    <p>$305.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        230
                                            </p>
                                    <p>$350.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p textAlign="center" variant="text.menuitem" my="6">
                        Traditional French w/Spun Sugar <br /> <span variant="text.menusubtext">Your choice of Vanilla – Chocolate or Mocha Custard Fillings</span>
                    </p>
                    <div display="grid" col="1" gap="4|8" justifyItems="center" variant="text.menuitem">
                        <div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        50
                                            </p>
                                    <p>$80.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        90
                                            </p>
                                    <p>$126.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        135
                                            </p>
                                    <p>$189.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        170
                                            </p>
                                    <p>$238.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        200
                                            </p>
                                    <p>$280.00</p>
                                </div>
                            </div>
                            <div display="flex">
                                <div display="flex" width="90vw|500px" justifyContent="space-between">
                                    <p>
                                        230
                                            </p>
                                    <p>$325.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Cta
                heading="Place an order"
                link="https://www.ubereats.com/los-angeles/food-delivery/emilis-pasty-%26-cafe/ygjbd5nrRGeAKSyHpwG1FA"
                linktext="Order Online"
            />

            {/** Back to top button */}
            <div position="fixed" bottom="4" right="4">
                <button variant="button.primary" onClick={() => scrollTo('#top')}>Back To Top</button>
            </div>
        </Layout >
    )
}
