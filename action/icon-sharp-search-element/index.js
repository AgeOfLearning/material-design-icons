import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSearchElement
 * @class IconSharpSearchElement
 * @extends {AoflElement}
 */
class IconSharpSearchElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSearchElement.is, IconSharpSearchElement);

export default IconSharpSearchElement;
