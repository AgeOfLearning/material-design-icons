import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCameraEnhanceElement
 * @class IconTwotoneCameraEnhanceElement
 * @extends {AoflElement}
 */
class IconTwotoneCameraEnhanceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCameraEnhanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-camera-enhance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCameraEnhanceElement.is, IconTwotoneCameraEnhanceElement);

export default IconTwotoneCameraEnhanceElement;
