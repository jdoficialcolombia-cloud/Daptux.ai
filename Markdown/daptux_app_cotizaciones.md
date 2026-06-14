# Daptux QuoteFlow - App Interna de Cotizaciones

## 1. Objetivo del Proyecto

Crear una aplicación interna dentro de la página web de **Daptux.ai** para generar cotizaciones profesionales de software, páginas web, MVPs, SaaS y desarrollos a la medida.

La herramienta debe permitir que el equipo comercial o fundador pueda ingresar los datos básicos del cliente, seleccionar el tipo de solución, definir complejidad, usuarios, seguridad, infraestructura, integraciones y soporte, para obtener automáticamente una cotización estimada.

---

## 2. Nombre del Módulo

**Daptux QuoteFlow**

Módulo interno para cotizar proyectos digitales.

---

## 3. Usuarios del Sistema

### Administrador
- Crear y editar tarifas base.
- Configurar multiplicadores.
- Gestionar usuarios internos.
- Ver todas las cotizaciones.
- Aprobar cotizaciones antes de enviarlas.

### Comercial / Consultor
- Crear cotizaciones.
- Registrar clientes.
- Seleccionar servicios.
- Generar PDF.
- Enviar cotización al cliente.

### Desarrollador / Líder Técnico
- Revisar alcance técnico.
- Ajustar complejidad.
- Agregar observaciones técnicas.

---

## 4. Tipos de Servicios a Cotizar

La app debe permitir seleccionar uno o varios tipos de proyecto:

1. Página web corporativa.
2. Landing page.
3. Tienda virtual.
4. Software a la medida.
5. MVP SaaS.
6. App interna empresarial.
7. App de ganadería.
8. App para restaurantes.
9. App para hoteles.
10. App para clínicas.
11. App para inmobiliarias.
12. App para colegios.
13. Integraciones con APIs.
14. Automatizaciones con IA.
15. Mantenimiento y soporte.

---

## 5. Flujo Principal de la Cotización

### Paso 1: Datos del cliente

Campos:

- Nombre de la empresa.
- Nombre del contacto.
- Cargo.
- Teléfono.
- Correo.
- Ciudad.
- Sector empresarial.
- Fuente del cliente: referido, web, LinkedIn, llamada, WhatsApp, otro.

---

### Paso 2: Tipo de solución

Campos:

- Tipo de proyecto.
- Industria.
- Objetivo del software.
- Problema que quiere resolver.
- Número aproximado de usuarios.
- Número de sedes.
- Número de roles.

---

### Paso 3: Complejidad funcional

El sistema debe clasificar el proyecto en 4 niveles:

| Nivel | Descripción | Valor base sugerido |
|---|---|---:|
| Básico | Web simple o sistema pequeño | $2.000.000 - $8.000.000 COP |
| Medio | Sistema administrativo con login y CRUDs | $8.000.000 - $25.000.000 COP |
| Avanzado | Flujos, reportes, dashboards e integraciones | $25.000.000 - $80.000.000 COP |
| Empresarial | Alta seguridad, múltiples sedes, integraciones complejas | $80.000.000+ COP |

Campos para medir complejidad:

- Cantidad de módulos.
- Cantidad de formularios.
- Cantidad de reportes.
- Cantidad de dashboards.
- Cantidad de roles.
- Cantidad de integraciones.
- ¿Requiere carga masiva de datos?
- ¿Requiere generación de documentos?
- ¿Requiere firma digital?
- ¿Requiere pagos en línea?

---

## 6. Módulos Base por Tipo de Negocio

### 6.1 Daptux Web

Módulos:

- Inicio.
- Nosotros.
- Servicios.
- Portafolio.
- Blog.
- Contacto.
- Formulario web.
- Integración WhatsApp.
- SEO básico.
- Panel de administración.

Precio base sugerido:

- Landing page: desde $1.500.000 COP.
- Página web corporativa: desde $3.000.000 COP.
- Página web administrable: desde $5.000.000 COP.

---

### 6.2 Daptux Software a la Medida

Módulos comunes:

- Login.
- Roles y permisos.
- Dashboard.
- CRUD principal.
- Gestión documental.
- Estados del proceso.
- Reportes.
- Exportación Excel/PDF.
- Auditoría básica.

Precio base sugerido:

- Desde $12.000.000 COP.

---

### 6.3 Daptux Ganadería

Módulos MVP:

