import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useContext } from 'react'
import { Linking, Modal, StyleSheet, Text, Pressable, TouchableOpacity, View, Image, ScrollView } from 'react-native'


const HealthCareProviders = () => {
  const navigation = useNavigation()
  const handleDashboard = () => {
    navigation.navigate("Dashboard")
  }

  const [modalVisible, setModalVisible] = useState(false);
  

  return (
    <View style={styles.container}>
      <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >

            <View style={styles.modalView}>
                <Text style={styles.modalText}>This feature will be developed later.</Text>
                <Pressable
                    style={styles.buttonClose}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={{fontSize:17}}>Hide</Text>
                </Pressable>
            </View>
                
            </Modal>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>People who provide your care during Pregnancy</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.box1Top}>
            <Text style={styles.boxHeader}>Family Doctors and Team:</Text>
            <Text style={styles.boxText}>Medical doctors who help you with a wide range of health concerns.</Text>
        </View>
        <View style={styles.box1Bottom}>
            <Text style={styles.boxText}>- Nurse practitioners</Text>
            <Text style={styles.boxText}>- Registered nurses and LPN nurses</Text>
            <Text style={styles.boxText}>- Pharmacists</Text>
        </View>

        <View style={styles.box1Top}>
            <Text style={styles.boxHeader}>Obstetricians:</Text>
            <Text style={styles.boxText}>Medical doctors who specialize in the care of pregnant woman.</Text>
        </View>
        <View style={styles.box1Bottom}>
            <Text style={styles.boxText}>- Midwives:</Text>
            <Text style={styles.boxText}>Specialize in the care of women during low risk pregnancy,
                during birth and for up to 6 weeks after your baby is born.
            </Text> 
        </View>
        
        <View style={{flexDirection: "row"}}>
            <View style={styles.box2Top}>
            <Text style={styles.boxHeader}>Registered dieticians</Text>
            </View>
            <View style={styles.box2Top}>
            <Text style={styles.boxHeader}>Lactation consultants</Text>
            </View>
            <View style={styles.box2Top}>
            <Text style={styles.boxHeader}>Dental Hygienists</Text>
            </View>
        </View>
        <Text></Text>
        
        <View style={styles.box1Top}>
            <Text style={styles.boxHeader}>Public health nurses in Public health Centres:</Text>
            <Text style={styles.boxText}>Immunizations, group classes, postpartum home visit</Text>
        </View>
        
        <View style={{flexDirection: "row"}}>
            <View style={styles.box2Top}>
            <Text style={styles.boxHeader}>Dentists</Text>
            </View>
            <View style={styles.box2Top}>
            <Text style={styles.boxHeader}>Physiotherapists</Text>
            </View>
            <View style={styles.box2Top}>
            <Text style={styles.boxHeader}>Childbirth educators</Text>
            </View>
        </View>
        
        <Text></Text><Text></Text>


      <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleDashboard}>
                    <Image style={styles.buttonImg} 
                    source={{uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAZlBMVEX///8AAAATExNgYGCgoKDf39+UlJTn5+fs7Oz5+fnQ0NCoqKj09PSYmJji4uJcXFzJycmysrKKioplZWU2NjYLCwtAQEBqampKSkqCgoIiIiJWVla5ubkrKyswMDBRUVF3d3caGhrpcg/PAAADeUlEQVRoge2a7baqIBCGozLRzCz7jsru/yaP7YYKZwbUcJ+zzuL9KTkP4ssMYKNRUFBQUNB/K6mOZXlUkmpL1MzQIvWGTWYCNEtw6140tfLEjTfvmJu42Zojrrj44RZG0G1zICMMHnvhzpth578DPuK4x18AJ0scVojlp8UGAccXiivE9cNiQ4CLLc01LDYAeMVhH3rNVf/gtY1b55KBwMnEzhViPwg4Prm4tcWkf3CBoymFr6W+wShbiXvNSO/o8sovGNvq8DOq8oAaZh7BskSRSt2Gm6rUFzjfoUBr22BccZbpBSYewChH+PX7eWIiLmRHKdmeeQBXKMjmzdM92BCs78DZGcXYf46EHnO8yvoOHOFHWUATeEq7bOEVXIxRBChB2esR99nzirVwdQRjW52KZ0v8McF2sAQobLm8ExivrXY5MIyJuoXeENO9D5hYW5UJMxJgsQRnse5giQdO+whPMFFBE7tSaA0mcoJ6tmS4LNQ6gMWIQtkJTGSr6NmSM6u9Lbx+ojJ1ABO20tZlnqgWYfiO4AyvrfRknfJcIaZwO5XF2oAjtggmhK0+VYHrCYu1ABNLdshW8c3OFeIGL4TIYs6tOb5HbxHSFqvMk/4t7r2yc7GtLlAEuYlCx5d4i7XmqaMMD+YZmhybCBwf19MlcWjxVMR2072JeGvCWmyT09zijn4KtrKlfyxdSrBddHEzxRdBa8EjZLlvjrnYVoec65FTED/Heb1pMeIllhnXoxaCQ5GM2AkYFouvXNcSshi5dWAt9nloQaR+na06vt63TnwWe1mMSP0p26P2gvj8RoQogpLtURdBuZJ4Mj4skBBLdrCVoxi5VYHFcKE8J0R0sJV0FiO3bpKzWDVCl8BWKXOS1k2XlLPYqLmKhV+2LEZuKdpiy8bh8hXGxrEV6iLYbEkzVeTms+nK5dr8dRJsL40dgjInDdiKOyjtq0vctNjUnMhgK2KP+KXGhWkxfbz93POMwVY9ipFbkKvSn2d614nHadVB5+4huPXsgbe40ydkkFuUevXC+0A/9FpXJ0plI1rDgi0K4AAO4AAeDjzLo4bymeseL+Apvse5Dg7gAA7gAA7gAA7gAA7gAP47YOcJdR/wvQXY+YWpD9j2tUsrHgKM/iZLyXXA1h08Jr83YclFOeF1Jj5PqrPlhnJB/hc6KCgoKOif1x/WoTaqSAaQ9gAAAABJRU5ErkJggg=='}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Club</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Tools</Text>
                </TouchableOpacity>
            </View>
      </View>
      
    </View>
  )
}

