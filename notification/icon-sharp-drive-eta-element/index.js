import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDriveEtaElement
 * @class IconSharpDriveEtaElement
 * @extends {AoflElement}
 */
class IconSharpDriveEtaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDriveEtaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-drive-eta';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDriveEtaElement.is, IconSharpDriveEtaElement);

export default IconSharpDriveEtaElement;
