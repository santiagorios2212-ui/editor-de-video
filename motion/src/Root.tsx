import React from 'react';
import {Composition} from 'remotion';
import {Prueba} from './plantillas/Prueba';
import {TableroEstilo} from './plantillas/TableroEstilo';
import {Montaje, Linea} from './video/Montaje';
import demoData from './datos/demo.json';

// Un montaje por vídeo: los datos (timeline.json) salen de proyectos/<nombre>/trabajo/scripts/timeline.py.
// La composición va a 30 fps exactos.
const tlDemo = demoData as unknown as Linea;

export const Root: React.FC = () => {
  return (
    <>
      <Composition id="TableroEstilo" component={TableroEstilo} durationInFrames={1} fps={30} width={1920} height={1080} defaultProps={{estilo: 'A'}} />
      <Composition id="Prueba" component={Prueba} durationInFrames={60} fps={30} width={1920} height={1080} />
      <Composition id="Demo" component={Montaje as React.FC<any>} durationInFrames={tlDemo.frames || 90} fps={30} width={1920} height={1080}
        defaultProps={{tl: tlDemo, video: 'demo.mp4', capas: 'todo', solo: null}} />
      <Composition id="DemoBase" component={Montaje as React.FC<any>} durationInFrames={tlDemo.frames || 90} fps={30} width={1920} height={1080}
        defaultProps={{tl: tlDemo, video: 'demo.mp4', capas: 'base', solo: null}} />
      <Composition id="DemoGraficos" component={Montaje as React.FC<any>} durationInFrames={tlDemo.frames || 90} fps={30} width={1920} height={1080}
        defaultProps={{tl: tlDemo, video: 'demo.mp4', capas: 'graficos', solo: null}} />
    </>
  );
};
