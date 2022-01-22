import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text style={{ marginBottom: 10 }}>1 Nucamp Way</Text>
          <Text style={{ marginBottom: 10 }}>Seattle WA 98001 U.S.A.</Text>
          <Text style={{ marginBottom: 10 }}>Phone: 1-206-555-1234</Text>
          <Text style={{ marginBottom: 10 }}>Email:campsites@nucamp.co</Text>
        </Card>
      </ScrollView>
    );
  }
}

const Mission = () => {
    return (
      <Card title="Our Mission">
        <Text style={{ margin: 10 }}>
          We present a curated database of the best campsites in the vast woods
          and backcountry of the World Wide Web Wilderness. We increase access to
          adventure for the public while promoting safe and respectful use of
          resources. The expert wilderness trekkers on our staff personally verify
          each campsite to make sure that they are up to our standards. We also
          present a platform for campers to share reviews on campsites they have
          visited with each other.
        </Text>
      </Card>
    );
  };

export default Contact;