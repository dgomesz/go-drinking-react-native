import { Image, View } from "react-native"
import { OurOffers } from "../../components/OurOffers"
import logo from '../../assets/images/imgGo.png'
import { styles } from "./style"

export const HomeScreen = () => {
    return(
        <View style ={styles.containerHomeScreen}>
            <Image source={logo} style={styles.logoHome}/>
            <OurOffers/>
        </View>
    )

}