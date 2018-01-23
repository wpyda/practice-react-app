import React from 'react'
import {Link} from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import routes from '../routes'

const SidebarItem = (props) => (
    <Link to={props.to}
          style={{textDecoration: 'none'}}
          onClick={props.drawerToggle}
    >
        <MenuItem>{props.text}</MenuItem>
    </Link>
)

const Sidebar = (props) => (
    <Drawer
        docked={false}
        width={250}
        open={props.isDrawerOpen}
        onRequestChange={props.drawerToggle}
    >

        {
            routes.map(route => (
                <SidebarItem
                    to={route.path}
                    text={route.text}
                    drawerToggle={props.drawerToggle}
                    key={route.path}
                />
            ))
        }

    </Drawer>
)

export default Sidebar