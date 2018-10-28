import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDriveEtaElement
 * @class IconBaselineDriveEtaElement
 * @extends {AoflElement}
 */
class IconBaselineDriveEtaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDriveEtaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-drive-eta';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDriveEtaElement.is, IconBaselineDriveEtaElement);

export default IconBaselineDriveEtaElement;
