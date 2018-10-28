import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBookElement
 * @class IconSharpBookElement
 * @extends {AoflElement}
 */
class IconSharpBookElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-book';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBookElement.is, IconSharpBookElement);

export default IconSharpBookElement;
