import Sidebar from "./Sidebar";
import Header from "./Header";

function AdminLayout({ children }) {

    return (

        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "#f5f5f5"
            }}
        >

            <Sidebar />

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                }}
            >

                <Header />

                <main
                    style={{
                        padding: "40px"
                    }}
                >

                    {children}

                </main>

            </div>

        </div>

    );

}

export default AdminLayout;