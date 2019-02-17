import React, { useEffect, useState } from "react";
import "./App.css";
import servicesData from "./data/services.json";
import { List, Card, Icon, Input, Tag } from "antd";

const App = () => {
  const [services, setServices] = useState(servicesData);
  const [filteredServices, setFilteredServices] = useState(services);
  const [filterValue, setFilterValue] = useState("");

  const handleInputFilterChange = changeEvent => {
    const { value } = changeEvent.currentTarget;
    const filterVal = value ? value.toLowerCase() : "";
    const filteredServices = services.filter(service => {
      var hasDescriptionMatch =
        service.description.toLowerCase().indexOf(filterVal) > -1;
      var numberOfCategoryMatches = service.categories.filter(
        category => category.toLowerCase().indexOf(filterVal) > -1
      ).length;
      return hasDescriptionMatch || !!numberOfCategoryMatches;
    });

    setFilterValue(value);
    setFilteredServices(filteredServices);
  };

  return (
    <div className="services">
      <h1>Request Service or Report a Problem</h1>
      <section className="section">
        <Input
          size="large"
          placeholder="Filter services by name or category..."
          onChange={handleInputFilterChange}
          value={filterValue}
        />
      </section>
      <section className="section">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4
          }}
          dataSource={filteredServices}
          renderItem={service => (
            <List.Item>
              <Card
                title={service.description}
                extra={service.isMostPopularService && <Icon type="star" />}
              >
                <p>Content</p>
                {service.categories.map((category, categoryIndex) => (
                  <Tag key={categoryIndex}>{category}</Tag>
                ))}
              </Card>
            </List.Item>
          )}
        />
      </section>
    </div>
  );
};

export default App;
