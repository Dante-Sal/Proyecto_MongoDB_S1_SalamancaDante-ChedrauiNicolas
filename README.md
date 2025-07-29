<h1 align=center>Base de Datos (DB) SISTEMA HOSPITALARIO</h1>

<h6 align=center>Proyecto MongoDB: (Dante Salamanca Galvis & Nicolás Chedraui Mantilla)</h6>

<br>

<h3 align=center>Introducción</h3>

A continuación se documenta minuciosamente el proceso que se siguió para ejecutar la elaboración de la base de datos solicitada para un sistema hospitalario enfocado en Bucaramanga y la zona metropolitana de Bucaramanga, implementando modelo conceptual, lógico y finalmente físico (otorgándole especial énfasis al proceso de normalización hasta la 3ra Forma Normal que se debe llevar a cabo entre estas últimas dos fases).

Se documenta cada parte del proceso, describiendo el flujo de trabajo lógico que se desarrolló, así como diagramas que muestran detalladamente los avances realizados en cada etapa del desarrollo de la BBDD, las entidades que derivaron de los requerimientos solicitados por el cliente y las relaciones entre estas (definiendo concretamente las cardinalidades que moldean estas relaciones: 1:1 / 1:N / N:M).

Finalmente, se realizan inserciones de datos dentro de nuestro sistema, se crean usuarios con diferentes permisos de acceso a la base de datos; ejecutando pruebas, como última medida, a través de consultas y funciones dentro de la BBDD que permitan a quienes tengan acceso a ella el poder manipular la forma en la que la información se presenta, pudiendo realizar diferentes tipos de filtrado de datos, entre otros tipos de consultas.

<br>

<h3 align=center>Caso de Estudio</h3>

El caso de estudio que dio origen a esta base de datos se centró, como se mencionó anteriormente, en el desarrollo de un modelo de datos para un sistema de aplicaciones de bases de datos para un sistema hospitalario o de salud alojado en la zona metropolitana de Bucaramanga, Colombia.

La tienda solicitaba una base de datos robusta que permitiera almacenar distintos tipos de información relacionada con las áreas que el sistema de salud deseaba cubrir. El cliente requería no sólo un sistema que almacenara datos sobre los pacientes, tratamientos, médicos, hospitales o administradores encargados de gestionar parte importante de cada hospital, sino también una estructura específica para el modelo de datos.

Por un lado, se necesitaba que los empleados de cada hospital estuvieran diferenciados en cinco tipos o roles: directores generales (bajo el cargo de estos se hallan uno o más hospitales por director; pero hay que tener en cuenta que cada hospital sólo podía ser asignado a un único dirigente), médicos, personal administrativo, personal de mantenimiento y enfermeros.

Algunas de las posibles entidades que surgieron a partir de los requerimientos ya poseían una estructura determinada por el cliente, o simplemente una base o esquema inicial sobre el cuál se podían empezar a realizar múltiples cambios a conveniencia del mantenimiento y mejor estructuración de la BBDD.

Hospitales, pacientes, historias clínicas, médicos, tratamientos, medicamentos y visitas médicas ya poseían unos atributos fijos definidos por el cliente, aunque estos en el futuro se pudieron llegar a normalizar, separándolos en colecciones diferenciadas. Además, hay que tener en cuenta que se consideró la posibilidad de crear nuevos atributos, diferentes a los ya especificados para generar un sistema más robusto.

Se especifican también relaciones entre directores generales y hospitales, así como relaciones entre pacientes y visitas médicas (un mismo paciente puede solicitar múltiples visitas, pero cada visita está asociada a un único paciente). Las demás relaciones se tendrán que deducir por lógica y siguiendo la estructura y contexto en el que se desarrolla la base de datos.

Dado que el sistema está enfocado en Bucaramanga y su zona metropolitana, los datos ingresados, la cantidad de estos y los formatos que se definirán a través de `$jsonSchema` serán coherentes con dicho contexto, estableciendo una conexión con la realidad que representa la BBDD.

<br>

<h3 align=center>Planificación</h3>

