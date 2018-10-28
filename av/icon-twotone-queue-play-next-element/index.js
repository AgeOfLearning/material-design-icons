import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneQueuePlayNextElement
 * @class IconTwotoneQueuePlayNextElement
 * @extends {AoflElement}
 */
class IconTwotoneQueuePlayNextElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneQueuePlayNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-queue-play-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneQueuePlayNextElement.is, IconTwotoneQueuePlayNextElement);

export default IconTwotoneQueuePlayNextElement;
