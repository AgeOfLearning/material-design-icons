import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCloudDoneElement
 * @class IconOutlineCloudDoneElement
 * @extends {AoflElement}
 */
class IconOutlineCloudDoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCloudDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cloud-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCloudDoneElement.is, IconOutlineCloudDoneElement);

export default IconOutlineCloudDoneElement;
