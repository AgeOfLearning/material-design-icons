import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCloudQueueElement
 * @class IconBaselineCloudQueueElement
 * @extends {AoflElement}
 */
class IconBaselineCloudQueueElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCloudQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cloud-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCloudQueueElement.is, IconBaselineCloudQueueElement);

export default IconBaselineCloudQueueElement;
