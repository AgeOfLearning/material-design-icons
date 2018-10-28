import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCameraRollElement
 * @class IconTwotoneCameraRollElement
 * @extends {AoflElement}
 */
class IconTwotoneCameraRollElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCameraRollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-camera-roll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCameraRollElement.is, IconTwotoneCameraRollElement);

export default IconTwotoneCameraRollElement;
