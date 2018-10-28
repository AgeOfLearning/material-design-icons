import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineInvertColorsOffElement
 * @class IconOutlineInvertColorsOffElement
 * @extends {AoflElement}
 */
class IconOutlineInvertColorsOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineInvertColorsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-invert-colors-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineInvertColorsOffElement.is, IconOutlineInvertColorsOffElement);

export default IconOutlineInvertColorsOffElement;
