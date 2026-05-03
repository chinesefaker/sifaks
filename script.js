const moreMenu = document.getElementById('moreMenu');
const moreBtn = document.getElementById('moreBtn');

if (moreMenu && moreBtn) {
  const closeMenu = () => {
    moreMenu.classList.remove('open');
    moreBtn.setAttribute('aria-expanded', 'false');
  };

  moreBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = moreMenu.classList.toggle('open');
    moreBtn.setAttribute('aria-expanded', String(isOpen));
  });

  moreMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      moreBtn.focus();
    }
  });
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const createLanguageClouds = () => {
  const languages = [
    '中文',
    'Français',
    'English',
    '한국어',
    'العربية',
    'Español',
    'Deutsch',
    'Italiano',
    'Português',
    'Русский',
    '日本語',
    'Türkçe',
    'हिन्दी',
    'Tiếng Việt',
    'Bahasa Indonesia',
    'ไทย'
  ];
  const shuffledLanguages = [...languages];
  for (let index = shuffledLanguages.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledLanguages[index], shuffledLanguages[swapIndex]] = [shuffledLanguages[swapIndex], shuffledLanguages[index]];
  }
  const targets = document.querySelectorAll('.hero, .contact-panel');

  targets.forEach((target) => {
    if (target.querySelector('.language-cloud')) return;

    const cloud = document.createElement('div');
    cloud.className = 'language-cloud';
    cloud.setAttribute('aria-hidden', 'true');

    shuffledLanguages.forEach((language, index) => {
      const token = document.createElement('span');
      token.className = `lang-token token-${index + 1}`;
      token.textContent = language;
      token.style.animationDelay = `${-(Math.random() * 18).toFixed(2)}s`;
      cloud.appendChild(token);
    });

    target.prepend(cloud);
  });
};

const createShaderBackground = () => {
  if (motionQuery.matches || !document.body) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'shader-background';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false
  });

  if (!gl) {
    canvas.remove();
    return;
  }

  const vertexSource = `
    attribute vec2 aPosition;
    void main() {
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision mediump float;
    uniform vec2 uResolution;
    uniform float uTime;

    float wave(float value) {
      return sin(value) * 0.5 + 0.5;
    }

    float softLine(float position, float width, float axis) {
      return smoothstep(width, 0.0, abs(axis - position));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution.xy;
      vec2 field = (uv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

      float vignette = smoothstep(0.86, 0.22, length(field));
      float drift = sin(field.x * 5.0 + uTime * 0.28) * 0.08;
      float lines = 0.0;

      for (int i = 0; i < 6; i++) {
        float index = float(i);
        float base = -0.38 + index * 0.15;
        float y = base + drift + sin(field.x * (2.2 + index * 0.18) + uTime * (0.18 + index * 0.025)) * 0.045;
        float width = 0.006 + wave(uTime * 0.24 + index) * 0.006;
        lines += softLine(y, width, field.y) * (0.18 + index * 0.018);
      }

      float grid = smoothstep(0.996, 1.0, wave(field.x * 18.0 + uTime * 0.08))
        + smoothstep(0.997, 1.0, wave(field.y * 14.0 - uTime * 0.06));
      grid *= 0.025;

      vec3 blue = vec3(0.49, 0.83, 0.99);
      vec3 violet = vec3(0.65, 0.55, 0.98);
      vec3 color = mix(blue, violet, uv.x);
      float alpha = clamp((lines + grid) * vignette, 0.0, 0.42);

      gl_FragColor = vec4(color * alpha, alpha);
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  };

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    canvas.remove();
    return;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('Shader link error:', gl.getProgramInfoLog(program));
    canvas.remove();
    return;
  }

  const positions = new Float32Array([
    -1, -1,
    1, -1,
    -1, 1,
    1, 1
  ]);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, 'aPosition');
  const resolutionLocation = gl.getUniformLocation(program, 'uResolution');
  const timeLocation = gl.getUniformLocation(program, 'uTime');

  let animationFrame = 0;
  let startTime = performance.now();

  const resizeCanvas = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
    const width = Math.floor(window.innerWidth * pixelRatio);
    const height = Math.floor(window.innerHeight * pixelRatio);

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  };

  const render = (now) => {
    resizeCanvas();
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, (now - startTime) / 1000);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    animationFrame = requestAnimationFrame(render);
  };

  const stopShader = () => {
    cancelAnimationFrame(animationFrame);
    canvas.remove();
    window.removeEventListener('resize', resizeCanvas);
  };

  const handleMotionChange = (event) => {
    if (event.matches) stopShader();
  };

  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', handleMotionChange);
  } else {
    motionQuery.addListener(handleMotionChange);
  }

  window.addEventListener('resize', resizeCanvas);
  animationFrame = requestAnimationFrame(render);
};

createLanguageClouds();
createShaderBackground();
