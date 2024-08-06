import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { BlurView } from 'expo-blur'; // Import BlurView

// Define a type for the country data
interface Country {
    name: string;
    code: string;
    callingCode: string;
    flag: string;
}

interface PhoneNumberInputProps {
    setCountryCallingCode: (code: string) => void;
}

const PhoneNumberInput = ({ setCountryCallingCode }: PhoneNumberInputProps) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2')
            .then(response => response.json())
            .then((data: any[]) => {
                const formattedCountries = data.map(country => ({
                    name: country.name.common,
                    code: country.cca2,
                    callingCode: country.idd.root + (country.idd.suffixes[0] || ''),
                    flag: country.flags.png,
                })).filter(country => country.callingCode); // Filter out countries without calling code

                setCountries(formattedCountries.sort((a, b) => a.name.localeCompare(b.name)));
                setFilteredCountries(formattedCountries);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    useEffect(() => {
        if (countries.length > 0) {
            // Fetch the user's IP-based location
            fetch('https://ipinfo.io/json?token=5458323d126b61')
                .then(response => response.json())
                .then(data => {
                    const countryCode = data.country;
                    const matchedCountry = countries.find(c => c.code === countryCode);
                    setSelectedCountry(matchedCountry || countries[0]); // Default to the first country if none matched
                    setCountryCallingCode(matchedCountry ? matchedCountry.callingCode : countries[0].callingCode);
                })
                .catch(error => console.error('Error fetching location:', error));
        }
    }, [countries]);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    const selectCountry = (country: Country) => {
        setSelectedCountry(country);
        setCountryCallingCode(country.callingCode);
        closeModal();
    };

    const handleSearch = (text: string) => {
        setSearchTerm(text);
        const filtered = countries.filter(country =>
            country.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.countryCodeContainer}
                onPress={openModal}
            >
                <Text style={styles.countryCodeText}>
                    {selectedCountry ? (
                        <Image source={{ uri: selectedCountry.flag }} style={styles.flagImage} />
                    ) : (
                        ''
                    )}
                </Text>
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <BlurView
                    style={styles.modalContainer}
                >
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                        value={searchTerm}
                        onChangeText={handleSearch}
                    />
                    <FlatList
                        data={filteredCountries}
                        keyExtractor={(item) => item.code}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.countryItem}
                                onPress={() => selectCountry(item)}
                            >
                                <View style={styles.countryTextContainer}>
                                    <Image
                                        source={{ uri: item.flag }}
                                        style={styles.flagImage}
                                    />
                                    <Text style={styles.countryText}>
                                        {item.callingCode} {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </BlurView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
    },
    countryCodeContainer: {
        backgroundColor: '#ccc',
    },
    countryCodeText: {
        fontSize: 30,
    },
    searchInput: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        margin: 16,
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    countryItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    countryTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagImage: {
        width: 30,
        height: 20,
        marginRight: 8
    },
    countryText: {
        fontSize: 16,
        color: '#000',
    },
});

export default PhoneNumberInput;
