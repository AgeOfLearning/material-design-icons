import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalHospitalElement
 * @class IconOutlineLocalHospitalElement
 * @extends {AoflElement}
 */
class IconOutlineLocalHospitalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalHospitalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-hospital';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalHospitalElement.is, IconOutlineLocalHospitalElement);

export default IconOutlineLocalHospitalElement;
