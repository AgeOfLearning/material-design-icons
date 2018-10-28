import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneInvertColorsElement
 * @class IconTwotoneInvertColorsElement
 * @extends {AoflElement}
 */
class IconTwotoneInvertColorsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneInvertColorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-invert-colors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneInvertColorsElement.is, IconTwotoneInvertColorsElement);

export default IconTwotoneInvertColorsElement;
