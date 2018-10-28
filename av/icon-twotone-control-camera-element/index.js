import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneControlCameraElement
 * @class IconTwotoneControlCameraElement
 * @extends {AoflElement}
 */
class IconTwotoneControlCameraElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneControlCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-control-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneControlCameraElement.is, IconTwotoneControlCameraElement);

export default IconTwotoneControlCameraElement;
