import React, { useEffect, useState } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import { fetchServices } from './shared/Services';

const ServicesList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices(setServices);
    }, []);

    return (
        <List
            className="admin-services-list"
            // loading={initLoading}
            itemLayout="horizontal"
            // loadMore={loadMore}
            dataSource={services}
            renderItem={service => (
                <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                    <Skeleton avatar title={false} active>
                        <List.Item.Meta
                            title={
                                <a href="https://ant.design">{service.name}</a>
                            }
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <div>content</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    );
};

export default ServicesList;
