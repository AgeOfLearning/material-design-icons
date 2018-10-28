import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLinkedCameraElement
 * @class IconBaselineLinkedCameraElement
 * @extends {AoflElement}
 */
class IconBaselineLinkedCameraElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLinkedCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-linked-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLinkedCameraElement.is, IconBaselineLinkedCameraElement);

export default IconBaselineLinkedCameraElement;
