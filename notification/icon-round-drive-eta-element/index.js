import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDriveEtaElement
 * @class IconRoundDriveEtaElement
 * @extends {AoflElement}
 */
class IconRoundDriveEtaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDriveEtaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-drive-eta';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDriveEtaElement.is, IconRoundDriveEtaElement);

export default IconRoundDriveEtaElement;
