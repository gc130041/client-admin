export const LoginForm = ({ onForgotPassword }) => {
    return (
        <form className="space-y-5">
            <div>
                {/* Cambié htmlFor por className ya que aquí van los estilos */}
                <label className="block text-sm font-medium text-gray-800 mb-1.5">
                    Email o Usuario
                </label>

                {/* Los inputs deben ser de una sola etiqueta con cierre /> */}
                <input 
                    type="text"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Contraseña
                </label>
                    
                <input 
                    type="password"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                />
            </div>

            {/* Agregamos la funcionalidad "¿Olvidaste tu contraseña?" */}
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline"
                >
                    ¿Olvidaste tu contraseña?
                </button>
            </div>

            <button 
                type="submit"
                className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
                Iniciar Sesión
            </button>
        </form>
    );
};