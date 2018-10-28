import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCameraEnhanceElement
 * @class IconBaselineCameraEnhanceElement
 * @extends {AoflElement}
 */
class IconBaselineCameraEnhanceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCameraEnhanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-camera-enhance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCameraEnhanceElement.is, IconBaselineCameraEnhanceElement);

export default IconBaselineCameraEnhanceElement;
