--Faculty
INSERT INTO `faculty` (`faculty_id`, `faculty_name`) VALUES ('FIET', 'FACULTAD DE INGENIERIA ELECTRONICA Y DE COMUNICACIONES');
INSERT INTO `faculty` (`faculty_id`, `faculty_name`) VALUES ('FAH', 'FACULTAD DE CIENCIAS HUMANAS');
--Department
INSERT INTO `department` (`department_id`, `department_name`, `faculty_id`) VALUES ('1', 'Sistemas', 'FIET');
INSERT INTO `department` (`department_id`, `department_name`, `faculty_id`) VALUES ('2', 'Telecomunicaciones', 'FIET');
--Program
INSERT INTO `program` (`program_id`, `name`, `department_id`) VALUES ('PIS', 'INGENIERIA DE SISTEMAS', '1');
INSERT INTO `program` (`program_id`, `name`, `department_id`) VALUES ('PIET', 'INGENIERIA ELECTRONICA Y TELECOMUNICACIONES', '2');
--Teacher
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`) VALUES ('1', 'DANIEL PAZ', '1');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`) VALUES ('2', 'DELIO HURTADO', '2');
--Period
INSERT INTO `period` (`periodId`, `state`) VALUES ('2021_02', 'FINISHED');
INSERT INTO `period` (`periodId`, `state`) VALUES ('2022_01', 'FINISHED');
INSERT INTO `period` (`periodId`, `state`) VALUES ('2022_02', 'IN_PROGRESS');
--Subject
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('POO', 'Programacion Orientada a Objetos', '1', false, '2', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('ESTR1', 'Estructura de Datos', '1',false, '3', 'PIS');
--Environment
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '30', 'LABORATORIO', 'Edificio IPET FIET', 'Sala 4', 'FIET');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '15', 'LABORATORIO', 'Edificio IPET FIET', 'Sala 4', 'FAH');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '20', 'SALON', 'Edificio IPET FIET', 'Sala 4', 'FAH');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '300', 'AUDITORIO', 'Edificio IPET FIET', 'Sala 4', 'FIET');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '30', 'SALON', 'Edificio IPET FIET', 'Sala 4', 'FIET');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '15', 'SALON', 'Edificio IPET FIET', 'Sala 4', 'FIET');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '20', 'SALON', 'Edificio IPET FIET', 'Sala 4', 'FAH');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '25', 'LABORATORIO', 'Edificio IPET FIET', 'Sala 4', 'FAH');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '10', 'LABORATORIO', 'Edificio IPET FIET', 'Sala 4', 'FAH');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '8', 'LABORATORIO', 'Edificio IPET FIET', 'Sala 4', 'FIET');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '11', 'SALON', 'Edificio IPET FIET', 'Sala 4', 'FIET');
--Resource
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('1', 'Video Beam', 'TECNOLOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('2', 'Televisor', 'TECNOLOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('3', 'Impresora', 'TECNOLOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('4', 'Amplificador', 'TECNOLOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('5', 'Telescopio', 'PEDAGOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('6', 'Estabilizador', 'TECNOLOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('7', 'Audifonos', 'TECNOLOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('8', 'HDMI', 'TECNOLOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('9', 'Proyector', 'TECNOLOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('10', 'Robot educativo', 'PEDAGOGICO');
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES ('11', 'Camara videoconferencia', 'TECNOLOGICO');
--Resource environment
INSERT INTO `available_resources` (`environment_id`, `resource_id`) VALUES (1,1);
INSERT INTO `available_resources` (`environment_id`, `resource_id`) VALUES (1,2);
INSERT INTO `available_resources` (`environment_id`, `resource_id`) VALUES (1,3);
INSERT INTO `available_resources` (`environment_id`, `resource_id`) VALUES (1,4);