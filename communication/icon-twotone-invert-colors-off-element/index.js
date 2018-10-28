import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInvertColorsOffElement
 * @class IconTwotoneInvertColorsOffElement
 * @extends {AoflElement}
 */
class IconTwotoneInvertColorsOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInvertColorsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-invert-colors-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInvertColorsOffElement.is, IconTwotoneInvertColorsOffElement);

export default IconTwotoneInvertColorsOffElement;
