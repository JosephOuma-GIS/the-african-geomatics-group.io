// Single source of truth for AGG's services, projects and values.
// Edit here and every page that lists them updates.

export const services = [
  {
    id: 'remote-sensing',
    title: 'Remote Sensing & Earth Observation',
    icon: 'tabler:satellite',
    summary:
      'High-resolution satellite analysis, change detection and time-series monitoring using Sentinel, Landsat and commercial imagery.',
    detail:
      'Optical and SAR workflows in Google Earth Engine and Python: land-cover mapping with stated accuracy, vegetation stress and drought indicators, flood extent under cloud, and UAV and LiDAR products for site-scale work.',
  },
  {
    id: 'land',
    title: 'Land Administration & Cadastre',
    icon: 'tabler:map-2',
    summary:
      'Digital land registration, boundary delineation and tenure security solutions for governments and communities.',
    detail:
      'Parcel data capture and cleaning, cadastral index maps, participatory community mapping, and geodatabases designed so that a county office can keep them current.',
  },
  {
    id: 'urban',
    title: 'Urban Planning & Smart Cities',
    icon: 'tabler:building-community',
    summary:
      'Spatial modelling, infrastructure planning and sustainable urban development strategies for resilient cities.',
    detail:
      'Zoning and land-use analysis, utility network and customer mapping for water companies, urban heat mapping and service-gap analysis.',
  },
  {
    id: 'environment',
    title: 'Environmental & Climate Solutions',
    icon: 'tabler:leaf',
    summary:
      'Deforestation tracking, carbon mapping, flood risk modelling and climate adaptation planning.',
    detail:
      'Forest and wetland change monitoring, restoration site planning, erosion and flood-risk surfaces, and the baseline mapping that environmental impact assessments depend on.',
  },
  {
    id: 'development',
    title: 'Custom GIS Development',
    icon: 'tabler:code',
    summary:
      'Tailored web GIS platforms, automation scripts and enterprise spatial systems built to your requirements.',
    detail:
      'Interactive web maps and dashboards, ArcPy and Python automation, PostGIS back ends, and open-source stacks that carry no licence fees.',
  },
  {
    id: 'training',
    title: 'Training & Capacity Building',
    icon: 'tabler:school',
    summary:
      'Corporate and institutional training in QGIS, Google Earth Engine, ArcGIS Pro and GIS programming.',
    detail:
      'Hands-on courses built around your own data, from introductory GIS to Earth Engine scripting and advanced ArcGIS Pro, delivered on site or remotely.',
  },
];

export const projects = [
  {
    sector: 'Infrastructure',
    client: 'Kisumu Water & Sanitation',
    title: 'Water distribution network mapping',
    summary:
      'GIS-based asset mapping and hydraulic modelling for the Kisumu City water supply network upgrade, serving over 500,000 residents.',
    image: '~/assets/images/agg/kiwasco-hotspot.jpg',
    alt: 'Hotspot map showing surveyed and unsurveyed zones across the KIWASCO service area',
  },
  {
    sector: 'Research',
    client: 'Wuhan University',
    title: 'Vegetation stress monitoring',
    summary:
      'Joint research on Yala Wetland with vegetation species mapping, and a multi-year collaboration on an S2REP fusion framework for early drought detection.',
    image: '~/assets/images/agg/vegetation-stress.png',
    alt: 'Time-lagged cross-correlation of S2REP and NDVI against SMAP soil moisture',
  },
  {
    sector: 'Conservation',
    client: 'Homa Hills',
    title: 'Deforestation monitoring',
    summary:
      'Forest cover change detection in Google Earth Engine, so conservation authorities can see where loss is happening and respond.',
    image: '~/assets/images/agg/deforestation-dashboard.jpg',
    alt: 'Dashboard of forest cover change statistics for Homa Hills',
  },
  {
    sector: 'Urban planning',
    client: 'Homa Bay County',
    title: 'Land use planning and analysis',
    summary:
      'Spatial planning, zoning analysis, carbon footprint extraction and urban heat mapping using satellite data and machine learning.',
    image: '~/assets/images/agg/drone-field-day.jpg',
    alt: 'Survey drone being prepared for a mapping flight',
  },
  {
    sector: 'Agriculture',
    client: 'Nakuru County',
    title: 'Crop yield mapping',
    summary: 'Crop yield mapping across Molo, Rongai and Njoro sub-counties.',
    image: '~/assets/images/agg/crop-yield-nakuru.jpg',
    alt: 'Yield map of Molo, Rongai and Njoro sub-counties in Nakuru',
  },
  {
    sector: 'Training',
    client: 'Sekenani, Maasai Mara',
    title: 'Advanced ArcGIS training',
    summary: 'On-site advanced ArcGIS training delivered in Sekenani.',
    image: '~/assets/images/agg/training-sekenani.jpg',
    alt: 'Participants at laptops during the advanced ArcGIS training in Sekenani',
  },
];

export const values = [
  {
    title: 'Teamwork',
    icon: 'tabler:users-group',
    description:
      'Driven by team spirit and a sense of belonging through collaboration and synergy. Diverse expertise working together delivers better geospatial solutions.',
  },
  {
    title: 'Customer focus',
    icon: 'tabler:target-arrow',
    description:
      'Committed to the effective and efficient delivery of quality services and products to all our stakeholders. Your success is our measure of impact.',
  },
  {
    title: 'Innovation & creativity',
    icon: 'tabler:bulb',
    description:
      'Continuously improving our operations and adding value by pursuing innovative and creative solutions in geomatics and spatial analysis.',
  },
  {
    title: 'Stakeholder engagement',
    icon: 'tabler:messages',
    description:
      'Proactively and continuously engaging our stakeholders and users. We listen, learn and adapt to serve better.',
  },
  {
    title: 'Accountability',
    icon: 'tabler:checklist',
    description:
      'Transparent in our operations, with measurable outcomes and impact tracking. We stand behind our work and deliver what we promise.',
  },
  {
    title: 'Equity & inclusiveness',
    icon: 'tabler:heart-handshake',
    description:
      'Committed to accessibility and inclusive representation in our team, projects and solutions. Spatial intelligence should benefit all communities.',
  },
];
