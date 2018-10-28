import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddToQueueElement
 * @class IconTwotoneAddToQueueElement
 * @extends {AoflElement}
 */
class IconTwotoneAddToQueueElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddToQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-to-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddToQueueElement.is, IconTwotoneAddToQueueElement);

export default IconTwotoneAddToQueueElement;
