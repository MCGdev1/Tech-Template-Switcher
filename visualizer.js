// ==========================================
// MONOREPO DATA (Extended for simulation)
// ==========================================
const monorepoData = {
  packages: [
    { id: 'core-utils', name: '@core/utils', category: 'core', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>', color: '#FF6B00', size: 45, health: 'good' },
    { id: 'core-types', name: '@core/types', category: 'core', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>', color: '#FF8C38', size: 12, health: 'good' },
    { id: 'core-config', name: '@core/config', category: 'core', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>', color: '#CC5500', size: 8, health: 'good' },
    { id: 'shared-ui', name: '@shared/ui', category: 'shared', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', color: '#8B5CF6', size: 120, health: 'good' },
    { id: 'shared-hooks', name: '@shared/hooks', category: 'shared', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>', color: '#A78BFA', size: 35, health: 'warning' },
    { id: 'shared-utils', name: '@shared/utils', category: 'shared', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>', color: '#7C3AED', size: 28, health: 'good' },
    { id: 'api-client', name: '@services/api-client', category: 'services', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>', color: '#3B82F6', size: 56, health: 'good' },
    { id: 'api-types', name: '@services/api-types', category: 'services', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>', color: '#60A5FA', size: 15, health: 'good' },
    { id: 'auth', name: '@services/auth', category: 'services', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>', color: '#2563EB', size: 42, health: 'good' },
    { id: 'analytics', name: '@services/analytics', category: 'services', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>', color: '#1D4ED8', size: 38, health: 'warning' },
    { id: 'app-web', name: '@apps/web', category: 'apps', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', color: '#06B6D4', size: 250, health: 'good' },
    { id: 'app-mobile', name: '@apps/mobile', category: 'apps', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>', color: '#22D3EE', size: 180, health: 'good' },
    { id: 'app-admin', name: '@apps/admin', category: 'apps', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>', color: '#0891B2', size: 145, health: 'critical' },
    { id: 'testing', name: '@tools/testing', category: 'tools', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.56 2.9A7 7 0 0 1 19 13.38v2.32a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2.32A7 7 0 0 1 8.56 2.9z"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="9" y1="21" x2="15" y2="21"/></svg>', color: '#10B981', size: 25, health: 'good' },
    { id: 'build', name: '@tools/build', category: 'tools', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>', color: '#34D399', size: 18, health: 'good' },
    { id: 'lint', name: '@tools/lint', category: 'tools', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>', color: '#059669', size: 10, health: 'good' },
    { id: 'docs', name: '@docs/site', category: 'docs', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>', color: '#EC4899', size: 85, health: 'good' },
    { id: 'storybook', name: '@docs/storybook', category: 'docs', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>', color: '#F472B6', size: 95, health: 'warning' }
  ],
  dependencies: [
    { source: 'app-web', target: 'shared-ui' },
    { source: 'app-web', target: 'core-utils' },
    { source: 'app-web', target: 'api-client' },
    { source: 'app-web', target: 'auth' },
    { source: 'app-web', target: 'shared-hooks' },
    { source: 'app-mobile', target: 'shared-ui' },
    { source: 'app-mobile', target: 'core-utils' },
    { source: 'app-mobile', target: 'api-client' },
    { source: 'app-mobile', target: 'auth' },
    { source: 'app-admin', target: 'shared-ui' },
    { source: 'app-admin', target: 'core-utils' },
    { source: 'app-admin', target: 'api-client' },
    { source: 'app-admin', target: 'analytics' },
    { source: 'shared-ui', target: 'core-types' },
    { source: 'shared-ui', target: 'core-utils' },
    { source: 'shared-ui', target: 'shared-hooks' },
    { source: 'shared-hooks', target: 'core-utils' },
    { source: 'shared-utils', target: 'core-utils' },
    { source: 'api-client', target: 'core-types' },
    { source: 'api-client', target: 'api-types' },
    { source: 'api-client', target: 'core-config' },
    { source: 'auth', target: 'api-client' },
    { source: 'auth', target: 'core-utils' },
    { source: 'analytics', target: 'api-client' },
    { source: 'analytics', target: 'core-utils' },
    { source: 'testing', target: 'core-types' },
    { source: 'docs', target: 'shared-ui' },
    { source: 'storybook', target: 'shared-ui' },
    { source: 'storybook', target: 'shared-hooks' },
    { source: 'core-utils', target: 'core-types' },
    { source: 'core-config', target: 'core-types' }
  ],
  categories: [
    { id: 'core', name: 'Core', color: '#FF6B00' },
    { id: 'shared', name: 'Shared', color: '#8B5CF6' },
    { id: 'services', name: 'Services', color: '#3B82F6' },
    { id: 'apps', name: 'Applications', color: '#06B6D4' },
    { id: 'tools', name: 'Tools', color: '#10B981' },
    { id: 'docs', name: 'Documentation', color: '#EC4899' }
  ]
};

// ==========================================
// THREE.JS 3D VISUALIZATION
// ==========================================
class MonorepoVisualizer {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.parentElement.clientWidth;
    this.height = canvas.parentElement.clientHeight;

    this.nodes = [];
    this.edges = [];
    this.labels = [];

    this.selectedNode = null;
    this.hoveredNode = null;

    this.physics = {
      enabled: true,
      gravity: 0.3,
      repulsion: 100,
      linkForce: 0.5,
      damping: 0.9
    };

    this.settings = {
      autoRotate: false,
      showLabels: true,
      zoom: 100
    };

    this.init();
  }

  init() {
    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 1000);
    this.camera.position.set(0, 0, 200);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    // Fog for depth
    this.scene.fog = new THREE.Fog(0x0a0a0b, 150, 400);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff6b00, 1, 300);
    pointLight.position.set(50, 50, 100);
    this.scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 0.8, 300);
    pointLight2.position.set(-50, -50, 100);
    this.scene.add(pointLight2);

    // Create nodes and edges
    this.createGraph();

    // Raycaster for interaction
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Controls
    this.setupControls();

    // Event listeners
    this.setupEventListeners();

    // Start animation
    this.animate();
  }

  createGraph() {
    const nodeGroup = new THREE.Group();
    const edgeGroup = new THREE.Group();

    // Create nodes
    monorepoData.packages.forEach((pkg, index) => {
      const geometry = new THREE.SphereGeometry(Math.sqrt(pkg.size) * 0.8 + 5, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(pkg.color),
        emissive: new THREE.Color(pkg.color),
        emissiveIntensity: 0.2,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Random initial position
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 80 + Math.random() * 40;

      mesh.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );

      mesh.userData = {
        id: pkg.id,
        data: pkg,
        velocity: new THREE.Vector3(0, 0, 0)
      };

      // Glow effect
      const glowGeometry = new THREE.SphereGeometry(Math.sqrt(pkg.size) * 0.8 + 8, 32, 32);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(pkg.color),
        transparent: true,
        opacity: 0.15
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      mesh.add(glow);

      nodeGroup.add(mesh);
      this.nodes.push(mesh);
    });

    // Create edges
    monorepoData.dependencies.forEach(dep => {
      const sourceNode = this.nodes.find(n => n.userData.id === dep.source);
      const targetNode = this.nodes.find(n => n.userData.id === dep.target);

      if (sourceNode && targetNode) {
        const material = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.15
        });

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(6);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const line = new THREE.Line(geometry, material);
        line.userData = { source: sourceNode, target: targetNode };

        edgeGroup.add(line);
        this.edges.push(line);
      }
    });

    this.scene.add(nodeGroup);
    this.scene.add(edgeGroup);
    this.nodeGroup = nodeGroup;
    this.edgeGroup = edgeGroup;
  }

  setupControls() {
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.rotation = { x: 0, y: 0 };
  }

  setupEventListeners() {
    // Mouse events
    this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.canvas.addEventListener('mouseup', () => this.onMouseUp());
    this.canvas.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });
    this.canvas.addEventListener('click', (e) => this.onClick(e));

    // Resize
    window.addEventListener('resize', () => this.onResize());
  }

  onMouseDown(event) {
    this.isDragging = true;
    this.previousMousePosition = {
      x: event.clientX,
      y: event.clientY
    };
  }

  onMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Raycast for hover
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.nodes);

    if (intersects.length > 0) {
      const node = intersects[0].object;
      if (this.hoveredNode !== node) {
        if (this.hoveredNode) {
          this.unhighlightNode(this.hoveredNode);
        }
        this.hoveredNode = node;
        this.highlightNode(node);
        this.showNodePopup(node, event);
        this.canvas.style.cursor = 'pointer';
      } else {
        this.updatePopupPosition(event);
      }
    } else {
      if (this.hoveredNode) {
        this.unhighlightNode(this.hoveredNode);
        this.hoveredNode = null;
        this.hideNodePopup();
        this.canvas.style.cursor = 'grab';
      }
    }

    // Rotation
    if (this.isDragging) {
      const deltaX = event.clientX - this.previousMousePosition.x;
      const deltaY = event.clientY - this.previousMousePosition.y;

      this.rotation.y += deltaX * 0.005;
      this.rotation.x += deltaY * 0.005;

      this.previousMousePosition = {
        x: event.clientX,
        y: event.clientY
      };

      this.canvas.style.cursor = 'grabbing';
    }
  }

  onMouseUp() {
    this.isDragging = false;
    this.canvas.style.cursor = 'grab';
  }

  onWheel(event) {
    event.preventDefault();
    const delta = event.deltaY * 0.1;
    this.camera.position.z = Math.max(50, Math.min(400, this.camera.position.z + delta));

    // Update zoom slider
    const zoomPercent = Math.round((1 - (this.camera.position.z - 50) / 350) * 180 + 20);
    const slider = document.getElementById('zoomSlider');
    const valText = document.getElementById('zoomValue');
    if (slider) slider.value = zoomPercent;
    if (valText) valText.textContent = zoomPercent + '%';
  }

  onClick(event) {
    if (this.hoveredNode) {
      this.selectNode(this.hoveredNode);
    }
  }

  onResize() {
    this.width = this.canvas.parentElement.clientWidth;
    this.height = this.canvas.parentElement.clientHeight;

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.width, this.height);
  }

  highlightNode(node) {
    node.material.emissiveIntensity = 0.5;
    node.scale.setScalar(1.2);

    // Highlight connected edges
    this.edges.forEach(edge => {
      if (edge.userData.source === node || edge.userData.target === node) {
        edge.material.opacity = 0.6;
        edge.material.color = new THREE.Color(node.userData.data.color);
      }
    });
  }

  unhighlightNode(node) {
    if (node !== this.selectedNode) {
      node.material.emissiveIntensity = 0.2;
      node.scale.setScalar(1);
    }

    // Reset edges
    this.edges.forEach(edge => {
      if (edge.userData.source !== this.selectedNode && edge.userData.target !== this.selectedNode) {
        edge.material.opacity = 0.15;
        edge.material.color = new THREE.Color(0xffffff);
      }
    });
  }

  selectNode(node) {
    // Deselect previous
    if (this.selectedNode) {
      this.selectedNode.material.emissiveIntensity = 0.2;
      this.selectedNode.scale.setScalar(1);
    }

    this.selectedNode = node;
    node.material.emissiveIntensity = 0.6;
    node.scale.setScalar(1.3);

    // Update UI
    this.updateDetailPanel(node.userData.data);
    this.updatePackageList(node.userData.id);
  }

  showNodePopup(node, event) {
    const popup = document.getElementById('nodePopup');
    if (!popup) return;
    const data = node.userData.data;

    const iconEl = document.getElementById('popupIcon');
    if (iconEl) {
      iconEl.style.background = `linear-gradient(135deg, ${data.color}, ${this.darkenColor(data.color, 20)})`;
      iconEl.innerHTML = data.icon; // Use innerHTML for SVG
    }

    const titleEl = document.getElementById('popupTitle');
    if (titleEl) titleEl.textContent = data.name;

    const subtitleEl = document.getElementById('popupSubtitle');
    if (subtitleEl) subtitleEl.textContent = data.category.charAt(0).toUpperCase() + data.category.slice(1);

    const deps = monorepoData.dependencies.filter(d => d.source === data.id).length;
    const dependents = monorepoData.dependencies.filter(d => d.target === data.id).length;

    const depsEl = document.getElementById('popupDeps');
    const dependentsEl = document.getElementById('popupDependents');
    if (depsEl) depsEl.textContent = deps;
    if (dependentsEl) dependentsEl.textContent = dependents;

    this.updatePopupPosition(event);
    popup.classList.add('visible');
  }

  updatePopupPosition(event) {
    const popup = document.getElementById('nodePopup');
    if (popup) {
      popup.style.left = (event.clientX + 20) + 'px';
      popup.style.top = (event.clientY - 60) + 'px';
    }
  }

  hideNodePopup() {
    const popup = document.getElementById('nodePopup');
    if (popup) popup.classList.remove('visible');
  }

  updateDetailPanel(data) {
    const iconEl = document.getElementById('detailIcon');
    if (iconEl) {
      iconEl.innerHTML = data.icon; // Use innerHTML for SVG
      iconEl.style.background = `linear-gradient(135deg, ${data.color}, ${this.darkenColor(data.color, 20)})`;
    }

    const nameEl = document.getElementById('detailName');
    const typeEl = document.getElementById('detailType');
    if (nameEl) nameEl.textContent = data.name;
    if (typeEl) typeEl.textContent = data.category.charAt(0).toUpperCase() + data.category.slice(1) + ' Package';

    const deps = monorepoData.dependencies.filter(d => d.source === data.id).length;
    const dependents = monorepoData.dependencies.filter(d => d.target === data.id).length;

    const depsMetric = document.getElementById('metricDeps');
    const dependentsMetric = document.getElementById('metricDependents');
    const sizeMetric = document.getElementById('metricSize');
    if (depsMetric) depsMetric.textContent = deps;
    if (dependentsMetric) dependentsMetric.textContent = dependents;
    if (sizeMetric) sizeMetric.textContent = data.size + 'KB';

    this.updateDependenciesList(data.id);
  }

  updateDependenciesList(packageId) {
    const list = document.getElementById('dependenciesList');
    if (!list) return;

    const deps = monorepoData.dependencies
      .filter(d => d.source === packageId)
      .map(d => monorepoData.packages.find(p => p.id === d.target));

    list.innerHTML = deps.slice(0, 5).map(dep => `
            <div class="dep-item" data-id="${dep.id}">
                <div class="dep-icon" style="background: ${dep.color}; color: white">${dep.icon}</div>
                <div class="dep-info">
                    <div class="dep-name">${dep.name}</div>
                    <div class="dep-version">^1.0.0</div>
                </div>
                <span class="dep-type prod">prod</span>
            </div>
        `).join('');

    list.querySelectorAll('.dep-item').forEach(item => {
      item.addEventListener('click', () => {
        const node = this.nodes.find(n => n.userData.id === item.dataset.id);
        if (node) this.selectNode(node);
      });
    });
  }

  updatePackageList(selectedId) {
    document.querySelectorAll('.package-item').forEach(item => {
      item.classList.toggle('selected', item.dataset.id === selectedId);
    });
  }

  darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  applyPhysics() {
    if (!this.physics.enabled) return;

    this.nodes.forEach((node, i) => {
      const velocity = node.userData.velocity;

      // Center gravity
      const toCenter = node.position.clone().multiplyScalar(-this.physics.gravity * 0.01);
      velocity.add(toCenter);

      // Node repulsion
      this.nodes.forEach((other, j) => {
        if (i === j) return;

        const diff = node.position.clone().sub(other.position);
        const dist = diff.length();
        if (dist < this.physics.repulsion) {
          const force = diff.normalize().multiplyScalar(
            (this.physics.repulsion - dist) * 0.02
          );
          velocity.add(force);
        }
      });

      // Link forces
      this.edges.forEach(edge => {
        if (edge.userData.source === node || edge.userData.target === node) {
          const other = edge.userData.source === node ? edge.userData.target : edge.userData.source;
          const diff = other.position.clone().sub(node.position);
          const dist = diff.length();
          const idealDist = 50;

          if (dist > idealDist) {
            const force = diff.normalize().multiplyScalar(
              (dist - idealDist) * this.physics.linkForce * 0.01
            );
            velocity.add(force);
          }
        }
      });

      // Apply velocity with damping
      velocity.multiplyScalar(this.physics.damping);
      node.position.add(velocity);
    });
  }

  updateEdges() {
    this.edges.forEach(edge => {
      const positions = edge.geometry.attributes.position.array;
      const source = edge.userData.source.position;
      const target = edge.userData.target.position;

      positions[0] = source.x;
      positions[1] = source.y;
      positions[2] = source.z;
      positions[3] = target.x;
      positions[4] = target.y;
      positions[5] = target.z;

      edge.geometry.attributes.position.needsUpdate = true;
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.applyPhysics();
    this.updateEdges();

    if (this.settings.autoRotate) {
      this.rotation.y += 0.002;
    }

    this.nodeGroup.rotation.x = this.rotation.x;
    this.nodeGroup.rotation.y = this.rotation.y;
    this.edgeGroup.rotation.x = this.rotation.x;
    this.edgeGroup.rotation.y = this.rotation.y;

    this.renderer.render(this.scene, this.camera);
  }

  setPhysics(param, value) {
    this.physics[param] = value;
  }

  togglePhysics() {
    this.physics.enabled = !this.physics.enabled;
    return this.physics.enabled;
  }

  toggleAutoRotate() {
    this.settings.autoRotate = !this.settings.autoRotate;
    return this.settings.autoRotate;
  }

  resetView() {
    this.rotation = { x: 0, y: 0 };
    this.camera.position.set(0, 0, 200);
  }

  setZoom(percent) {
    const z = 400 - (percent - 20) * (350 / 180);
    this.camera.position.z = z;
  }
}

// ==========================================
// UI INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('visualization');
  if (!canvas) return;

  const visualizer = new MonorepoVisualizer(canvas);

  const packageList = document.getElementById('packageList');
  if (packageList) {
    monorepoData.packages.slice(0, 8).forEach(pkg => {
      const deps = monorepoData.dependencies.filter(d => d.source === pkg.id).length;
      const dependents = monorepoData.dependencies.filter(d => d.target === pkg.id).length;

      const item = document.createElement('div');
      item.className = 'package-item';
      item.dataset.id = pkg.id;
      item.style.setProperty('--item-color', pkg.color);
      item.innerHTML = `
                <span class="package-icon" style="background: ${pkg.color}">${pkg.icon}</span>
                <span class="package-info">
                    <span class="package-name">${pkg.name}</span>
                    <span class="package-meta">
                        <span class="package-deps">${deps} deps</span>
                        <span>•</span>
                        <span>${dependents} dependents</span>
                    </span>
                </span>
                <span class="health-indicator health-${pkg.health}"></span>
            `;

      item.addEventListener('click', () => {
        const node = visualizer.nodes.find(n => n.userData.id === pkg.id);
        if (node) visualizer.selectNode(node);
      });

      packageList.appendChild(item);
    });
  }

  const legend = document.getElementById('legend');
  if (legend) {
    monorepoData.categories.forEach(cat => {
      const count = monorepoData.packages.filter(p => p.category === cat.id).length;
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `
                <span class="legend-color" style="background: ${cat.color}"></span>
                <span>${cat.name} (${count})</span>
            `;
      legend.appendChild(item);
    });
  }

  const activityFeed = document.getElementById('activityFeed');
  if (activityFeed) {
    const activities = [
      { user: 'JD', text: '<strong>@core/utils</strong> was updated to v2.1.0', time: '2 minutes ago' },
      { user: 'AS', text: 'Added new hook to <strong>@shared/hooks</strong>', time: '15 minutes ago' },
      { user: 'MK', text: 'Fixed build issue in <strong>@apps/admin</strong>', time: '1 hour ago' },
      { user: 'RB', text: 'Deployed <strong>@apps/web</strong> to production', time: '3 hours ago' }
    ];

    activities.forEach(activity => {
      const item = document.createElement('div');
      item.className = 'activity-item';
      item.innerHTML = `
                <div class="activity-avatar">${activity.user}</div>
                <div class="activity-content">
                    <div class="activity-text">${activity.text}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
            `;
      activityFeed.appendChild(item);
    });
  }

  // Control listeners
  const resetBtn = document.getElementById('resetView');
  if (resetBtn) resetBtn.addEventListener('click', () => visualizer.resetView());

  const rotateBtn = document.getElementById('toggleRotation');
  if (rotateBtn) rotateBtn.addEventListener('click', (e) => {
    const active = visualizer.toggleAutoRotate();
    e.currentTarget.classList.toggle('active', active);
  });

  const physicsBtn = document.getElementById('togglePhysics');
  if (physicsBtn) physicsBtn.addEventListener('click', (e) => {
    const active = visualizer.togglePhysics();
    e.currentTarget.classList.toggle('active', active);
  });

  const labelsBtn = document.getElementById('toggleLabels');
  if (labelsBtn) labelsBtn.addEventListener('click', (e) => {
    visualizer.settings.showLabels = !visualizer.settings.showLabels;
    e.currentTarget.classList.toggle('active', visualizer.settings.showLabels);
  });

  const zoomSlider = document.getElementById('zoomSlider');
  if (zoomSlider) zoomSlider.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    const text = document.getElementById('zoomValue');
    if (text) text.textContent = value + '%';
    visualizer.setZoom(value);
  });

  // Physics sliders
  const gravitySlider = document.getElementById('gravitySlider');
  if (gravitySlider) gravitySlider.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    const text = document.getElementById('gravityValue');
    if (text) text.textContent = value.toFixed(1);
    visualizer.setPhysics('gravity', value);
  });

  const repulsionSlider = document.getElementById('repulsionSlider');
  if (repulsionSlider) repulsionSlider.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    const text = document.getElementById('repulsionValue');
    if (text) text.textContent = value;
    visualizer.setPhysics('repulsion', value);
  });

  const linkSlider = document.getElementById('linkSlider');
  if (linkSlider) linkSlider.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    const text = document.getElementById('linkValue');
    if (text) text.textContent = value.toFixed(1);
    visualizer.setPhysics('linkForce', value);
  });

  // View toggle functionality (Fixed)
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.view-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    });
  });
});