<br>

<h4 align=center>Construcción del Modelo Conceptual</h4>

A partir de este caso de estudio, se inició por desarrollar lo que vendría siendo el primer modelo/prototipo de base de datos (en esencia, el modelo conceptual de esta). Este se basa en determinar, como primera medida, las entidades que harán parte de la BBDD, para posteriormente establecer atributos para cada una de estas y las relaciones entre entidad y entidad, especificando las cardinalidades de estas relaciones. 

Este modelo se elaboró de una forma muy rudimentaria, estableciendo las bases para futuros modelos (lógico / físico) de forma que se proporcionó una estructura sobre la cual se pudo trabajar en las siguientes tres fases del desarrollo de este modelo de datos para el sistema de aplicaciones de bases de datos.

<h4 align=center>Descripción</h4>

A grandes rasgos, lo que se determinó en esta primera fase fueron las entidades principales a trabajar (aquí no están plasmadas todas las entidades que se trabajaron, ya que tras el proceso de normalización se añadieron más de estas).

Estas entidades principales fueron `dir_generales`, `hospitales`, `enfermeros`, `per_mantenimiento`, `per_admin`, `hist_clinicas`, `pacientes`, `medicos`, `medicamentos`, `visitas_medicas` y `tratamientos`.

Los atributos que se definieron en esta primera etapa se establecieron a un nivel relativamente superficial, ya que no se tiene información detallada sobre cada entidad (solamente la estrictamente necesaria y solicitada por los requerimientos).

<h4 align=center>Gráfica</h4>

![Modelo Conceptual](modelo_conceptual.jpg)

<h4 align=center>Descripción Técnica</h4>

Teniendo en cuenta el funcionamiento, más a profundidad, de la lógica detrás de este primer esbozo de la futura base de datos, podríamos desglosar más en detalle cada entidad y su relación con sus adyacentes.

Si nos centramos en el apartado de empleados, podemos observar como los diferentes roles especificados en los requerimientos se trabajaron como entidades separadas, asociadas todas a la entidad `hospital`, que tiene una referencia hacia su director general (dado que siempre es más recomentable que el N en una cardinalidad 1:N, sea el que posea la llave foránea). Cada tipo de empleado posee información muy similar en sus respectivas colecciones, aunque cada uno posee algo distintivo que lo hace resaltar y que genera la separación de una entidad a otra (en lugar de colocar todos los tipos como una entidad `personal` o `empleados`, con un atributo `rol`).

En un principio se establecieron relaciones que llevaban a dependecias transitivas redundantes, como por ejemplo, entre visitas médicas e historias clínicas (ya se hallan indirectamente conectados a través de la entidad intermedia `paciente`); pero estos errores se corregirían con el tiempo, gracias a la normalización. Además, no se consideró hasta esta etapa la posibilidad de incluir un inventario que realizara un conteo sistemático de los medicamentos en cada hospital, lo que más tarde generaría incongruencias que tendrían que ser mitigadas.

También cabe resaltar que en este punto y hasta la ejecución de la normalización hasta la segunda forma, habría una gran cantidad de relaciones muchos a muchos (cardinalidad N:M) que, si bien **MongoDB** lo permite, no facilita el buen y más eficaz manejo del sistema de bases de datos en el presente y a futuro. Entre estas relaciones hallamos la que se establece entre visitas médicas y diagnósticos o entre visitas médicas y tratamientos. Esto surge debido a que, por ejemplo, en el primer caso, una visita médica puede dar lugar a muchos diagnósticos; pero simultáneamente, un mismo diagnóstico puede ser asignado en múltiples citas con diferentes pacientes o médicos.

En resumen, este se trata de un modelo muy primitivo de la BBDD, que si bien facilita el bosquejo de una base o esqueleto para empezar a trabajar en la optimización de nuestro sistema, es muy poco eficiente y de implementarse, propiciaría un manejo de datos poco sostenible a lo largo del tiempo.

<br>

<h4 align=center>Construcción del Modelo Lógico</h4>