- Registro de animales.
- Fichas individuales.
- Control de peso.
- Vacunación.
- Historial médico.
- Producción de leche.
- Compras y ventas.
- Reportes por finca.
- Inventario de animales.

Precio base sugerido:

- Desde $15.000.000 COP.

---

### 6.4 Daptux Restaurant

Módulos MVP:

- Menú digital QR.
- Gestión de productos.
- Pedidos.
- Mesas.
- Caja.
- Inventario.
- Reporte de ventas.
- Usuarios y roles.

Precio base sugerido:

- Desde $10.000.000 COP.

---

### 6.5 Daptux Hotel

Módulos MVP:

- Gestión de habitaciones.
- Reservas.
- Check-in.
- Check-out.
- Clientes.
- Pagos.
- Estado de habitaciones.
- Reportes de ocupación.
- Dashboard general.

Precio base sugerido:

- Desde $18.000.000 COP.

---

### 6.6 Daptux Clinic

Módulos MVP:

- Pacientes.
- Agenda médica.
- Historia clínica básica.
- Citas.
- Facturación.
- Recordatorios.
- Reportes.

Precio base sugerido:

- Desde $20.000.000 COP.

---

### 6.7 Daptux Real Estate

Módulos MVP:

- Propiedades.
- Clientes.
- Agentes.
- Agenda de visitas.
- Contratos.
- Portal público.
- Reportes.

Precio base sugerido:

- Desde $14.000.000 COP.

---

## 7. Multiplicadores de Precio

### 7.1 Por cantidad de usuarios

| Usuarios | Multiplicador |
|---:|---:|
| 1 - 10 | x1.0 |
| 11 - 50 | x1.3 |
| 51 - 200 | x1.8 |
| 201 - 500 | x2.5 |
| 500+ | Cotización especial |

---

### 7.2 Por flujo de aprobación

| Flujo | Descripción | Valor adicional |
|---|---|---:|
| Simple | Un solo paso | $0 |
| Medio | 2 a 3 aprobaciones | $3.000.000 - $8.000.000 |
| Complejo | 4 o más aprobaciones | $10.000.000 - $30.000.000 |

---

### 7.3 Por nivel de seguridad

| Seguridad | Incluye | Valor adicional |
|---|---|---:|
| Básica | Login, roles, HTTPS | Incluido |
| Media | Auditoría, logs, recuperación de contraseña | $3.000.000 - $8.000.000 |
| Alta | MFA, trazabilidad avanzada, políticas de acceso | $8.000.000 - $20.000.000 |
| Corporativa | SSO, LDAP, Azure AD, VPN | $20.000.000+ |

---

### 7.4 Por integraciones

| Integración | Valor sugerido |
|---|---:|
| WhatsApp | $1.000.000 - $3.000.000 |
| Correo electrónico | $500.000 - $2.000.000 |
| Pasarela de pagos | $3.000.000 - $8.000.000 |
| Facturación electrónica | $5.000.000 - $15.000.000 |
| API externa simple | $2.000.000 - $8.000.000 |
| API externa compleja | $8.000.000 - $25.000.000 |
| SAP / Oracle / ERP | $20.000.000+ |

---

## 8. Infraestructura y Hosting

La app debe permitir seleccionar el tipo de infraestructura:

### Hosting básico

Para webs o sistemas pequeños.

- Valor mensual sugerido: $100.000 - $250.000 COP.

### VPS empresarial

Para sistemas con usuarios internos, backups y monitoreo.

- Valor mensual sugerido: $300.000 - $800.000 COP.

### Cloud escalable

Para SaaS, múltiples clientes o alto tráfico.

- Valor mensual sugerido: $800.000 - $2.500.000 COP.

### Infraestructura corporativa

Para alta disponibilidad, balanceadores, clusters y seguridad avanzada.

- Valor mensual sugerido: $2.500.000+ COP.

---

## 9. Memoria, Almacenamiento y Recursos Técnicos

Campos sugeridos:

- Número estimado de usuarios concurrentes.
- Cantidad de archivos mensuales.
- Tamaño promedio por archivo.
- Tiempo de retención de documentos.
- Espacio estimado en GB.
- Memoria RAM sugerida.
- CPU sugerida.
- Base de datos sugerida.

Tabla de referencia:

| Nivel | Usuarios concurrentes | RAM | CPU | Almacenamiento |
|---|---:|---:|---:|---:|
| Básico | 1 - 10 | 2 GB | 1 vCPU | 20 GB |
| Medio | 10 - 50 | 4 GB | 2 vCPU | 50 GB |
| Avanzado | 50 - 200 | 8 GB | 4 vCPU | 100 GB |
| Empresarial | 200+ | 16 GB+ | 8 vCPU+ | 250 GB+ |

