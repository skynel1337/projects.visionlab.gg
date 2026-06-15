/* @ds-bundle: {"format":3,"namespace":"VisionLabDesignSystem_16e624","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"63eb3b5d6219","components/core/Badge.jsx":"3b519b532764","components/core/Button.jsx":"4340faea02d5","components/core/Card.jsx":"4a3b11767458","components/core/IconButton.jsx":"b9d2912f6880","components/core/Input.jsx":"1105cc2e8e3c","components/core/Switch.jsx":"568532df0e66","components/core/Tag.jsx":"4de575b40861","ui_kits/brand-site/Cart.jsx":"bc808e841c25","ui_kits/brand-site/Drops.jsx":"3d6a87633f9a","ui_kits/brand-site/Footer.jsx":"426af7995e8a","ui_kits/brand-site/Hero.jsx":"6c62d002d346","ui_kits/brand-site/Manifesto.jsx":"d91cd194f392","ui_kits/brand-site/Nav.jsx":"6614553b1b87"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VisionLabDesignSystem_16e624 = window.VisionLabDesignSystem_16e624 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vision Lab — Avatar. Square-ish rounded (keycap) by default; supports
 * image, monogram fallback, and an optional orange status ring.
 */
function Avatar({
  src,
  name = '',
  size = 44,
  shape = 'rounded',
  ring = false,
  style = {},
  ...rest
}) {
  const radius = shape === 'circle' ? '50%' : shape === 'square' ? 'var(--radius-xs)' : 'var(--radius-sm)';
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: `0 0 ${size}px`,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--vl-ink-600)',
      border: ring ? '2px solid var(--accent)' : '1px solid var(--border-subtle)',
      boxShadow: 'var(--edge-top)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: Math.round(size * 0.38),
      letterSpacing: '-0.02em',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vision Lab — Badge. Small status pill. Eyebrow-style all-caps.
 */
