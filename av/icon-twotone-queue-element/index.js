import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneQueueElement
 * @class IconTwotoneQueueElement
 * @extends {AoflElement}
 */
class IconTwotoneQueueElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneQueueElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-queue';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneQueueElement.is, IconTwotoneQueueElement);

export default IconTwotoneQueueElement;
