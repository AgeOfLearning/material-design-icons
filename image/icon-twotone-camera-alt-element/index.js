import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCameraAltElement
 * @class IconTwotoneCameraAltElement
 * @extends {AoflElement}
 */
class IconTwotoneCameraAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCameraAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-camera-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCameraAltElement.is, IconTwotoneCameraAltElement);

export default IconTwotoneCameraAltElement;
