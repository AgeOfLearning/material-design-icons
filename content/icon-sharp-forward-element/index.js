import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpForwardElement
 * @class IconSharpForwardElement
 * @extends {AoflElement}
 */
class IconSharpForwardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpForwardElement.is, IconSharpForwardElement);

export default IconSharpForwardElement;
