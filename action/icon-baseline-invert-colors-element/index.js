import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInvertColorsElement
 * @class IconBaselineInvertColorsElement
 * @extends {AoflElement}
 */
class IconBaselineInvertColorsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInvertColorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-invert-colors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInvertColorsElement.is, IconBaselineInvertColorsElement);

export default IconBaselineInvertColorsElement;
