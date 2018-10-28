import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCameraElement
 * @class IconBaselineCameraElement
 * @extends {AoflElement}
 */
class IconBaselineCameraElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCameraElement.is, IconBaselineCameraElement);

export default IconBaselineCameraElement;
