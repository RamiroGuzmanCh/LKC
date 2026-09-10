import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  protected readonly services = [
    {
      number: '01',
      title: 'Pericia criminalística contable',
      description: 'Análisis técnico y documentario de hechos con impacto económico, contable o tributario para sustentar una controversia o investigación.',
      items: ['Revisión de expedientes y documentación', 'Reconstrucción y trazabilidad de operaciones', 'Informe técnico y explicación de hallazgos'],
      featured: true,
    },
    {
      number: '02',
      title: 'Peritajes contables y financieros',
      description: 'Evaluación independiente de registros, movimientos y cálculos económicos que requieren una opinión técnica sustentada.',
      items: ['Observaciones a informes periciales', 'Cuantificación y análisis financiero', 'Asistencia técnica durante el proceso'],
      featured: false,
    },
    {
      number: '03',
      title: 'Peritajes tributarios',
      description: 'Revisión técnica de operaciones y documentación vinculada con obligaciones tributarias y procesos de fiscalización.',
      items: ['Revisión de reparos y contingencias', 'Análisis de documentación sustentatoria', 'Soporte ante requerimientos de información'],
      featured: false,
    },
    {
      number: '04',
      title: 'Auditoría y control interno',
      description: 'Diagnóstico de procesos, registros y controles para identificar riesgos, inconsistencias y oportunidades de mejora.',
      items: ['Auditoría financiera', 'Evaluación del control interno', 'Recomendaciones y plan de mejora'],
      featured: false,
    },
    {
      number: '05',
      title: 'Actualización y reconstrucción contable',
      description: 'Ordenamiento y revisión de información contable pendiente, incompleta o desactualizada para recuperar su trazabilidad.',
      items: ['Conciliación y revisión de saldos', 'Regularización de registros', 'Preparación de información de respaldo'],
      featured: false,
    },
    {
      number: '06',
      title: 'Proyectos, valorizaciones y tasaciones',
      description: 'Análisis económico y financiero para respaldar decisiones de inversión, valorización y viabilidad.',
      items: ['Formulación y evaluación de proyectos', 'Análisis de factibilidad', 'Valorizaciones y tasaciones'],
      featured: false,
    },
  ];

  protected readonly audiences = ['Estudios jurídicos y abogados', 'Empresas y organizaciones', 'Personas con una controversia económica', 'Clientes en Lima y provincias'];
}
