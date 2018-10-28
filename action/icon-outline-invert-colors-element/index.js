import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInvertColorsElement
 * @class IconOutlineInvertColorsElement
 * @extends {AoflElement}
 */
class IconOutlineInvertColorsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInvertColorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-invert-colors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInvertColorsElement.is, IconOutlineInvertColorsElement);

export default IconOutlineInvertColorsElement;
