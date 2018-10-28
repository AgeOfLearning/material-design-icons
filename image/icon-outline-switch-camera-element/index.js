import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSwitchCameraElement
 * @class IconOutlineSwitchCameraElement
 * @extends {AoflElement}
 */
class IconOutlineSwitchCameraElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSwitchCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-switch-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSwitchCameraElement.is, IconOutlineSwitchCameraElement);

export default IconOutlineSwitchCameraElement;
