--Faculty
INSERT INTO `faculty` (`faculty_id`, `faculty_name`) VALUES ('FIET', 'FACULTAD DE INGENIERIA ELECTRONICA Y DE COMUNICACIONES');
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

INSERT INTO `environment` (`id`, `capacity`, `environmentType`, `location`, `name`, `faculty_id`) VALUES (NULL, '30', 'SALON', 'Salon IPET FIET', 'Salon 331', 'FIET');

--Resource
INSERT INTO `resource` (`id`, `name`, `resource_type`) VALUES (NULL, 'Video Beam', 'TECNOLOGICO');

--Resource environment
INSERT INTO `available_resources` (`environment_id`, `resource_id`) VALUES (1,1);

INSERT INTO `course` (`course_id`, `course_capacity`, `course_group`, `period_periodId`, `subject_code`, `teacher_code`) VALUES ('1', '13', 'A', '2022_02', 'POO', '1');

INSERT INTO `course` (`course_id`, `course_capacity`, `course_group`, `period_periodId`, `subject_code`, `teacher_code`) VALUES ('2', '20', 'B', '2022_02', 'ESTR1', '1');