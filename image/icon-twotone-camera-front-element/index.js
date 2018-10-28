import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCameraFrontElement
 * @class IconTwotoneCameraFrontElement
 * @extends {AoflElement}
 */
class IconTwotoneCameraFrontElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCameraFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-camera-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCameraFrontElement.is, IconTwotoneCameraFrontElement);

export default IconTwotoneCameraFrontElement;
