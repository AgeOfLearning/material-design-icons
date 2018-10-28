import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInvertColorsOffElement
 * @class IconBaselineInvertColorsOffElement
 * @extends {AoflElement}
 */
class IconBaselineInvertColorsOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInvertColorsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-invert-colors-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInvertColorsOffElement.is, IconBaselineInvertColorsOffElement);

export default IconBaselineInvertColorsOffElement;
