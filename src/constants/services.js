/**
 * Services/Tools data for the IntroSection component
 * Each service represents a tool or software used in graphic design
 */
export const services = [
  {
    id: "photoshop",
    icon: "Palette",
    title: "Adobe Photoshop",
    description: "Professional photo editing and graphic design software for creating stunning visuals"
  },
  {
    id: "lightroom",
    icon: "Camera",
    title: "Adobe Lightroom",
    description: "Photo editing and management software for photographers and designers"
  },
  {
    id: "camera-raw",
    icon: "Aperture",
    title: "Adobe Camera Raw",
    description: "Raw image processing plugin for high-quality photo editing"
  },
  {
    id: "bridge",
    icon: "FolderOpen",
    title: "Adobe Bridge",
    description: "File management and organization tool for Adobe Creative Suite"
  },
  {
    id: "enfuse",
    icon: "Layers",
    title: "Enfuse GUI",
    description: "Advanced tool for blending multiple images and creating HDR composites"
  }
];

/**
 * Validates that all services have required properties
 * @param {Array} servicesArray - Array of service objects to validate
 * @returns {boolean} - True if all services are valid
 */
export const validateServices = (servicesArray) => {
  return servicesArray.every(service =>
    service &&
    typeof service.id === 'string' &&
    typeof service.icon === 'string' &&
    typeof service.title === 'string' &&
    typeof service.description === 'string' &&
    service.id.trim() !== '' &&
    service.icon.trim() !== '' &&
    service.title.trim() !== '' &&
    service.description.trim() !== ''
  );
};