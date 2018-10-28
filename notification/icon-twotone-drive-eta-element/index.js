import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDriveEtaElement
 * @class IconTwotoneDriveEtaElement
 * @extends {AoflElement}
 */
class IconTwotoneDriveEtaElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDriveEtaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-drive-eta';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDriveEtaElement.is, IconTwotoneDriveEtaElement);

export default IconTwotoneDriveEtaElement;