Una vez finalizado el modelo conceptual, se dio comienzo al proceso de establecimiento de un modelo lógico mejor estructurado en tablas (entidades) con columnas (atributos) y el tipo de dato para cada una de estas (string, int, decimal, etc.), así como determinadas características para determinadas columnas (primary key [PK] / foreign key [FK]).

<h4 align=center>Descripción</h4>

Si bien en esta etapa de la creación del sistema de datos aún no se tiene una claridad total de todas las entidades necesarias o de todas las relaciones posibles o desgloses que puedan surgir de atributos no lo suficientemente indivisibles o relacionados con las tablas a las cuales pertenecen; en este punto se pueden definir mejoras a ejecutar en el modelo que llegado a este momento se pueden identificar fácilmente.

Si bien antes ya se tenía una relación aproximada entre las colecciones, no se tenía una certeza completa de cómo se conectarían estas, unas con otras. Ahora se conoce, gracias a la asignación de tipos de datos (que se representarán en el modelo físico como un `bsonType`, dentro del `$jsonSchema`), que los ids que permitirán el `$lookup` entre tablas relacionadas serán enteros.

Básicamente, en este etapa no se realizan reestructuraciones de la base de datos, sino simplemente se transfiere el *Modelo Conceptual* a un esquema visual más limpio y específico con tipos de datos y llaves primarias y foráneas más explícitas.

<h4 align=center>Gráfica</h4>

```mermaid
erDiagram
    dir_generales {
        int _id PK
        string nombre
        string tel
        string correo_el
        string num_lic_gestion
        decimal salario
    }

    hospitales {
        int _id PK
        string nombre
        string direccion
        string tel
        array areas_especializadas
        int _id_dir_general FK
    }

    enfermeros {
        int _id PK
        string nombre
        string tel
        string correo_el
        decimal salario
        int id_hospital FK
    }

    per_admin {
        int _id PK
        string nombre
        string tel
        string correo_el
        string cargo
        string area_resp
        decimal salario
        int id_hospital FK
    }

    per_mantenimiento {
        int _id PK
        string nombre
        string tel
        string correo_el
        string cargo
        string area_resp
        decimal salario
        int id_hospital FK
    }

    medicos {
        int _id PK
        string num_colegiatura
        string nombre
        array especialidades
        string tel
        string correo_tel
        decimal salario
        int id_hospital FK
    }

    pacientes {
        int _id PK
        int id_hist_clinica FK
        string num_hc
        string nombre
        string direccion
        string tel
        string correo_el
        array seguros
    }

    hist_clinicas {
        int _id PK
        string num_hc
        date fecha_creacion
        array alergias
        array ant_personales
        array ant_familiares
        date ult_actualizacion
    }

    visitas_medicas {
        int _id PK
        date fecha_hora
        int id_medico FK
        int id_paciente FK
        int id_hist_clinica FK
        array diagnosticos
        array tratamientos FK
        array medicamentos_recetados FK
        string evolucion
        array resultados
    }

    medicamentos {
        int _id PK
        string nombre
        string fabricante
        string tipo
    }

    tratamientos {
        int _id PK
        string nombre
        string descripcion
        string area_med
        decimal costo
    }

    inventarios_medicamentos {
        int _id PK
        int id_hospital FK
        int id_medicamento FK
        int cant_disp
    }

    dir_generales ||--o{ hospitales : gestionan
    hospitales ||--o{ enfermeros : tienen
    hospitales ||--o{ per_admin : tienen
    hospitales ||--o{ per_mantenimiento : tienen
    hospitales ||--o{ medicos : tienen
    hospitales ||--o{ pacientes : tienen
    hist_clinicas ||..|| pacientes : tienen
    hist_clinicas ||--o{ visitas_medicas : tienen_registradas
    pacientes ||--o{ visitas_medicas : realizan
    medicos ||--o{ visitas_medicas : atienden
    visitas_medicas ||--o{ medicamentos : recetan
    visitas_medicas ||--o{ tratamientos : asignan
    medicamentos ||--o{ inventarios_medicamentos : "se almacenan en"
    hospitales ||--o{ inventarios_medicamentos : tienen
```

