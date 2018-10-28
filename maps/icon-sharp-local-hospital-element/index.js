import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalHospitalElement
 * @class IconSharpLocalHospitalElement
 * @extends {AoflElement}
 */
class IconSharpLocalHospitalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalHospitalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-hospital';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalHospitalElement.is, IconSharpLocalHospitalElement);

export default IconSharpLocalHospitalElement;