function Badge({
  children,
  tone = 'neutral',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'rgba(255,255,255,0.06)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: 'rgba(237,104,32,0.14)',
      color: 'var(--accent-hover)',
      border: '1px solid rgba(237,104,32,0.4)'
    },
    solid: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'rgba(210,45,72,0.16)',
      color: 'var(--vl-red-400)',
      border: '1px solid rgba(210,45,72,0.4)'
    },
    chrome: {
      background: 'var(--gradient-chrome)',
      color: 'var(--vl-white)',
      border: '1px solid rgba(255,255,255,0.22)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '22px',
      padding: '0 10px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: '11px',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vision Lab — Button
 * Mechanical, keycap-precise. Primary = orange, secondary = matte chrome,
 * ghost = bare. Press shrinks slightly (scale .97) and darkens; no bounce.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const pads = {
    sm: '0 14px',
    md: '0 20px',
    lg: '0 26px'
  };
  const fonts = {
    sm: 'var(--fs-sm)',
    md: 'var(--fs-md)',
    lg: 'var(--fs-md)'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: heights[size],
    padding: pads[size],
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: fonts[size],
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    userSelect: 'none',
    ...style
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      boxShadow: 'var(--shadow-sm), var(--edge-top)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-subtle)',
      boxShadow: 'var(--edge-top)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    },
    chrome: {
      background: 'var(--gradient-chrome)',
      color: 'var(--text-primary)',
      borderColor: 'rgba(255,255,255,0.18)',
      boxShadow: 'var(--edge-chrome)'
    }
  };
  const hover = {
    primary: e => {
      e.currentTarget.style.background = 'var(--accent-hover)';
    },
    secondary: e => {
      e.currentTarget.style.background = 'var(--surface-card-hover)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    ghost: e => {
      e.currentTarget.style.color = 'var(--text-primary)';
      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
    },
    chrome: e => {
      e.currentTarget.style.filter = 'brightness(1.06)';
    }
  };
  const unhover = {
    primary: e => {
      e.currentTarget.style.background = 'var(--accent)';
    },
    secondary: e => {
      e.currentTarget.style.background = 'var(--surface-card)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    },
    ghost: e => {
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.background = 'transparent';
    },
    chrome: e => {
      e.currentTarget.style.filter = 'none';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseEnter: e => !disabled && hover[variant]?.(e),
    onMouseLeave: e => !disabled && unhover[variant]?.(e),
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = 'scale(0.97)'),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = 'scale(1)')
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vision Lab — Card. Matte dark surface, hairline border, deep soft shadow,
 * chrome top-edge highlight. Optional accent glow on hover.
 */
function Card({
  children,
  interactive = false,
  glow = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      background: hover ? 'var(--surface-card-hover)' : 'var(--surface-card)',
      border: `1px solid ${hover && glow ? 'rgba(237,104,32,0.45)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover && glow ? 'var(--shadow-lg), var(--glow-orange)' : 'var(--shadow-md), var(--edge-top)',
      padding,
      transition: 'background var(--dur-med) var(--ease-out), border-color var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out)',
      transform: hover && interactive ? 'translateY(-2px)' : 'translateY(0)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vision Lab — IconButton. Square, hairline, for Lucide glyphs.
 */
function IconButton({
  children,
  size = 'md',
  variant = 'secondary',
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 44,
    lg: 52
  };
  const d = dims[size];
  const variants = {
    secondary: {
      background: 'var(--surface-card)',
      borderColor: 'var(--border-subtle)',
      color: 'var(--text-secondary)'
    },
    ghost: {
      background: 'transparent',
      borderColor: 'transparent',
      color: 'var(--text-muted)'
    },
    primary: {
      background: 'var(--accent)',
      borderColor: 'transparent',
      color: 'var(--text-on-accent)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      flex: `0 0 ${d}px`,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      boxShadow: variant === 'ghost' ? 'none' : 'var(--edge-top)',
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'ghost') {
        e.currentTarget.style.color = 'var(--text-primary)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      } else if (variant === 'secondary') {
        e.currentTarget.style.background = 'var(--surface-card-hover)';
        e.currentTarget.style.color = 'var(--text-primary)';
      } else {
        e.currentTarget.style.background = 'var(--accent-hover)';
      }
    },
    onMouseLeave: e => {
      if (disabled) return;
      const v = variants[variant];
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.color = v.color;
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = 'scale(0.92)'),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = 'scale(1)')
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vision Lab — Input. Dark inset field, hairline border, orange focus ring.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  };
  const inputId = id || (label ? `vl-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--vl-red-500)' : focus ? 'var(--accent)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: "vl-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: heights[size],
      padding: '0 14px',
      background: 'var(--surface-inset)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-shadow)' : 'var(--edge-inset)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-md)',
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--vl-red-400)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vision Lab — Switch. Track turns orange when on; knob slides (mechanical, no bounce).
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const w = 44,
    h = 26,
    knob = 20;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange?.(!checked),
    style: {
      position: 'relative',
      width: w,
      height: h,
      flex: `0 0 ${w}px`,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--vl-ink-600)',
      border: `1px solid ${checked ? 'transparent' : 'var(--border-subtle)'}`,
      boxShadow: checked ? 'var(--edge-top)' : 'var(--edge-inset)',
      transition: 'background var(--dur-med) var(--ease-out), border-color var(--dur-med) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: checked ? w - knob - 3 : 3,
      width: knob,
      height: knob,
      marginTop: -knob / 2,
      borderRadius: '50%',
      background: checked ? 'var(--vl-ink-900)' : 'var(--vl-gray-100)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.5)',
      transition: 'left var(--dur-med) var(--ease-out), background var(--dur-med) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vision Lab — Tag. Removable / selectable chip (keycap-style).
 */
function Tag({
  children,
  selected = false,
  onRemove,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      height: '30px',
      padding: onRemove ? '0 8px 0 12px' : '0 12px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      color: selected ? 'var(--text-on-accent)' : 'var(--text-secondary)',
      background: selected ? 'var(--accent)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'transparent' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--edge-top)',
      cursor: 'default',
      userSelect: 'none',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      padding: 0,
      borderRadius: 'var(--radius-xs)',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: 'inherit',
      opacity: 0.7,
      fontSize: 14,
      lineHeight: 1
    },
    onMouseEnter: e => e.currentTarget.style.opacity = '1',
    onMouseLeave: e => e.currentTarget.style.opacity = '0.7'
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/Cart.jsx
try { (() => {
// Vision Lab — Cart drawer. Slides in from right; dark glass overlay.
function VLCart({
  open,
  items,
  onClose,
  onRemove
}) {
  const {
    Button,
    IconButton,
    Tag
  } = window.VisionLabDesignSystem_16e624;
  const Ic = ({
    name
  }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (ref.current) {
        ref.current.innerHTML = '';
        const el = document.createElement('i');
        el.setAttribute('data-lucide', name);
        ref.current.appendChild(el);
        window.lucide.createIcons({
          attrs: {
            width: 18,
            height: 18,
            'stroke-width': 1.75
          }
        });
      }
    });
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      style: {
        display: 'inline-flex'
      }
    });
  };
  const total = items.reduce((s, i) => s + parseInt(i.price.replace('$', ''), 10), 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40,
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-med) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 41,
      width: 380,
      background: 'var(--surface-raised)',
      borderLeft: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-med) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 22px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 22,
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em'
    }
  }, "Your cart"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      textAlign: 'center',
      marginTop: 48
    }
  }, "Nothing here yet. Go grab the drop."), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-sm)',
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: it.fit,
      padding: it.fit === 'contain' ? 6 : 0,
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, it.tag)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }, it.price), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "Remove",
    onClick: () => onRemove(i)
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "trash-2"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vl-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, "TOTAL"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 28,
      color: 'var(--text-primary)'
    }
  }, "$", total)), /*#__PURE__*/React.createElement(Button, {
    variant: "chrome",
    size: "lg",
    fullWidth: true,
    disabled: items.length === 0
  }, "Checkout"))));
}
window.VLCart = VLCart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/Drops.jsx
try { (() => {
// Vision Lab — Drops grid. Product cards composing Card + Badge + Tag + Button.
function VLDrops({
  onAdd
}) {
  const {
    Card,
    Badge,
    Button
  } = window.VisionLabDesignSystem_16e624;
  const items = [{
    img: '../../assets/render-1.png',
    name: 'VL Monogram Keycap',
    tag: 'Keycaps',
    price: '$28',
    status: 'live',
    fit: 'contain',
    bg: 'radial-gradient(120% 120% at 50% 30%, #161616, #050505)'
  }, {
    img: '../../assets/kerambit.png',
    name: 'Karambit · Chrome',
    tag: 'Blades',
    price: '$140',
    status: 'live',
    fit: 'cover',
    bg: 'var(--gradient-radial)'
  }, {
    img: '../../assets/keys-visionlab.png',
    name: 'VISION Full Set',
    tag: 'Keycaps',
    price: '$95',
    status: 'sold',
    fit: 'contain',
    bg: '#0a0a0a'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 40px',
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vl-eyebrow",
    style: {
      color: 'var(--text-accent)'
    }
  }, "THE DROP"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      letterSpacing: '-0.03em',
      fontSize: 44,
      margin: '8px 0 0',
      color: 'var(--text-primary)'
    }
  }, "Available now")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "View archive \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.name,
    interactive: true,
    glow: true,
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 240,
      background: it.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: it.img,
    alt: it.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: it.fit,
      padding: it.fit === 'contain' ? 28 : 0,
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, it.status === 'sold' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "danger"
  }, "Sold out") : /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Live"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vl-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, it.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-primary)'
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 20,
      color: 'var(--text-primary)'
    }
  }, it.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: it.status === 'sold' ? 'secondary' : 'primary',
    size: "sm",
    fullWidth: true,
    disabled: it.status === 'sold',
    onClick: () => onAdd?.(it)
  }, it.status === 'sold' ? 'Notify me' : 'Add to cart')))))));
}
window.VLDrops = VLDrops;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/Drops.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/Footer.jsx
try { (() => {
// Vision Lab — Footer with join field + social.
function VLFooter() {
  const {
    Input,
    Button,
    IconButton
  } = window.VisionLabDesignSystem_16e624;
  const Ic = ({
    name
  }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (ref.current) {
        ref.current.innerHTML = '';
        const el = document.createElement('i');
        el.setAttribute('data-lucide', name);
        ref.current.appendChild(el);
        window.lucide.createIcons({
          attrs: {
            width: 18,
            height: 18,
            'stroke-width': 1.75
          }
        });
      }
    });
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      style: {
        display: 'inline-flex'
      }
    });
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '64px 40px 40px',
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 48,
      alignItems: 'center',
      paddingBottom: 40,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      letterSpacing: '-0.03em',
      fontSize: 40,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "Join the list."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      color: 'var(--text-secondary)',
      fontSize: 15
    }
  }, "Early access to every drop. No spam, just chrome.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@studio.gg"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "Notify me"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/vl-monogram-white.svg",
    alt: "Vision Lab",
    style: {
      height: 22,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, "\xA9 2024 Vision Lab \u2014 minimalist \xB7 chrome \xB7 futurism")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "X"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "twitter"
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "YouTube"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "youtube"
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "Instagram"
  }, /*#__PURE__*/React.createElement(Ic, {
    name: "instagram"
  })))));
}
window.VLFooter = VLFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/Hero.jsx
try { (() => {
// Vision Lab — Hero. Chrome logo, giant display headline, ASCII watermark, grain.
function VLHero({
  onJoin
}) {
  const {
    Button,
    Badge
  } = window.VisionLabDesignSystem_16e624;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 40px 80px',
      textAlign: 'center',
      background: 'var(--gradient-radial)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wordmark-ascii.png",
    alt: "",
    style: {
      position: 'absolute',
      top: '18%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '120%',
      maxWidth: 1500,
      opacity: 0.06,
      filter: 'invert(1)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--texture-grain)',
      backgroundSize: 'cover',
      opacity: 0.1,
      mixBlendMode: 'color-dodge',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 920,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Drop 04 \xB7 Chrome Series")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-vl-chrome.png",
    alt: "Vision Lab",
    style: {
      height: 120,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      letterSpacing: '-0.04em',
      lineHeight: 0.94,
      fontSize: 92,
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "GEAR FOR", /*#__PURE__*/React.createElement("br", null), "THE OBSESSED"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 540,
      margin: '24px auto 0',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, "A creative studio building chrome-finished keycaps, blades and kit for people who take their setup too seriously."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "chrome",
    size: "lg",
    onClick: onJoin
  }, "Shop the Drop"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Watch the Film"))));
}
window.VLHero = VLHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/Manifesto.jsx
try { (() => {
// Vision Lab — Manifesto band + stats. Heavy display copy, chrome edge panel.
function VLManifesto() {
  const stats = [{
    n: '04',
    l: 'Drops shipped'
  }, {
    n: '12K',
    l: 'On the list'
  }, {
    n: '100%',
    l: 'Chrome finish'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 40px',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ascii-pattern.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.05,
      filter: 'invert(1)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 1160,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vl-eyebrow",
    style: {
      color: 'var(--text-accent)'
    }
  }, "MANIFESTO"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      letterSpacing: '-0.03em',
      lineHeight: 1.04,
      fontSize: 40,
      color: 'var(--text-primary)',
      margin: '16px 0 0'
    }
  }, "We build the kit we wished existed. No filler, no hype cycles \u2014 just precise objects, finished in chrome, made in small runs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 18,
      padding: '16px 20px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--edge-top)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 36,
      color: 'var(--accent)',
      minWidth: 84
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, s.l))))));
}
window.VLManifesto = VLManifesto;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/Manifesto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/brand-site/Nav.jsx
try { (() => {
// Vision Lab — site Nav. Sticky, hairline bottom, monogram + links + CTA.
function VLNav({
  onJoin
}) {
  const {
    Button
  } = window.VisionLabDesignSystem_16e624;
  const links = ['Drops', 'Studio', 'Manifesto', 'Archive'];
  const [active, setActive] = React.useState('Drops');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      height: 72,
      background: 'rgba(9,9,9,0.72)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/vl-monogram-white.svg",
    alt: "Vision Lab",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setActive(l),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.01em',
      color: active === l ? 'var(--text-primary)' : 'var(--text-muted)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = active === l ? 'var(--text-primary)' : 'var(--text-muted)'
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vl-eyebrow",
    style: {
      color: 'var(--text-faint)'
    }
  }, "EST. 2024"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onJoin
  }, "Get Access")));
}
window.VLNav = VLNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/brand-site/Nav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

})();
