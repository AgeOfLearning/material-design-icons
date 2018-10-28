import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLooks4Element
 * @class IconTwotoneLooks4Element
 * @extends {AoflElement}
 */
class IconTwotoneLooks4Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLooks4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-looks-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLooks4Element.is, IconTwotoneLooks4Element);

export default IconTwotoneLooks4Element;
