import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpForward10Element
 * @class IconSharpForward10Element
 * @extends {AoflElement}
 */
class IconSharpForward10Element extends AoflElement {
  /**
   * Creates an instance of IconSharpForward10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-forward-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpForward10Element.is, IconSharpForward10Element);

export default IconSharpForward10Element;