<h4 align=center>Descripción Técnica</h4>

Una vez definido una base suficientemente sólida o alineada a los requerimientos solicitados por el usuario originalmente, se puede proceder a la siguiente fase: el *Modelo Conceptual*.

Aquí se definirán los tipos de datos de múltiples atributos, buscando siempre el formato que facilite más el correcto funcionamiento de la BBDD. 

Datos como el número de teléfono o el número de colegiatura (`medicos`) no se almacenarán como números, sino como cadenas de texto (debido a que no se realizarán operaciones con ellos y permite, como adicional, realizar operaciones con *regex*).

Por otra parte, se tiene en cuenta que si cierta información debe contener letras, como por ejemplo lo sería el número de licencia de gestión de los directores generales (su formato exige una combinación de letras y números), se tiene que guardar obligatoriamente como cadena de texto o `string`.

Los precios o datos monetarios (salarios, por ejemplo), se recomiendan almacenar como decimales, tomando como razón que (si bien en Colombia no suele aplicar), si la base de datos se amplía, podría requerir de precios con cifras decimales (aunque probablemente, también requerría de la agregación de un nuevo campo `moneda`, para indicar la unidad monetaria que se usa para medir dicho precio/salario).

Como último apunte antes de pasar al proceso de normalización del sistema que se lleva hasta el momento, se consideró en este punto del proceso la generación de una nueva entidad que almacenara las cantidades disponibles de cada medicamento por cada establecimiento clínico.

Así, tomando el siguiente requerimiento en mente:

```
- Cálculo de inventarios de medicamentos por hospital.
```

Se analizó que al poseer un simple atributo `cant_disponible` en cada medicamento, no sería posible realizar una búsqueda minuciosa de las medicinas disponibles, puesto que no se especificaría cuántas unidades restan de cada medicamento en cada hospital, sino cuántas restan en general (en todo el sistema hospitalario).

Así, se ejecutó la agregación de esta nueva actualización al modelo estructurado de datos, empleando esta nueva entidad como intermediaria entre las entidades `hospitales` y `medicamentos` (facilitando que exista un inventario por cada combinación posible de todos los hospitales con medicamentos existentes).

<br>

<h3 align=center>Normalización del Modelo Lógico</h3>

<br>

<h4 align=center>Primera Forma Normal (1FN)</h4>

En esta primera fase de la normalización del modelo lógico se solicita que todos los atributos existentes dentro de las tablas sean lo más indivisibles posible (en otras palabras, que sean valores atómicos). No se admiten atributos que puedan almacenar múltiples valores o datos que sean subdivisibles como múltiples números de teléfono, direcciones o nombres.

<h4 align=center>Descripción</h4>

La primera forma normal solicita que no existan datos con atributos divisibles dentro del sistema, por lo que se decidió ejecutar un desglose de las columnas direccion, nombre, junto con la creación de múltiples tablas que cumplen el rol de puente entre diferentes colecciones (generando relaciones con cardinalidad N:M entre estas dos entidades). 

Esta última decisión de estructuración se tomó para suprimir de múltiples entidades, como visitas médicas o historias clínicas, atributos con información relacionada, aunque no directamente, con estas; trasladándose estos a nuevas tablas generadas o a las entidades ya creadas que se hayan considerado verdaderas colecciones padres de estos, según sea el caso.

<h4 align=center>Gráfica</h4>

