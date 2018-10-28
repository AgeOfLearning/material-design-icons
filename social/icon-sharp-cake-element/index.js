import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCakeElement
 * @class IconSharpCakeElement
 * @extends {AoflElement}
 */
class IconSharpCakeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCakeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cake';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCakeElement.is, IconSharpCakeElement);

export default IconSharpCakeElement;
