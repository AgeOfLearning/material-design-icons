import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAllInboxElement
 * @class IconSharpAllInboxElement
 * @extends {AoflElement}
 */
class IconSharpAllInboxElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAllInboxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-all-inbox';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAllInboxElement.is, IconSharpAllInboxElement);

export default IconSharpAllInboxElement;
