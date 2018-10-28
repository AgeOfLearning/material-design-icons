import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpClassElement
 * @class IconSharpClassElement
 * @extends {AoflElement}
 */
class IconSharpClassElement extends AoflElement {
  /**
   * Creates an instance of IconSharpClassElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-class';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpClassElement.is, IconSharpClassElement);

export default IconSharpClassElement;
