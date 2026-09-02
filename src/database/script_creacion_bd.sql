-- =========================================================
-- Base de datos: Tickets de Reporte
-- Motor: MySQL / MariaDB
-- =========================================================

CREATE DATABASE IF NOT EXISTS tickets_reporte
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE tickets_reporte;

-- =========================================================
-- Catálogos
-- =========================================================

CREATE TABLE roles (
    id_rol      INT AUTO_INCREMENT PRIMARY KEY,
    nombre      VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE departamentos (
    id_departamento INT AUTO_INCREMENT PRIMARY KEY,
    nombre           VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE especializaciones (
    id_especializacion INT AUTO_INCREMENT PRIMARY KEY,
    nombre              VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE estados_ticket (
    id_estado INT AUTO_INCREMENT PRIMARY KEY,
    nombre    VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE prioridades (
    id_prioridad INT AUTO_INCREMENT PRIMARY KEY,
    nombre       VARCHAR(50) NOT NULL UNIQUE
);

-- =========================================================
-- Usuarios
-- =========================================================

CREATE TABLE usuarios (
    id_usuario          INT AUTO_INCREMENT PRIMARY KEY,
    nombre              VARCHAR(100) NOT NULL,
    apellido            VARCHAR(100) NOT NULL,
    telefono            VARCHAR(20),
    correo              VARCHAR(150) NOT NULL UNIQUE,
    contrasena          VARCHAR(255) NOT NULL,
    id_rol              INT NOT NULL,
    id_departamento     INT,
    id_especializacion  INT,
    CONSTRAINT fk_usuarios_rol
        FOREIGN KEY (id_rol) REFERENCES roles(id_rol),
    CONSTRAINT fk_usuarios_departamento
        FOREIGN KEY (id_departamento) REFERENCES departamentos(id_departamento),
    CONSTRAINT fk_usuarios_especializacion
        FOREIGN KEY (id_especializacion) REFERENCES especializaciones(id_especializacion)
);

-- =========================================================
-- Equipos de trabajo (N:M con usuarios)
-- =========================================================

CREATE TABLE equipos_trabajo (
    id_equipo INT AUTO_INCREMENT PRIMARY KEY,
    nombre    VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE equipo_usuario (
    id_equipo  INT NOT NULL,
    id_usuario INT NOT NULL,
    PRIMARY KEY (id_equipo, id_usuario),
    CONSTRAINT fk_eq_usuario_equipo
        FOREIGN KEY (id_equipo) REFERENCES equipos_trabajo(id_equipo),
    CONSTRAINT fk_eq_usuario_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- =========================================================
-- Inventario de activos
-- =========================================================

CREATE TABLE inventario_activos (
    id_activo         INT AUTO_INCREMENT PRIMARY KEY,
    nombre            VARCHAR(150) NOT NULL,
    descripcion       VARCHAR(255),
    tipo              VARCHAR(50),
    estado            VARCHAR(50) DEFAULT 'Activo',
    fecha_adquisicion DATE,
    id_departamento   INT,
    CONSTRAINT fk_activos_departamento
        FOREIGN KEY (id_departamento) REFERENCES departamentos(id_departamento)
);

-- =========================================================
-- Tickets
-- =========================================================

CREATE TABLE tickets (
    id_ticket           INT AUTO_INCREMENT PRIMARY KEY,
    titulo              VARCHAR(150) NOT NULL,
    descripcion         TEXT,
    id_usuario_creador  INT NOT NULL,
    id_usuario_asignado INT,
    id_departamento     INT,
    id_equipo           INT,
    id_activo           INT,
    id_estado           INT NOT NULL,
    id_prioridad        INT NOT NULL,
    fecha_creacion      DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    fecha_cierre        DATETIME,
    CONSTRAINT fk_tickets_creador
        FOREIGN KEY (id_usuario_creador) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_tickets_asignado
        FOREIGN KEY (id_usuario_asignado) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_tickets_departamento
        FOREIGN KEY (id_departamento) REFERENCES departamentos(id_departamento),
    CONSTRAINT fk_tickets_equipo
        FOREIGN KEY (id_equipo) REFERENCES equipos_trabajo(id_equipo),
    CONSTRAINT fk_tickets_activo
        FOREIGN KEY (id_activo) REFERENCES inventario_activos(id_activo),
    CONSTRAINT fk_tickets_estado
        FOREIGN KEY (id_estado) REFERENCES estados_ticket(id_estado),
    CONSTRAINT fk_tickets_prioridad
        FOREIGN KEY (id_prioridad) REFERENCES prioridades(id_prioridad)
);

-- =========================================================
-- Soporte (bitácora / seguimiento de tickets)
-- =========================================================

CREATE TABLE soporte (
    id_soporte  INT AUTO_INCREMENT PRIMARY KEY,
    id_ticket   INT NOT NULL,
    id_usuario  INT NOT NULL,
    comentario  TEXT NOT NULL,
    fecha       DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_soporte_ticket
        FOREIGN KEY (id_ticket) REFERENCES tickets(id_ticket),
    CONSTRAINT fk_soporte_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- =========================================================
-- Datos iniciales de catálogos (opcional, útil para pruebas)
-- =========================================================

INSERT INTO roles (nombre) VALUES ('Administrador'), ('Soporte'), ('Usuario Final');

INSERT INTO estados_ticket (nombre) VALUES ('Abierto'), ('En progreso'), ('Cerrado'), ('Cancelado');

INSERT INTO prioridades (nombre) VALUES ('Baja'), ('Media'), ('Alta'), ('Urgente');
