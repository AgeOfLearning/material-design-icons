import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRemoveFromQueueElement
 * @class IconOutlineRemoveFromQueueElement
 * @extends {AoflElement}
 */
class IconOutlineRemoveFromQueueElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRemoveFromQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-remove-from-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRemoveFromQueueElement.is, IconOutlineRemoveFromQueueElement);

export default IconOutlineRemoveFromQueueElement;
