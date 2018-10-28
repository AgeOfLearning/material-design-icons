import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCloudCircleElement
 * @class IconOutlineCloudCircleElement
 * @extends {AoflElement}
 */
class IconOutlineCloudCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCloudCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cloud-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCloudCircleElement.is, IconOutlineCloudCircleElement);

export default IconOutlineCloudCircleElement;
