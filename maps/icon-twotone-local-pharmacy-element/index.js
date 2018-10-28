import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalPharmacyElement
 * @class IconTwotoneLocalPharmacyElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalPharmacyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalPharmacyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-pharmacy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalPharmacyElement.is, IconTwotoneLocalPharmacyElement);

export default IconTwotoneLocalPharmacyElement;
