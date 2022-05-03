import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity, Modal, StyleSheet, Pressable, FlatList, StatusBar } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import ThemeButton from '../../components/ThemeButton';
import color from '../../utils/color';
import Globals from '../../utils/Globals';
import { Message } from '../../utils/message';
import { getStoredData, setStoredData } from '../../utils/store';
import { convertFontScale, screenHeight } from '../../utils/theme';
import styles from './styles';
const EMAIL_REG = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

export class Intro extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            forms: [],
            name: {
                value: "",
                error: "",
                isError: true
            },
            email: {
                value: "",
                error: "",
                isError: false
            },
            pwd: {
                value: "",
                error: "",
                isError: false,
                isVisible: false
            },

        }
    }

    componentDidMount() {
        //setting header 
        this.setHeader()
        this.onAddForm()
    }

    setHeader() {
        let { } = this.state
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity onPress={async () => this.onRemoveForm()} style={{}}>
                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/Images/remove.png')} />
                </TouchableOpacity>),
            headerRight: () => (
                <TouchableOpacity onPress={async () => this.onAddForm()} style={{}}>
                    <Image style={{ width: 24, height: 24 }} source={require('../../assets/Images/add.png')} />
                </TouchableOpacity>),
        });
    }

    renderItem = ({ index, item }) => {
        const { isLoading, name, email, pwd, isError } = this.state;
        return (
            <View style={styles.rowContainer}>

                <Text style={{ color: color.BLACK, fontSize: convertFontScale(14), marginLeft: convertFontScale(12) }}>Employee Form No. {(index + 1)}</Text>

                <View style={[styles.textInputContainer, styles.textInputMargin]}>
                    <TextInput editable={!item.isSubmitted}
                        style={styles.textInput}
                        autoFocus={true}
                        placeholder={Message.name_placeholder}
                        maxLength={5}
                        returnKeyType={"done"}
                        onChangeText={(text) => this.onNameChange(text)}
                        value={item.name.value}
                    />
                </View>
                {item.name.isError && item.name.error.length > 0 && <Text style={styles.errorText}>{item.name.error}</Text>}


                <View style={[styles.textInputContainer, styles.textInputMargin]}>
                    <TextInput editable={!item.isSubmitted}
                        style={styles.textInput}
                        keyboardType={'email-address'}
                        placeholder={Message.email_placeholder}
                        returnKeyType={"done"}
                        onChangeText={(text) => this.onEmailChange(text)}
                        value={item.email.value}
                    />

                </View>
                {item.email.isError && item.email.error.length > 0 && <Text style={styles.errorText}>{item.email.error}</Text>}


                <View style={[styles.textInputContainer, styles.textInputMargin]}>
                    <View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                        <TextInput editable={!item.isSubmitted}
                            style={[styles.textInput, { width: '80%' }]}
                            secureTextEntry={item.pwd.isVisible}
                            placeholder={Message.password_placeholder}
                            returnKeyType={"done"}
                            onChangeText={(text) => this.onPasswordChange(text)}
                            value={item.pwd.value}
                            textContentType='newPassword'
                        />
                        <TouchableOpacity onPress={async () => this.onPwdVisiable()} style={{}}>
                            <Image style={{ width: 30, height: 30 }} source={item.pwd.isVisible ? require('../../assets/Images/view.png') : require('../../assets/Images/hidden.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                {item.pwd.isError && item.pwd.error.length > 0 && <Text style={styles.errorText}>{item.pwd.error}</Text>}


                {!isLoading && <ThemeButton isSubmitted={item.isSubmitted} disabled={(item.isSubmitted || item[Message.KEY_NAME].isError || item[Message.KEY_EMAIL].isError || item[Message.KEY_PASSWORD].isError)} label={Message.btn_submit} style={{ marginTop: 26 }} onClick={() => this.onSubmitClick(index)} />}

            </View>
        )
    };

    render() {
        const { isLoading, name, email, pwd, forms } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView>
                    <View style={[styles.subContainer]}>
                        <FlatList
                            data={forms}
                            keyExtractor={item => `${item.a}`}
                            renderItem={this.renderItem}
                        />

                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>

        );
    }

    onRemoveForm() {
        let t = this.state.forms
        t.pop();
        this.setState({ forms: t })
    }

    onAddForm() {
        let t = this.state.forms
        if (t.length != 0 && !(t[t.length - 1].isSubmitted)) {
            return false
        }

        let newForm = {
            name: {
                value: "",
                error: "",
                isError: true
            },
            email: {
                value: "",
                error: "",
                isError: true
            },
            pwd: {
                value: "",
                error: "",
                isError: true,
                isVisible: false

            },
            isSubmitted: false,
        }
        t.push(newForm)
        this.setState({ forms: t })


    }

    onNameChange(text) {
        text = text.toString().trim()
        text = text.replaceAll(' ', '')

        let name_obj = {
            value: text,
            error: "",
            isError: false
        }
        if (!text) {
            name_obj['error'] = Message.blank_name
            name_obj['isError'] = true
        }
        else if (text.length != 5) {
            name_obj['error'] = Message.invalid_name
            name_obj['isError'] = true
        } else {
            name_obj['error'] = ""
            name_obj['isError'] = false
        }
        this.updateValues(Message.KEY_NAME, name_obj)
    }

    onEmailChange(text) {
        console.log("email", text)
        text = text.toString().trim()
        let email_obj = {
            value: text,
            error: "",
            isError: false
        }
        if (!text) {
            email_obj['error'] = Message.blank_email
            email_obj['isError'] = true
        }
        else if (EMAIL_REG.test(text) === false) {
            email_obj['error'] = Message.invalid_email
            email_obj['isError'] = true
        }
        else {
            email_obj['error'] = ""
            email_obj['isError'] = false
        }
        this.updateValues(Message.KEY_EMAIL, email_obj)
    }

    onPasswordChange(text) {
        text = text.toString().trim()
        text = text.replaceAll(' ', '')
        let pwd_obj = {
            value: text,
            error: "",
            isError: false
        }
        if (!text) {
            pwd_obj['error'] = Message.blank_pwd
            pwd_obj['isError'] = true
        }
        else if (text.length != 5) {
            pwd_obj['error'] = Message.invalid_pwd
            pwd_obj['isError'] = true
        }
        else {
            pwd_obj['error'] = ""
            pwd_obj['isError'] = false
        }
        this.updateValues(Message.KEY_PASSWORD, pwd_obj)
    }

    onPwdVisiable() {
        let t = this.state.forms
        let obj = t[t.length - 1][Message.KEY_PASSWORD]
        obj['isVisible'] = !obj.isVisible

        this.updateValues(Message.KEY_PASSWORD, obj)
    }

    updateValues(key, obj) {
        let t = this.state.forms
        t[t.length - 1][key] = obj

        this.setState({ forms: t })
    }

    onSubmitClick(index) {

        //check name , email or pasword has error or not 
        // set true or false
        let t = this.state.forms
        t[index]['isSubmitted'] = true

        this.setState({ forms: t })


    }

}