import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCloudQueueElement
 * @class IconOutlineCloudQueueElement
 * @extends {AoflElement}
 */
class IconOutlineCloudQueueElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCloudQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cloud-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCloudQueueElement.is, IconOutlineCloudQueueElement);

export default IconOutlineCloudQueueElement;
