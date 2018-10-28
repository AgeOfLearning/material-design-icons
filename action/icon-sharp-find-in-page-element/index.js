import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFindInPageElement
 * @class IconSharpFindInPageElement
 * @extends {AoflElement}
 */
class IconSharpFindInPageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFindInPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-find-in-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFindInPageElement.is, IconSharpFindInPageElement);

export default IconSharpFindInPageElement;
