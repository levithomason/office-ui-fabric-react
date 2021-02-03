/**
 * Design tokens for neutral colors
 */
export type NeutralColorTokens = {
  // https://www.figma.com/file/KB9oUjMKen2cKnyPG7RgdS/Design-tokens-superset?node-id=1963%3A17486
  neutralForeground1: string;
  neutralForeground2: string;
  neutralForeground2Hover: string;
  neutralForeground2Pressed: string;
  neutralForeground2Selected: string;
  brandForeground2Hover: string;
  brandForeground2Pressed: string;
  brandForeground2Selected: string;
  neutralForeground3: string;
  neutralForeground3Hover: string;
  neutralForeground3Pressed: string;
  neutralForeground3Selected: string;
  brandForeground3Hover: string;
  brandForeground3Pressed: string;
  brandForeground3Selected: string;
  neutralForeground4: string;
  neutralForegroundDisabled: string;
  brandForeground: string;
  brandForegroundHover: string;
  brandForegroundPressed: string;
  brandForegroundSelected: string;
  neutralForegroundInverted: string;
  neutralForegroundInvertedAccessible: string;
  neutralBackground1: string;
  neutralBackground1Hover: string;
  neutralBackground1Pressed: string;
  neutralBackground1Selected: string;
  neutralBackground2: string;
  neutralBackground2Hover: string;
  neutralBackground2Pressed: string;
  neutralBackground2Selected: string;
  neutralBackground3: string;
  neutralBackground3Hover: string;
  neutralBackground3Pressed: string;
  neutralBackground3Selected: string;
  neutralBackground4: string;
  neutralBackground4Hover: string;
  neutralBackground4Pressed: string;
  neutralBackground4Selected: string;
  neutralBackground5: string;
  neutralBackground5Hover: string;
  neutralBackground5Pressed: string;
  neutralBackground5Selected: string;
  neutralBackground6: string;
  neutralBackgroundDisabled: string;
  neutralStrokeAccessible: string;
  neutralStrokeAccessibleHover: string;
  neutralStrokeAccessiblePressed: string;
  neutralStrokeAccessibleSelected: string;
  neutralStroke1: string;
  neutralStroke1Hover: string;
  neutralStroke1Pressed: string;
  neutralStroke1Selected: string;
  neutralStroke2: string;
  neutralStroke3: string;
  neutralStrokeDisabled: string;
  strokeAccessible: string;
  strokeAccessibleInteractive: string;
  strokeAccessibleDisabled: string;
  neutralShadowAmbient: string;
  neutralShadowKey: string;
  neutralShadowAmbientLighter: string;
  neutralShadowKeyLighter: string;
  neutralShadowAmbientDarker: string;
  neutralShadowKeyDarker: string;
};

/**
 * Design tokens available for shared colors
 */
export type SharedColorTokens = {
  background1: string;
  background2: string;
  background3: string;
  foreground1: string;
  foreground2: string;
  foreground3: string;
  borderActive: string;
  border2: string;
};

/**
 * Possible color variant values
 */
export type ColorVariants = {
  shade50: string;
  shade40: string;
  shade30: string;
  shade20: string;
  shade10: string;
  primary: string;
  tint10: string;
  tint20: string;
  tint30: string;
  tint40: string;
  tint50: string;
  tint60: string;
};

export type BrandVariants = ColorVariants & { shade60: string };

/**
 * All the global shared colors and their shade/tint variants
 */
export type GlobalSharedColors = {
  darkRed: ColorVariants;
  burgundy: ColorVariants;
  cranberry: ColorVariants;
  red: ColorVariants;
  darkOrange: ColorVariants;
  bronze: ColorVariants;
  pumpkin: ColorVariants;
  orange: ColorVariants;
  peach: ColorVariants;
  marigold: ColorVariants;
  yellow: ColorVariants;
  gold: ColorVariants;
  brass: ColorVariants;
  brown: ColorVariants;
  darkBrown: ColorVariants;
  lime: ColorVariants;
  forest: ColorVariants;
  seafoam: ColorVariants;
  lightGreen: ColorVariants;
  green: ColorVariants;
  darkGreen: ColorVariants;
  lightTeal: ColorVariants;
  teal: ColorVariants;
  darkTeal: ColorVariants;
  cyan: ColorVariants;
  steel: ColorVariants;
  lightBlue: ColorVariants;
  blue: ColorVariants;
  royalBlue: ColorVariants;
  darkBlue: ColorVariants;
  cornflower: ColorVariants;
  navy: ColorVariants;
  lavender: ColorVariants;
  purple: ColorVariants;
  darkPurple: ColorVariants;
  orchid: ColorVariants;
  grape: ColorVariants;
  berry: ColorVariants;
  lilac: ColorVariants;
  pink: ColorVariants;
  hotPink: ColorVariants;
  magenta: ColorVariants;
  plum: ColorVariants;
  beige: ColorVariants;
  mink: ColorVariants;
  silver: ColorVariants;
  platinum: ColorVariants;
  anchor: ColorVariants;
  charcoal: ColorVariants;
};

