# Copilot Instructions for AI Coding Agents

## Visión general del proyecto
Este repositorio contiene ejemplos y ejercicios de Node.js organizados en tres carpetas principales:
- `01-hola-mundo/`: Ejemplos básicos de Node.js para familiarizarse con la sintaxis y ejecución.
- `02-fundamentos/`: Ejercicios que cubren conceptos fundamentales de JavaScript y Node.js, como callbacks, promesas, async/await, desestructuración y funciones flecha.
- `03-bases-node/`: Ejemplo más avanzado que suele ser el punto de partida para proyectos Node.js más completos.

## Convenciones y patrones clave
- Cada archivo representa un ejemplo o ejercicio independiente. No hay dependencias cruzadas entre archivos.
- El código está orientado a la enseñanza, por lo que prioriza la claridad sobre la optimización.
- Los nombres de archivos reflejan el concepto que se aborda (por ejemplo, `callback-hell.js` muestra el patrón callback hell).
- No existe una estructura de módulos ni uso de frameworks externos; todo es JavaScript puro para Node.js.

## Flujos de trabajo de desarrollo
- Para ejecutar cualquier ejemplo, usa el comando:
  ```pwsh
  node <ruta/al/archivo.js>
  ```
  Ejemplo:
  ```pwsh
  node 02-fundamentos/promesas.js
  ```
- No hay scripts de build, pruebas automatizadas ni dependencias externas.
- No se requiere instalación de paquetes adicionales; solo Node.js.

## Integraciones y dependencias
- El proyecto no utiliza paquetes externos ni archivos de configuración como `package.json`.
- No hay integración con bases de datos, APIs externas ni servicios de terceros.

## Ejemplo de patrón recurrente
- Uso de callbacks y promesas para manejar asincronía:
  - Ver `02-fundamentos/callback.js`, `02-fundamentos/promesas.js`, y `02-fundamentos/Async-Await.js`.
- Desestructuración y funciones flecha para simplificar el código:
  - Ver `02-fundamentos/desestructuracion.js` y `02-fundamentos/flecha.js`.

## Recomendaciones para agentes AI
- Prioriza la claridad y la explicación en el código generado.
- Si agregas nuevos ejemplos, sigue la convención de nombrar el archivo según el concepto y colócalo en la carpeta correspondiente.
- No agregues dependencias externas ni scripts de automatización a menos que el usuario lo solicite explícitamente.

## Archivos clave
- Todos los archivos `.js` en las carpetas principales son relevantes y pueden servir como referencia para patrones y convenciones.

---
¿Hay alguna sección que requiera mayor detalle o alguna convención específica que deba documentarse mejor?