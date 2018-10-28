import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineQueuePlayNextElement
 * @class IconOutlineQueuePlayNextElement
 * @extends {AoflElement}
 */
class IconOutlineQueuePlayNextElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineQueuePlayNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-queue-play-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineQueuePlayNextElement.is, IconOutlineQueuePlayNextElement);

export default IconOutlineQueuePlayNextElement;
