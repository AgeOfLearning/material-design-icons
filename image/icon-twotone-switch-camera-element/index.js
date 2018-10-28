import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSwitchCameraElement
 * @class IconTwotoneSwitchCameraElement
 * @extends {AoflElement}
 */
class IconTwotoneSwitchCameraElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSwitchCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-switch-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSwitchCameraElement.is, IconTwotoneSwitchCameraElement);

export default IconTwotoneSwitchCameraElement;