```mermaid
erDiagram
    hospitales {
        int _id PK
        string nombre
        string via_principal_tipo
        string via_principal_numero
        string via_principal_letra
        string via_principal_bis
        string via_generadora_numero
        string via_generadora_letra
        string via_generadora_bis
        string placa
        string barrio
        string municipio
        string tel
        int id_dir_general FK
    }

    dir_generales {
        int _id PK
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        string num_lic_gestion
        decimal salario
    }

    hospitales_areas_especializadas {
        int _id PK
        int id_hospital FK
        int id_area_especializada FK
    }

    areas_especializadas {
        int _id PK
        string nombre
    }

    medicos {
        int _id PK
        string num_colegiatura
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        string num_lic_gestion
        decimal salario
        int id_hospital FK    
    }

    especialidades {
        int _id PK
        string nombre
    }

    medicos_especialidades {
        int _id PK
        int id_medico FK
        int id_especialidad FK
    }

    enfermeros {
        int _id PK
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        decimal salario
        int id_hospital FK
    }

    per_admin {
        int _id PK
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        string cargo
        string area_resp
        decimal salario
        int id_hospital FK
    }

    per_mantenimiento {
        int _id PK
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        string tipo_trabajo
        decimal salario
        int id_hospital FK
    }

    pacientes {
        int _id PK
        int id_hist_clinica FK
        string num_hc
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string via_principal_tipo
        string via_principal_numero
        string via_principal_letra
        string via_principal_bis
        string via_generadora_numero
        string via_generadora_letra
        string via_generadora_bis
        string placa
        string barrio
        string municipio
        string tel
        string correo_el
    }

    pacientes_seguros {
        int _id PK
        int id_paciente FK
        int id_seguro FK
    }

    seguros {
        int _id PK
        string nombre
        string tipo
        string num_poliza
        bool activo
    }

    alergias {
        int _id PK
        string nombre
    }

    hist_clinicas {
        int _id PK
        string num_hc
        date fecha_creacion
        date fecha_actualizacion
    }

    hist_clinicas_alergias {
        int _id PK
        int id_hist_clinica FK
        int id_alergia FK
    }

    hist_clinicas_ant_personales {
        int _id PK
        int id_hist_clinica FK
        int id_ant_personal FK 
    }

    hist_clinicas_ant_familiares {
        int _id PK
        int id_hist_clinica FK
        int id_ant_familiar FK 
    }

    ant_personales {
        int _id PK
        string description
    }

    ant_familiares {
        int _id PK
        string description
    }

    medicamentos {
        int _id PK
        string nombre
        string fabricante
        string tipo
    }

    diagnosticos {
        int _id PK
        string description
    }

    visitas_medicas {
        int _id PK
        date fecha_hora
        string medico
        string num_hc
        string evolucion
    }

    visitas_medicas_medicamentos {
        int _id PK
        int id_visita_medica FK
        int id_medicamento FK
    }

    visitas_medicas_diagnosticos {
        int _id PK
        int id_visita_medica FK
        int id_diagnostico FK
    }

    visitas_medicas_resultados {
        int _id PK
        int id_visita_medica FK
        int id_resultado FK
    }

    visitas_medicas_tratamientos {
        int _id PK
        int id_visita_medica FK
        int id_tratamiento FK
    }

    tratamientos {
        int _id PK
        string nombre
        string descripcion
        string area_med
        decimal costo
    }

    resultados {
        int _id PK
        string descripcion
    }

    inventarios_medicamentos {
        int _id PK
        int id_hospital FK
        int id_medicamento FK
        int cant_disp
    }

    hospitales ||--o{ medicos : tienen
    hospitales ||--o{ pacientes : tienen
    pacientes ||--|| hist_clinicas : tienen
    hospitales ||--o{ enfermeros : tienen
    hospitales ||--o{ per_admin : tienen
    hospitales ||--o{ per_mantenimiento : tienen
    hospitales ||..o{ inventarios_medicamentos : tienen
    hospitales ||..o{ hospitales_areas_especializadas : tienen
    hospitales_areas_especializadas }o..|| areas_especializadas : pertenecen
    dir_generales ||--o{ hospitales : gestionan
    pacientes ||--o{ pacientes_seguros : tienen
    pacientes_seguros }o..|| seguros : "pueden ser de"
    medicos }o..o{ medicos_especialidades : "pueden tener"
    medicos ||..o{ visitas_medicas : atienden
    pacientes ||..o{ visitas_medicas : realizan
    medicos_especialidades }o..|| especialidades : "pueden ser de"
    hist_clinicas ||--o{ hist_clinicas_alergias : tienen
    hist_clinicas_alergias }o..|| alergias : "pueden formar parte de"
    hist_clinicas ||--o{ hist_clinicas_ant_personales : tienen
    hist_clinicas_ant_personales }o..|| ant_personales : "pueden formar parte de"
    hist_clinicas ||--o{ hist_clinicas_ant_familiares : tienen
    hist_clinicas_ant_familiares }o..|| ant_familiares : "pueden formar parte de"
    hist_clinicas ||--o{ visitas_medicas : registran
    visitas_medicas ||--o{ visitas_medicas_medicamentos : recetan
    visitas_medicas_medicamentos }o..|| medicamentos : "son recetados en"
    visitas_medicas ||--o{ visitas_medicas_diagnosticos : "pueden tener"
    visitas_medicas_diagnosticos }o..|| diagnosticos : "pueden tomar parte en"
    visitas_medicas ||--o{ visitas_medicas_tratamientos : asignan
    visitas_medicas_tratamientos }o..|| tratamientos : "son asignados en"
    visitas_medicas ||--o{ visitas_medicas_resultados : "pueden tener"
    visitas_medicas_resultados }o..|| resultados : "pueden ser de"
    medicamentos ||..o{ inventarios_medicamentos : "se almacenan en"
```

