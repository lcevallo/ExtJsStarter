imprimirTotalEjemplares

Select * from tipo_material --El 15 es area historica

SELECT DISTINCT 
  t.titulo,
  t.documentalista,
  t.isbn,
  e.no_alta,
  e.no_tag,
  e.no_volumen,
  e.tomo,
  e.no_ejemplar,
  e.precio,
  t.categoria_primaria_id,
  t.editorial_id,
  cat.nombre AS categoria,
  ed.nombre AS editorial,
  a.nombre AS anio,
  t.id,
  c.nombre AS ciudad,
  p.nombre AS pais
FROM
  texto t
  LEFT OUTER JOIN categoria_primaria cat ON (t.categoria_primaria_id = cat.id)
  LEFT OUTER JOIN editorial ed ON (t.editorial_id = ed.id)
  LEFT OUTER JOIN anio a ON (t.anio_ingreso_id = a.id)
  LEFT OUTER JOIN pais p ON (t.pais_id = p.id)
  LEFT OUTER JOIN ciudades c ON (t.ciudades_id = c.id),
  ejemplar e
WHERE
  t.id = e.texto_id AND 
  t.tipo_material_id = 15 AND 
  (e.ejemplar_estado_id = 1 OR 
  e.ejemplar_estado_id = 2)



imprimirTotalEjemplaresCategoriasSecundarias
