import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCloudOffElement
 * @class IconOutlineCloudOffElement
 * @extends {AoflElement}
 */
class IconOutlineCloudOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCloudOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cloud-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCloudOffElement.is, IconOutlineCloudOffElement);

export default IconOutlineCloudOffElement;
