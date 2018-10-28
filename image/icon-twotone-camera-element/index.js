import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCameraElement
 * @class IconTwotoneCameraElement
 * @extends {AoflElement}
 */
class IconTwotoneCameraElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCameraElement.is, IconTwotoneCameraElement);

export default IconTwotoneCameraElement;
