import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddToQueueElement
 * @class IconOutlineAddToQueueElement
 * @extends {AoflElement}
 */
class IconOutlineAddToQueueElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddToQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-to-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddToQueueElement.is, IconOutlineAddToQueueElement);

export default IconOutlineAddToQueueElement;
