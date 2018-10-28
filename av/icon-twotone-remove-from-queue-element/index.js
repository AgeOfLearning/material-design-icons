import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRemoveFromQueueElement
 * @class IconTwotoneRemoveFromQueueElement
 * @extends {AoflElement}
 */
class IconTwotoneRemoveFromQueueElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRemoveFromQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-remove-from-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRemoveFromQueueElement.is, IconTwotoneRemoveFromQueueElement);

export default IconTwotoneRemoveFromQueueElement;