<h4 align=center>Descripción Técnica</h4>

Si bien se sabe que en **MongoDB**, está permitida la desnormalización, facilitando las búsquedas en atributos no atómicos o relacionados con cardinalidad muchos a muchos, esto no es lo más óptimo a largo plazo, ya que es más complicado adaptar la base de datos a nuevos contextos o en caso de agregar más información al sistema, resulta más complicado insertar datos si todo se encuentra embebido en arrays u objetos especificados como atributos.

Al mismo tiempo, una relación muchos a muchos puede complicar en exceso la adición de nuevos documentos a las colecciones, ya que los datos no tendrán un orden u organización que facilite la visualización y manipulación de la BBDD.

Por estas razones, se decidió implementar la subdivisión de diversos campos en otros más atómicos, o incluso, en casos extremos, en nuevas colecciones que (gracias a las cardinalidades N:M), generarán nuevas colecciones puente entre las entidades envueltas en el N:M.

Algunos ejemplos de estas modificaciones son los campos que indican la dirección de residencia de los pacientes o la dirección donde se hallan ubicados los hospitales (se decidió separar este atributo en cada una de las propiedades individuales que una dirección, en el contexto de Bucaramanga y su zona metropolitana, normalmente tiene), al igual que el nombre completo del personal y pacientes (particionando esta información en campos `primer_nombre`, `segundo_nombre` [opcional], `primer_apellido` y `segundo_apellido`).

Por otra parte, referente a la resolución de cardinalidades, los casos de atributos de tipo array que tuvieron que ser descompuestos en una o más entidades (dentro de nuestro modelo de datos) son:

**Campo especialidades en médicos:** un médico puede tener muchas especialidades y una misma especialidad se puede asignar a muchos médicos. Se separa en una entidad `especialidades`, conectada a médicos a través de la entidad puente `medicos_especialidades`.

**Campo antecedentes personales, antecedentes familiares y alergias en historias clínicas:** una historia clínica puede tener múltiples entradas de estos atributos y cada una de ellas se puede asignar a muchas historias clínicas (una misma alergia la pueden padecer muchos pacientes a la misma vez). Se separa en nuevas entidades `ant_personales` / `ant_familiares` / `alergias`, conectada a historias clínicas a través de las entidades puente `hist_clinicas_ant_personales` / `hist_clinicas_ant_familiares` / `hist_clinicas_alergias`.

**Campo diagnósticos, resultados, medicamentos y tratamientos en visitas médicas:** una visita médica puede generar múltiples diagnósticos y resultados o recetar y asignar múltiples medicamentos y tratamientos, respectivamente; y cada una de estos atributos se puede asignar a muchas visitas médicas (un mismo medicamento puede ser recetado a múltiples pacientes en diferentes citas). Se separa en nuevas entidades `diagnosticos` / `resultados` / `medicamentos` / `tratamientos`, conectada a historias clínicas a través de las entidades puente `visitas_medicas_diagnosticos` / `visitas_medicas_resultados` / `visitas_medicas_medicamentos` / `visitas_medicas_tratamientos`.

