import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSwitchCameraElement
 * @class IconSharpSwitchCameraElement
 * @extends {AoflElement}
 */
class IconSharpSwitchCameraElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSwitchCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-switch-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSwitchCameraElement.is, IconSharpSwitchCameraElement);

export default IconSharpSwitchCameraElement;
