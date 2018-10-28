import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSwitchCameraElement
 * @class IconRoundSwitchCameraElement
 * @extends {AoflElement}
 */
class IconRoundSwitchCameraElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSwitchCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-switch-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSwitchCameraElement.is, IconRoundSwitchCameraElement);

export default IconRoundSwitchCameraElement;
