import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineQueueElement
 * @class IconOutlineQueueElement
 * @extends {AoflElement}
 */
class IconOutlineQueueElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineQueueElement.is, IconOutlineQueueElement);

export default IconOutlineQueueElement;
