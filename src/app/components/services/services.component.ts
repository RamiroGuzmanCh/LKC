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
      description: 'Elaboración de informes periciales contables para procesos penales y civiles, a partir del pedido fiscal, las disposiciones y la documentación disponible.',
      items: ['Estudio del expediente y/o carpeta fiscal y puntos periciales', 'Análisis y conciliación documentaria', 'Informe técnico y absolución de observaciones', 'Sustento oral de la pericia', 'Debate pericial'],
      featured: true,
    },
    {
      number: '02',
      title: 'Pericias en lavado de activos',
      description: 'Análisis especializado contable, económico y financiero de operaciones, movimientos de fondos y variaciones patrimoniales relevantes para una investigación, así como de la información obtenida mediante el levantamiento del secreto bancario y de la reserva tributaria y bursátil.',
      items: ['Análisis del origen y destino de los fondos para determinar y/o descartar un desbalance patrimonial', 'Trazabilidad de fondos y operaciones sustentada mediante el desarrollo de una estructura pericial', 'Contraste de información bancaria, documental, contable y tributaria'],
      featured: false,
    },
    {
      number: '03',
      title: 'Pericias en corrupción de funcionarios',
      description: 'Análisis y evaluación especializada de las normas de contrataciones aplicadas a las operaciones y documentación vinculadas con el uso de recursos del Estado, así como de las contrataciones y la determinación de posibles afectaciones y/o perjuicios económicos.',
      items: ['Análisis de contratos, pagos y comprobantes en la etapa de ejecución contractual', 'Revisión del uso y destino de recursos, evaluación presupuestal y ejecución en sus diferentes fases', 'Cuantificación de operaciones observadas vinculadas con la transgresión de las normas'],
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
}
