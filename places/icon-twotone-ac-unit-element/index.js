import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAcUnitElement
 * @class IconTwotoneAcUnitElement
 * @extends {AoflElement}
 */
class IconTwotoneAcUnitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAcUnitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-ac-unit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAcUnitElement.is, IconTwotoneAcUnitElement);

export default IconTwotoneAcUnitElement;
