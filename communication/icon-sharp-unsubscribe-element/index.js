import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpUnsubscribeElement
 * @class IconSharpUnsubscribeElement
 * @extends {AoflElement}
 */
class IconSharpUnsubscribeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpUnsubscribeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-unsubscribe';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpUnsubscribeElement.is, IconSharpUnsubscribeElement);

export default IconSharpUnsubscribeElement;
