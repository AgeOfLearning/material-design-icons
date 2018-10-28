import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTapAndPlayElement
 * @class IconSharpTapAndPlayElement
 * @extends {AoflElement}
 */
class IconSharpTapAndPlayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTapAndPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tap-and-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTapAndPlayElement.is, IconSharpTapAndPlayElement);

export default IconSharpTapAndPlayElement;
