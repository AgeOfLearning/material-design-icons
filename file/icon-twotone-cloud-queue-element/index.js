import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCloudQueueElement
 * @class IconTwotoneCloudQueueElement
 * @extends {AoflElement}
 */
class IconTwotoneCloudQueueElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCloudQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cloud-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCloudQueueElement.is, IconTwotoneCloudQueueElement);

export default IconTwotoneCloudQueueElement;
