import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRemoveFromQueueElement
 * @class IconRoundRemoveFromQueueElement
 * @extends {AoflElement}
 */
class IconRoundRemoveFromQueueElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRemoveFromQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-remove-from-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRemoveFromQueueElement.is, IconRoundRemoveFromQueueElement);

export default IconRoundRemoveFromQueueElement;
