import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRemoveFromQueueElement
 * @class IconBaselineRemoveFromQueueElement
 * @extends {AoflElement}
 */
class IconBaselineRemoveFromQueueElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRemoveFromQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-remove-from-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRemoveFromQueueElement.is, IconBaselineRemoveFromQueueElement);

export default IconBaselineRemoveFromQueueElement;
