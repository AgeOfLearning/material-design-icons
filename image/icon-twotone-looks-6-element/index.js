import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLooks6Element
 * @class IconTwotoneLooks6Element
 * @extends {AoflElement}
 */
class IconTwotoneLooks6Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLooks6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-looks-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLooks6Element.is, IconTwotoneLooks6Element);

export default IconTwotoneLooks6Element;
