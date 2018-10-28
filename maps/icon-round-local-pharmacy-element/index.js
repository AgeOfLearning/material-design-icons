import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalPharmacyElement
 * @class IconRoundLocalPharmacyElement
 * @extends {AoflElement}
 */
class IconRoundLocalPharmacyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalPharmacyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-pharmacy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalPharmacyElement.is, IconRoundLocalPharmacyElement);

export default IconRoundLocalPharmacyElement;
