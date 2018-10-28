import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCloudElement
 * @class IconOutlineCloudElement
 * @extends {AoflElement}
 */
class IconOutlineCloudElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCloudElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cloud';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCloudElement.is, IconOutlineCloudElement);

export default IconOutlineCloudElement;
