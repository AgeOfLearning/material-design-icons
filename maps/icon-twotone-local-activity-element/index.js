import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalActivityElement
 * @class IconTwotoneLocalActivityElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalActivityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalActivityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-activity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalActivityElement.is, IconTwotoneLocalActivityElement);

export default IconTwotoneLocalActivityElement;