export default HealthCareProviders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F08686",
  },
  headerContainer :{
    width: "100%",
    height:"15%"

  },
  headerText: {
    color: "white",
    fontWeight: '700',
    fontSize: 30,
    textAlign:'center',
    marginTop:'12%'
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: "3%",
    color: "#7C2424",
    marginTop:"8%"
  },

  inputContainer: {
    width: '100%',
    height:"85%",
    backgroundColor: 'white',
  },
  box1Top: {
    width: '90%',
    height:"13%",
    backgroundColor: '#2B78DC',
    marginTop:'3%',
    marginLeft:'5%'
  },
  box1Bottom: {
    width: '90%',
    height:"13%",
    backgroundColor: '#81B7FF',
    marginLeft:'5%'
  },

  box2Top: {
    width: '30%',
    height:"100%",
    backgroundColor: '#2B78DC',
    marginTop:'3%',
    marginLeft:'3%'
  },

  boxHeader: {
    color: "white",
    fontWeight: '700',
    fontSize: 14,
    marginTop:'5%',
    textAlign: "center"

  },

  boxText: {
    color: "white",
    fontWeight: '700',
    fontSize: 14,
    marginTop:'3%',
    marginLeft:'3%', 
    
  },

  
  footerContainer :{
    width: "100%",
    height:"10%",
    backgroundColor:'#F08686',
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },

  button :{
    backgroundColor: "white",
    width: '16%',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    marginLeft:'3%',
    marginTop:'2%'
    
  },

  buttonImg: {
    height:40,
    width:40
  },

  buttonText: {
    fontWeight: '700',
    fontSize: 10,
    marginTop:'30%'
  },
  modalView: {
    marginTop: '80%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:18,
    fontWeight:'700'
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 15,
    elevation: 2
  },
})