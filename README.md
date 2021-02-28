# Ejemplo básico de TypeScript

## Pasos a seguir
1. Instalar Node JS adecuado a tu sistema
2. Añadir el soporte a Typescript `npm install -g typescript`
3. Crear fichero *tsconfig.json*

## Crear fichero tsconfig.json
Se puede crear el fichero compilado a mano con el comando en el terminal `tsc --target ES2015 --outDir js basic.ts`

Pero es mejor utilizar un fichero de configuración que se puede crear con el comando `tsc --init` que genera el fichero **tsconfig.ts**. Opciones modicadas:
- **target**: versión de Javascript (ES2015)
- **outDir**: indica el directorio de salida de los ficheros Javascript
- **noUnusedLocals**: muestra las variables no utilizadas
- **module**: "es2015", la forma elegida para trabajar con módulos

## Compilar fichero Javascript
Desde el terminal, comando `tsc` que buscará todos los ficheros TypeScript de forma recursiva y los compilará con la configuración indicada en el fichero *tsconfig.json*