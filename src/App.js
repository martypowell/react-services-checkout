import React, { useState } from "react";
import "./App.css";
import servicesData from "./data/services.json";
import { List, Card, Icon, Input } from "antd";

const App = () => {
  const [services, initState] = useState(servicesData);
  return (
    <div className="services">
      <h1>Request Service or Report a Problem</h1>
      <Input
        size="large"
        placeholder="Filter services by name or category..."
      />
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={services}
        renderItem={service => (
          <List.Item>
            <Card
              title={service.description}
              extra={service.isMostPopularService && <Icon type="star" />}
            >
              <p>Content</p>
              <span>{service.categories.join(", ")}</span>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
