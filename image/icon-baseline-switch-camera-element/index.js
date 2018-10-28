import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSwitchCameraElement
 * @class IconBaselineSwitchCameraElement
 * @extends {AoflElement}
 */
class IconBaselineSwitchCameraElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSwitchCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-switch-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSwitchCameraElement.is, IconBaselineSwitchCameraElement);

export default IconBaselineSwitchCameraElement;
