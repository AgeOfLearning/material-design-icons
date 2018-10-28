import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCloudQueueElement
 * @class IconRoundCloudQueueElement
 * @extends {AoflElement}
 */
class IconRoundCloudQueueElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCloudQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cloud-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCloudQueueElement.is, IconRoundCloudQueueElement);

export default IconRoundCloudQueueElement;
