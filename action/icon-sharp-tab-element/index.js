import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTabElement
 * @class IconSharpTabElement
 * @extends {AoflElement}
 */
class IconSharpTabElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTabElement.is, IconSharpTabElement);

export default IconSharpTabElement;
