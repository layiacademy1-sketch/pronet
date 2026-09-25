import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Clock,
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sliders,
} from 'lucide-react';
import { BEFORE_AFTER_PROJECTS } from '../data/cleaningData';
import { BeforeAfterProject, ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('tous');
  // State to track slider percentage for each project (default 50%)
  const [sliderPositions, setSliderPositions] = useState<Record<string, number>>({});

  const filteredProjects = BEFORE_AFTER_PROJECTS.filter((proj) => {
    if (activeCategory === 'tous') return true;
    return proj.category === activeCategory;
  });

  const getSliderPos = (id: string) => {
    return sliderPositions[id] !== undefined ? sliderPositions[id] : 50;
  };

  const handleSliderChange = (id: string, val: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: val }));
  };

  return (
    <section id="realisations" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Preuves en images</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Nos réalisations Avant / Après
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Découvrez en direct l'efficacité de nos interventions. Glissez le curseur pour comparer
            l'état initial et la propreté finale livrée par nos équipes.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('tous')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'tous'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Toutes nos réalisations
            </button>
            <button
              onClick={() => setActiveCategory('industriel')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'industriel'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Nettoyage industriel
            </button>
            <button
              onClick={() => setActiveCategory('bureaux')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'bureaux'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Bureaux & Sièges
            </button>
            <button
              onClick={() => setActiveCategory('immeubles')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'immeubles'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Immeubles & Copropriétés
            </button>
            <button
              onClick={() => setActiveCategory('chantier')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'chantier'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Fin de chantier
            </button>
            <button
              onClick={() => setActiveCategory('commerces')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'commerces'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Commerces & ERP
            </button>
          </div>
        </div>

        {/* Projects Grid with Interactive Comparison Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => {
            const pos = getSliderPos(project.id);

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
              >
                {/* Interactive Slider Area */}
                <div className="relative aspect-16/10 select-none overflow-hidden bg-slate-900 group">
                  {/* AFTER Image (Full background) */}
                  <img
                    src={project.afterImage}
                    alt={`Résultat Après : ${project.title}`}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-emerald-600/90 text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md backdrop-blur-xs">
                      Après intervention
                    </span>
                  </div>

                  {/* BEFORE Image (Clipped overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                  >
                    <img
                      src={project.beforeImage}
                      alt={`État Avant : ${project.title}`}
                      className="absolute inset-0 w-full h-full object-cover object-center filter contrast-110"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-slate-900/90 text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md backdrop-blur-xs">
                        Avant intervention
                      </span>
                    </div>
                  </div>

                  {/* Divider Handle Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                    style={{ left: `${pos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center border-2 border-sky-500">
                      <div className="flex items-center gap-0.5 text-sky-600">
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Invisible Range Input on Top for touch and mouse dragging */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={pos}
                    onChange={(e) => handleSliderChange(project.id, Number(e.target.value))}
                    aria-label={`Comparaison avant après ${project.title}`}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />

                  {/* Helper Tip on hover */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-950/75 backdrop-blur-md rounded-full text-[10px] text-white/90 z-20 pointer-events-none transition-opacity opacity-80 group-hover:opacity-100 flex items-center gap-1.5">
                    <Sliders className="w-3 h-3 text-sky-400" />
                    <span>Glissez pour comparer Avant / Après</span>
                  </div>
                </div>

                {/* Project Details Footer */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Specs & Tags */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-4 text-slate-600">
                      <div className="flex items-center gap-1">
                        <Layers className="w-4 h-4 text-sky-500" />
                        <span className="font-semibold">{project.surface}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-sky-500" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-semibold rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          * Les photographies présentées illustrent nos interventions représentatives. Pour toute
          demande de références spécifiques à votre métier (laboratoire, agroalimentaire, IGH),
          contactez notre service technique.
        </div>
      </div>
    </section>
  );
};
