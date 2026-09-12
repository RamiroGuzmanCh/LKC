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
      title: 'Pericias penales y civiles',
      description: 'Elaboración de informes periciales contables para procesos penales y civiles, a partir de los puntos periciales y la documentación disponible.',
      items: ['Estudio del expediente y puntos periciales', 'Análisis y contrastación documentaria', 'Informe técnico y absolución de observaciones'],
      featured: true,
    },
    {
      number: '02',
      title: 'Pericias en lavado de activos',
      description: 'Análisis contable y financiero de operaciones, movimientos de fondos y variaciones patrimoniales relevantes para una investigación.',
      items: ['Análisis de desbalance patrimonial', 'Trazabilidad de fondos y operaciones', 'Contraste de información bancaria y documental'],
      featured: false,
    },
    {
      number: '03',
      title: 'Pericias en corrupción de funcionarios',
      description: 'Revisión técnica de operaciones y documentación vinculadas con el uso de recursos, contrataciones y posibles afectaciones económicas.',
      items: ['Análisis de contratos, pagos y comprobantes', 'Revisión del uso y destino de recursos', 'Cuantificación de operaciones observadas'],
      featured: false,
    },
    {
      number: '04',
      title: 'Revisión de informes periciales',
      description: 'Evaluación técnica de pericias existentes para identificar inconsistencias, omisiones, diferencias metodológicas o aspectos que requieren aclaración.',
      items: ['Observaciones técnicas', 'Contraste de cálculos y conclusiones', 'Asistencia para sustentar los hallazgos'],
      featured: false,
    },
    {
      number: '05',
      title: 'Pericias tributarias y reconstrucción contable',
      description: 'Revisión de obligaciones, registros y documentación tributaria, así como reconstrucción de información incompleta o desactualizada.',
      items: ['Revisión de reparos y contingencias', 'Conciliación y análisis de saldos', 'Preparación de información sustentatoria'],
      featured: false,
    },
    {
      number: '06',
      title: 'Auditoría, proyectos y valorizaciones',
      description: 'Servicios complementarios de análisis económico y financiero para control, inversión y toma de decisiones.',
      items: ['Auditoría y control interno', 'Formulación y evaluación de proyectos', 'Valorizaciones y tasaciones'],
      featured: false,
    },
  ];

  protected readonly audiences = ['Estudios jurídicos y abogados', 'Empresas y organizaciones', 'Personas con una controversia económica', 'Clientes en Lima y provincias'];
}
