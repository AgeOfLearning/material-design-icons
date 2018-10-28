import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFindInPageElement
 * @class IconOutlineFindInPageElement
 * @extends {AoflElement}
 */
class IconOutlineFindInPageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFindInPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-find-in-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFindInPageElement.is, IconOutlineFindInPageElement);

export default IconOutlineFindInPageElement;
