import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWcElement
 * @class IconSharpWcElement
 * @extends {AoflElement}
 */
class IconSharpWcElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-wc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWcElement.is, IconSharpWcElement);

export default IconSharpWcElement;
