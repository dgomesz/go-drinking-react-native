import { Image,ScrollView, Text, View } from "react-native"
import cardAmarelo from '../../assets/images/cardAmarelo.png'
import cardRoxo from '../../assets/images/cardRoxo.png'
import cardVerde from '../../assets/images/cardVerde.png'
import { styles } from "./style"

export const OurOffers = () =>{
    return(
        <View>
            <Text style={styles.textOurOffers}> Nossas <Text style={styles.textHighLight}>Ofertas</Text></Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollContent}>
                <Image source = {cardAmarelo}/>
                <Image source = {cardRoxo}/>
                <Image source = {cardVerde}/>
            </ScrollView>
        </View>
    )
}