import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Contratos from "./pages/Contratos";
import Atestados from "./pages/Atestados";
import Pecas from "./pages/Pecas";
import PecaDetalhe from "./pages/PecaDetalhe";
import ClientesAdmin from "./pages/admin/ClientesAdmin";
import DocumentosAdmin from "./pages/admin/DocumentosAdmin";
import PecasAdmin from "./pages/admin/PecasAdmin";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import PecaGerenciar from "./pages/admin/PecaGerenciar";

// Administração
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";

function App() {

    return (

        <Routes>

            {/* Site */}

            <Route path="/" element={<Home />} />

            <Route path="/clientes" element={<Clientes />} />

            <Route path="/contratos" element={<Contratos />} />

            <Route path="/atestados" element={<Atestados />} />

            <Route path="/pecas" element={<Pecas />} />

            <Route path="/pecas/:slug" element={<PecaDetalhe />} />

            {/* Administração */}

            <Route path="/admin" element={<Login />} />

            <Route

                path="/admin/dashboard"

                element={

                    <ProtectedRoute>

                        <Dashboard />

                    </ProtectedRoute>

                }

            />

            <Route

                path="/admin/clientes"

                element={

                    <ProtectedRoute>

                        <ClientesAdmin />

                    </ProtectedRoute>

                }

            />

            <Route

                path="/admin/documentos"

                element={

                    <ProtectedRoute>

                        <DocumentosAdmin />

                    </ProtectedRoute>

                }

            />

            <Route

                path="/admin/pecas"

                element={

                    <ProtectedRoute>

                        <PecasAdmin />

                    </ProtectedRoute>

                }

            />

            <Route

                path="/admin/pecas/:id"

                element={

                    <ProtectedRoute>

                        <PecaGerenciar />

                    </ProtectedRoute>

                }

            />

        </Routes>

    );

}

export default App;