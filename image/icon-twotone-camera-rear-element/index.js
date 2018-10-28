import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCameraRearElement
 * @class IconTwotoneCameraRearElement
 * @extends {AoflElement}
 */
class IconTwotoneCameraRearElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCameraRearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-camera-rear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCameraRearElement.is, IconTwotoneCameraRearElement);

export default IconTwotoneCameraRearElement;