---

## 10. Modelo de Cálculo

La app debe calcular:

```text
Precio total = 
Valor base del producto
x Multiplicador de usuarios
+ Valor por flujo
+ Valor por seguridad
+ Valor por integraciones
+ Valor por módulos adicionales
+ Valor por capacitación
+ Valor por documentación
+ Valor por margen comercial
```

También debe calcular el valor mensual:

```text
Mensualidad =
Hosting
+ Soporte
+ Backups
+ Monitoreo
+ Mantenimiento
+ Actualizaciones menores
```

---

## 11. Paquetes Comerciales Daptux

### Daptux Start

Para negocios pequeños.

Incluye:

- Hasta 10 usuarios.
- Funcionalidades básicas.
- Hosting básico.
- Soporte por WhatsApp.

Rango sugerido:

- Implementación: $3.000.000 - $10.000.000 COP.
- Mensualidad: $150.000 - $400.000 COP.

---

### Daptux Business

Para empresas en crecimiento.

Incluye:

- Hasta 50 usuarios.
- Dashboard.
- Reportes.
- Roles.
- Backups.
- Soporte prioritario.

Rango sugerido:

- Implementación: $12.000.000 - $40.000.000 COP.
- Mensualidad: $400.000 - $1.500.000 COP.

---

### Daptux Enterprise

Para empresas grandes.

Incluye:

- Usuarios avanzados.
- Integraciones.
- Seguridad alta.
- Auditoría.
- Infraestructura dedicada.
- Soporte especializado.

Rango sugerido:

- Implementación: desde $50.000.000 COP.
- Mensualidad: desde $1.500.000 COP.

---

## 12. Estados de una Cotización

La cotización debe manejar estados:

1. Borrador.
2. En revisión técnica.
3. Aprobada internamente.
4. Enviada al cliente.
5. En negociación.
6. Aceptada.
7. Rechazada.
8. Vencida.

---

## 13. Funcionalidades del Sistema

### Módulo de clientes

- Crear cliente.
- Editar cliente.
- Historial de cotizaciones.
- Datos de contacto.

### Módulo de cotizaciones

- Crear cotización.
- Seleccionar plantilla.
- Calcular precio automáticamente.
- Editar valores manualmente.
- Agregar descuentos.
- Agregar impuestos.
- Definir vigencia.
- Generar PDF.
- Enviar por correo.

### Módulo de tarifas

- Configurar precios base.
- Configurar multiplicadores.
- Configurar valores de integraciones.
- Configurar valores de hosting.
- Configurar valores de soporte.

### Módulo de usuarios internos

- Crear usuarios.
- Asignar roles.
- Permisos por módulo.

### Módulo de reportes

- Cotizaciones creadas.
- Cotizaciones ganadas.
- Cotizaciones perdidas.
- Valor potencial de ventas.
- Clientes por industria.
- Servicios más cotizados.

---

## 14. Campos Principales de la Cotización

```text
id
codigo_cotizacion
cliente_id
usuario_creador_id
tipo_proyecto
industria
cantidad_usuarios
cantidad_sedes
nivel_complejidad
nivel_seguridad
tipo_infraestructura
valor_base
valor_usuarios
valor_flujo
valor_seguridad
valor_integraciones
valor_modulos_adicionales
valor_capacitacion
valor_documentacion
descuento
impuestos
valor_total
valor_mensual
estado
fecha_creacion
fecha_vencimiento
observaciones
```

---

## 15. Tablas Sugeridas Base de Datos

### clients

```sql
id
company_name
contact_name
position
email
phone
city
industry
source
created_at
updated_at
```

### quotes

```sql
id
quote_code
client_id
created_by
project_type
industry
users_count
branches_count
complexity_level
security_level
infrastructure_type
base_price
users_multiplier
workflow_price
security_price
integrations_price
extra_modules_price
training_price
documentation_price
discount_value
tax_value
total_price
monthly_price
status
valid_until
notes
created_at
updated_at
```

### quote_items

```sql
id
quote_id
item_type
description
quantity
unit_price
total_price
created_at
updated_at
```

### pricing_rules

```sql
id
rule_type
name
min_value
max_value
multiplier
fixed_price
is_active
created_at
updated_at
```

### service_templates

