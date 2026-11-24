# Ministerio Congregación Collico

App web gratuita para apoyar el trabajo del superintendente de servicio: disponibilidad de capitanes, puntos de encuentro, territorios, programa de predicación, registro S-13 y estadísticas.

- **Sitio:** https://ministerio-collico.vercel.app (se actualiza solo 1–2 minutos después de cada cambio en este repositorio).
- **Datos:** viven en una planilla de Google Sheets, conectada mediante Google Apps Script (`codigo-planilla.gs`). Este repositorio **no** contiene nombres ni datos de nadie.

## Qué hace cada sección

| Sección | Quién entra | Qué permite |
|---|---|---|
| Capitanes de Grupo | Todos (sin clave) | Elegir tu nombre y ofrecerte como capitán en el calendario |
| Ofrecimientos | Con usuario | Ver quién se ofreció y elegir capitán por horario |
| Puntos de encuentro | Con usuario | Lista de puntos (editar / borrar) |
| Territorios | Con usuario | Lista, registro S-13, exportar el formulario S-13 |
| Programa | Con usuario | Punto, capitán y territorios por horario; sábado y domingo con grupos; vista previa, PDF y compartir por WhatsApp |
| Estadísticas | Con usuario | Cuántas veces ha sido capitán cada persona |
| Acceso | — | Entrar / cerrar sesión / cambiar contraseña. El administrador crea usuarios y nombres |

## Usuarios

- El administrador entra con el usuario y la clave escritos en las dos primeras líneas de `codigo-planilla.gs`.
- Al crear un usuario nuevo, su contraseña provisoria es **12345678** y el sistema le pide cambiarla al entrar la primera vez. Conviene que cada persona entre y la cambie pronto.
- Después de 8 intentos fallidos, ese usuario queda bloqueado 10 minutos.
- Botón **Empezar de nuevo** (Acceso, solo administrador): borra ofrecimientos y programa y reinicia estadísticas. No borra nombres, usuarios, territorios, puntos ni el registro S-13.

## Registro S-13

1. En Territorios, el administrador importa los formularios S-13 (.docx) que ya tiene llenos.
2. En **Registro S-13** se marca con ✓ cada territorio que realmente se trabajó en un programa (o se agrega "otro territorio" si fue distinto).
3. **Descargar S-13** genera el formulario (`s13-plantilla.docx`) con las dos últimas asignaciones de cada territorio.

## Actualizar el Apps Script

Cuando cambie `codigo-planilla.gs`:

1. En la planilla: Extensiones → Apps Script. Reemplaza todo el código por el nuevo y **vuelve a poner el usuario y clave de administrador** en las dos primeras líneas.
2. Implementar → Administrar implementaciones → lápiz → Versión: **Nueva versión** → Implementar.

## Respaldo

Todo está en la planilla de Google. Para guardar una copia: Archivo → Descargar → Excel (.xlsx), de vez en cuando.

## Archivos

- `index.html`: toda la aplicación.
- `codigo-planilla.gs`: código del Apps Script (se pega en Google, no se usa aquí).
- `s13-plantilla.docx`: formulario S-13 en blanco usado para exportar.
- `manifest.webmanifest`, `sw.js`, `icon*.png/svg`: permiten instalar la app en el celular.
