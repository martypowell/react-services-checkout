import React, { useState } from "react";
import "./App.css";
import servicesData from "./data/services.json";
import { List, Card, Icon, Input } from "antd";

const App = () => {
  const [services, setServices] = useState(servicesData);
  const [filteredServices, setFilteredServices] = useState(services);

  const handleInputFilterChange = changeEvent => {
    const { value } = changeEvent.currentTarget;
    const filterVal = value ? value.toLowerCase() : "";
    const filteredServices = services.filter(service => {
      return service.description.toLowerCase().indexOf(filterVal) > -1;
    });

    setFilteredServices(filteredServices);
  };

  return (
    <div className="services">
      <h1>Request Service or Report a Problem</h1>
      <section class="section">
        <Input
          size="large"
          placeholder="Filter services by name or category..."
          onChange={handleInputFilterChange}
        />
      </section>
      <section class="section">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={filteredServices}
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
      </section>
    </div>
  );
};

export default App;
