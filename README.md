# Analítica Express - Frontend (Angular)

![Angular](https://img.shields.io/badge/Angular-17.x-red.svg) <!-- AJUSTA TU VERSIÓN DE ANGULAR -->
![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple.svg)
![PrimeNG](https://img.shields.io/badge/PrimeNG%20Toast-orange.svg)

Este es el componente frontend de la aplicación Analítica Express, desarrollado con Angular. Proporciona la interfaz de usuario para interactuar con el backend, permitiendo a los usuarios registrarse, iniciar sesión, gestionar datos y visualizar información según sus roles.

**Proyecto realizado por:** Ángela Ruiz Rivas
**Curso:** 2025 DAW - EUROFORMAC FP

**Repositorio Backend:** [Enlace a repositorio del Backend](https://github.com/Anpidev/TFG/) 
---

## Tabla de Contenidos

1.  [Descripción del Proyecto](#descripción-del-proyecto)
2.  [Funcionalidades Principales](#funcionalidades-principales)
3.  [Tecnologías Utilizadas](#tecnologías-utilizadas)
4.  [Estructura del Proyecto Frontend](#estructura-del-proyecto-frontend)
5.  [Configuración y Puesta en Marcha](#configuración-y-puesta-en-marcha)
    *   [Prerrequisitos](#prerrequisitos)
    *   [Instalación y Ejecución](#instalación-y-ejecución)
6.  [Comandos Útiles de Angular CLI](#comandos-útiles-de-angular-cli)
    *   [Servidor de Desarrollo](#servidor-de-desarrollo)
    *   [Generación de Código](#generación-de-código)
    *   [Compilación (Build)](#compilación-build)
    *   [Ejecución de Pruebas Unitarias](#ejecución-de-pruebas-unitarias)
    *   [Ejecución de Pruebas End-to-End](#ejecución-de-pruebas-end-to-end)
7.  [Comunicación con el Backend](#comunicación-con-el-backend)
8.  [Seguridad en el Frontend](#seguridad-en-el-frontend)
9.  [Recursos Adicionales](#recursos-adicionales)

---

## 1. Descripción del Proyecto
Este proyecto es la interfaz de usuario de "Analítica Express", una aplicación web diseñada para la solicitud y gestión eficiente de análisis clínicos. Permite a profesionales de la salud interactuar con las funcionalidades ofrecidas por el [Backend de Analítica Express](https://github.com/Anpidev/TFG). 

## 2. Funcionalidades Principales
*   Interfaz de usuario para registro e inicio de sesión.
*   Navegación protegida por roles.
*   Formularios para la creación de nuevas analíticas, pacientes y médicos.
*   Listados para visualizar analíticas, pacientes y médicos existentes, con opción de borrado (restringido por rol).
*   Formulario para actualizar el estado de las analíticas.
*   Diseño responsivo utilizando Bootstrap.
*   Notificaciones al usuario (Toasts) mediante PrimeNG.

## 3. Tecnologías Utilizadas
*   Angular 17.x <!-- AJUSTA TU VERSIÓN ESPECÍFICA, ej: 17.3.0 -->
*   TypeScript
*   HTML5, CSS3
*   Bootstrap 5 (para estilos y componentes UI)
*   PrimeNG (específicamente para `MessageService` y Toasts)
*   RxJS (para programación reactiva y manejo de observables)
*   Angular CLI

## 4. Estructura del Proyecto Frontend
Localizado en la carpeta actual.

*   **`src/app`**:
    *   **`auth`**: Componentes para login (`auth.component.ts/.html`) y registro (`register.component.ts/.html`).
    *   **`component`**: Componentes principales de la aplicación.
        *   `home/home.component.ts/.html`: Página principal post-login.
        *   `formulario-analitica/formulario-analitica.component.ts/.html`
        *   `formulario-estado/formulario-estado.component.ts/.html`
        *   `formulario-medico/formulario-medico.component.ts/.html`
        *   `formulario-paciente/formulario-paciente.component.ts/.html`
        *   `lista-analiticas/lista-analticas.component.ts/.html` <!-- Revisa si el nombre de archivo es 'lista-analiticas' o 'lista-analticas' -->
        *   `lista-medicos/lista-medico.component.ts/.html`
        *   `lista-pacientes/lista-paciente.component.ts/.html`
    *   **`guards`**: Route Guards para proteger rutas según roles (`role.guard.ts`).
    *   **`interceptors`**: Interceptores HTTP para manejo global de errores (`interceptor.interceptor.ts`).
    *   **`models`**: Clases y enums que definen la estructura de los datos (`analitica.ts`, `paciente.ts`, `medico.ts`, `usuario.ts`, `estado-analitica.ts`, `parametros.ts`, `roles.ts`).
    *   **`services`**: Servicios para la comunicación con el backend (`analitica.service.ts`, `auth.service.ts`) y utilidades (`toast.service.ts`).
    *   **`app.config.ts`**: Configuración principal de la aplicación (proveedores de `HttpClient`, `MessageService`, Interceptor).
    *   **`app.routes.ts`**: Definición de las rutas de la aplicación y sus guards, usando lazy loading.
    *   **`app.component.html`**: Plantilla raíz con `<router-outlet>`.
*   **`src/assets`**: Recursos estáticos como imágenes (ej. `logo.svg`).
*   **`src/index.html`**: Punto de entrada principal HTML, donde se carga Bootstrap globalmente.
*   **`angular.json`**: Configuración del workspace y proyecto Angular.
*   **`package.json`**: Lista de dependencias y scripts del proyecto.

## 5. Configuración y Puesta en Marcha

### Prerrequisitos

*   Node.js (con npm) versión compatible con tu versión de Angular (generalmente LTS, ej. Node 18.x o 20.x para Angular 17).
*   Angular CLI instalado globalmente: `npm install -g @angular/cli` (si aún no lo tienes).
*   El backend de Analítica Express debe estar ejecutándose (ver README del backend).

### Instalación y Ejecución

1.  Asegúrate de estar en el directorio raíz de este proyecto frontend.
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Ejecutar la aplicación Angular en modo desarrollo:
    ```bash
    ng serve -o
    ```
    o simplemente `ng serve` y luego abre tu navegador en `http://localhost:4200/`.
    La aplicación se recargará automáticamente si modificas algún archivo fuente.

## 6. Comandos Útiles de Angular CLI

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) (la versión que usaste, ej. 17.x.x).

### Servidor de Desarrollo

Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

### Generación de Código

Ejecuta `ng generate component nombre-del-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Para una lista completa de esquemas disponibles (como componentes, directivas o pipes), ejecuta:
```bash
ng generate --help
