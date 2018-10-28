import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneUnsubscribeElement
 * @class IconTwotoneUnsubscribeElement
 * @extends {AoflElement}
 */
class IconTwotoneUnsubscribeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneUnsubscribeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-unsubscribe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneUnsubscribeElement.is, IconTwotoneUnsubscribeElement);

export default IconTwotoneUnsubscribeElement;
