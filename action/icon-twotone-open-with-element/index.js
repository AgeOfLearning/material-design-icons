import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneOpenWithElement
 * @class IconTwotoneOpenWithElement
 * @extends {AoflElement}
 */
class IconTwotoneOpenWithElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneOpenWithElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-open-with';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneOpenWithElement.is, IconTwotoneOpenWithElement);

export default IconTwotoneOpenWithElement;
