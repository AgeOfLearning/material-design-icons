import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGraphicEqElement
 * @class IconTwotoneGraphicEqElement
 * @extends {AoflElement}
 */
class IconTwotoneGraphicEqElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGraphicEqElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-graphic-eq';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGraphicEqElement.is, IconTwotoneGraphicEqElement);

export default IconTwotoneGraphicEqElement;
