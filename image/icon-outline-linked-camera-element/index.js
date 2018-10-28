import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLinkedCameraElement
 * @class IconOutlineLinkedCameraElement
 * @extends {AoflElement}
 */
class IconOutlineLinkedCameraElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLinkedCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-linked-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLinkedCameraElement.is, IconOutlineLinkedCameraElement);

export default IconOutlineLinkedCameraElement;
