const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Fi = require('react-icons/fi');
const sharp = require('sharp');

const icons = {
  authentic: 'FiPenTool',
  scalable:  'FiTrendingUp',
  detailed:  'FiCheckCircle',
  discovery: 'FiSearch',
  design:    'FiLayout',
  build:     'FiCode',
  launch:    'FiUploadCloud',
  support:   'FiLifeBuoy',
  database:  'FiDatabase',
  login:     'FiLock',
  ecommerce: 'FiShoppingCart',
  cms:       'FiEdit3',
  mail:      'FiMail',
  arrow:     'FiArrowRight',
  server:    'FiServer',
  zap:       'FiZap',
};

async function render(name, comp, hex, tag) {
  const el = React.createElement(Fi[comp], { size: 300, strokeWidth: 1.4 });
  let svg = ReactDOMServer.renderToStaticMarkup(el);
  svg = svg.replace(/currentColor/g, hex);
  const buf = await sharp(Buffer.from(svg)).resize(300, 300).png().toBuffer();
  const out = `assets/ic-${name}-${tag}.png`;
  require('fs').writeFileSync(out, buf);
}

(async () => {
  for (const [name, comp] of Object.entries(icons)) {
    await render(name, comp, '#FFFFFF', 'w');
    await render(name, comp, '#CE6E6E', 'r');
  }
  console.log('icons rendered:', Object.keys(icons).length * 2);
})();
