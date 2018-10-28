import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalHospitalElement
 * @class IconTwotoneLocalHospitalElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalHospitalElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalHospitalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-hospital';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalHospitalElement.is, IconTwotoneLocalHospitalElement);

export default IconTwotoneLocalHospitalElement;
