import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFindInPageElement
 * @class IconTwotoneFindInPageElement
 * @extends {AoflElement}
 */
class IconTwotoneFindInPageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFindInPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-find-in-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFindInPageElement.is, IconTwotoneFindInPageElement);

export default IconTwotoneFindInPageElement;
