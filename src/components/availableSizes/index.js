import { ScrollView, View, Text } from "react-native"
import { CardSize } from "../CardSize"
import product from '../../assets/images/product.png'
import product_01 from '../../assets/images/product_01.png'
import { styles } from "./style"

export const AvailableSizes = () => {
    return (
        <View style = {styles.containerAvailableSizes}>
            <Text style = {styles.textTitle}> Tamanhos <Text style = {styles.textHighlight}> Disponiveis </Text></Text>
            <ScrollView horizontal contentContainerStyle= {styles.scrollView}>
                <CardSize image={product} amount="269" measure= "ML" />
                <CardSize image={product} amount="269" measure= "ML" />
                <CardSize image={product} amount="269" measure= "ML" />
                <CardSize image={product} amount="269" measure= "ML" />
                <CardSize image={product_01} amount="500" measure= "ML" />
                
            </ScrollView>
        </View>
    )
}