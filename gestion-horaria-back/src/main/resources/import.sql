--Faculty
INSERT INTO `faculty` (`faculty_id`, `faculty_name`) VALUES ('FIET', 'FACULTAD DE INGENIERIA ELECTRONICA Y DE COMUNICACIONES');
--Department
INSERT INTO `department` (`department_id`, `department_name`, `faculty_id`) VALUES ('1', 'Sistemas', 'FIET');
INSERT INTO `department` (`department_id`, `department_name`, `faculty_id`) VALUES ('2', 'Telecomunicaciones', 'FIET');
--Program
INSERT INTO `program` (`program_id`, `name`, `department_id`, `color`) VALUES ('PIS', 'INGENIERIA DE SISTEMAS', '1','bg-orange');
INSERT INTO `program` (`program_id`, `name`, `department_id`, `color` ) VALUES ('PIET', 'INGENIERIA ELECTRONICA Y TELECOMUNICACIONES', '2','bg-sky');
--Teacher
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1061', 'DANIEL PAZ', '1', 'PIS');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1062', 'DELIO HURTADO', '2', 'PIET');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1063', 'CAMILA CIFUENTES', '1', 'PIS');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1064', 'MIGUEL MONJE', '2', 'PIET');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1065', 'CAMILO COLLAZOS', '1', 'PIS');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1066', 'PAULA PENA', '2', 'PIET');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1067', 'JESUS ERNESTO', '1', 'PIS');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1068', 'DARWIN CERON', '2', 'PIET');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1069', 'GERARDO MARTINEZ', '1', 'PIS');
INSERT INTO `teacher` (`teacherCode`, `full_name`, `department_id`, `program_id`) VALUES ('1070', 'SANTIAGO OSPINA', '2', 'PIET');
--Period
INSERT INTO `period` (`periodId`, `state`) VALUES ('2021_02', 'FINISHED');
INSERT INTO `period` (`periodId`, `state`) VALUES ('2022_01', 'FINISHED');
--Subject
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('POO', 'Programacion Orientada a Objetos', '2', false, '2', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('ESTR1', 'Estructura de Datos', '2',false, '4', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('ESTR2', 'Estructura de Datos 3', '1', false, '2', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('SISDIS', 'Sistemas Distribuidos', '4',false, '4', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('CALSOFT', 'Calidad de Software', '6', false, '2', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('INTRO1', 'Introduccion programacion', '1',false, '4', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('BD1', 'Bases de datos 1', '3', false, '2', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('BD2', 'Bases de datos 2', '4',false, '4', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('LEGIS', 'Legislacion Laboral', '7', false, '2', 'PIS');
INSERT INTO `subject` (`subject_code`, `name`, `semester`, `time_block`, `weekly_overload`, `program_id`) VALUES ('ARQUITE', 'Arquitectura', '5',false, '4', 'PIS');
--Environment
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '30', 'LABORATORIO', 'Edificio IPET FIET', 'Sala 4', 'FIET');
INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '30', 'SALON', 'Salon IPET FIET', 'Salon 331', 'FIET');

--Resource
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES (NULL, 'Video Beam', 'TECNOLOGICO');

--Resource environment
INSERT INTO `available_resources` (`environment_id`, `resource_id`) VALUES (1,1);

-- INSERT INTO `course` (`course_id`, `course_capacity`, `course_group`, `period_periodId`, `subject_code`, `teacher_code`, `remaining_hours`) VALUES ('1', '13', 'A', '2021_02', 'POO', '1061', '4');
-- INSERT INTO `course` (`course_id`, `course_capacity`, `course_group`, `period_periodId`, `subject_code`, `teacher_code`, `remaining_hours`) VALUES ('2', '20', 'B', '2021_02', 'ESTR1', '1062', '4');
--Resource environment

INSERT INTO `roles` (`role_id`, `role_name`) VALUES ('1', 'ROLE_ADMIN');
INSERT INTO `roles` (`role_id`, `role_name`) VALUES ('2', 'ROLE_USER');