/**
 * Brand color variants by product
 */
export type ProductBrandColors = {
  teams: BrandVariants;
  web: BrandVariants;
};

export type FontSizes = {
  base: {
    100: number;
    200: number;
    300: number;
    400: number;
    500: number;
    600: number;
  };
  hero: {
    700: number;
    800: number;
    900: number;
    1000: number;
  };
};

export type LineHeights = FontSizes;

export type FontWeights = {
  regular: number;
  medium: number;
  semibold: number;
};

export type FontFamilies = {
  base: string;
  monospace: string;
  numeric: string;
};

export type BorderRadius = {
  none: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  circular: string;
};

export type StrokeWidths = {
  thin: number;
  thick: number;
  thicker: number;
  thickest: number;
};

/**
 * Each shadow level has an ambient and key variant
 */
type ShadowTokenValue = {
  ambient: string;
  key: string;
};

/**
 * Design tokens for shadow levels
 */
export type ShadowLevelTokens = {
  shadow2: ShadowTokenValue;
  shadow4: ShadowTokenValue;
  shadow8: ShadowTokenValue;
  shadow16: ShadowTokenValue;
  shadow28: ShadowTokenValue;
  shadow64: ShadowTokenValue;
};

export type GhostColorTokens = {
  ghostBackground: string;
  ghostBackgroundHover: string;
  ghostBackgroundPressed: string;
  ghostBackgroundSelected: string;
};

export type TransparentColorTokens = {
  transparentBackground: string;
  transparentBackgroundHover: string;
  transparentBackgroundPressed: string;
  transparentBackgroundSelected: string;
};

/**
 * Theme object
 */
export type ThemeCompat = {
  sharedColors: GlobalSharedColors;
  sharedColorTokens: Record<keyof GlobalSharedColors, SharedColorTokens>;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  fontFamilies: FontFamilies;
  lineHeights: LineHeights;
  brandColors: ColorVariants;
  neutralColorTokens: NeutralColorTokens;
  shadowLevels?: ShadowLevelTokens;
  ghostColorTokens: BackgroundColorTokens;
  transparentColorTokens: BackgroundColorTokens;
};

export type BackgroundColorTokens = {
  background: string;
  backgroundHover: string;
  backgroundPressed: string;
  backgroundSelected: string;
};

export type BrandColorTokens = {
  brandBackground: string;
  brandBackgroundHover: string;
  brandBackgroundPressed: string;
  brandBackgroundSelected: string;
  brandBackgroundStatic: string;
  // FIXME: the rest is unclear in the spec
};

export type Greys =
  | 0
  | 2
  | 4
  | 6
  | 8
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32
  | 34
  | 36
  | 38
  | 40
  | 42
  | 44
  | 46
  | 48
  | 50
  | 52
  | 54
  | 56
  | 58
  | 60
  | 62
  | 64
  | 66
  | 68
  | 70
  | 72
  | 74
  | 76
  | 78
  | 80
  | 82
  | 84
  | 86
  | 88
  | 90
  | 92
  | 94
  | 96
  | 98
  | 100;

// TODO: do we want to split theme for better tree shaking? (MUI)
// But will this end up in the bundle at all? It should be used only in makeStyles and should be removed during build
export type Theme = {
  global: {
    // TODO: this means "static", will not change with light/dark/contrast switch. better named static?
    color: {
      black: string;
      white: string;
      hyperlink: string;
      disabled: string;
      selected: string;
    };
    palette: GlobalSharedColors & {
      brand: BrandVariants; // Only the Theme brand, not all
      grey: Record<Greys, string>;
    };
  };
  alias: {
    color: Record<keyof GlobalSharedColors, SharedColorTokens> & {
      neutral: NeutralColorTokens;
      ghost: BackgroundColorTokens;
      transparent: BackgroundColorTokens;
      brand: BrandColorTokens;
    };
  };
};