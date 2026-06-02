import{
    Home,
    User,
    Mail,
    Settings,
    HelpCircle
} from "lucide-react";

function Sidebar(){
    return(
        <aside className="sidebar">
            <div className="menu active">
                <Home size={24} />
                <span>Dashboard</span>
            </div>
            <div className="menu">
                <User size={24} />
                <span>Profile</span>
            </div>
            <div className="menu">
                <Mail size={24} />
                <span>Messages</span>
            </div>
            <div className="menu">
                <Settings size={24} />
                <span>Settings</span>
            </div>
            <div className="menu">
                <HelpCircle size={24} />
                <span>Help</span>
            </div>
        </aside>
    );
}

export default Sidebar;
    
            