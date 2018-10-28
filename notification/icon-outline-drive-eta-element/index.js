import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDriveEtaElement
 * @class IconOutlineDriveEtaElement
 * @extends {AoflElement}
 */
class IconOutlineDriveEtaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDriveEtaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-drive-eta';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDriveEtaElement.is, IconOutlineDriveEtaElement);

export default IconOutlineDriveEtaElement;
