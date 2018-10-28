import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCameraFrontElement
 * @class IconBaselineCameraFrontElement
 * @extends {AoflElement}
 */
class IconBaselineCameraFrontElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCameraFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-camera-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCameraFrontElement.is, IconBaselineCameraFrontElement);

export default IconBaselineCameraFrontElement;
