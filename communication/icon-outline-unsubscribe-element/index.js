import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineUnsubscribeElement
 * @class IconOutlineUnsubscribeElement
 * @extends {AoflElement}
 */
class IconOutlineUnsubscribeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineUnsubscribeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-unsubscribe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineUnsubscribeElement.is, IconOutlineUnsubscribeElement);

export default IconOutlineUnsubscribeElement;
