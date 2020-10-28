import './style.css';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import YouTube from 'react-youtube'
import asi from './resources/asi.jpg'
import mak from './resources/mak.jpg'
import usa from './resources/usa.jpg'

function Food() {
    const [food, setFood] = useState({
        "mak": false,
        "usa": false,
        "asi": false
    })

    const handleClick = (e) => {
        const name = e.target.name
        setFood((prevState) => {
            const newState = {
                ...prevState
            }
            for (let prop in newState) {
                newState[prop] = false
            }
            newState[name] = true
            return newState
        })
    }

    return (
        <motion.div initial={{ scale: 1, opacity: 0, y: 2000 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: '1.2' }} className="musicDiv">
            <h1 style={{ textAlign: "center", fontFamily: "Verdana", marginTop: "2vh", fontSize: 40 }} className="comment">Favorite food:</h1>
            <motion.div className="verticalMenu" initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: '1' }}>
                <button className="musicButton" onClick={(e) => handleClick(e)} name="mak">Macedonian Cuisine</button>
                {food["mak"]
                    ?
                    <motion.table initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: '1' }}>
                        <tr>
                            <td>
                                <YouTube className="video" videoId="AL6Aixf6K9U" />
                            </td>
                            <td>
                                <div>
                                    <img src={mak} className="foodImages" alt="" />
                                </div>
                            </td>
                            <td className="paragraphTdFood">
                                <div className="paragraph">
                                    Tavče gravče (Macedonian: Тавче гравче) is a traditional Macedonian dish. It is prepared with fresh beans and can be found in many restaurants in North Macedonia. It is also commonly eaten by the Macedonian diaspora. This meal is baked and served in a traditional unglazed earthenware pot. The name of the dish may be translated as "Beans on a tava". Tavče gravče is considered the national dish of North Macedonia.
                                </div>
                            </td>
                        </tr>
                    </motion.table>
                    : null}
                <button className="musicButton" onClick={(e) => handleClick(e)} name="usa">American Cuisine</button>
                {food["usa"]
                    ?
                    <motion.table initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: '1' }}>
                        <tr>
                            <td>
                                <YouTube className="video" videoId="RTExkuPgxlI" />
                            </td>
                            <td>
                                <div>
                                    <img src={usa} className="foodImages" alt="" />
                                </div>
                            </td>
                            <td className="paragraphTdFood">
                                <div className="paragraph">
                                    American and Canadian pancakes (sometimes called hotcakes, griddlecakes, or flapjacks) are usually served at breakfast, in a stack of two or three, topped with real or artificial maple syrup and butter. They are often served with other items such as bacon, toast, eggs or sausage. Other popular topping alternatives include jam, peanut butter, nuts, fruit, honey, powdered sugar, whipped cream, cane syrup, cinnamon and sugar, and molasses. In addition, when a pancake is occasionally served as a dessert, toppings such as ice cream, chocolate syrup, and various fruits are often used.
                                </div>
                            </td>
                        </tr>
                    </motion.table>
                    : null}
                <button className="musicButton" onClick={(e) => handleClick(e)} name="asi">Asian Cuisine</button>
                {food["asi"]
                    ?
                    <motion.table initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: '1' }}>
                        <tr>
                            <td>
                                <YouTube className="video" videoId="ZdcQzFArfvM" />
                            </td>
                            <td>
                                <div>
                                    <img src={asi} className="foodImages" alt="" />
                                </div>
                            </td>
                            <td className="paragraphTdFood">
                                <div className="paragraph">
                                    Sweet and Sour Pork is an iconic Chinese recipe and classic Cantonese dish.
                                    Called “咕嚕肉” or “goo lou yok” in Cantonese dialect, this recipe is very pleasing to the palate because of the flavorsome sweet and sour sauce—the sweetness from sugar plus the tangy ketchup and sharp rice vinegar—with the crispy fried pork pieces.
                                </div>
                            </td>
                        </tr>
                    </motion.table>
                    : null}
            </motion.div>
        </motion.div>
    );
}

export default Food;
