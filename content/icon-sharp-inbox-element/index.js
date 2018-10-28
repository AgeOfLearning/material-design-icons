import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInboxElement
 * @class IconSharpInboxElement
 * @extends {AoflElement}
 */
class IconSharpInboxElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInboxElement.is, IconSharpInboxElement);

export default IconSharpInboxElement;
