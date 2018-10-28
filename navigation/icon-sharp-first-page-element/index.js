import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFirstPageElement
 * @class IconSharpFirstPageElement
 * @extends {AoflElement}
 */
class IconSharpFirstPageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFirstPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-first-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFirstPageElement.is, IconSharpFirstPageElement);

export default IconSharpFirstPageElement;
