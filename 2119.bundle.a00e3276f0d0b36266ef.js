"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[2119,4757,1540],{78491:(e,n,a)=>{a.r(n),a.d(n,{default:()=>f});const t=JSON.parse('{"u2":"@ohif/extension-cornerstone-dicom-pmap"}').u2,r=`${t}.sopClassHandlerModule.dicom-pmap`;var s=a(43001),o=a(84793),i=a(12651),c=a(91202),l=a(962);const d="cornerstoneStreamingImageVolume",u=["1.2.840.10008.5.1.4.1.1.30"];function S(e,n,a){const t=e[0],{StudyInstanceUID:s,SeriesInstanceUID:S,SOPInstanceUID:m,SeriesDescription:p,SeriesNumber:I,SeriesDate:g,SOPClassUID:f,wadoRoot:D,wadoUri:y,wadoUriRoot:U}=t,h={Modality:"PMAP",isReconstructable:!0,displaySetInstanceUID:`pmap.${o.utils.guid()}`,SeriesDescription:p,SeriesNumber:I,SeriesDate:g,SOPInstanceUID:m,SeriesInstanceUID:S,StudyInstanceUID:s,SOPClassHandlerId:r,SOPClassUID:f,referencedImages:null,referencedSeriesInstanceUID:null,referencedDisplaySetInstanceUID:null,referencedVolumeURI:null,referencedVolumeId:null,isDerivedDisplaySet:!0,loadStatus:{loading:!1,loaded:!1},sopClassUids:u,instance:t,instances:[t],wadoRoot:D,wadoUriRoot:U,wadoUri:y,isOverlayDisplaySet:!0},w=t.ReferencedSeriesSequence;if(!w)return void console.error("ReferencedSeriesSequence is missing for the parametric map");const v=w[0]||w;return h.referencedImages=t.ReferencedSeriesSequence.ReferencedInstanceSequence,h.referencedSeriesInstanceUID=v.SeriesInstanceUID,h.getReferenceDisplaySet=()=>{const{displaySetService:e}=n.services;if(h.referencedDisplaySetInstanceUID)return e.getDisplaySetByUID(h.referencedDisplaySetInstanceUID);const a=e.getDisplaySetsForSeries(h.referencedSeriesInstanceUID);if(!a||0===a.length)throw new Error("Referenced displaySet is missing for the parametric map");const t=a[0];return h.referencedDisplaySetInstanceUID=t.displaySetInstanceUID,t},h.getReferencedVolumeId=()=>{if(h.referencedVolumeId)return h.referencedVolumeId;const e=h.getReferenceDisplaySet().displaySetInstanceUID,n=`${d}:${e}`;return h.referencedVolumeURI=e,h.referencedVolumeId=n,n},h.load=async({headers:e})=>await async function(e,n,a,t){const r=`${d}:${e.displaySetInstanceUID}`,s=i.cache.getVolumeLoadObject(r);if(s)return s.promise;e.loadStatus.loading=!0;const o=async function({extensionManager:e,displaySet:n,headers:a}){const t=await l.dicomLoaderService.findDicomDataPromise(n,null,a),r=n.getReferencedVolumeId(),s=i.cache.getVolume(r);if(!s)throw new Error("Referenced Volume is missing for the PMAP, and stack viewport PMAP is not supported yet");const{imageIds:o}=s,d=await c._.Cornerstone3D.ParametricMap.generateToolState(o,t,i.metaData),{pixelData:u}=d,S=u.constructor,m=n.displaySetInstanceUID,p=await i.volumeLoader.createAndCacheDerivedVolume(r,{volumeId:m,targetBuffer:{type:S.name}});p.getScalarData().set(u);const I=p.imageData.getPointData().getScalars().getRange(),g=i.utilities.windowLevel.toWindowLevel(I[0],I[1]);return p.metadata.voiLut=[g],p.loadStatus={loaded:!0},p}({extensionManager:a,displaySet:e,headers:t});return i.cache.putVolumeLoadObject(r,{promise:o}).catch((e=>{throw e})),o.then((()=>{e.loadStatus.loading=!1,e.loadStatus.loaded=!0})).catch((n=>{throw e.loadStatus.loading=!1,n})),o}(h,0,a,e),[h]}const m=function({servicesManager:e,extensionManager:n}){return[{name:"dicom-pmap",sopClassUids:u,getDisplaySetsFromSeries:a=>S(a,e,n)}]};function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)({}).hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},p.apply(null,arguments)}const I=s.lazy((()=>a.e(2898).then(a.bind(a,22898)))),g=e=>s.createElement(s.Suspense,{fallback:s.createElement("div",null,"Loading...")},s.createElement(I,e)),f={id:t,getViewportModule:({servicesManager:e,extensionManager:n,commandsManager:a})=>[{name:"dicom-pmap",component:t=>s.createElement(g,p({servicesManager:e,extensionManager:n,commandsManager:a},t))}],getSopClassHandlerModule:m}}}]);
//# sourceMappingURL=2119.bundle.a00e3276f0d0b36266ef.js.map