**Campo áreas especializadas en hospitales:** un hospital puede tener muchas áreas especializadas y una misma área se puede asignar a muchos hospitales. Se separa en una entidad `areas_especializadas`, conectada a hospitales a través de la entidad puente `hospitales_areas_especializadas`.

**Campo seguros en pacientes:** un paciente puede tener muchos seguros y un mismo seguro se puede asignar a muchos pacientes. Se separa en una entidad `seguros`, conectada a pacientes a través de la entidad puente `pacientes_seguros`.

<br>

<h4 align=center>Segunda Forma Normal (2FN)</h4>

La segunda forma normal solicita que no existan datos con atributos que no dependan de la clave primaria [pk] dentro del sistema. Esto, básicamente hace referencia a que datos que estén relacionados con la tabla a la que pertenecen, pero que esta relación no sea directa o sus columnas no sean inherentes de la entidad (pudiendo cambiar el elemento de la entidad al que pertenecen sin alterar estos atributos y mantener coherencia), deben ser trasladados a otra entidad independiente y ser referenciados a través de llaves foráneas en aquella tabla a la que previamente pertenecían.

<h4 align=center>Descripción</h4>

<h4 align=center>Gráfica</h4>

```mermaid
erDiagram
    hospitales {
        int _id PK
        string nombre
        string via_principal_tipo
        string via_principal_numero
        string via_principal_letra
        string via_principal_bis
        string via_generadora_numero
        string via_generadora_letra
        string via_generadora_bis
        string placa
        string barrio
        string municipio
        string tel
        int id_dir_general FK
    }

    dir_generales {
        int _id PK
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        string num_lic_gestion
        decimal salario
    }

    hospitales_areas_especializadas {
        int _id PK
        int id_hospital FK
        int id_area_especializada FK
    }

    areas_especializadas {
        int _id PK
        string nombre
    }

    medicos {
        int _id PK
        string num_colegiatura
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        string num_lic_gestion
        decimal salario
        int id_hospital FK    
    }

    especialidades {
        int _id PK
        string nombre
    }

    medicos_especialidades {
        int _id PK
        int id_medico FK
        int id_especialidad FK
    }

    enfermeros {
        int _id PK
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        decimal salario
        int id_hospital FK
    }

    per_admin {
        int _id PK
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        string cargo
        string area_resp
        decimal salario
        int id_hospital FK
    }

    per_mantenimiento {
        int _id PK
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        string tipo_trabajo
        decimal salario
        int id_hospital FK
    }

    pacientes {
        int _id PK
        string num_hc
        string primer_nombre
        string segundo_nombre
        string primer_apellido
        string segundo_apellido
        string tel
        string correo_el
        int id_direccion FK
    }

    direcciones_pacientes {
        int _id PK
        string via_principal_tipo
        string via_principal_numero
        string via_principal_letra
        string via_principal_bis
        string via_generadora_numero
        string via_generadora_letra
        string via_generadora_bis
        string placa
        int barrio FK
    }

    pacientes_seguros {
        int _id PK
        int id_paciente FK
        int id_seguro FK
    }

    seguros {
        int _id PK
        string nombre
        string num_poliza
        int id_tipo_seguro FK
        int id_estado_seguro FK
    }

    estados_seguros {
        int _id PK
        string estado
        bool activo
    }

    tipos_seguros {
        int _id PK
        string tipo
    }

    alergias {
        int _id PK
        string nombre
    }

    hist_clinicas {
        string num_hc PK
        date fecha_creacion
        date fecha_actualizacion
    }

    hist_clinicas_alergias {
        int _id PK
        int id_hist_clinica FK
        int id_alergia FK
    }

    hist_clinicas_ant_personales {
        int _id PK
        int id_hist_clinica FK
        int id_ant_personal FK 
    }

    hist_clinicas_ant_familiares {
        int _id PK
        int id_hist_clinica FK
        int id_ant_familiar FK 
    }

    ant_personales {
        int _id PK
        string description
    }

    ant_familiares {
        int _id PK
        string description
    }

    medicamentos {
        int _id PK
        string nombre
        string tipo
        int id_fabricante FK
    }

    fabricantes {
        int _id PK
        string nombre
        string pais
        string tel
        string correo_el
    }

    diagnosticos {
        int _id PK
        string description
    }

    visitas_medicas {
        int _id PK
        date fecha_hora
        int id_medico FK
        int id_paciente FK
        int num_hc FK
        string evolucion
    }

    visitas_medicas_medicamentos {
        int _id PK
        int id_visita_medica FK
        int id_medicamento FK
    }

    visitas_medicas_diagnosticos {
        int _id PK
        int id_visita_medica FK
        int id_diagnostico FK
    }

    visitas_medicas_resultados {
        int _id PK
        int id_visita_medica FK
        int id_resultado FK
    }

    visitas_medicas_tratamientos {
        int _id PK
        int id_visita_medica FK
        int id_tratamiento FK
    }

    tratamientos {
        int _id PK
        string nombre
        string descripcion
        string area_med
        decimal costo
    }

    resultados {
        int _id PK
        string descripcion
    }

    inventarios_medicamentos {
        int _id PK
        int id_hospital FK
        int id_medicamento FK
        int cant_disp
    }

    hospitales ||--o{ medicos : tienen
    hospitales ||--o{ pacientes : tienen
    hospitales ||--o{ enfermeros : tienen
    hospitales ||--o{ per_admin : tienen
    hospitales ||--o{ per_mantenimiento : tienen
    hospitales ||..o{ hospitales_areas_especializadas : tienen
    hospitales_areas_especializadas }o..|| areas_especializadas : pertenecen
    hospitales ||..o{ inventarios_medicamentos : tienen
    dir_generales ||--o{ hospitales : gestionan
    pacientes ||--o{ pacientes_seguros : tienen
    pacientes ||--o{ visitas_medicas : realizan
    pacientes ||--o{ hist_clinicas : tienen
    pacientes_seguros }o..|| seguros : "pueden ser de"
    seguros }o..|| tipos_seguros : "son de"
    seguros }o..|| estados_seguros : "son de"
    medicos ||..o{ medicos_especialidades : "pueden tener"
    medicos ||..o{ visitas_medicas : "atienden"
    medicos_especialidades }o..|| especialidades : "pueden ser de"
    pacientes ||--|| direcciones_pacientes : tienen
    hist_clinicas ||--o{ hist_clinicas_alergias : tienen
    hist_clinicas ||..o{ visitas_medicas : registran
    hist_clinicas_alergias }o..|| alergias : "pueden formar parte de"
    hist_clinicas ||--o{ hist_clinicas_ant_personales : tienen
    hist_clinicas_ant_personales }o..|| ant_personales : "pueden formar parte de"
    hist_clinicas ||--o{ hist_clinicas_ant_familiares : tienen
    hist_clinicas_ant_familiares }o..|| ant_familiares : "pueden formar parte de"
    visitas_medicas ||--o{ visitas_medicas_medicamentos : recetan
    visitas_medicas_medicamentos }o..|| medicamentos : "son recetados en"
    medicamentos }o..|| fabricantes : fabrican
    visitas_medicas ||--o{ visitas_medicas_diagnosticos : "pueden tener"
    visitas_medicas_diagnosticos }o..|| diagnosticos : "pueden formar parte de"
    visitas_medicas ||--o{ visitas_medicas_tratamientos : asignan
    visitas_medicas_tratamientos }o..|| tratamientos : "pueden ser de"
    visitas_medicas ||--o{ visitas_medicas_resultados : "pueden tener"
    visitas_medicas_resultados }o..|| resultados : "pueden ser de"
    medicamentos ||..o{ inventarios_medicamentos : "se almacenan en"
```