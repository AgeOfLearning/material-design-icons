import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCloudQueueElement
 * @class IconSharpCloudQueueElement
 * @extends {AoflElement}
 */
class IconSharpCloudQueueElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCloudQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cloud-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCloudQueueElement.is, IconSharpCloudQueueElement);

export default IconSharpCloudQueueElement;