```sql
id
name
industry
base_price
description
is_active
created_at
updated_at
```

### users

```sql
id
name
email
password
role
status
created_at
updated_at
```

---

## 16. Pantallas Necesarias

### Dashboard

Debe mostrar:

- Total cotizado este mes.
- Cotizaciones ganadas.
- Cotizaciones pendientes.
- Cotizaciones rechazadas.
- Servicios más cotizados.

### Crear cotización

Formulario paso a paso:

1. Cliente.
2. Tipo de proyecto.
3. Módulos.
4. Usuarios y sedes.
5. Seguridad.
6. Infraestructura.
7. Integraciones.
8. Soporte mensual.
9. Resumen final.

### Vista detalle de cotización

Debe mostrar:

- Datos del cliente.
- Alcance funcional.
- Valores detallados.
- Valor total.
- Valor mensual.
- Estado.
- Botón generar PDF.
- Botón enviar correo.

### Configuración de tarifas

Debe permitir editar:

- Precios base.
- Multiplicadores.
- Integraciones.
- Hosting.
- Soporte.
- Seguridad.

---

## 17. Diseño del PDF de Cotización

El PDF debe contener:

1. Logo Daptux.
2. Código de cotización.
3. Datos del cliente.
4. Fecha.
5. Vigencia.
6. Descripción del proyecto.
7. Alcance incluido.
8. Alcance no incluido.
9. Tabla de valores.
10. Valor total.
11. Valor mensual.
12. Tiempo estimado de entrega.
13. Forma de pago.
14. Condiciones comerciales.
15. Firma o datos de contacto de Daptux.

---

## 18. Forma de Pago Recomendada

Para proyectos a medida:

- 40% anticipo.
- 30% entrega MVP.
- 20% pruebas y ajustes.
- 10% entrega final.

Para páginas web:

- 50% anticipo.
- 50% entrega final.

Para SaaS:

- Setup inicial.
- Mensualidad recurrente.

---

## 19. Reglas Comerciales

- Ninguna cotización debe tener vigencia mayor a 15 días sin aprobación.
- Todo desarrollo adicional se cotiza como cambio de alcance.
- El hosting y soporte se cobran mensualmente.
- El código fuente se entrega solo si está definido en contrato.
- Las integraciones con terceros dependen de disponibilidad de APIs externas.
- Los tiempos de entrega inician después del anticipo y entrega de información del cliente.

---

## 20. Recomendación Técnica

Como Daptux trabaja con PHP/JS, se recomienda iniciar con:

### Backend

- PHP 8+
- Laravel o PHP MVC propio
- MySQL

### Frontend

- HTML
- CSS
- JavaScript
- Bootstrap o Tailwind CSS

### Librerías sugeridas

- DomPDF o Snappy PDF para generar cotizaciones.
- PHPMailer o SMTP para envío de correos.
- Chart.js para dashboards.
- DataTables para tablas administrativas.

---

## 21. MVP Inicial Recomendado

La primera versión debe incluir solo:

1. Login interno.
2. Crear clientes.
3. Crear cotizaciones.
4. Calcular precio automático.
5. Editar precio manualmente.
6. Generar PDF.
7. Ver historial de cotizaciones.
8. Configurar tarifas base.

---

## 22. Roadmap

### Fase 1 - MVP Interno

- Login.
- Clientes.
- Cotizaciones.
- Cálculo automático.
- PDF.

### Fase 2 - Gestión Comercial

- Estados de cotización.
- Envío por correo.
- Dashboard comercial.
- Reportes.

### Fase 3 - Automatización

- Plantillas por industria.
- Recomendación automática de precios.
- IA para generar alcance del proyecto.
- IA para redactar propuesta comercial.

### Fase 4 - Portal Cliente

- Cliente puede ver cotización.
- Cliente puede aprobar.
- Firma digital.
- Pago inicial en línea.

---

## 23. Resultado Esperado

Daptux QuoteFlow debe convertirse en una herramienta interna estratégica para vender software de forma más profesional, rápida y organizada.

La app debe ayudar a:

- Estandarizar precios.
- Evitar cotizar barato.
- Reducir errores comerciales.
- Mejorar la presentación al cliente.
- Crear propuestas más rápidas.
- Medir oportunidades de venta.
- Convertir servicios en productos reutilizables.

---

## 24. Frase Comercial Interna

> En Daptux no cotizamos horas, cotizamos soluciones que ahorran tiempo, reducen errores y transforman procesos empresariales.
